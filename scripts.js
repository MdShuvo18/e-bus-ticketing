const sits = document.getElementsByClassName('sit')
for (const sit of sits) {
    sit.addEventListener('click', (e) => {
        e.target.classList.toggle('active')
    })
}