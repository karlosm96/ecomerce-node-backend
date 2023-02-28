const express = require('express');
const router = express.Router();
const transporter = require('./nodeMailer.js');

router.post('/send', (req, res) =>{
    const { name, email, subject, message } = req.body;

    const manageEmail = async () =>{
        try{
            let info = await transporter.sendMail({
                from:`${name} ${email}`,
                to: process.env.EMAIL,
                subject: subject,
                html: `<p>${message}</p>`
            })
            res.send({ message: 'Successful, Email was sending' })
            
        } catch(err){
            res.status(500).send({ message: 'Error in sending Email' })
        }
        
    }

    manageEmail().catch(err =>{ console.log(err) });
})

module.exports = router;