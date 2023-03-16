export interface IError {
  statusCode: number;
  message: string;
}

export const getError = (err: any): IError => {
  const error = (err?.response?.data || err) as any;

  const defaultError: IError = {
    statusCode: 500,
    message: 'Something went wrong',
  };

  if (typeof error === typeof defaultError) {
    return error;
  } else {
    return error?.message ? error : defaultError;
  }
};
