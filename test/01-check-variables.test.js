import fs from 'fs'
import path from 'path'
const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'))
import { audio, cardImage, songAuthor, songName } from '../resources/scripts/variables'

describe('check elements exists', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString()
    })

    afterEach(() => {
        jest.resetModules();
    })

    it('check #audio element', () => {
        expect(document.querySelector(audio)).not.toBeNull()
    })

    it('check #card-image element', () => {
        expect(document.querySelector(cardImage)).not.toBeNull()
    })

    it('check #song-author element', () => {
        expect(document.querySelector(songAuthor)).not.toBeNull()
    })

    it('check #song-name element', () => {
        expect(document.querySelector(songName)).not.toBeNull()
    })
})