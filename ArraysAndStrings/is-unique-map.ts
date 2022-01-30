const hasAllUniqChars = (s: string) => {
  let charMap = new Map();
  for (let index = 0; index < s.length; index++) {
    if (charMap.has(s[index])) {
      charMap.set(s[index], 2)
    } else {
      charMap.set(s[index], 1)
    }
  }

  for (let index = 0; index < s.length; index++) {
    if(charMap.has(s[index]) && charMap.get(s[index]) === 2) {
      return false
    }
  }
  return true
}

const ans = hasAllUniqChars('leet');
console.log(ans)