/**
 * Debug commands.
 * @module commands/debug
 */

const Command = require("../command");

/**
 * A command which repeats whatever you give it.
 * @extends Command
 */
class Echo extends Command {
  constructor() {
    super(
      "echo", 
      "A command which repeats whatever you give it.",
      "[MESSAGE]"
    );
  }

  /**
   * The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {
    global.client.say(channel, 
      `@${userstate.username}, you said: "${args.join(' ')}"`);
  }
}

/**
 * A simple eval command which will execute within the same context 
 * as the bot's process.
 * @extends Command
 */
class Eval extends Command {
  constructor() {
    super(
      "eval", 
      "A simple eval command.", 
      "[INPUT]"
    );
  }

  /**
   * The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {
    // Don't let any random fucks eval shit.
    if (userstate.username !== process.env.CHANNEL_NAME) {
      global.client.say(channel, "FUCK YOU");
      return;
    }

    const result = eval(args.join(" "));
    
    if (result !== undefined) {
      // stupid hack
      global.client.say(channel, `${result}`);
    }
  }
}

module.exports = {
  Echo,
  Eval,
};
