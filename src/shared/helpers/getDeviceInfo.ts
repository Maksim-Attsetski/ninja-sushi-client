import { Logger } from '.';

export interface IGeo {
  latitude: number;
  longitude: number;
}

export type TGeo = IGeo | null;

export interface IDeviceInfo {
  geo: TGeo;
  userAgent: string;
}

export const getDeviceInfo = () => {
  const info: IDeviceInfo = { geo: null, userAgent: '' };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        info.geo = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      }
    );
  }

  if (navigator.userAgent) {
    const match = /\(([^)]+)\)/.exec(navigator.userAgent);

    info.userAgent = match ? match[1] : navigator.userAgent;
  }

  Logger.log('Device info', info);
  return info;
};
