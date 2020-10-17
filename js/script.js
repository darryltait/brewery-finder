
// Contants & Variables

const BASE_URL = 'https://api.openbrewerydb.org/breweries?by_city=';

let userInput, breweryInfo;




// Cached element references
const $main = $('main');
const $name = $('#name');
const $address = $('#address');
const $city = $('#city');
const $type = $('#type');
const $input = $('#input');
const $submit = $('#submit');
$breweries = $('#breweries');


// Event listeners
$submit.on('click', handleGetData);



// Functions
function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    if(!userInput) return;
    $.ajax(BASE_URL + userInput)
    .then(function(data){

        breweryInfo = data;

        render();
        $input.val('');
    }, function(error){
        console.log('Error: ', error);
    });
}

function generateUI() {
    return breweryInfo.map(function(brewery){
        return `
            <article class="location">    
            <h3 id="name">${brewery.name}</h3>
            <p id="address">${brewery.street}</p>
            <p id="city">${brewery.city}</p>
            </article>
            `;
        });
    }
        

        
            //<h3 id="name">${brewery.name}</h3>
            //<p id="address">${brewery.city}</p>
            //<p id="city">${brewery.city}</p>
        
 


function render() {
    console.log('Brewery info: ', breweryInfo);
    console.log('generateUI: ', generateUI());
    $breweries.html(generateUI());
    // return breweryInfo.map(function(brewery){
    //     // return  $main.html( `<h3 id="name">${brewery.name}</h3>
    //     // <p id="address">${brewery.city}</p>
    //     // <p id="city">${brewery.city}</p>`)
    //     console.log(brewery.name, brewery.street, brewery.city);
    // })
   
}