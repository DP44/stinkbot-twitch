const utility = require("./commands/utility");
const debug = require("./commands/debug");

const Logger = require("./logging");
const logger = new Logger("Command Handler");

const initializeCommands = () => {
  return {
    // Utility
    ping: new utility.Ping(),
    // Debug
    test: new debug.Test(),
    echo: new debug.Echo(),
  };
};

const handleCommand = (channel, tags, command, args = "") => {
  if (global.commands === undefined) {
    global.client.say(channel, "commands ISN'T DEFINED FUCK");
    return;
  }

  logger.debug(`command: "${command}" called with args: "${args}"`);
  
  global.commands[command].logic(channel, tags, args);
};

module.exports = {
  initializeCommands,
  handleCommand,
}