$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

    });
    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toogle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Human Resources", "Recruiter IT"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true
    });

         
    const $form =document.querySelector('#form')

    $form.addEventListener('submit', handleSubmit)

    async function handleSubmit(event){
        event.preventDefault()
        const form= new FormData(this)
        const response= await fetch(this.action, {
                method: this.method,
                body: form, 
                headers: {
                    'Accept': 'application/json'
            }
        })
            if(response.ok){
                this.reset()
                alert('Your message has been sent successfully. Thanks for contacting me!')
        }
    }


});

