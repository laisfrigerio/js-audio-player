import { secondsToMinutes } from '../resources/scripts/utils'

describe('seconds2minutes', () => {

    it('00:20', () => {
        expect(secondsToMinutes(20)).toEqual("00:20")
    })

    it('01:20', () => {
        expect(secondsToMinutes(80)).toEqual("01:20")
    })

    it('02:00', () => {
        expect(secondsToMinutes(120)).toEqual("02:00")
    })

    it('02:17', () => {
        expect(secondsToMinutes(137)).toEqual("02:17")
    })
})