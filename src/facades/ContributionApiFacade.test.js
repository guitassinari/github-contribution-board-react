import { availableYears, contributionsCountsForYear } from './ContributionApiFacade'

describe('Contribution API Facade', () => {
  describe('.availableYears()', () => {
    test('returns all years that have contributions', () => {
      expect(availableYears()).toEqual(['2016', '2017'])
    })
  })

  describe('.contributionsCountsForYear()', () => {
    test('returns a list of contribution counts starting from the previous year last monday', () => {
      expect(contributionsCountsForYear(2016).length).toEqual(369)
      expect(contributionsCountsForYear(2017).length).toEqual(370)
    })
  })
})

