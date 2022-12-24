const Command = require("../command");

class Test extends Command {
  constructor() {
    super("test");
  }

  logic(channel, tags, args) {
    this.logger.info("a");
  }
}

class Echo extends Command {
  constructor() {
    super("echo");
  }

  logic(channel, tags, args) {
    global.client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`);
  }
}

module.exports = {
  Test,
  Echo,
};
