'use strict'

const Telegram = require('telegram-node-bot')

const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('646372471:AAGeB5J7Dw2Ih3zY_Kne94bfz4SZUPnDYf8', {
    workers: 1,
    webhook: {
        url: process.env.WEBHOOK || 'https://cryptic-shelf-51638.herokuapp.com',
        port: process.env.PORT || 8080,
        host: process.env.WEBHOST || 'cryptic-shelf-51638.herokuapp.com'
    },
    // webAdmin: {
    //     port: 8080,
    //     host: 'cryptic-shelf-51638.herokuapp.com'

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