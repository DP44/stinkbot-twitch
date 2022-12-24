const Command = require("../command");

class Echo extends Command {
  /**
   * @description A command which repeats whatever you give it.
   */
  constructor() {
    super("echo");
  }

  /**
   * @description The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {
    global.client.say(channel, `@${userstate.username}, you said: "${args.join(' ')}"`);
  }
}

module.exports = {
  Echo,
};
