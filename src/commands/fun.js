/**
 * Fun commands.
 * @module commands/fun
 */

const Command = require("../command");

/**
 * A simple 8ball command which responds with a random message
 * out of a list of responses defined in botconfig.json.
 * @extends Command
 */
class Eightball extends Command {
  constructor() {
    super(
      "8ball", 
      "A simple 8ball command.", 
      "[WHATEVER THE FUCK]"
    );
  }

  /**
   * The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {
    // Respond with a pre-defined message if the command is invoked
    // without any arguments.
    if (args.length === 0) {
      global.client.say(channel, 
        `@${userstate.username} Are you really telling me to predict NOTHING?`)
      return;
    }

    const messages = global.config.data.EIGHTBALL_MESSAGES;
    const message = messages[Math.floor(Math.random() * messages.length)];

    global.client.say(channel, `@${userstate.username} ${message}`);
  }
}

module.exports = {
  Eightball,
};
