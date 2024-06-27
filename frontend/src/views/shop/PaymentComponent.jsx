import useRazorpay  from 'react-razorpay';
import React, { useEffect, useCallback } from 'react';


function PaymentComponent () {  
  
  const [Razorpay, isLoaded] = useRazorpay();

    const handlePayment = useCallback(async () => {
      //const order = await createOrder(params);
  
      const options = {
        key: "rzp_live_7kpuENGPS4K2hG",
        amount: "3000",
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        order_id: "xyz-xxx-222",
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      const rzpay = new Razorpay(options);
      rzpay.open();
    }, [Razorpay]);
  
    useEffect(() => {
      if (isLoaded) {
        handlePayment();
      }
    }, [isLoaded, handlePayment])
  
    return (
      <div className="App">
        <button onClick={handlePayment} className="btn btn-primary btn-rounded w-100 mt-2" style={{ backgroundColor: "#635BFF" }}>Pay by Razor</button>
      </div>
    );
};

export default PaymentComponent;
