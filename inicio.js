   var form = document.getElementById('formularioCliente');
    var cerveja = document.getElementById('cerveja');
    var refrigerante = document.getElementById('refrigerante');
    var agua = document.getElementById('agua');
    var sanduiche = document.getElementById('sanduiche');
    var mesa = document.getElementById('mesa');
    var pedidosContainer = document.getElementById('pedidosContainer');
    var i=1;
    
form.addEventListener("submit", function(e) {
    e.preventDefault();

    var pedido='';

    if (cerveja.checked) pedido += 'Cerveja ';
    if (refrigerante.checked) pedido += 'Refrigerante ';
    if (agua.checked) pedido += 'Água ';
    if (sanduiche.checked) pedido += 'Sanduíche ';

    var mesaSelecionada = mesa.selectedOptions[0].text;
    
    var pedidoHTML = '<p>Pedido '+i+': ' + pedido + ' | Mesa: ' + mesaSelecionada + '</p>';
    
    pedidosContainer.innerHTML += pedidoHTML;
    
    i +=1;
    
    form.reset();
});