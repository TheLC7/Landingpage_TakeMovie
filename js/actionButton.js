document.addEventListener('DOMContentLoaded', function () {
    // Ajusta para garantir que o site comece no topo ao recarregar
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const whatsappButton = document.getElementById('whatsappButton');

    // Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
                whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
                whatsappButton.style.display = 'none';
            }, 500);
        }
    }

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    // Ação ao clicar no botão do WhatsApp
    whatsappButton.addEventListener('click', function () {
        window.location.href = 'https://wa.me/5565996080591?text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20planos%20de%20marketing%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es!';
    });
});
