import data from './audios'
import Player from './player'
import { audio } from './variables'

const player = new Player(data)
player.start()