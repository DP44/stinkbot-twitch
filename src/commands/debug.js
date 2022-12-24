const Command = require("../command");

class Echo extends Command {
  /**
   * @description A command which repeats whatever you give it.
   */
  constructor() {
    super(
      "echo", 
      "A command which repeats whatever you give it.",
      "[MESSAGE]"
    );
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

class Test extends Command {
  /**
   * @description A simple test command.
   */
  constructor() {
    super("test", "A simple test command.");
  }

  /**
   * @description The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {
    if (userstate.username !== process.env.CHANNEL_NAME) {
      global.client.say(channel, "You can't use that command!");
      return;
    }
    console.log(userstate);
  }
}

module.exports = {
  Echo,
  Test,
};
