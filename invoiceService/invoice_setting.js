const settings = (infoCliente, infoProductos) =>{
    let date_time = new Date();
    // adjust 0 before single digit date
    let date = ("0" + date_time.getDate()).slice(-2);
    // get current month
    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    // get current year
    let year = date_time.getFullYear();
    // get current hours
    let hours = date_time.getHours();
    // get current minutes
    let minutes = date_time.getMinutes();
    // get current seconds
    let seconds = date_time.getSeconds();

    let total = 0;
    infoProductos.forEach(element => {
        total += element.total;
    });

    const currency = {settings: {locale: 'es-CO', currency: 'COP'}};
    
    var data = {
        //"documentTitle": "RECEIPT", //Defaults to INVOICE
        
        "currency": currency,
        "taxNotation": "vat", //or gst
        "marginTop": 25,
        "marginRight": 25,
        "marginLeft": 25,
        "marginBottom": 25,
        "logo": "https://www.easyinvoice.cloud/img/logo.png", //or base64
        //"logoExtension": "png", //only when logo is base64
        "sender": {
            "company": "MiDulceOnline",
            "address": "Calle Falsa 123, Bogota, Colombia",
            "zip": infoCliente.telefono,
            //"city": "",
            //"country": "",
            //"custom1": ,
            //"custom2": "custom value 2",
            //"custom3": "custom value 3"
        },
        "client": {
            "company": `${infoCliente.nombre} ${infoCliente.apellido}`,
            "address": `${infoCliente.direccion}, ${infoCliente.ciudad}, ${infoCliente.pais}`,
            "zip": infoCliente.telefono,
            "city": "",
            "country": infoCliente.email
            //"custom1": "custom value 1",
            //"custom2": "custom value 2",
            //"custom3": "custom value 3"
        },

        "information": {
            // Invoice number
            "number": `INV-${infoCliente.invoiceId}`,
            // Invoice data
            "date": year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds,
            // Invoice due date
            "due-date": ""
        },
        "products": infoProductos,
        "bottom-notice": "Realizar el pago en los proximos 15 dias habiles.",

        "translate": {
            "invoice": "FACTURACION",  // Default to 'INVOICE'
            "number": "N° Factura", // Defaults to 'Number'
            "date": "Fecha", // Default to 'Date'
            "due-date": "Hora", // Defaults to 'Due Date'
            // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
            "products": "Productos", // Defaults to 'Products'
            "quantity": "Cantidad", // Default to 'Quantity'
            "price": "Precio", // Defaults to 'Price'
            // "product-total": "Totaal", // Defaults to 'Total'
            // "total": "Totaal" // Defaults to 'Total'
        },
        "settings":{
            "orientation": "portrait",
        }
    };

    return data;
}

module.exports = settings;