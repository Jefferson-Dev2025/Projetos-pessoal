const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".wrapper i:first-child");
const nextBtn = document.querySelector(".wrapper i:last-child");

const scrollAmount = carousel.clientWidth / 2; // Move o equivalente a uma imagem

const updateButtons = () => {
    prevBtn.style.display = carousel.scrollLeft === 0 ? "none" : "block";
    nextBtn.style.display = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth ? "none" : "block";
};

// Atualiza os botões no carregamento
updateButtons();

nextBtn.addEventListener("click", () => {
    carousel.scrollLeft += scrollAmount;
    setTimeout(updateButtons, 300); // Pequeno atraso para garantir atualização correta
});

prevBtn.addEventListener("click", () => {
    carousel.scrollLeft -= scrollAmount;
    setTimeout(updateButtons, 300);
});

// Adiciona um evento para atualizar os botões quando o usuário rolar manualmente
carousel.addEventListener("scroll", updateButtons);



jQuery(document).ready(function ($){

    $('.slider-img').on('click', function(){
        $('.slider-img').removeClass('active');
        $(this).addClass('active');
    })
});
