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

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
    
});