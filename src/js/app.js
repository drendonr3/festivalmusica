document.addEventListener('DOMContentLoaded',()=>{
    crearGaleria();
    scrollNav();
    navegacionFija();
});

function navegacionFija(){
    //Elemento Observador
    const barra=document.querySelector('.header');

    const observer = new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });
    observer.observe(document.querySelector('.sobre-festival'));
};


function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal')
    enlaces.forEach( enlace=>{
        enlace.addEventListener('click',e=>{
            e.preventDefault();
            console.log(e.target.attributes.href.value)
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior:'smooth'
            });
        })
    })

}