const express = require("express")
const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "lkr",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

router.post('/create-checkout-session', async (req, res) => {

    const line_items = req.body.cartItems.map((item) => {
        return {
            price_data: {
                currency: 'lkr',
                product_data: {
                    name: item.product.productName,
                images: [item.product.image],
                metadata: {
                    id: item.product._id
                }
                },
                unit_amount: item.product.price * 100,
            },
            quantity: item.quantity,
        }
    })

    const email = 'mathura@gmail.com'

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {allowed_countries: ['LK']},
        shipping_options: [
            {
            shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {amount: 0, currency: 'lkr'},
                display_name: 'Free shipping',
                delivery_estimate: {
                minimum: {unit: 'business_day', value: 5},
                maximum: {unit: 'business_day', value: 7},
                },
            },
            },
            {
            shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {amount: 1500, currency: 'lkr'},
                display_name: 'Next day air',
                delivery_estimate: {
                minimum: {unit: 'business_day', value: 1},
                maximum: {unit: 'business_day', value: 1},
                },
            },
            },
        ],
        phone_number_collection: {
            enabled: true
        },
        customer_email: email,
        line_items,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    // send the session id to the client
    res.send({ url: session.url });

    console.log(session)
});


module.exports = router;