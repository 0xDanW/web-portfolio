const scriptURL = 'https://script.google.com/macros/s/AKfycbyk36OzlQnUOMTSefCB-1O-IL6oJ9BMg4vzmABKoHr-MSZWuiQVxBIqsV9ZRmnUExjZFQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Your message has been successfully sent! Thank you!"
        setTimeout(function() {
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})