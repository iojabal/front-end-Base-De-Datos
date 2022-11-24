$(document).ready(function () {
    $("#saveVentas").on("click", () => {
        sendDataVentas();
        location.reload()
    })
    loadVentas();
    $("#deleteVenta").on("click", () => {
        deleteData();
        location.reload();
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

async function loadVentas(){
    const resp = await fetch(url + "ventas", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const cont = await resp.json();
    option = "";
    for(let i of cont){
        option += "<option value=\""+i.id_venta+"\">"+i.fecha_registro+"</option>";
    }

    document.querySelector("#selectVentas").innerHTML = option
}

function deleteData(){
    let dato = document.querySelector("#selectVentas");
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", url+"ventas/"+ dato.value);
    xhr.send();
}