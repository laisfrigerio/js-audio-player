import data from './audios'
import Player from './player'
import { audio } from './variables'
import './dark-mode'

const player = new Player(data)
player.start()

document.querySelector(audio).addEventListener('ended', () => {
    player.next()
})