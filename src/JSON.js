
export default function findPath(obj, value) {

  let result = []

  for(let key in obj) {
    if(obj[key] == value) {
      result = `${key} -> `
      result.push(findPath(value))
    } else {
      result.push(value)
    }
  }

  return result
}

