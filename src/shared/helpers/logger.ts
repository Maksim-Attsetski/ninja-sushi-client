class Logger {
  log(msg: string, data?: any) {
    console.log('%c' + msg, data, 'color: green');
  }

  error(msg: string) {
    console.error('%c' + msg, 'color red');
  }
}

export default new Logger();
