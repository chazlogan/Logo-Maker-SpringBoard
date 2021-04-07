document.addEventListener('mousemove', function (event) {

    const r = Math.round(event.pageX * 255 / window.innerWidth)
    const b = Math.round(event.pageY * 255 / window.innerHeight)
    console.log(r, 0, b)

    const color = `rgb(${r}, 0, ${b})`

    document.body.style.backgroundColor = color;







})

const letters = document.querySelectorAll('#hi')

for (let letter of letters) {
    letter.style.width = '10px'
    letter.style.border = '2px solid pink'
}
