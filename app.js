const nodemailer = require('nodemailer');

const remetente = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // definir como false para usar o TLS
    auth: {
        user: 'seuEmail',
        pass: 'suaSenha'
    }
});

const emailASerEnviado = {
    from: 'quemEnvia@email.com',
    to: 'quemRecebe@email.com',
    subject: 'Enviando Email com Node.js',
    text: 'Estou te enviando este email com node.js',
    attachments: [
        {
            filename: 'documento.txt',
            content: 'Conteúdo do anexo aqui.'
        },
    ]
};

remetente.sendMail(emailASerEnviado, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado com sucesso.');
    }
});