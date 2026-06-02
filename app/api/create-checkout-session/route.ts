import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

if (!stripeSecretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

const stripe = new Stripe(stripeSecretKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const amount = Number(body.amount);
    const cause = String(body.cause || "General Fund");
    const donationType = String(body.donationType || "once");
    const donorEmail = String(body.donor?.email || "");

    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: "Invalid donation amount" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: donorEmail || undefined,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(amount * 100),
            product_data: {
              name: `${cause} Donation`,
              description:
                donationType === "monthly"
                  ? "Monthly donation test checkout"
                  : "One-time donation test checkout",
            },
          },
        },
      ],
      metadata: {
        cause,
        donationType,
        donorName: String(body.donor?.fullName || ""),
        donorPhone: String(body.donor?.phone || ""),
        donorCountry: String(body.donor?.country || ""),
      },
      success_url: `${siteUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/donate`,
    });

    return NextResponse.json({ checkoutUrl: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}
