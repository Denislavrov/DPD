'use strict'

const Telegram = require('telegram-node-bot')

const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('646372471:AAGeB5J7Dw2Ih3zY_Kne94bfz4SZUPnDYf8');

class OtherwiseController extends TelegramBaseController {
    handle() {
        console.log('otherwise')
    }
}

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








tg.router
    .when(new TextCommand('/start', 'startComand'), new StartController())
    .when(new TextCommand('/stop', 'stopCommand'), new StopController())
    .when(new TextCommand('/restart', 'restartCommand'), new RestartController())
    .otherwise(new OtherwiseController())


.when(
    new TextCommand('/start', 'startHandler'),
    new StartController()
)