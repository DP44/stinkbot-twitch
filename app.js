require('dotenv').config();

const tmi = require('tmi.js');

const Logger = require("./src/logging");
const logger = new Logger(process.env.BOT_USERNAME);

const handler = require("./src/handler.js")

const client = new tmi.Client({
  logger: logger,
  options: { 
    debug: true, 
  },

  connection: {
    reconnect: true,
    secure: true
  },

  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.BOT_OAUTH,
  },

  channels: [process.env.CHANNEL_NAME],
});

client.connect();

global.client = client;

client.on("connected", (address, port) => {
  global.commands = handler.initializeCommands();
});

client.on("message", (channel, tags, message, self) => {
  if (self || !message.startsWith("-")) {
    return;
  }

  const args = message.slice(1).split(" ");
  const command = args.shift().toLowerCase();

  handler.handleCommand(channel, tags, command, args);
});