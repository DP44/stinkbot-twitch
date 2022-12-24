const Logger = require("./logging");

class Command {
  constructor(cmdName) {
    this.cmdName = cmdName;
    this.logger = new Logger(`COMMAND: ${this.cmdName}`);
  }

  logic(channel, tags, args) {
    
  }
}

module.exports = Command;