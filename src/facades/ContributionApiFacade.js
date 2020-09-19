import { getDailyContributionsByYear, allContributions } from '../contributionsApi/Api'
import { unique } from '../helpers/Array'
import { firstDayOfYear, lastDayOfTheYear, allDaysBetween, previousMondayFrom } from '../helpers/Date'
import ContributionHashMap from '../helpers/ContributionHashMap'

export function availableYears() {
  return allContributions()
    .map(contribution => new Date(contribution.date).getFullYear().toString())
    .filter(unique)
}

export function contributionsCountsForYear(year) {
  const firstDateOfTheYear = firstDayOfYear(year)
  const lastDateOfTheYear = lastDayOfTheYear(year)
  const mondayBeforeCurrentYear = previousMondayFrom(firstDateOfTheYear)
  const yearContributions = getDailyContributionsByYear(year)
  const hashMap = new ContributionHashMap(yearContributions)

  let contributionCounts = []
  for(let day of allDaysBetween(mondayBeforeCurrentYear, lastDateOfTheYear)) {
    contributionCounts.push(hashMap.getCountFor(day))
  }

  return contributionCounts
}