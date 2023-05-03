import React, { useEffect } from "react";

function CheckOut() {
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let paypalRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AYS0zpfAKnRhBCVUgV-wj2h6jFcUGhjSUwIajG7QYkpKpaKCUNzISs0vanLuslgJF26YC0T7_xV0msVD"
    script.addEventListener("load" , () => setLoaded(true))
    document.body.appendChild(script)

    if(loaded){
        // setTimeout(() => {
        //     window.paypal.Buttons({
        //         createOrder:
        //     }).render(paypalRef)
        // })
    }
  });

  return <div ref={(v) => (paypalRef = v)} />;
}

export default CheckOut;
