import {useEffect} from "react";
import { useParams, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

export default function CartScreen() {
  const productId = useParams().id;

  const location = useLocation();
  // console.log(Number(location.search.split("=")[1]));
  const qty = Number(location.search.split("=")[1])

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);


  return (
    <div>
      <h1>Cart Screen</h1>
      <p>Add to Cart : ProductID : {productId} Qty: {qty}</p>
    </div>
  );
}
