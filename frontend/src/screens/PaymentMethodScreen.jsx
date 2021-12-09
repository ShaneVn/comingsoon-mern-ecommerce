import React, { useState, useEffect } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartAction";

export default function PaymentMethodScreen() {
    const cart = useSelector(state=> state.cart)
    const {shippingAddres} = cart 
    const[paymentMethod, setPaymentMethod ] = useState('Paypal')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const submitHandler = (e) =>{
            e.preventDefault()
            dispatch(savePaymentMethod(paymentMethod))
            navigate('/placeorder')

    }

    useEffect(() => {
        if(!shippingAddres){
          navigate('/shipping')
        }
      }, [])

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>

        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>

        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>

        <div>
            <label/>
            <button className= "primary" type="submit">Continue </button>
        </div>
      </form>
    </div>
  );
}
