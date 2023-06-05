const p = document.querySelector('#para')


function displaySentence(x, y) {
    let count = 0
    let showVal = setInterval(() => {
        p.innerHTML += `<b>
    Ka ho hamar kareja <br />
    kaisan baru ho <br />
  </b>`
        p.style.display = 'block'
        count++

        if (count == y) {
            alert('Abey padh le, padh le nhi to chutar sekna parega garam tawa pe')
            clearInterval(showVal)
        }
    }, x * 1000)

}

displaySentence(2, 6)