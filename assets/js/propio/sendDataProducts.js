$(document).ready(function () {
    $("#saveData").on("click", function () {
        sendProducts();
        location.reload();
    });
});

function sendProducts(){
    let cod = document.querySelector('#codBr');
    let nm = document.querySelector('#nm');
    let pr = document.querySelector('#pr');
    let emp = document.querySelector('#selectEmpresas')
    let xhr = new XMLHttpRequest()

    data = JSON.stringify({
        'cod_barras': cod.value,
        'categoria': nm.value,
        'precio_venta': pr.value,
        'empresa': emp.value
    });
    
    xhr.open("POST", url+"producto");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if(xhr.status === 201 && xhr.readyState === 4){
          console.log(xhr.responseText);
        }
      }
    xhr.send(data);
}