function buildHistogram(arr) {
  let hGram = {}
  let letter

  for (let i = 0; i < arr.length; i++) {
    letter = arr[i]
    if (hGram[letter]) {
      hGram[letter] += 1
    } else {
      hGram[letter] = 1
    }
  }
  return hGram
}

function canBuildNote(arr, string) {
  let hGram = buildHistogram(arr)
  let letter

  for (let i = 0; i < string.length; i++) {
    letter = string[i]
    if (hGram[letter] && hGram[letter] > 0) {
      hGram[letter] -= 1
    } else {
      return false
    }
  }
  return true
}