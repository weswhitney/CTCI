const isUniqueChars = (s: string) => {
  if (s.length > 128) return false

  const charSet: boolean[] = new Array(128)

  for (let i = 0; i < s.length; i++) {
    let val = s.charAt(i)

    if (charSet[val]) {
      return false
    }
    charSet[val] = true    
  }
  return true
}
