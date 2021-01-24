import fs from 'fs'
import path from 'path'
import Player from '../resources/scripts/player'
import data from '../resources/scripts/audios'
import { audio, cardImage, songAuthor, songName } from '../resources/scripts/variables'

const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'))

describe('check player class', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString()
    })

    afterEach(() => {
        jest.resetModules();
    })

    it('check methods is defined', () => {
        const player = new Player()

        expect(typeof player.next === 'function').toEqual(true)
        expect(typeof player.pause === 'function').toEqual(true)
        expect(typeof player.play === 'function').toEqual(true)
        expect(typeof player.previous === 'function').toEqual(true)
        expect(typeof player.start === 'function').toEqual(true)
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
})