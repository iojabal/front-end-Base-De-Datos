$(document).ready(function () {
    $("#saveVentas").on("click", () => {
        sendDataVentas();
    })
});

function sendDataVentas(){
    let fecha = document.querySelector('#fc');
    let user = document.querySelector('#selectUsuarios');
    let prd = document.querySelector('#selectProducto');

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url+"ventas");

    data = JSON.stringify({
        'fecha_registro': fecha.value,
        'user': user.value,
        'nro_prod': prd.value
    });

    console.log(data);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if(xhr.status === 201 && xhr.readyState === 4){
          console.log(xhr.responseText);
        }
      }
    xhr.send(data);

}