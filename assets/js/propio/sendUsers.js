$(document).ready(function () {
    $("#saveUsuarios").on("click", () => {
        sendData();
        location.reload();
    });
    $("#deleteUser").on("click", () => {
        deleteUser();
        location.reload();
    })
});

function sendData(){
    let ur = document.querySelector("#usr")
    let pass = document.querySelector("#paswd")
    let nom = document.querySelector("#nm")
    let ap_p = document.querySelector("#ap_p")
    let ap_m = document.querySelector("#ap_m")

    let xhr = new XMLHttpRequest();
    data = JSON.stringify({
        'nombre': nom.value,
        'ap_paterno': ap_p.value,
        'ap_materno': ap_m.value,
        "usuario": ur.value,
        'passwd': pass.value
    })
    xhr.open('POST', url+'personal')
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if(xhr.status === 201 && xhr.readyState === 4){
          console.log(xhr.responseText);
        }
      }
    xhr.send(data);
}

function deleteUser(){
    let dlt = document.querySelector("#selectUsuarios");
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", url+"personal/"+dlt.value);
    xhr.send();
}