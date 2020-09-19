import { getDailyContributionsByYear } from './Api'

describe('Contributions API', () => {
  describe('.getDailyContributionsByYear()', () => {
    describe('when receives null year', () => {
      test('throws an error', () => {
        expect(
          () => getDailyContributionsByYear(null)
        ).toThrow(new Error('Invalid year received'))
      })
    })

    describe('when receives an invalid year', () => {
      test('throws an error', () => {
        expect(
          () => getDailyContributionsByYear([])
        ).toThrow(new Error('Invalid year received'))
      })
    })

    describe('when receives a valid year', () => {
      test('returns a list of contributions for every day in that year', () => {
        expect(getDailyContributionsByYear(2016).length).toEqual(59)
      })
    })
  })
})
