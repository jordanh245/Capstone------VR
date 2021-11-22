

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { CheckoutButtonStyle} from "../styled-components/CheckStyle"

const ProductDisplay = () => (
  <section>

    <form action="http://localhost:3000/create-checkout-session" method="POST">
      <CheckoutButtonStyle type="submit">
        Checkout
      </CheckoutButtonStyle>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");
  const history = useHistory();
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
      history.push("/home");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}