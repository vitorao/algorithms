function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1
  
  while(low <= high) {
    let center = parseInt((low + high) / 2)
    let guess = list[center]

    if(guess === item) return center

    if(guess > item) {
      high = center - 1
    } else {
      low = center + 1
    }
  }

  return null
}

const myList = [1, 3, 5, 7, 9, 11, 12, 14]

console.log(binarySearch(myList, 14))
