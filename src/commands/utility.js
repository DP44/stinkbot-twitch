const Command = require("../command");

class Ping extends Command {
  constructor() {
    super("ping");
    this.logger.info("test");
  }

  logic(channel, tags, args) {
    global.client.say(channel, "pong");
  }
}

module.exports = {
  Ping,
}