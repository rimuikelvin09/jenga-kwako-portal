import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
            logger: true, // turn off after debugging
            debug: true,
            connectionTimeout: 30000, // 30 seconds
            greetingTimeout: 30000,
        });

        try {
            await transporter.sendMail({
                from: `"Website Contact" <${process.env.EMAIL_USER}>`, // sender address
                to: 'customercare@bbsltd.co.ke', // list of receivers
                subject: 'Website Inquiry',
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
