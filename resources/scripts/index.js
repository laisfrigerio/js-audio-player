import data from './audios'
import Player from './player'
import './dark-mode'

const player = new Player(data)
player.start()