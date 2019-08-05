// Basic Types
var namess = ['Olive', 'Finn', 2, true];
var persons = 'Steve';
var heightInCentimeters = 182.121212;
var names = ['Olive', 'Finn', 'C3P0', '6', 'Engineer'];
var numtest = [6, 12, 6, 8];
var booltest = [true, false, false];
// Basic Types 2
var tupleTest = ['Olive', 4, true];
var DoorStats;
(function (DoorStats) {
    DoorStats[DoorStats["Open"] = 0] = "Open";
    DoorStats[DoorStats["Closed"] = 1] = "Closed";
    DoorStats[DoorStats["Ajar"] = 2] = "Ajar";
})(DoorStats || (DoorStats = {}));
function log(val) {
    console.log(val);
}
log(DoorStats[0]);
