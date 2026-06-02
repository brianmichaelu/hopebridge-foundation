import { NextResponse } from "next/server";

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

    if (!donorEmail.includes("@")) {
      return NextResponse.json(
        { error: "Valid donor email is required" },
        { status: 400 }
      );
    }

    /*
      SELCOM INTEGRATION WILL GO HERE LATER.

      Future live flow:
      1. Create Selcom order/payment request
      2. Send amount, donor details, cause, callback URL, and redirect URL
      3. Generate required Selcom authentication headers/signature
      4. Receive Selcom payment/checkout URL or payment instructions
      5. Redirect donor to Selcom checkout/payment page
      6. Confirm payment using callback/webhook or transaction status query

      Required later:
      - SELCOM_API_KEY
      - SELCOM_API_SECRET
      - SELCOM_VENDOR_ID / merchant details
      - NEXT_PUBLIC_SITE_URL
    */

    const query = new URLSearchParams({
      provider: "selcom",
      status: "pending",
      cause,
      amount: String(amount),
      type: donationType,
    });

    return NextResponse.json({
      checkoutUrl: `/thank-you?${query.toString()}`,
    });
  } catch (error) {
    console.error("Payment creation error:", error);

    return NextResponse.json(
      { error: "Unable to start payment process" },
      { status: 500 }
    );
  }
}
