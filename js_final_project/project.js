var arraySelect = document.getElementsByTagName('select'); //refereer alle select tags

var element = document.getElementById('content'); // refereer id met naam content

function dropdownStyles(){

    var style = this.id; // this refereert aan DOM element id
    var value = this.value; // this refereert aan DOM element value
    

    element.style[style] = value; //refereer style object, wijzigen value van style

}

for( var i = 0; i < arraySelect.length; i++ ){
//counter: var i = 0;
//condition: i < arraySelect.length;
//iteration: i++
    arraySelect[i].addEventListener( 'change', dropdownStyles );
    // als event 'change' wordt getriggerd (door erop te klikken), wordt function dropdownStyles uitgevoerd
    // de () weglaten achter function-naam dropdownStyles omdat er een event wordt toegevoegd. Bij toegvoegen event -> niet de bedoeing dat functie wordt uitgevoerd.

}
