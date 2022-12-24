const Logger = require("./logging");

class Command {
  /**
   * @description Base class for commands.
   * @param {string} name The command's name.
   */
  constructor(name) {
    this.logger = new Logger(`COMMAND: ${name}`);
  }

  /**
   * @description The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {}
}

module.exports = Command;