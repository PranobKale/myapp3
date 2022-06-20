function isEven(number) {
  if (number % 2 == 0) {
    console.log(`${number} is even`)
  } else {
    console.log(`${number} is odd`)
  }
}
isEven(10)
isEven(11)

//acacasca
function isOdd(number) {
  if (number % 2 != 0) {
    console.log(`${number} is odd`)
  } else {
    console.log(`${number} is even`)
  }
}
isOdd(10)
isOdd(11)

function add(p1, p2) {
  console.log(`${p1} + ${p2} = ${p1 + p2}`)
}

add(12, 12)

function isSub(p1, p2) {
  console.log(`${p1} - ${p2} = ${p1 - p2}`)
}

isSub(13, 12)

function isSub1(p1, p2) {
  console.log(`${p1} - ${p2} = ${p1 - p2}`)
}

isSub1(13, 13)
