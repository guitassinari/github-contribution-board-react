export default class ContributionHashMap {
  constructor(contributions) {
    this.hashMap = contributions.reduce((map, contribution) => {
      map[contribution.date] = contribution.count;
      return map;
    }, {})
  }

  getCountFor(date) {
    const key = this.__hashMapKeyFromDate(date)
    return this.hashMap[key] || 0
  }

  __hashMapKeyFromDate(date) {
    const offset = date.getTimezoneOffset()
    const utcDate = new Date(date.getTime() + (offset*60*1000))
    return utcDate.toISOString().split('T')[0]
  }
}