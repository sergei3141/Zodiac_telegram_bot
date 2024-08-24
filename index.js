const TelegramBot = require('node-telegram-bot-api');
const token = "7523555266:AAGNG1NOLyljGxFYnkxlvRQjQ1d2dEG474k"
const webAppUrl = 'https://lovely-cajeta-5df60e.netlify.app/'

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Ниже появится кнопка", {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Перейти в приложение', web_app: {url: webAppUrl}}]
            ]
        }
    })
  }
});