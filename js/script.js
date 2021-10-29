const form = document.querySelector('#form')
const details = document.querySelector('#details')



document.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const liData = `
    <li>${data.fname}</li>
    <li>${data.lname}</li>
    <li>${data.email}</li>
    <li>${data.contact}</li>
    <li>${data.adress}</li>
    <li>${data.date}</li>
    `
    details.innerHTML = liData
})