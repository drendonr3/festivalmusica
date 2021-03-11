function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i=1;i<=12;i++){
        const imagen = document.createElement('IMG');
        imagen.src = `built/img/thumb/${i}.webp`;
        imagen.dataset.imagenId=i;
        // Añadir funcion mostrar imagen
        imagen.onclick=mostrarImagen;
        const lista=document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){

    // Generar la imagen
    const body = document.querySelector('body');
    const imagen = document.createElement('IMG');
    const id = parseInt(e.target.dataset.imagenId);
    imagen.src = `built/img/grande/${id}.webp`;
    

    const overlay = document.createElement('DIV');
    overlay.classList.add('overlay')
    overlay.appendChild(imagen);
    overlay.onclick = () =>{
        overlay.remove();
        body.classList.remove('fijar-body')
    }
    //Boton para cerrar
    const cerrarImagen=document.createElement('P');
    cerrarImagen.textContent='X';
    cerrarImagen.classList.add('btn-cerrar')
    cerrarImagen.onclick = () =>{
        overlay.remove();
        body.classList.remove('fijar-body')
    }

    overlay.appendChild(cerrarImagen);
    //Mostrar en html
    body.appendChild(overlay);   
    body.classList.add('fijar-body')
}