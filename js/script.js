
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
const $breweries = $('#breweries');
const $modal = $('.modal');



// Event listeners
$submit.on('click', handleGetData);
$breweries.on('click', 'article', handleClick);




// Functions
function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    brewType = $type.val();
    if(!userInput) return;
    // $.ajax(BASE_URL + userInput + '&by_type=' + brewType)

    $.ajax(BASE_URL + userInput)

    .then(function(data){
       
        breweryInfo = data;
        // if(breweryInfo.length<1){
        //     console.log('no beer');
        //     $main.html(`
        //     <article class="none-found location">    
        //     <h3 id="name">Sorry, can't find a brewery in this city. Try again. Maybe you should open one here?</h3>
        //     </article>
        //     `);
        //     return
        // }

        render();
        $input.val('');
    }, function(error){
        console.log('Error: ', error);
    });
}

function generateUI() {
    return breweryInfo.map(function(brewery){
        
        if(brewery.street){
        return `
            <article data-url="${brewery.url}" class="location">    
            <h3 id="name">${brewery.name}</h3>
            <p id="address">${brewery.street}</p>
            <p id="city">${brewery.city}</p>
            </article>
            `;
        } 
        });
        
    }

    function handleClick() {
        console.log(this);
        

        console.log('url: ,', breweryInfo);

        $modal.html(breweryInfo.map(function(brewery){
            return `
                <article data-url="${brewery.url}" class="location">    
                <h3 id="name">${brewery.name}</h3>
                <p id="address">${brewery.street}</p>
                <p id="city">${brewery.city}</p>
                </article>
                `;
            }));
        // return breweryInfo.map(function(brewery){
        //     return `
        //     <p id="city">${brewery.city}</p>
        //     `;
        //     $modal.modal();

            //$name.text(brewery.name);
            //$moves.text(`Moves: ${pokemonDetail.moves.length}`);
            //$abilities.text(`Abilities: ${pokemonDetail.abilities.length}`);


           // });
        //alert(url.brewery.name);
        //handleGetData(url);
    }
        
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

    
    
    
    
        
            //<h3 id="name">${brewery.name}</h3>
            //<p id="address">${brewery.city}</p>
            //<p id="city">${brewery.city}</p>