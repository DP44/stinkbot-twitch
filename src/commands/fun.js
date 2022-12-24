const Command = require("../command");
const constants = require("../constants");

class Woah extends Command {
  /**
   * @description A command which repeats whatever you give it.
   */
  constructor() {
    super("woah");
  }

  logic(channel, userstate, args) {
    // stupid shit
    let i = 1;
    let interval = setInterval(() => {
      if (i >= 5) {
        clearInterval(interval);
      }
      global.client.say(channel, "CoolStoryBob ".repeat(i));
      i++;
    }, 1100);
  }
}

class Eightball extends Command {
  /**
   * @description A command which repeats whatever you give it.
   */
  constructor() {
    super("8ball");
  }

  /**
   * @description The command's logic.
   * @param {string} channel The channel the command was invoked in.
   * @param {tmi.ChatUserstate} userstate The invoker's Userstate.
   * @param {object} args The arguments passed to the command.
   */
  logic(channel, userstate, args) {
    if (!!args) {
      global.client.say(channel, 
        `@${userstate.username} Are you really telling me to predict NOTHING?`)
      return;
    }

    const message = constants.EIGHTBALL_MESSAGES[Math.floor(
      Math.random() * constants.EIGHTBALL_MESSAGES.length)];
    global.client.say(channel, `@${userstate.username} ${message}`);
  }
}

module.exports = {
  Woah,
  Eightball,
};
