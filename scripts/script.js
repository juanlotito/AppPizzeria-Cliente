const MESSAGE = "Hola! Recibimos correctamente tu pedido y ya estamos preparándolo. Mientras, te envío el link de mercadopago para que puedas abonar: ";

class Data {
    telefono;
    monto;
}

var data1 = new Data;
data1.telefono='5491165951202';
data1.monto=500;

var data2 = new Data;
data2.telefono='5491149140571';
data2.monto=500;


let data = new Array();
data.push(data1);
data.push(data2);






function createTable () {

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('body').appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Telefono ";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Monto";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Company";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);

    
    data.forEach(item => {
        let input = document.createElement('input')
        let button = document.createElement('button')
        button.onclick = function() {
            abrirWhatsApp(item.telefono, input.value)
        }

        button.innerHTML = "Enviar"
        input.placeholder = "Ingresá el link de mercadopago"
        
        const tr = tbody.insertRow();
        tr.insertCell().innerText = item.telefono
        tr.insertCell().innerText = item.monto
        tr.appendChild(input)
        tr.appendChild(button)
    })
    
}



function abrirWhatsApp(telefono, mercadopago) {
    window.open("https://api.whatsapp.com/send/?phone="+telefono+"&text="+MESSAGE+mercadopago+"&app_absent=0", '_blank');
    
}