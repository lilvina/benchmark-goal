const TILES_TOTALS = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
  _: 2
};

const output = {
  10: ['E'],
  9: ['I'],
  8: ['A'],
  7: ['O'],
  5: ['R', 'N', 'T'],
  4: ['U', 'L', 'D'],
  3: ['G', 'S'],
  2: ['P', 'H', 'F', 'V', 'W'],
  1: ['B', 'Y', 'J', 'K', 'M', 'Q', 'C', 'Z', '_'],
  0: ['X']
}

export default function ScrabBag(input) {
  let usedTilesArray = input.toUpperCase().split(' ')

  for(let i = 0; i < usedTilesArray.length; i++) {
    if(usedTilesArray[0] in TILES_TOTALS && TILES_TOTALS.usedTilesArray[i] < 0) {
      TILES_TOTALS.usedTilesArray[i] = TILES_TOTALS.usedTilesArray[i] - 1
    }
    return output
  }

  let result = {}
  Object.keys(TILES_TOTALS).forEach(tile => {
    const total = TILES_TOTALS[tile]
    result[total] = result[total] || []
    result[total].push(tile)
  })

  result = Object.keys(result)
    .sort((a,b) => b - a)
    .map(key =>
      `${key}: ${result[key].join(', ')} `
    )

  return result.join("\n")
}
