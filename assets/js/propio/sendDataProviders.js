$(document).ready(function () {
    $("#saveProviders").on("click", () => {
        sendProviders();
        location.reload();
    })
});


function sendProviders(){
    let nm = document.querySelector("#nm");
    let ap_p = document.querySelector("#ap_p");
    let ap_m = document.querySelector("#ap_m");
    let emp = document.querySelector("#emp");
    let nit = document.querySelector("#nit");
    let telf = document.querySelector("#telf");
    let xhr = new XMLHttpRequest();

    xhr.open("POST", url+"proveedor");
    
    data = JSON.stringify({
        'nombre': nm.value,
        'ap_paterno': ap_p.value,
        'ap_materno': ap_m.value,
        'empresa': emp.value,
        'nit': nit.value,
        'nro_cel': telf.value
    });

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if(xhr.status === 201 && xhr.readyState === 4){
          console.log(xhr.responseText);
        }
      }
    xhr.send(data);
}