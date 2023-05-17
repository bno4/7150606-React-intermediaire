import { formatJobList } from './'
import { formatQueryParams } from './'

describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('The formatQueryPamrams function', () => {
    it('should add a comma to a word', () => {
      const expectedState = 'item2,'
      expect(formatQueryParams('item2', 3, 1)).toEqual(expectedState)
    })
    it('should not add a comma to the last element of the list', () => {
      const expectedState = 'item3'
      expect(formatQueryParams('item3', 3, 2)).toEqual(expectedState)
    })
  })
