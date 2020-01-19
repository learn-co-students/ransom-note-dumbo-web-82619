function buildHistogram(letters) {
    let histogram = {}
    let x
    for (x of letters) {
        if (histogram[x]) {
            histogram[x] += 1
        } else {
            histogram[x] = 1
        }
    }
    return histogram
}

function canBuildNote(magazine, note) {
    let magLetters = buildHistogram(magazine)
    let noteLetters = buildHistogram(note.split(""))
    let x
    for (x of Object.keys(noteLetters)) {
        if (magLetters[x] - noteLetters[x] < 0) {
            return false
        }
        if (!magLetters[x]) {
            return false
        }
    }
    return true
}