/**
 * A Module for handling commands.
 * @module handler
 */

const commandDefinitions = {
  general: require("./commands/general"),
  fun: require("./commands/fun"),
  utility: require("./commands/utility"),
  debug: require("./commands/debug"),
};

const Logger = require("./logging");
const logger = new Logger("Command Handler");

/**
 * Instantiates all of the existing commands.
 * @returns {object} An object containing all of the command instances.
 */
const initializeCommands = () => {
  // TODO: Find better way of doing this.
  return {
    // General
    help: new commandDefinitions.general.Help(),

    // Fun
    "8ball": new commandDefinitions.fun.Eightball(),

    // Utility
    ping: new commandDefinitions.utility.Ping(),

    // Debug
    echo: new commandDefinitions.debug.Echo(),
    eval: new commandDefinitions.debug.Eval(),
  };
};

/**
 * Invokes a command.
 * @param {string} channel The channel the command was invoked in.
 * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
 * @param {string} command The command that was invoked.
 * @param {object} args The arguments passed to the command.
 */
const invokeCommand = (channel, userstate, command, args) => {
  if (global.commands === undefined) {
    global.client.say(channel, "commands ISN'T DEFINED FUCK");
    return;
  }

  // TODO: Add proper exception handling.
  try {
    // Make sure that command actually exists.
    if (commands[command] === undefined) {
      global.client.say(
        channel,
        `@${userstate.username} That command doesn't exist!`
      );
      return;
    }

    // Attempt to call the command's logic.
    global.commands[command].logic(channel, userstate, args);
  } catch (ex) {
    logger.error(`Failed to invoke ${command}: "${ex}"`);
    global.client.say(channel, `SOMETHING FUCKED UP: ${ex}`);
  }
};

module.exports = {
  initializeCommands,
  invokeCommand,
};
