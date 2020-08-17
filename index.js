const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "L"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(array) {
  return array.find( e => e.result === 'W'? e: undefined).year;
}

console.log(superbowlWin(record));
