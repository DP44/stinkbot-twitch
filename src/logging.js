class Logger {
  /**
   * @description A basic logging class.
   * @param {string} name The logger name.
   * @example
   * const logger = new Logger("Example Logger");
   * logger.message('foo');
   * logger.warning('bar');
   */
  constructor(name) {
    this._name = name;
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
      "\x1B[90m[\x1B[34mINFO\x1B[90m]  " + 
      `(${this._name})` + "\x1B[0m " + `${msg}`);
  }

  /**
   * @description Logs a message to the console.
   * @param {string} msgToParse The message to parse and output.
   */
  chat(msgToParse) {
    if (!global.config.data.log_chat) {
      return;
    }
    
    // Split the message for parsing.
    let splitMsg = msgToParse.split(" ");
    
    // Fetch the channel name and user from the message.
    let channel = splitMsg.shift();
    let user = splitMsg.shift();

    // Remove any unnecessary symbols.
    channel = channel.slice(1, channel.length - 1);
    user = user.slice(1, user.length - 2);

    // Reconstruct the rest of the message into one.
    const msg = splitMsg.join(" ");

    console.log(`${this.getTimestamp(true)} ` +
      `\x1B[90m[\x1B[35mCHAT\x1B[90m]  ` + 
      `(${user}) \x1B[1;90m${msg}\x1B[0m`);
  }

  /**
   * @description Logs a message to the console.
   * @param {string} msg The message to output.
   */
  warn(msg) {
    console.warn(`${this.getTimestamp(true)} ` +
      "\x1B[90m[\x1B[33mWARN\x1B[90m]  " +
      `(${this._name})\x1B[0m ${msg}`);
  }

  /**
   * @description Logs a message to the console.
   * @param {string} msg The message to output.
   */
  error(msg) {
    console.error(`${this.getTimestamp(true)} ` +
      "\x1B[90m[\x1B[31mERROR\x1B[90m] " + 
      `(${this._name})\x1B[0m ${msg}`);
  }

  /**
   * @description Logs a message to the console.
   * @param {string} msg The message to output.
   */
  debug(msg) {
    console.log(`${this.getTimestamp(true)} ` +
      "\x1B[90m[\x1B[33mDEBUG\x1B[90m] " +
      `(${this._name})\x1B[0m ${msg}`);
  }
}

module.exports = Logger;