$(document).ready(function() { /* Quando o doc HTML estiver funcionando, essa função será ativa. */

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () { /* sombra no header e transição rapida de menu para prato e animação deslizando/surgindo */
        const header = $('header'); /* Atribui variavel para o header CSS */
        const scrollPosition = $(window).scrollTop() - header.outerHeight(); /* Cria variavel q que representa o scroll atual */
       
        let activeSectionIndex = 0; 

        if(scrollPosition <= 0) { /* Caso o scroll esteja no ponto inicial = sem sombra na faixada header */
            header.css('box-shadow', 'none');
        } else { /* Caso contrário, irá gerar sombra para desdecar faixada "sticky" */
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)'); /* Repare nos parenteses(LOL) */
        }

        sections.each(function(i) {
            const section = $(this); /* variavel de scroll atual */
            const sectionTop = section.offset().top - 96;/* variavel de scroll abaixo */
            const sectionBottom = sectionTop + section.outerHeight(); /* variavel de scroll acima */

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            } 
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#lice_kid', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.conjunto-img', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

   


     /*        // Selecionando elementos
    const expand = document.getElementById('expand');
    const modelo = document.getElementById('modelo');
    const closeBtn = document.getElementById('close-btn');

    // Abrir img ao clicar na miniatura
    modelo.addEventListener('click', () => {
        expand.style.display = 'flex'; // Exibe a img
    });

    // Fechar img ao clicar no botão de fechar
    closeBtn.addEventListener('click', () => {
        expand.style.display = 'none'; // Oculta a img
    });

    // Fechar img ao clicar fora da imagem
    expand.addEventListener('click', (e) => {
        if (e.target === expand) {
            expand.style.display = 'none';
        }) */

     

    
    
});

function expandir (img) { /* FUNÇÃO PARA EXPANDIR IMG AO CLICAR */

    
 const expand = document.querySelector('.expand'); // Selecionando elementos
 const closeBtn = document.querySelector('.close-btn');
 const IMG_expandida = document.querySelector('#IMG_expandida')

 IMG_expandida.src = img.src
 

 // Abrir imagem ampliada ao clicar na miniatura
    expand.style.display = 'flex';
    

  // Verifica se o botão de fechar existe
    closeBtn.addEventListener('click', () => {
        expand.style.display = 'none'; // Oculta a imagem ampliada
    });
 


    expand.addEventListener('click', (e) => {
        if (e.target === expand) {
            expand.style.display = 'none'; // Oculta a imagem se clicar fora
        }
    });
 

}
