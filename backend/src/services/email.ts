import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'DecoLive@gmail.com',
        pass: 'BancasDeco'
    }
});

export const sendEmail = (to: string, subject: string, text: string) => {
    const mailOptions = {
        from: 'DecoLive@gmail.com',
        to,
        subject,
        text
    };

    return transporter.sendMail(mailOptions);
};