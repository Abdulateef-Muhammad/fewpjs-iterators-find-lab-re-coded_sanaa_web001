const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(array) {
  let result =  array.find( e => e.result === 'W'? e.year: undefined);
  return result? result.year: undefined;
}

console.log(superbowlWin(record));
