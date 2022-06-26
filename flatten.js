module.exports = (nestedArray) => {
  // Declare output variable
  const flattenedArray = []

  const flatten = (inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
      const currentElement = inputArray[i]

      // If the current element is an array, call the flatten function recursively,
      // else push value to the output array
      if (Array.isArray(currentElement)) flatten(currentElement)
      else flattenedArray.push(currentElement)
    }
  }

  // Initiate flattening process
  flatten(nestedArray)

  return flattenedArray
}
