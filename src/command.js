const Logger = require("./logging");

// ----------------------------------------------------------------------------
// Example command implementation
// 
//   class Test extends Command {
//     /**
//      * @description An example command.
//      */
//     constructor() {
//       super("hello");
//     }
//   
//     /**
//      * @description The command's logic.
//      * @param {string} channel The channel the command was invoked in.
//      * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
//      * @param {object} args The arguments passed to the command.
//      */
//     logic(channel, userstate, args) {
//       global.client.say(channel, "Hello, world!");
//     }
//   }
// ----------------------------------------------------------------------------

class Command {
  /**
   * @description Base class for commands.
   * @param {string} name The command's name.
   */
  constructor(name, helpText = "", usage = "") {
    this.name = name;
    this.logger = new Logger(`COMMAND: ${this.name}`);

    this.helpText = helpText;
    this.usage = usage !== "" ? `!${name} ${usage}` : `!${name}`;
  }

  /**
   * @description The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {
    throw new Error("Command.logic() implementation missing!");
  }
}

module.exports = Command;