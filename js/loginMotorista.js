
function login(){
    $.ajax({
        url:'../../Backend/api/login-motorista.php',
        method:'post',
        data:JSON.stringify({
           correo:document.getElementById('correo').value,
           password:document.getElementById('password').value

        }),
        dataType:'json',
        success:function(res){
            if (res.codigoResultado==1) {
                window.location.href="inicio2.html"
            }else{
                document.getElementById('error').style.display='block';
                document.getElementById('error').innerHTML=res.mensaje;
            }
            console.log(res)
        },
            error:function(error){
                console.error(error);
            }
    })
}


    


function guardar(){
    let cantidad=null;
    let id=null;
    

    $.ajax({
        url:'../../../Backend/api/motoristas.php',
        method:'get',
        dataType:'json',
        success:function(res){
                console.log(res)
                
                for (let i = 0; i < res.length; i++) { //este es pa el indice
                        cantidad=+1;    
                }
                id=cantidad+1;

                
    $.ajax({
        url:'../../../Backend/api/motoristas.php',
        method:'post',
        data:JSON.stringify({
            idMotorista:id,
            nombreMotorista:document.getElementById('nombre').value,
            apellidoMotorista:document.getElementById('apellido').value,
            correo:document.getElementById('correo').value,
            contrasena:document.getElementById('password').value,
            

        }),
        dataType:'json',
        success:function(res){
                console.log("guardado con exito");

            if(res.codigoResultado==1){
                window.location.href="terminarRegistro.html"
            }
            console.log(res)
        },
        error:function(error){
            console.error(error);
        }
    });

            window.location.href="terminarRegistro.html"
        
        },
        
        error:function(error){
            console.error(error);
            
        }
    });

}