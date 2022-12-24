/**
 * Command related errors.
 * @module errors/command
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

/**
 * Base class for errors related to commands.
 * @extends Error
 */
class CommandError extends Error {
  /**
   * @param {string} command The command which raised the error.
   */
  constructor(command, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent ctor.
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CommandError);
    }

    this.name = "CommandError";

    this.command = command;
  }
}

/**
 * Raised when Command.logic() isn't defined.
 * @extends CommandError
 */
class MissingLogicError extends CommandError {
  constructor(...params) {
    super(...params);
    this.message = "Missing implementation for logic!";
    this.name = "MissingLogicError";
  }
}

module.exports = {
  CommandError,
  MissingLogicError,
};