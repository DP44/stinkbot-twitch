const fs = require("fs");

// const Logger = require("./logging");
// const logger = new Logger("Config Handler");

// TODO: create filestream and do reading+writing to that.
class Config {
  constructor(file) {
    this.file = file;
    this.data = this.readConfig();
  }

  /**
   * @description Reads the config file.
   * @returns {object} The config data.
   */
  readConfig() {
    return JSON.parse(fs.readFileSync(this.file).toString());
  }

  /**
   * @description Writes to the config file.
   */
  writeConfig() {
    fs.writeFileSync(this.file, JSON.stringify(this.data, null, 2));
  }
}

module.exports = Config;