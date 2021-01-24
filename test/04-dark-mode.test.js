import fs from 'fs'
import path from 'path'
import { onLoad, toggle } from '../resources/scripts/dark-mode'

const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'))

describe('check data file', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString()
    })

    afterEach(() => {
        jest.resetModules();
    })

    it('on load', () => {
        onLoad()
        expect(document.body.classList.contains("dark-theme")).toBeFalsy()
    })

    it('from light to dark', () => {
        toggle()
        expect(document.body.classList.contains("dark-theme")).toBeTruthy()
    })

    it('from dark to light', () => {
        toggle()
        expect(document.body.classList.contains("dark-theme")).toBeTruthy()
        toggle()
        expect(document.body.classList.contains("dark-theme")).toBeFalsy()
    })
})