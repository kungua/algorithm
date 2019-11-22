function computeMaxCallStackSize() {
  try {
    return 1 + computeMaxCallStackSize()
  } catch(e) {
    return 1
  }
}

console.log(computeMaxCallStackSize())
