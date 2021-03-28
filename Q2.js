function timeConversion(s) {
    const ampm = s.slice(-2);
    const hours = Number(s.slice(0, 2));
    let time = s.slice(0, -2);
    if (ampm === 'AM') {
        if (hours === 12) { // 12am edge-case
            console.log(time.replace(s.slice(0, 2), '00'));
        }
    } else if (ampm === 'PM') {
        if (hours !== 12) {
            return time.replace(s.slice(0, 2), String(hours + 12));
        } 
        console.log(time)

        // return time; // 12pm edge-case
    }
    return 'Error: AM/PM format is not valid';
}


function timeadder(time) {
    var AM = time.match('AM') ? true : false
    if (AM){
        var amORpm = 'AM'
    }else{
        var amORpm = 'PM'
    }
    time = time.split(':')
    var min = time[1]
    min=parseInt(min)
    var hour = time[0]
    hour=parseInt(hour)
    var sec = time[2]
    sec=parseInt(sec)
    var addmin = 45
    addmin=parseInt(addmin)
    var addsec = 45
    addsec=parseInt(addsec)

    sec = sec + addsec
    if(sec >60){
        sec = sec - 60
        addmin = addmin+1
    }else{
        addmin = addmin
    }
    min = min + addmin
    if(min > 60){
        min = min-60;
        hour = hour + 1
        console.log(hour)
    }else{
        hour = hour
    }
    if(hour>12 ){
    if(amORpm == 'AM'){
        amORpm = 'PM'
    }else{
        amORpm = 'AM'
    }

    }
    // console.log(hour+ ':' + min + ':'+ sec+amORpm)
    var t = hour+ ':' + min + ':'+ sec+amORpm
    console.log(t)
    timeConversion(t)
    }

timeadder('12:01:00AM') // "00:46:45"
timeadder('12:01:00PM') // "12:46:45"

