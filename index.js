/**


▒█▄░▒█ ▒█▀▀▀ ▒█▀▀▀ ▒█▀▀▄ 　 ▒█▀▀▀ ▒█▀▀▀█ ▒█▀▀█ 　 ▒█▀▀█ ▒█░▒█ ▒█▀▀▀ ░█▀▀█ ▀▀█▀▀ 
▒█▒█▒█ ▒█▀▀▀ ▒█▀▀▀ ▒█░▒█ 　 ▒█▀▀▀ ▒█░░▒█ ▒█▄▄▀ 　 ▒█░░░ ▒█▀▀█ ▒█▀▀▀ ▒█▄▄█ ░▒█░░ 
▒█░░▀█ ▒█▄▄▄ ▒█▄▄▄ ▒█▄▄▀ 　 ▒█░░░ ▒█▄▄▄█ ▒█░▒█ 　 ▒█▄▄█ ▒█░▒█ ▒█▄▄▄ ▒█░▒█ ░▒█░░

  DISCORD SERVER : https://discord.gg/needforcheat
 *   Code by Riiisky On NeedForCheat
 */



const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'index.html');
  res.sendFile(imagePath);
});
app.listen(port, () => {
  console.log(`🔗 Listening to Your GBR: http://localhost:${port}`);
});

// ADD YOUR STATUS HERE 
const statusMessages = [".ɢɢ/ɴᴇᴇᴅꜰᴏʀᴄʜᴇᴀᴛ"];


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**


▒█▄░▒█ ▒█▀▀▀ ▒█▀▀▀ ▒█▀▀▄ 　 ▒█▀▀▀ ▒█▀▀▀█ ▒█▀▀█ 　 ▒█▀▀█ ▒█░▒█ ▒█▀▀▀ ░█▀▀█ ▀▀█▀▀ 
▒█▒█▒█ ▒█▀▀▀ ▒█▀▀▀ ▒█░▒█ 　 ▒█▀▀▀ ▒█░░▒█ ▒█▄▄▀ 　 ▒█░░░ ▒█▀▀█ ▒█▀▀▀ ▒█▄▄█ ░▒█░░ 
▒█░░▀█ ▒█▄▄▄ ▒█▄▄▄ ▒█▄▄▀ 　 ▒█░░░ ▒█▄▄▄█ ▒█░▒█ 　 ▒█▄▄█ ▒█░▒█ ▒█▄▄▄ ▒█░▒█ ░▒█░░

  DISCORD SERVER : https://discord.gg/needforcheat
 *   Code by Riiisky On NeedForCheat
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    😏 I AM SORRY BOT GHOST DEVS`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 1000);
});

login();

/**


▒█▄░▒█ ▒█▀▀▀ ▒█▀▀▀ ▒█▀▀▄ 　 ▒█▀▀▀ ▒█▀▀▀█ ▒█▀▀█ 　 ▒█▀▀█ ▒█░▒█ ▒█▀▀▀ ░█▀▀█ ▀▀█▀▀ 
▒█▒█▒█ ▒█▀▀▀ ▒█▀▀▀ ▒█░▒█ 　 ▒█▀▀▀ ▒█░░▒█ ▒█▄▄▀ 　 ▒█░░░ ▒█▀▀█ ▒█▀▀▀ ▒█▄▄█ ░▒█░░ 
▒█░░▀█ ▒█▄▄▄ ▒█▄▄▄ ▒█▄▄▀ 　 ▒█░░░ ▒█▄▄▄█ ▒█░▒█ 　 ▒█▄▄█ ▒█░▒█ ▒█▄▄▄ ▒█░▒█ ░▒█░░

  DISCORD SERVER : https://discord.gg/needforcheat
 *   Code by Riiisky On NeedForCheat
 */