// code your solution here
function superbowlWin(record){
    // use .find() to feed in an array
    // record.find(item => item.result) // this results in undefined
    
    const winningRecord = record.find(superbowlJudge); // I'm sure .find finds the FIRST OBJECT so why is it always returning undefined?????
    // console.log(winningRecord.year);
    if (winningRecord) return winningRecord.year;
    else return winningRecord;
}

function superbowlJudge(record){
    // console.log(year);

    if(record.result===`W`){
        return record;
        // return String(year.year);
    }    
}