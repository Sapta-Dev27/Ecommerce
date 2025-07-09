import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import Stripe from 'stripe';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/api/checkout', async (req, res) => {
  const { cartItems } = req.body;
  try {
    const line_items = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          description: item.description,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));


    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: "http://localhost:5173/payments/success",
      cancel_url: "http://localhost:5173/payments/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Checkout error:", error);
    res.status(500).json({ error: "Something went wrong with Stripe Checkout" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
