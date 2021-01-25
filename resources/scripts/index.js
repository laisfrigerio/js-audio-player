import data from './audios'
import Player from './player'
import { audio, btnCta, icoVolume, rangeTime, rangeVolume } from './variables'
import './dark-mode'

const player = new Player(data)
player.start()

player.audio.addEventListener("loadeddata", () => {
    player.rangeTime.max = player.audio.duration
    player.setTotalDuration(player.audio.duration)
    player.setCurrentDuration(player.audio.currentTime)
})

player.audio.addEventListener('timeupdate', () => {
    console.log("time update")
    player.onTimeUpdate()
})

document.querySelector(audio).addEventListener('ended', () => {
    player.next()
})

document.querySelector(btnCta).addEventListener('click', () => {
    if (player.isPlaying) {
        player.pause()
    } else {
        player.play()
    }
})

document.querySelector(icoVolume).addEventListener('click', () => {
    player.toggleMute()
})

document.querySelector(rangeVolume).addEventListener('change', () => {
    player.setVolume(document.querySelector(rangeVolume).value)
})

document.querySelector(rangeVolume).addEventListener('oninput', () => {
    player.setVolume(document.querySelector(rangeVolume).value)
})

document.querySelector(rangeTime).addEventListener('change', () => {
    const range = document.querySelector(rangeTime).value
    player.setCurrentDuration(range)
    player.setAudioCurrentTime(range)
})

document.querySelector(rangeTime).addEventListener('oninput', () => {
    const range = document.querySelector(rangeTime).value
    player.setCurrentDuration(range)
    player.setAudioCurrentTime(range)
})
