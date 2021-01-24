import { audio, cardImage, songAuthor, songName } from './variables'

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
        this.audio = document.querySelector(audio)
        this.cardImage = document.querySelector(cardImage)
        this.songAuthor = document.querySelector(songAuthor)
        this.songName = document.querySelector(songName)
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
    }

    /**
     * Stop audio
     * @method pause
     */
    pause () {}

    /**
     * Start audio
     * @method play
     */
    play () {}

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
    }

    /**
     * Initialize the player with first song of data audio (song, author name, song name, etc)
     * @method start
     */
    start () {
        this.current = this.data[this.index]
        this.audio.setAttribute('src', this.current.song)
        this.songAuthor.innerText = this.current.author
        this.songName.innerText = this.current.title

        if (this.current.image) {
            this.cardImage.setAttribute('src', this.current.image)
        }
    }
}