
// Contants & Variables

const BASE_URL = 'https://api.openbrewerydb.org/breweries?by_city='
// const BASE_URL = 'https://api.openbrewerydb.org/breweries?by_city=milwaukee&brewery_type=micro'

let userInput, breweryInfo;




// Cached element references
const $name = $('#name');
const $address = $('#address');
const $city = $('#city');
const $input = $('#input');
const $submit = $('#submit');


// Event listeners
$submit.on('click', handleClick);



// Functions
function handleClick(event) {
    event.preventDefault();
    userInput = $input.val();
    console.log(userInput);
    if(!userInput) return;
    $.ajax(BASE_URL + userInput)
    .then(function(data){
        breweryInfo = data;
        render();
    }, function(error){
        console.log('Error: ', error);
    });
}

function render() {
    console.log(breweryInfo);
}