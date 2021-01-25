import { audio, btnCta, cardImage, currentDuration, icoVolume, rangeTime, songAuthor, songName, totalDuration } from './variables'
import { secondsToMinutes } from './utils'

/**
 * Class Player
 */ 
export default class Player {

    /**
     * Receive data audio
     * @method constructor
     */
    constructor (data) {
        this.data = data
        this.index = 0
        this.isMute = false
        this.isPlaying = false
        this.audio = document.querySelector(audio)
        this.btnCta = document.querySelector(btnCta)
        this.cardImage = document.querySelector(cardImage)
        this.currentDuration = document.querySelector(currentDuration)
        this.icoVolume = document.querySelector(icoVolume)
        this.rangeTime = document.querySelector(rangeTime)
        this.songAuthor = document.querySelector(songAuthor)
        this.songName = document.querySelector(songName)
        this.totalDuration = document.querySelector(totalDuration)
    }

    /**
     * Play next song of track list
     * @method next
     */
    next () {
        this.index++

        if (this.index === this.data.length) {
            this.index = 0
        }

        this.start()
        this.play()
    }

    onTimeUpdate () {
        this.setCurrentDuration(this.audio.currentTime)
        this.rangeTime.value = this.audio.currentTime
    }

    /**
     * Stop audio
     * @method pause
     */
    pause () {
        this.toggleBtnCta("fa-play", "fa-pause")
        this.audio.pause()
    }

    /**
     * Start audio
     * @method play
     */
    play () {
        this.toggleBtnCta("fa-pause", "fa-play")
        this.audio.play()
    }

    /**
     * Play previous song of track list
     * @method previous
     */
    previous () {
        this.index--

        if (this.index === -1) {
            this.index = this.data.length - 1
        }

        this.start()
        this.play()
    }

    setCurrentDuration (value) {
        this.currentDuration.innerText = secondsToMinutes(value)
    }

    setAudioCurrentTime (value) {
        this.audio.currentTime = value
    }

    setTotalDuration (value) {
        this.totalDuration.innerText = secondsToMinutes(value)
    }

    setVolume (value) {
        this.audio.volume = value / 100
    }

    /**
     * Initialize the player with first song of data audio (song, author name, song name, etc)
     * @method start
     */
    start () {
        this.current = this.data[this.index]
        this.audio.setAttribute('src', this.current.song)
        this.audio.load()
        this.songAuthor.innerText = this.current.author
        this.songName.innerText = this.current.title

        if (this.current.image) {
            this.cardImage.setAttribute('src', this.current.image)
            return
        }

        //- Default image
        this.cardImage.setAttribute('src', 'https://via.placeholder.com/300.png?text=image')
    }

    toggleBtnCta (addClass, removeClass) {
        this.isPlaying = !this.isPlaying
        this.btnCta.classList.remove(removeClass)
        this.btnCta.classList.add(addClass)
    }

    toggleMute () {
        this.isMute = !this.isMute
        this.icoVolume.classList.remove(...this.icoVolume.classList)
        this.audio.muted = !this.audio.muted
        this.isMute ? this.icoVolume.classList.add("ico-volume", "fas", "fa-volume-mute")
                    : this.icoVolume.classList.add("ico-volume", "fas", "fa-volume")
    }
}
