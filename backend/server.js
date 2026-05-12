import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔐 ROTA SEGURA DE ENVIO DE EMAIL
app.post('/send-email', async(req, res) => {
    try {
        const { to_email, message } = req.body;

        if (!to_email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Dados incompletos'
            });
        }

        const response = await axios.post(
            'https://api.emailjs.com/api/v1.0/email/send', {
                service_id: process.env.EMAILJS_SERVICE_ID,
                template_id: process.env.EMAILJS_TEMPLATE_ID,
                user_id: process.env.EMAILJS_USER_ID,
                accessToken: process.env.EMAILJS_API_KEY,
                template_params: {
                    to_email,
                    message
                }
            }
        );

        return res.status(200).json({
            success: true,
            message: 'Email enviado com sucesso 🔐'
        });

    } catch (error) {
        console.error('Erro:', error.response?.data || error.message);
        return res.status(500).json({
            success: false,
            error: 'Erro ao enviar email'
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Backend rodando em http://localhost:${process.env.PORT}`);
});

app.get('/', (req, res) => {
    res.send('Backend funcionando');
});