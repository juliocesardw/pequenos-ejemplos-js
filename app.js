
const btnAdd = document.querySelector('.btnAdd');

function _createHabilidad(name,nivel,color){

    const div = document.createElement('div');
    div.setAttribute('class','h-iten');
    div.innerHTML='<p>'+name+'</p><div class="barra-full"><div class="c-barra" style="width: '+nivel+'%;background: '+color+';"><span>'+nivel+'%</span></div></div>';

    return div;

}

btnAdd.addEventListener('click',()=>{

    const formulario = document.querySelector('.formulario');
    const contenedor= document.querySelector('.h-content');

    var name = formulario.habilidad,
        nivel = formulario.nivel,
        color = formulario.color;

    if(name.value !=="" && nivel.value !=="" && color.value !==""){
        const habi =_createHabilidad(name.value,nivel.value,color.value);

        contenedor.insertBefore(habi, contenedor.firstElementChild);

        name.value="";
        nivel.value="";
        color.value="#000000";
        
    }else{
        name.focus();
    }
    
    

})

