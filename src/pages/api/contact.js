import Mailgun from 'mailgun.js';
import formData from 'form-data';
require('dotenv').config();

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const data = {
            from: 'JK Portal Visitor <no-reply@jengakwako.bbsltd.co.ke>',
            to: 'customercare@bbsltd.co.ke',
            subject: 'Website Inquiry',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            await mg.messages.create(process.env.MAILGUN_DOMAIN, data);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Mailgun Error:', error);
            res.status(500).json({
                error: 'Error sending email'
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
