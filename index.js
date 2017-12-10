
function produceDrivingRange(range){
  return function(start, end){
    let startBlock = parseInt(start.slice(0, -2))
    let endBlock = parseInt(end.slice(0, -2))
    let distance = Math.abs(startBlock - endBlock)

    if (distance > range) {
      return `${distance - range} blocks out of range`
    } else {
      return `within range by ${range - distance}`
    }
  }
}

function produceTipCalculator(fare){
  return function(decimalPercent){
    return fare * decimalPercent;
  }
}

function createDriver(){
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
