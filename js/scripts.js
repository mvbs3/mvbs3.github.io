/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Funcionalidade para o formulário
        const contactForm = document.getElementById("contactForm");
        contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário
        const responseMessage = document.getElementById("responseMessage");
        
        // Captura os dados do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        template_params= {
            from_name: name,
            email_id: email,
            message: message,
        }
        for (let key in template_params){
            if(!template_params[key]){
                responseMessage.textContent = 'Preencha todos os parâmetros por favor';
                responseMessage.className = 'response-message error';
                return
            }
        }

        console.log("Dados capturados:");
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Mensagem:", message);
        console.log("eu estou tentando enviar")
        

        var data = {
            service_id: 'service_56k39mm',
            template_id:'template_6evu12d',
            user_id:  'LR-SDg1chiAIR8TkC',
            template_params: template_params
        };

         
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {

            contactForm.reset();
            const submitButton = contactForm.querySelector("button[type='submit']");
            submitButton.disabled = true;
            responseMessage.textContent = 'Email enviado com sucesso!';
            responseMessage.className = 'response-message success';
            //alert('Your mail is sent!');
        }).fail(function(error) {
            responseMessage.textContent = 'Erro ao enviar email. Por favor, tente novamente.';
            responseMessage.className = 'response-message error';
            //alert('Oops... ' + JSON.stringify(error));
        });


    });

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

