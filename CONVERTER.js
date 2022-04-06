

function metersToFeets(meters){
    return (meters*3.28084).toFixed(3);

}
function feetsToMeters(feets){
    return (feets*0.3048).toFixed(3);

}
function litersToGallons(liters){
    return (liters*0.264172).toFixed(3);

}
function GallonsToLiters(Gallons){
    return (Gallons*3.78541).toFixed(3);
}

function KilogramsToPounds(Kilograms){
    return (Kilograms*2.20462).toFixed(3);
}
function PoundsToKilograms(Pounds){
    return (Pounds*0.453592).toFixed(3);
}
function converter(){
    
    let lengthEl  = document.getElementById("length-el");
    let volumeEl = document.getElementById("Volume-el");
    let massEl = document.getElementById("mass-el");
    let value = document.getElementById("values").value;
    if(value===" "){
        value = 0 ;
    }
    lengthEl.innerHTML =`${value} meters=${metersToFeets(value)} feets || ${value} feets=${feetsToMeters(value)} meters`;
    volumeEl.innerHTML =`${value} Liters=${litersToGallons(value)} gallons || ${value} gallons=${GallonsToLiters(value)} Liters`;
    massEl.innerHTML =`${value} Kilograms=${KilogramsToPounds(value)} pounds || ${value} pounds=${PoundsToKilograms(value)} pounds`;
}
