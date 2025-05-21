
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('roll', window.scrollY > 0)
});

fetch('menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu').innerHTML = data;
    })
    .catch(error => console.error('Erro ao Carregar o menu', error));

    