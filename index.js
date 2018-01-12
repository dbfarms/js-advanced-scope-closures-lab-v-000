
function produceDrivingRange(range) {
    return function(start, end) {
        let distance = Math.abs(parseInt(start) - parseInt(end))
        let difference = distance - range
        if ( distance > range ) {
            return `${difference} blocks out of range`
        } else {
            return `within range by ${distance}`
        }
    }
}
    
function produceTipCalculator(percentage){
    return function(fare) {
        return fare * percentage
    }
}