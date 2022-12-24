/**
 * Utility commands.
 * @module commands/utility
 */

const Command = require("../command");

/**
 * A command which attempts to ping the chat server.
 * @extends Command
 */
class Ping extends Command {
  constructor() {
    super(
      "ping", 
      "A command which attempts to ping the chat server."
    );
  }

  /**
   * The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {
    global.client.ping().then((data) => {
      global.client.say(channel, `Received PONG. latency: ${data}`);
    }).catch((err) => {
      global.client.say(channel, `PING timed out! (${err})`);
    });
  }
}

module.exports = {
  Ping,
}