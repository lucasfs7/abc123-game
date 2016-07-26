const ALLOWED_KEYS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Z', 'W', 'Y',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

const memo = null

function getRandomKey() {
  let i = Math.floor(Math.random() * ALLOWED_KEYS.length)
  return ALLOWED_KEYS[i]
}

export function generateKey() {
  let key = getRandomKey()
  while (key === memo) {
    key = getRandomKey()
  }
  return key
}
