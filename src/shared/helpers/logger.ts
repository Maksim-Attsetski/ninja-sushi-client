import { getError } from './getError';

class Logger {
  log(msg: string, data?: any) {
    console.log('%c' + msg, 'color: green');
    console.log(data);
  }

  error(msg: any) {
    const error = getError(msg);
    console.error('%c' + error?.message, 'color red');
  }
}

export default new Logger();
