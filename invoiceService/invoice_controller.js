const express = require('express');
const router = express.Router();
const fs = require('fs');
const easyInvoice = require('easyinvoice');
const settings = require('./invoice_setting.js');

router.get('/downloadPdf/:fileName', (req, res) =>{
    const docName = req.params.fileName;

    try{
        const path = `client_invoices/${docName}`
        if (fs.existsSync(path)) {
            res.contentType("application/pdf");
            fs.createReadStream(path).pipe(res)
        } else {
            res.status(500)
            console.log('File not found')
            res.send('File not found')
        }

    } catch(err){
        res.send({message: "No se ha encontrado el documento"});
    }
})

router.post('/pdfDocument', (req, res) =>{
    const { infoCliente, infoProductos } = req.body;

    const data = settings(infoCliente, infoProductos)

    const generateDocument = async () =>{
        try{
            easyInvoice.createInvoice(data, async function (result) {
                await fs.writeFileSync(`client_invoices/INV_${infoCliente.invoiceId}.pdf`, result.pdf, 'base64');
            });
            res.send({ pdf:`INV_${infoCliente.invoiceId}.pdf` ,message: 'Successful, PDF document was generate' })
            
        } catch(err){
            res.status(500).send({ message: 'Error, PDF document was not generated' })
        }
    }

    generateDocument();
    
});

module.exports = router;