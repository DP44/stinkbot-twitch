class Logger {
  /**
   * @param {string} name The logger name.
   * @example
   * const logger = new Logger("Example Logger");
   * logger.message('foo');
   * logger.warning('bar');
   */
  constructor(name) {
    this._name = name.replace('.', '');
  }
  
  /**
   * @description Gets the current timestamp
   * @param {boolean} colorize Colorizes the output if set.
   * @returns {string} The timestamp string.
   */
  getTimestamp(colorize=false) {
    let dateObj = new Date(Date.now());
    
    let hours, minutes, seconds;

    if (dateObj.getHours().toString().length === 1) {
      hours = (`0${dateObj.getHours()}`);
    } else {
      hours = dateObj.getHours();
    }

    if (dateObj.getMinutes().toString().length === 1) {
      minutes = (`0${dateObj.getMinutes()}`);
    } else {
      minutes = dateObj.getMinutes();
    }

    if (dateObj.getSeconds().toString().length === 1) {
      seconds = (`0${dateObj.getSeconds()}`);
    } else {
      seconds = dateObj.getSeconds();
    }

    let timestamp = colorize
      ? `\x1B[90m[\x1B[36m${hours}:${minutes}:${seconds}\x1B[90m]\x1B[0m`
      : `[${hours}:${minutes}:${seconds}]`;
    
    return timestamp;
  }

  /**
   * @description Logs a message to the console.
   * @param {string} msg The message to output.
   */
  info(msg) {
    console.info(`${this.getTimestamp(true)} ` +
      "\x1B[90m[\x1B[34mINFO\x1B[90m]    " + 
      `(${this._name})` + "\x1B[0m " + `${msg}`);
  }

  /**
   * @description Logs a message to the console.
   * @param {string} msg The message to output.
   */
  success(msg) {
    console.log(`${this.getTimestamp(true)} ` +
      "\x1B[90m[\x1B[32mSUCCESS\x1B[90m] " + 
      `(${this._name})` + "\x1B[0m " + `${msg}`);
  }

  /**
   * @description Logs a message to the console.
   * @param {string} msg The message to output.
   */
  warn(msg) {
    console.warn(`${this.getTimestamp(true)} ` +
      "\x1B[90m[\x1B[33mWARNING\x1B[90m] " +
      `(${this._name})` + "\x1B[0m " + `${msg}`);
  }

  /**
   * @description Logs a message to the console.
   * @param {string} msg The message to output.
   */
  error(msg) {
    console.error(`${this.getTimestamp(true)} ` +
      "\x1B[90m[\x1B[31mERROR\x1B[90m]   " + 
      `(${this._name})` + "\x1B[0m " + `${msg}`);
  }

  /**
   * @description Logs a message to the console.
   * @param {string} msg The message to output.
   */
  fatal(msg) {
    console.log(`${this.getTimestamp(true)} ` +
      "\x1B[90m[\x1B[31mFATAL\x1B[90m]   " + 
      `(${this._name})` + "\x1B[0m " + `${msg}`);
  }

  /**
   * @description Logs a message to the console.
   * @param {string} msg The message to output.
   */
  debug(msg) {
    console.log(`${this.getTimestamp(true)} ` +
      "\x1B[90m[\x1B[35mDEBUG\x1B[90m]   " +
      `(${this._name})` + "\x1B[0m " + `${msg}`);
  }
}

module.exports = Logger;