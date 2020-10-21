// Contants & Variables

const BASE_URL = 'https://api.openbrewerydb.org/breweries?by_city=';

let userInput;


// Cached element references
const $main = $('main');
const $input = $('#input');
const $submit = $('#submit');
const $breweries = $('#breweries');



// Event listeners
$submit.on('click', handleGetData);


// Functions

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();

    // check to see if any info was entered
    if (!userInput) return;

    $.ajax(BASE_URL + userInput)

        .then(function (data) {

            breweryInfo = data;

            render();

            $input.val('');
        }, function (error) {
            console.log('Error: ', error);
        });
}

function generateUI() {
    return breweryInfo.map(function (brewery) {
        // skip over listings that have no street address to not include breweries not open yet
        if (brewery.street) {
            return `
            <article  class="location">    
            <h3>${brewery.name}</h3>
            <p>${brewery.street}</p>
            <p>${brewery.city}</p>
            </article>
            `;
        }
    });
}


function render() {
  $breweries.html(generateUI());
}