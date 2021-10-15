// function consultar() {

//     $.ajax(
//         {
//             url: 'https://g2909827fd93d2f-bddisfraces.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
//             type: 'GET',
//             dataType: 'json',
//             success: function (json) {
//                 $("#idDivConsulta").empty();
//                 for (i = 0; i < json.items.length; i++) {
//                     $("#idDivConsulta").append(json.items[i].id + " " + json.items[i].brand + " " + json.items[i].model + " " + json.items[i].category_id + " " + json.items[i].name + " ");
//                 }
//                 console.log(json)
//             },
//             error: function (xhr, status) {
//                 console.log(xhr)
//             }

//         }

//     );

// }

function consultarDisfraces() {

    $.ajax(
        {
            url: 'https://g2909827fd93d2f-bddisfraces.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
            type: 'GET',
            dataType: 'json',
            success: function (json) {

                $("#idDivConsulta").empty();
                $("#idDivConsulta").append("<table>");
                $("#idDivConsulta").append("<caption>***LISTA DE DISFRACES***</caption>");
                $("#idDivConsulta").append("<tr><th>Identificación</th><th>Marca</th><th>Modelo</th><th>Categoría</th><th>Nombre</th></tr>");

                for (i = 0; i < json.items.length; i++) {
                    $("#idDivConsulta").append("<tr>");
                    $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                    $("#idDivConsulta").append("<td>" + json.items[i].brand + "</td>");
                    $("#idDivConsulta").append("<td>" + json.items[i].model + "</td>");
                    $("#idDivConsulta").append("<td>" + json.items[i].category_id + "</td>");
                    $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                    $("#idDivConsulta").append('<td><button onclick="obtenerDisfrazEspecifico(' + json.items[i].id + ')">Cargar</button></td>');
                    $("#idDivConsulta").append("</tr>");
                }
                $("#idDivConsulta").append("</table>");


            },
            error: function (xhr, status) {
                console.log(xhr)
            }
        }
    );
}

function ingresarDisfraz() {
    var disfraz = {
        id: $("#idDisfraz").val(),
        brand: $("#marca").val(),
        model: $("#modelo").val(),
        category_id: $("#categoria").val(),
        name: $("#nombre").val(),
    }

    $.ajax({

        dataType: 'json',
        data: disfraz,
        url: 'https://g2909827fd93d2f-bddisfraces.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'POST',
        success: function (response) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    })
}

function eliminarDisfraz() {

    var disfraz;
    
    disfraz= { id:$("#idDisfraz").val() }
        
    var datosEnvio = JSON.stringify(disfraz);

    $.ajax(
        {
            url: 'https://g2909827fd93d2f-bddisfraces.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
            type: 'DELETE',
            data: datosEnvio,
            contentType: 'application/json',

            success: function (response) {
                console.log(response);

            },
            error: function (xhr, status) {
                console.log(xhr);

            }
        }
    );








}

function obtenerDisfrazEspecifico(idItem) {
    $.ajax({
        dataType: 'json',
        url: "https://g2909827fd93d2f-bddisfraces.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume/" + idItem,
        type: 'GET',
        success: function (response) {

            var item = response.items[0];

            $("#idDisfraz").val(item.id);
            $("#marca").val(item.brand);
            $("#modelo").val(item.model);
            $("#categoria").val(item.category_id);
            $("#nombre").val(item.name);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    }
    );
}

function actualizarDisfraz() {

    var disfraz = {
        id: $("#idDisfraz").val(),
        brand: $("#marca").val(),
        model: $("#modelo").val(),
        category_id: $("#categoria").val(),
        name: $("#nombre").val(),
    }

    var datoEnviar = JSON.stringify(disfraz);

    $.ajax({
        dataType: 'json',
        data: datoEnviar,
        contentType: 'application/json',
        url: "https://g2909827fd93d2f-bddisfraces.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume",
        type: 'PUT',

        success: function (response) {
            $("#idDivConsulta").empty();
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}


// +++FUNCIONES DE USUARIO++++

function registrarUsuario() {
    var cliente = {
        id: $("#idCliente").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    }

    $.ajax({

        dataType: 'json',
        data: cliente,
        url: 'https://g2909827fd93d2f-bddisfraces.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        success: function (response) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    })
}

function consultarCliente() {

    $.ajax(
        {
            url: 'https://g2909827fd93d2f-bddisfraces.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
            type: 'GET',
            dataType: 'json',
            success: function (json) {

                $("#idDivConsulta").empty();
                $("#idDivConsulta").append("<table>");
                $("#idDivConsulta").append("<caption>***LISTA DE CLIENTES***</caption>");
                $("#idDivConsulta").append("<tr><th>Id Cliente</th><th>Nombre</th><th>Email</th><th>Edad</th></tr>");

                for (i = 0; i < json.items.length; i++) {
                    $("#idDivConsulta").append("<tr>");
                    $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                    $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                    $("#idDivConsulta").append("<td>" + json.items[i].email + "</td>");
                    $("#idDivConsulta").append("<td>" + json.items[i].age + "</td>");
                    $("#idDivConsulta").append("</tr>");
                }
                $("#idDivConsulta").append("</table>");

                console.log(json)
            },
            error: function (xhr, status) {
                console.log(xhr)
            }
        }
    );
}





// +++FUNCIONES DE MENSAJES++++

function enviarMensaje() {
    var mensaje = {
        id: $("#idCliente").val(),
        messagetext: $("#mensaje").val(),
    }

    $.ajax({

        dataType: 'json',
        data: mensaje,
        url: 'https://g2909827fd93d2f-bddisfraces.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'POST',
        success: function (response) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    })
}

function consultarMensajes() {

    $.ajax(
        {
            url: 'https://g2909827fd93d2f-bddisfraces.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
            type: 'GET',
            dataType: 'json',
            success: function (json) {

                $("#idDivConsulta").empty();
                $("#idDivConsulta").append("<table>");
                $("#idDivConsulta").append("<caption>***LISTA DE MENSAJES***</caption>");
                $("#idDivConsulta").append("<tr><th>Id Cliente</th><th>Mensaje</th></tr>");

                for (i = 0; i < json.items.length; i++) {
                    $("#idDivConsulta").append("<tr>");
                    $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                    $("#idDivConsulta").append("<td>" + json.items[i].messagetext + "</td>");
                    $("#idDivConsulta").append("</tr>");
                }
                $("#idDivConsulta").append("</table>");

                console.log(json)
            },
            error: function (xhr, status) {
                console.log(xhr)
            }
        }
    );



}
