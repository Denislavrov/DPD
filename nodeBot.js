'use strict'

const Telegram = require('telegram-node-bot')

const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('646372471:AAGeB5J7Dw2Ih3zY_Kne94bfz4SZUPnDYf8', {
    workers: 1,
    webhook: {
        url: 'https://cryptic-shelf-51638.herokuapp.com/',
        port: 8888,
        host: 'localhost'
    },
    webAdmin: {
        port: 8888,
        host: 'localhost'
    }
})

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $ 
     */
    pingHandler($) {
        $.sendMessage('pong')
    }

    get routes() {
        return {
            'pingCommand': 'pingHandler'
        }
    }
}

tg.router
    .when(
        new TextCommand('ping', 'pingCommand'),
        new PingController()
    )