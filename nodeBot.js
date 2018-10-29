'use strict'

// const Telegram = require('telegram-node-bot')

// const TelegramBaseController = Telegram.TelegramBaseController
// const TextCommand = Telegram.TextCommand
// const tg = new Telegram.Telegram('646372471:AAGeB5J7Dw2Ih3zY_Kne94bfz4SZUPnDYf8');


// class StartController extends TelegramBaseController {
//     /**
//      * @param {Scope} $ 
//      */
//     start($) {
//         $.sendMessage('Hello!')
//     }

//     get routes() {
//         return {
//             'startComand': 'start'
//         }
//     }
// }

// tg.router
//     .when(new TextCommand('/start', 'startCommand'), new StopController())
//     .when(new TextCommand('/stop', 'stopCommand'), new StopController())
//     .when(new TextCommand('/restart', 'restartCommand'), new RestartController())


const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const keyboard = Markup.inlineKeyboard([
    Markup.urlButton('❤️', 'http://telegraf.js.org'),
    Markup.callbackButton('Delete', 'delete')
])

const bot = new Telegraf('646372471:AAGeB5J7Dw2Ih3zY_Kne94bfz4SZUPnDYf8');
bot.start((ctx) => ctx.reply('Hello'))
bot.help((ctx) => ctx.reply('Help message'))
bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.startPolling()