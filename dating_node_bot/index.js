const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "6213882460:AAF6g1B3ravCbojVZ7BKloal59Eh1_NTIvk";
const webAppUrl = "https://timely-druid-e1aa34.netlify.app"
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start") {
    await bot.sendMessage(chatId,"Приветствую тебя" ,{
      reply_markup: {
        keyboard: [[{ text: "Заполнить анкету" ,web_app:{url:webAppUrl} }]],
      },
    });
    
  }
  
  
});
