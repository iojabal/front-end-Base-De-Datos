const url = "http://127.0.0.1:5000/"
//<tr><td>xx</td><td>xx</td><td>xx</td><td class="text-center"> xx</td></tr>
$(document).ready(function (){
    listar_proveedores();
    listar_productos();
    litar_ProductosTable();
    listar_proveedoresSelect();
    listar_usuarios();
    listarUsuarios();
    listarProductosSelect();
    listar_ventas();
});

async function listar_proveedores(){
    const resp = await fetch(url + "proveedor", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const contenido = await resp.json();
    file = "";
    option = "";
    for (let i of contenido){
        file += "<tr><td>" +i.nit +"</td><td>"+i.empresa+"</td><td>"+i.nombre + " " + i.ap_paterno+ " " + i.ap_materno +"</td><td class=\"text-center\">"+i.nro_cel+"</td></tr>"
    }
    document.getElementById("tbodyProviders").innerHTML = file;
}

async function listar_proveedoresSelect(){
    const resp = await fetch(url + "proveedor", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const contenido = await resp.json();
    option = "";
    for (let i of contenido){
        option += "<option value=\""+i.id_prov+"\">"+i.empresa+"</option>";
    }
    document.getElementById("selectEmpresas").innerHTML = option;
}

async function listarUsuarios(){
    const resp = await fetch(url + 'personal', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const cont = await resp.json()
    option = ""
    for(let i of cont){
        option += "<option value=\""+i.id_usuario+"\">"+i.nombre+" " + i.ap_paterno+"</option>";
    }
    document.querySelector("#selectUsuarios").innerHTML = option;
}

async function listarProductosSelect(){
    const resp = await fetch(url + "producto", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const contenido = await resp.json();
    option = "";
    for(let i of contenido){
        option += "<option value=\""+i.id_prod+"\">"+i.categoria+"</option>";
    }
    document.querySelector("#selectProducto").innerHTML = option
}



//<tr><td><p class="title">coca cola</p><p class="text">cantidad </p><p class="text">precio : 10</p></td><td class="td-actions text-right"><button type="button" rel="tooltip" title="" class="btn btn-link" data-original-title="Edit Task"><i class="tim-icons icon-pencil"></i></button></td></tr>

async function listar_productos(){
    const resp = await fetch(url + "inventario", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const contenido = await resp.json();
    let c = 0;
    let c1 = 0;
    //console.log(contenido);
    file = "";
    p = "";
    p2 = "";
    for(let i of contenido){
        c += i.producto.precio_venta * i.cantidad;
        c1 += i.total_egreso * i.cantidad;
        file += "<tr id=\""+i.id_inventario+"\""+" ><td><p class=\"title\">"+i.producto.categoria+"</p><p class=\"text\">Cantidad : "+i.cantidad+"</p><p class=\"text\">precio : "+i.producto.precio_venta+"</p></td><td class=\"td-actions text-right\"><button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\" data-toggle=\"modal\" data-target=\"#prueba\"  id=\"hola\"><i class=\"tim-icons icon-pencil\"></i></button></td></tr>"
        p = "<p class=\"text-left\"> Ingresos: " + c +" Bs</p>";
        p2 = "<p class=\"text-left\"> Egresos: " + c1 +" Bs</p>";
    }
    
    document.getElementById('tbodyProducts').innerHTML = file;
    document.getElementById('dvIngreso').innerHTML = p;
    document.getElementById("dvEgreso").innerHTML = p2;
}

async function litar_ProductosTable(){
    const resp = await fetch(url + "producto",{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    });

    const cont = await resp.json();
    file = "";
    for(let i of cont) {
        file += "<tr><td>" +i.cod_barras +"</td><td>"+i.empresa.empresa+"</td><td>"+i.categoria + "</td><td class=\"text-center\">"+i.precio_venta+"</td></tr>"
    }
    document.getElementById("tbodyProductstable").outerHTML = file;
}

async function listar_usuarios(){
    const resp = await fetch(url+"personal", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const cont = await resp.json();
    file = "";
    for(let i of cont){
        file += "<tr><td>" +i.nombre +"</td><td>"+i.ap_paterno+"</td><td>"+i.ap_materno +"</td><td class=\"text-center\">"+i.usuario+"</td></tr>"
    }
    document.getElementById("tbodyUsers").outerHTML = file;
}

async function listar_ventas(){
    const resp = await fetch(url+"ventas", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const con = await resp.json();
    file = "";
    for(let i of con){
        file += "<tr><td>" +i.fecha_registro +"</td><td>"+i.user.nombre+ " " + i.user.ap_paterno+"</td><td>"+i.nro_prod.categoria +"</td></tr>"
    }
    document.querySelector("#tbodyVentas").innerHTML = file;
}