const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("loginModal");
const closeBtn = document.getElementsByClassName("close")[0];
const aside = document.getElementById('aside')
const menu = document.getElementById('menu')

loginBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const beliButton = document.querySelectorAll('.beliButton')

beliButton.forEach(function(beliButton) {
    beliButton.addEventListener('click', () => {
        alert('Maaf fitur ini belum tersedia')
    })
})

menu.addEventListener('click', () => {
    menu.classList.toggle('change')
    aside.classList.toggle('aside2')
})


