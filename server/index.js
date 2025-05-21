import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import {MercadoPagoConfig, Preference } from "mercadopago";

const token = process.env.ACCESS_TOKEN;
const client = new MercadoPagoConfig({
    accessToken: token,
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: ["https://expofitness-ns.web.app/"],
}));
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("funciono :)))");
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            //auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({body});
        res.json({
            id: result.id,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia",
        });
    }
});

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});

