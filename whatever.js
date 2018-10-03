freqQuery()

function freqQuery() {
  var outputStack = []
  var stuffInArrayCount = {}
  var returnArray = []
  for(let i = 0; i < input.length; i++) {
    let command = input[i]
    if (command[0] === 1) {
      outputStack.push(command[1])
      if (stuffInArrayCount[command[1]] === undefined) {
        stuffInArrayCount[command[1]] = 0
      } else  {
        stuffInArrayCount[command[1]] = stuffInArrayCount[command[1]] + 1
      }
    } else if (command[0] === 2) {
      var index = outputStack.indexOf(command[1]);
      if (index > -1) {
        outputStack.splice(index, 1);
        stuffInArrayCount[command[1]] = stuffInArrayCount[command[1]] - 1
        if (stuffInArrayCount[command[1]] === 0) {
          delete stuffInArrayCount[command[1]]
        }
      }
    } else if (command[0] === 3) {
      let keys = Object.keys(stuffInArrayCount)
      let printedKeys = false
      if (!Object.values(stuffInArrayCount).filter(n => n).length) {
        returnArray.push(0)
        continue
      }
      for (let j = 0; j < keys.length; j++) {
        if (stuffInArrayCount[keys[j]] === command[1]) {
          returnArray.push(1)
          printedKeys = true
          break
        }
      }
      if (!printedKeys) {
        returnArray.push(0)
      }
    }
  }
  console.log(returnArray)
}
