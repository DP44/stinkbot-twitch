const Command = require("../command");

class Eightball extends Command {
  /**
   * @description A simple 8ball command.
   */
  constructor() {
    super("8ball", "A simple 8ball command.", "[WHATEVER THE FUCK]");
  }

  /**
   * @description The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {
    args = args.join(" ");

    if (args === "") {
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
