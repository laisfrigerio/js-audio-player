import data from '../resources/scripts/audios'

describe('check data file', () => {

    it('check data file is empty', () => {
        expect(data.length).toBeGreaterThan(0)
    })

    it('check data json has required keys', () => {
        data.forEach(music => {
            expect(music.author).not.toBeUndefined()
            expect(music.title).not.toBeUndefined()
            expect(music.song).not.toBeUndefined()
        });
    })
})