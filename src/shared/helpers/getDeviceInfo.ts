import { Logger } from '.';

export interface IGeo {
  latitude: number;
  longitude: number;
}

export type TGeo = IGeo | null;

export const getDeviceInfo = (
  setGeo?: (geo: TGeo) => void,
  setUserAgent?: (val: string) => void
) => {
  if (navigator.geolocation && setGeo) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }: GeolocationPosition) => {
        const geo = { latitude: coords.latitude, longitude: coords.longitude };
        setGeo(geo);
        Logger.log('Device geolocation', geo);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  if (navigator.userAgent && setUserAgent) {
    const match = /\(([^)]+)\)/.exec(navigator.userAgent);

    const newUserAgent = match ? match[1] : navigator.userAgent;
    setUserAgent(newUserAgent);
    Logger.log('Device user agent', newUserAgent);
  }
};
