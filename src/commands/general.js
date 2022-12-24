/**
 * General commands.
 * @module commands/general
 */

const Command = require("../command");

/**
 * A command which outputs details and documentation about a given command.
 * @extends Command
 */
class Help extends Command {
  constructor() {
    super(
      "help",
      "Outputs details and documentation about a given command.",
      "[COMMAND]"
    );
  }

  /**
   * The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {
    // Ensure our given argument is present.
    if (args.length === 0 || args[0] === "") {
      // TODO: Upload a list of all the available commands and post a link to it.
      global.client.say(channel, this.usage);
      return;
    }

    // Check if there's a key with the same name as the command we're looking for.
    if (!(args[0] in global.commands)) {
      global.client.say(channel, "I cannot find that command!");
      return;
    }

    global.client.say(channel, global.commands[args[0]].helpText);
    global.client.say(channel, `USAGE: ${global.commands[args[0]].usage}`);    
  }
}

module.exports = {
  Help,
};
