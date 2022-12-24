require('dotenv').config();

global.errors = require("./src/errors");
global.config = new (require("./src/config"))("botconfig.json");

const Logger = require("./src/logging");
const logger = new Logger("Client");

const tmi = require('tmi.js');

const handler = require("./src/handler");

// Store our bot's client as a global variable just to make things easier on us.
global.client = new tmi.Client({
  logger: logger,
  
  options: {
    debug: true,
    messagesLogLevel: "chat",
  },

  connection: {
    reconnect: true,
    secure: true,
  },

  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.BOT_OAUTH,
  },

  channels: [
    process.env.CHANNEL_NAME,
  ],
});

global.client.connect();

// Fired when the client connects to the chat server.
global.client.on("connected", (address, port) => {
  global.commands = handler.initializeCommands();
});

// Fired whenever a chat, action or whisper is received.
global.client.on("message", (channel, userstate, message, self) => {
  if (self || !message.startsWith("!")) {
    return;
  }

  // TODO: Parse quotes and shit
  const args = message.slice(1).split(" ");
  const command = args.shift().toLowerCase();

  handler.invokeCommand(channel, userstate, command, args);
});

// TODO: Move these events somewhere else.

global.client.on("raided", (channel, username, viewers) => {
  global.client.say(channel, `${username} just gave me ${viewers} new stinkers :DD`);
});