import ContributionHashMap from './ContributionHashMap'

describe('ContributionsHashMap', () => {
  describe('constructor', () => {
    describe('when received contributions is null', () => {
      test('throws an error', () => {
        expect(() => new ContributionHashMap(null)).toThrow()
      })
    })
  })

  describe('.getCountFor(date)', () => {
    const contributions = [{ date: '2016-06-06', count: 10 }]
    
    describe('when received contributions has a count for the received date', () => {
      test('returns the received count', () => {
        const contribution = contributions[0]
        const date = new Date(contribution.date)
        expect(
          new ContributionHashMap(contributions).getCountFor(date)
        ).toEqual(contribution.count)
      })
    })

    describe('when received contributions has no count for the received date', () => {
      test('it returns 0', () => {
        expect(
          new ContributionHashMap(contributions).getCountFor(new Date())
        ).toEqual(0)
      })
    })
  })
})
