
export default function findPath(obj, value) {

  let result = []

  console.log('value', value)
  console.log('obj', obj)

  for(let key in obj) {
    console.log('======>', key)
    if(obj[key] == value) {
      result = `${key} -> `
      result.push(findPath(value))
    } else {
      result.push(value)
    }
  }

  console.log('results =======>', result)

  return result
}

