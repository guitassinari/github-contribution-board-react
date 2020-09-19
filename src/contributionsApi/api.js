import { unique } from '../helpers/array'
import CONTRIBUTIONS from '../../data/contributions.json'

export function getDailyContributionsByYear(year) {
  if(!year || typeof year !== 'number') {
    throw new Error('Invalid year received')
  }

  return CONTRIBUTIONS
    .filter(contribution => new Date(contribution.date).getFullYear() === year)  
}

export function availableYears() {
  return CONTRIBUTIONS
    .map(contribution => new Date(contribution.date).getFullYear().toString())
    .filter(unique)
}