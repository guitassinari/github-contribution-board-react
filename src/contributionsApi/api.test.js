import { getDailyContributionsByYear, availableYears } from './api'

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

  describe('.availableYears()', () => {
    test('returns all years that have contributions', () => {
      expect(availableYears()).toEqual(['2016', '2017'])
    })
  })
})
