var SelectProperty, SelectSource, SelectConvert;
var select1 = document.getElementById("sel1");
var select2 = document.getElementById("sel2");
var el,optn,scValue,invValue,arr,arr1;

function getOption() {
    var obj = document.getElementById("sel");
    //obj.options[obj.selectedIndex].text = SelectProperty;
    SelectProperty = obj.options[obj.selectedIndex].text; 
    console.log(SelectProperty);

    switch(SelectProperty){
        case "Area":
            setDropDown(areaUnits);
            arr = areaUnits;
            arr1 = areaCon;
            break;
        case "Energy":
            setDropDown(energyUnits);
            arr = energyUnits;
            arr1 = energyCon;
            break;
        case "Length":
            setDropDown(lengthUnits);
            arr = lengthUnits;
            arr1 = lengthCon;
            break;
        case "Mass":
            setDropDown(massUnits);
            arr = massUnits;
            arr1 = massCon;
            break;
        case "Pressure":
            setDropDown(pressureUnits);
            arr = pressureUnits;
            arr1 = pressureCon;
            break;
        case "Temperature":
            setDropDown(tempUnits);
            break;
        case "Time":
            setDropDown(timeUnits);
            arr = timeUnits;
            arr1 = timeCon;
            break;
        case "Speed":
            setDropDown(speedUnits);
            arr = speedUnits;
            arr1 = speedCon;
            break;
    }

    

  }

  function Convert(num){

    var obj1 = document.getElementById("sel1");
    SelectSource = obj1.options[obj1.selectedIndex].text; 
    console.log(SelectSource);

    var obj2 = document.getElementById("sel2");
    SelectConvert = obj2.options[obj2.selectedIndex].text; 
    console.log(SelectConvert);
 

    let pos = arr.indexOf(SelectSource);
    scValue = arr1[pos];

    let pos1 = arr.indexOf(SelectConvert);
    invValue = arr1[pos1];
    console.log(num);
    console.log(scValue);
    console.log(invValue);

    var finalR = (num*scValue)/invValue;
    console.log(finalR);
    document.getElementById("input2").innerHTML = finalR;

  }

  function getSource(value) {
    // If value is Not a Number 
    let text;
    if (isNaN(value)) {
      text = "Input not valid";
    } else {
      text = "Input OK";
      Convert(value);
      
    }
    //document.getElementById("demo").innerHTML = text;
    //return value;
  }


function setDropDown(arr) {
    document.getElementById("sel1").innerHTML = "";
    document.getElementById("sel2").innerHTML = "";

    for (var i = 0; i < arr.length; i++) {
        optn = arr[i];
        el = document.createElement("option");
        el1 = document.createElement("option");

        el.textContent = optn;
        el1.textContent = optn;

        el.value = optn;
        el1.value = optn;

        select1.appendChild(el);
        select2.appendChild(el1);
    }
   
}


var areaUnits = ["Squaremeter (m^2)", "Acre (acre)", "Hectare", "Rood", "Squarefoot (ft^2)", "Square mile (mi^2)"];
var energyUnits = ["Joule (J)", "Calorie (SI) (cal)", "Electron volt (eV)","Horsepower-hour","Kilowatt-hour (kW hr)", "Watt-second (W sec)"];
var lengthUnits = ["Meter (m)","Centimeter (cm)", "Kilometer (km)", "Foot (ft)", "Inch (in)","Lightyear (LY)", "Micrometer (mu-m)","Millimeter (mm)", "Nanometer (nm)", "Mile (US nautical)", "Picometer (pm)", "Yard (yd)"];
var massUnits = ["Kilogram (kg)", "Gram (g)", "Milligram (mg)", "Microgram (mu-g)", "Carat (metric)(ct)", "Ton (metric)", "Tonne"];
var pressureUnits = ["Newton/sq.meter", "Atmosphere (normal)", "Bar", "Millimeter mercury(mmHg)", "Pascal (Pa)", "Torr (mmHg,0'C)"];
var tempUnits = ["Degrees Celsius ('C)", "Degrees Fahrenheit ('F)", "Degrees Kelvin ('K)"];
var timeUnits = ["Second (sec)", "Day (mean solar)", "Hour (mean solar)", "Minute (sidereal)", "Month (mean calendar)", "Second (sidereal)", "Year (calendar)"];
var speedUnits = ["Meter/second (m/sec)", "Kilometer/hour (kph)","Knot (int'l)", "Mile (US)/hour (mph)"];


var areaCon = [1, 4046.856, 10000, 1011.71413184285, 9.290304E-02, 2589988];
var energyCon = [1, 4.1868, 1.6021E-19, 2684077.3, 3600000, 1];
var massCon = [1, 0.001, 1E-6, 1E-9, 0.0002, 1000, 1000];
var pressureCon = [1, 101325, 100000, 133.3224, 1, 133.322];
//var tempCon = [1, 0.01, 1000, 0.3048, 0.0254, 9.46055E+15, 1E-6, 0.001, 1E-9,1852, 1E-12, .9144];
var timeCon = [1, 8.640E4, 3600, 60, 2628000];
var speedCon = [1, 0.2777778,0.5144444,0.44707];
var lengthCon= [1, 0.01, 1000, 0.3048, 0.0254, 9.46055E+15, 1E-6, 0.001, 1E-9,1852, 1E-12, .9144];

