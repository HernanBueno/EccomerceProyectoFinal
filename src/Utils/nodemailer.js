import nodemailer from "nodemailer"


const createTransporter = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "d4b905a0b4d9c7",
          pass: "b1811fbcdbad35"
        }
    });
    return transport
}

async function orderEmail(email, order){
    const transporter = createTransporter()
    const info = await transporter.sendMail({
        from: '"Respuesta Orden"<mailprueba@gmail.com>',
        to: `${email}`,
        subject: `Gracias por realizar la siguiente compra`,
        html:`<p>${order.products}</p><p>${order.amount}</p>`
    })
    
    return 
}
async function orderAdminEmail(order){
    const transporter = createTransporter()
    const info = await transporter.sendMail({
        from: '"Respuesta Orden"<admin@admin.com>',
        to: 'admin@admin.com',
        subject: `Se realizo una compra`,
        html:`<p>productos : ${order.products}</p><p>Total: ${order.amount}</p> <p>usuario: ${order.email}</p>`
    })
    
    return 
}

async function userEmail(user){
    const transporter = createTransporter()
    const info = await transporter.sendMail({
        from: '"Mail de Prueba"<mailprueba@gmail.com>',
        to: `${user.email}`,
        subject: `Gracias por registrarte ${user.name} ${user.lastname}`,
        html:`<p>usuario registrado correctamente</p>`
    })
    return 
}

export{
    orderEmail,
    orderAdminEmail,
    userEmail
}