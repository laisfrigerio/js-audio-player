import fs from 'fs'
import path from 'path'
import Player from '../resources/scripts/player'
import data from '../resources/scripts/audios'
import { audio, btnCta, cardImage, currentDuration, songAuthor, songName, icoVolume, totalDuration, rangeTime } from '../resources/scripts/variables'

const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'))
let pause, play, load

describe('check player class', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString()

        play = jest
            .spyOn(window.HTMLMediaElement.prototype, 'play')
            .mockImplementation(() => {})

        load = jest
            .spyOn(window.HTMLMediaElement.prototype, 'load')
            .mockImplementation(() => {})

        pause = jest
            .spyOn(window.HTMLMediaElement.prototype, 'pause')
            .mockImplementation(() => {})
    })

    afterEach(() => {
        jest.resetModules()
        load.mockRestore()
        pause.mockRestore()
        play.mockRestore()
    })

    it('check methods is defined', () => {
        const player = new Player()

        expect(typeof player.next === 'function').toEqual(true)
        expect(typeof player.onTimeUpdate === 'function').toEqual(true)
        expect(typeof player.pause === 'function').toEqual(true)
        expect(typeof player.play === 'function').toEqual(true)
        expect(typeof player.previous === 'function').toEqual(true)
        expect(typeof player.setCurrentDuration === 'function').toEqual(true)
        expect(typeof player.setAudioCurrentTime === 'function').toEqual(true)
        expect(typeof player.setTotalDuration === 'function').toEqual(true)
        expect(typeof player.setVolume === 'function').toEqual(true)
        expect(typeof player.start === 'function').toEqual(true)
        expect(typeof player.toggleBtnCta === 'function').toEqual(true)
        expect(typeof player.toggleMute === 'function').toEqual(true)
    })
    
    it('check data send to Player class', () => {
        const player = new Player(data)
        expect(player.data).not.toBeUndefined()
    })

    it('check start method', () => {
        const music = data[0]
        const player = new Player(data)
        player.start()
        
        expect(document.querySelector(audio).getAttribute('src')).toEqual(music.song)
        expect(document.querySelector(songAuthor).innerText).toEqual(music.author)
        expect(document.querySelector(songName).innerText).toEqual(music.title)

        if (music.image) {
            expect(document.querySelector(cardImage).getAttribute('src')).toEqual(music.image)
        }
    })

    it('check next method', () => {
        const music = data[1]

        const player = new Player(data)
        player.start()
        player.next()

        expect(document.querySelector(audio).getAttribute('src')).toEqual(music.song)
        expect(document.querySelector(songAuthor).innerText).toEqual(music.author)
        expect(document.querySelector(songName).innerText).toEqual(music.title)
    })

    it('check next method on last item', () => {
        const music = data[0]

        const player = new Player(data)
        player.start()

        for (let i = 0; i < data.length; i++)
            player.next()

        expect(document.querySelector(audio).getAttribute('src')).toEqual(music.song)
        expect(document.querySelector(songAuthor).innerText).toEqual(music.author)
        expect(document.querySelector(songName).innerText).toEqual(music.title)
    })

    it('check previous method on first item', () => {
        const music = data[data.length - 1]

        const player = new Player(data)
        player.start()
        player.previous()

        expect(document.querySelector(audio).getAttribute('src')).toEqual(music.song)
        expect(document.querySelector(songAuthor).innerText).toEqual(music.author)
        expect(document.querySelector(songName).innerText).toEqual(music.title)
    })

    it('check previous method not first item', () => {
        const music = data[0]

        const player = new Player(data)
        player.start()
        player.next()
        player.previous()

        expect(document.querySelector(audio).getAttribute('src')).toEqual(music.song)
        expect(document.querySelector(songAuthor).innerText).toEqual(music.author)
        expect(document.querySelector(songName).innerText).toEqual(music.title)
    })

    it('check show default image', () => {
        const music = data[0]

        const player = new Player(data)
        player.start()
        expect(document.querySelector(cardImage).getAttribute('src')).toEqual(music.image)

        for(let i = 1; i < data.length; i++) {
            const music = data[i]
            player.next()
            if (typeof music.image === 'undefined' || music.image == null) {
                expect(document.querySelector(cardImage).getAttribute('src')).toEqual('https://via.placeholder.com/300.png?text=image')
            }
        }
    })

    /**
     * Toggle play/pause
     */
    it('toggle play/pause button', () => {
        const player = new Player(data)

        player.start()
        player.play()

        expect(player.isPlaying).not.toBeUndefined()
        expect(player.isPlaying).toBeTruthy()
        expect(document.querySelector(btnCta).classList.contains("fa-pause")).toBeTruthy()

        player.pause()
        expect(player.isPlaying).toBeFalsy()
        expect(document.querySelector(btnCta).classList.contains("fa-play")).toBeTruthy()
    })

    /**
     * Toggle mute button
     */
    it('toggle mute button', () => {
        const player = new Player(data)
        player.start()

        expect(player.isMute).not.toBeUndefined()
        expect(player.isMute).toBeFalsy()
        expect(document.querySelector(icoVolume).classList.contains("fa-volume")).toBeTruthy()
        expect(document.querySelector(audio).muted).toBeFalsy()

        player.toggleMute()
        expect(player.isMute).toBeTruthy()
        expect(document.querySelector(icoVolume).classList.contains("fa-volume-mute")).toBeTruthy()
        expect(document.querySelector(audio).muted).toBeTruthy()
    })

    /**
     * Test up/down volume from audio player
     */
    it('check up/down volume', () => {
        const player = new Player(data)
        player.start()

        expect(document.querySelector(audio).volume).toBe(1)
        player.setVolume(50)
        expect(document.querySelector(audio).volume).toBe(0.5)
    })

    /**
     * Test audio duration
     */
    it('check up/down volume', () => {
        const player = new Player(data)
        player.start()
        player.setAudioCurrentTime(20)
        expect(document.querySelector(audio).currentTime).toBe(20)

        player.setAudioCurrentTime(100)
        expect(document.querySelector(audio).currentTime).toBe(100)
    })

    /**
     * Test audio duration
     */
    it('get audio duration', () => {
        const player = new Player(data)
        player.start()
        player.setCurrentDuration(2)
        expect(document.querySelector(currentDuration).innerText).toBe("00:02")

        player.setTotalDuration(100)
        expect(document.querySelector(totalDuration).innerText).toBe("01:40")
    })

    /**
     * Test audio time update
     */
    it('get audio duration', () => {
        const player = new Player(data)
        player.start()
        
        player.setAudioCurrentTime(2)
        player.onTimeUpdate()
        expect(document.querySelector(currentDuration).innerText).toBe("00:02")
    })

})