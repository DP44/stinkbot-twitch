const general = require("./commands/general");
const fun = require("./commands/fun")
const utility = require("./commands/utility");
const debug = require("./commands/debug");

const Logger = require("./logging");
const logger = new Logger("Command Handler");

/**
 * @description Instantiates all of the existing commands.
 * @returns {object} An object containing all of the command instances.
 */
const initializeCommands = () => {
  // TODO: Find better way of doing this.
  return {
    // General

    // Fun
    "woah": new fun.Woah(),
    "8ball": new fun.Eightball(),
    // Utility
    "ping": new utility.Ping(),
    // Debug
    "echo": new debug.Echo(),
  };
};

/**
 * @description Handles a command.
 * @param {string} channel The channel the command was invoked in.
 * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
 * @param {string} command The command that was executed.
 * @param {object} args The arguments passed to the command.
 */
const handleCommand = (channel, userstate, command, args) => {
  if (global.commands === undefined) {
    global.client.say(channel, "commands ISN'T DEFINED FUCK");
    return;
  }

  logger.debug(`command: "${command}" called with args: "${args}"`);

  // TODO: Add proper exception handling.
  try {
    if (commands[command] === undefined) {
      global.client.say(channel, `@${userstate.username} That command doesn't exist!`);
      return;
    }
    
    global.commands[command].logic(channel, userstate, args);
  } catch (ex) {
    logger.error(ex);
    global.client.say(channel, "SOMETHING FUCKED UP DAMNIT");
  }
};

module.exports = {
  initializeCommands,
  handleCommand,
}