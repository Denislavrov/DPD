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
            'startHandler': 'start'
        }
    }
}

class StopController extends TelegramBaseController {
    /**
     * @param {Scope} $ 
     */
    stop($) {
        $.sendMessage('fuck you!')
    }

    get routes() {
        return {
            'stopHandler': 'stop'
        }
    }
}



tg.router
    .when(
        new TextCommand('/start', 'startHandler'),
        new StartController()
    )
    .when(
        new TextCommand('stop', 'stopHandler'),
        new StopController()
    )