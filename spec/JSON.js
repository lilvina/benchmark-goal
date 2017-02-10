import chai, {expect} from 'chai'
import findPath from '../src/JSON'

describe.only('findPath', () => {
  it('exists', () => {
    expect(findPath).to.be.a('function')
  })

  it('should return specific path of the JSON.', () => {

    const data = {
      "name": "William Shakespeare",
      "dead": true,
      "works": [
        {
          "name": "Romeo and Juliet",
          "published": 1951,
          "isAwesome": true
        },
        {
          "name": "Richard III",
          "published": 1952,
          "isAwesome": false
        }
      ],
      "favoriteSites": [
        "tumblr",
        "4chan"
      ]
    }

    console.log(findPath(data, '4chan'))
  })
})