const express = require('express')
const app = express()
require('dotenv').config()

const cors = require('cors')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


app.use(express.json())
app.use(express.static('public'))
app.use(cors({
     origin: 'https://redoxx-store-xgtl.vercel.app/',
     methods: ['POST'], // Specify the allowed methods (in this case, only POST)
}));

app.post('/checkout', async (req, res) => {
     try{
          const session = await stripe.checkout.sessions.create({
               billing_address_collection: 'required',
               shipping_options: [
                 { shipping_rate: 'shr_1OHdH3FmkNj2NFr7UgGpocA0' },
               ],
               payment_method_types: ["card"],
               mode: 'payment',
               line_items: req.body.items.map(item => {
                    const img = item.image.asset._ref;
                    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/yxhb7if6/production/').replace(/-(png|jpg|jpeg|webp)/i, '.$1')
                    return {
                         price_data: {
                              currency: "usd",
                              product_data: {
                                   name: item.name,
                                   images: [newImage],
                              },
                              unit_amount: (item.price) * 100
                         },
                         quantity: item.quantity
                    }
               }),
               success_url: 'https://redoxx-store-xgtl.vercel.app/success',
               cancel_url: 'https://redoxx-store-xgtl.vercel.app/cancel'
          })

          res.send(JSON.stringify({
               url: session.url
           }));
     }catch(error){
          res.status(500).json({error: error.message})
     }
})