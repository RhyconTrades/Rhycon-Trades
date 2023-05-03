import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function CheckOut({ cart , totalPrice }) {
  const products = []
  cart.map((item) => products.push(item.nameInUrl))
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "Afrn2OcrmKWA41_LP02iN1Nds2y7wKdgYKfUtjICe3wpnmERwn1gSam6MdfK-RlN9LSUFbW63JUios8G",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalPrice.toFixed(2).toString() ,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name} and he baught ${products.map((item) => item)}`);
          });
        }}
        />
    </PayPalScriptProvider>
  );
}

export default CheckOut;
