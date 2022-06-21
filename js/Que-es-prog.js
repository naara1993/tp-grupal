
const buttonFooter =document.getElementById('button-footer');
let salir=document.getElementById('salir');
let boolean=false;
salir.style.display="none";


/**
 * asociado al boton de modal de ingreso.
 * permite guardar el nombre del ursuario en el local storage y llama a la funcion 
 * validad login
 * */
buttonFooter.addEventListener('click',function(e) {
    let nombreUsuario = document.getElementById('NombreUsuario').value;
    localStorage.setItem('NombreUsuario', nombreUsuario);
    validarLogin(nombreUsuario);
})



/**
 * funcion que ingresa el nombre de usuario 
 * */
function validarLogin(nombreUsuario) {
    let usuario=localStorage.getItem('NombreUsuario');
     if(nombreUsuario == usuario && nombreUsuario!="") {
         alert('You are loged in.');
          boolean=true;
         }
       else {
         alert('ERROR.');
        boolean =false;
     }
     if(boolean){
         cambiar(boolean);
     }
     return boolean;
 }
/**
 * funcion que permite ocultar el ingreso, para que pueda salir 
 * */
 function cambiar(boolean){
    let login = document.getElementById('login');
    if(boolean){
        login.style.display='none';
        salir.style.display='block';
    }
 }
/**
 * esta asociado al boton de salir con el evento onclick
 * permite modificar el estado para que salga y luego pueda volver a ingresar con el nombre de usuario
 *  
 * */
 function salirLogin(boolean){
    let login = document.getElementById('login');
    boolean =false;
    if(boolean==false){
    salir.style.display='none';
    login.style.display='block';
}
 }

