/**
 * Utility commands.
 * @module commands/utility
 */

const Command = require("../command");

/**
 * A simple ping command which responds with "pong".
 * @extends Command
 */
class Ping extends Command {
  constructor() {
    super(
      "ping", 
      "A simple test command that responds with \"pong\"."
    );
  }

  /**
   * The command's logic.
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