const Logger = require("./logging");

/**
 * Abstract class for representing commands.
 * @abstract
 * @example
 * class Hello extends Command {
 *   constructor() {
 *     super(
 *       // The name of your command. This can be useful for commands
 *       // that have names which don't match the command's class name.
 *       "hello",
 *       // A message that is shown when running !help on the command.
 *       "An example command.",
 *       // How the command is used and which arguments go where. Leave
 *       // this blank if your command isn't using any arguments.
 *       "[ARG1] [ARG2]"
 *     );
 *   }
 *
 *   // This is where the command's logic is implemented.
 *   // If this method's implementation is missing from the command's
 *   // class, it will raise MissingLogicError.
 *   logic(channel, userstate, args) {
 *     global.client.say(channel, "Hello, world!");
 *   }
 * }
 */
class Command {
  /**
   * Creates a command.
   * @param {string} name The command's name.
   * @param {string} helpText What to show when !help is performed.
   * @param {string} usage How the command is used and which arguments go where.
   */
  constructor(name, helpText = "", usage = "") {
    this.name = name;

    this.logger = new Logger(`COMMAND: ${this.name}`);

    this.helpText = helpText;
    this.usage = usage !== "" ? `!${name} ${usage}` : `!${name}`;
  }

  /**
   * This is where the command's logic is implemented.
   * @abstract
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   * @throws {MissingLogicError}
   */
  logic(channel, userstate, args) {
    throw new global.errors.MissingLogicError(this.name);
  }
}

module.exports = Command;