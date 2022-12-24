const fs = require("fs");

/**
 * A class for handling a json config.
 * @todo Use a file stream for reading and writing.
 */
class Config {
  /**
   * Creates a config instance
   * @param {string} file The config file.
   */
  constructor(file) {
    this.file = file;
    this.data = this.readConfig();
  }

  /**
   * Reads the config file.
   * @returns {object} The config data.
   */
  readConfig() {
    return JSON.parse(fs.readFileSync(this.file).toString());
  }

  /**
   * Writes to the config file.
   */
  writeConfig() {
    fs.writeFileSync(this.file, JSON.stringify(this.data, null, 2));
  }
}

module.exports = Config;