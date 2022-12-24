const Command = require("../command");

class Ping extends Command {
  /**
   * @description A simple ping command.
   */
  constructor() {
    super("ping");
    this.logger.info("test");
  }

  /**
   * @description The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {
    global.client.say(channel, "pong");
  }
}

module.exports = {
  Ping,
}