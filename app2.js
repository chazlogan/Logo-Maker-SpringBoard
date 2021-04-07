// const form = document.querySelector('#monkeyform');
// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     alert('You submitted the form!')
// })


// document.querySelector('a').addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log("No Google for you!")


// });

// document.querySelector('input[type="checkbox"]').addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log("No Checking this box homie")
// });

const form = document.querySelector('#logoform');
const brandInput = document.querySelector('input[name="brandname"]');
const colorInput = document.querySelector('input[name="color"]');
const fontSizeInput = document.querySelector('input[name="fontsize"]');
const results = document.querySelector('#results')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newLogo = makeLogo(brandInput.value, colorInput.value, fontSizeInput.value);
    results.appendChild(newLogo)


});

function makeLogo(text, color, size) {
    const logo = document.createElement('h2');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size + 'px';
    return logo;
}
