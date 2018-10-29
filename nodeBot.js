'use strict'

const Telegram = require('telegram-node-bot')

const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('646372471:AAGeB5J7Dw2Ih3zY_Kne94bfz4SZUPnDYf8');


class StartController extends TelegramBaseController {
    /**
     * @param {Scope} $ 
     */
    start($) {
        $.sendMessage('Hello!')
    }

    get routes() {
        return {
            'startComand': 'start'
        }
    }
}

tg.router
    .when(new TextCommand('/start', 'startCommand'), new StopController())
    .when(new TextCommand('/stop', 'stopCommand'), new StopController())
    .when(new TextCommand('/restart', 'restartCommand'), new RestartController())