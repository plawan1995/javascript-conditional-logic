//Exercise 2
let lightBulbStatus = "On";
lightBulbStatus = "Broken";

// Start coding here.
if (lightBulbStatus == "on"){
    console.log("Light bulb is On.");
}
else if (lightBulbStatus === "Off"){
    console.log("Light bulb is Off.");
}
else if (lightBulbStatus === "Broken"){
    console.log("Light bulb is Broken.");
    
}
else {
    console.log("Please choose the correct input (On/Off/Broken)");
  }