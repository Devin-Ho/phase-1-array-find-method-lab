// code your solution here
function superbowlWin(record) { 
    /* for (let item of element) {
        let noWin = "undefined";
        if (item.result === "W"){
            return item.year;
        } else { 
            return noWin;
        }
    }
    element.find(superbowlWin);
} 
*/

let item = record.find(obj => obj.result === "W")
if (item) {
    return item.year
}
} 

