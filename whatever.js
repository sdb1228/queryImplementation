// Complete the freqQuery function below.
function freqQuery(queries) {
  var counts = {}
  var returnArray = []
  var itemWithCount = {}
  for(let i = 0; i < queries.length; i++) {
    let command = queries[i]
    if (command[0] === 1) {
      if (itemWithCount[command[1]] === undefined) {
        itemWithCount[command[1]] = 1
        if(counts[1]){
          counts[1] = counts[1] + 1
        } else {
          counts[1] = 1
        }
      } else  {
        counts[itemWithCount[command[1]]] = counts[itemWithCount[command[1]]] - 1
        if(counts[itemWithCount[command[1]] + 1]){
          counts[itemWithCount[command[1]] + 1] = counts[itemWithCount[command[1]] + 1] + 1
        } else {
          counts[itemWithCount[command[1]] + 1] = 1
        }
        itemWithCount[command[1]] = itemWithCount[command[1]] + 1
      }
    } else if (command[0] === 2) {
      if (itemWithCount[command[1]] ) {
        if(counts[itemWithCount[command[1]]]) {
          counts[itemWithCount[command[1]]] = counts[itemWithCount[command[1]]] - 1
          counts[itemWithCount[command[1] - 1]] = counts[itemWithCount[command[1] - 1]] + 1
        }
        itemWithCount[command[1]] = itemWithCount[command[1]] - 1
      }
    } else if (command[0] === 3) {
      if (counts[command[1]] > 0) {
        returnArray.push(1)
      } else {
        returnArray.push(0)
      }
    }
  }
  return returnArray

}
