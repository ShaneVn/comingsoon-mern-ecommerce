import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { detailsProduct } from '../actions/productAction';
import { Link, useParams } from "react-router-dom";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from "../components/Rating";

export default function ProductScreen(props) {
  const params = useParams();
  const productId = params.id

  const disPatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails);
  const {loading, error, product} = productDetails


 useEffect(()=>{
     disPatch(detailsProduct(productId))
 },[disPatch,productId])

  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>

        <div className="col-1">
          <ul>
            <li>{product.name}</li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Price : ${product.price}</li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>price</div>
                  <div className="price">{product.price}</div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div>status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In stock</span>
                    ) : (
                      <span className="danger">Not available</span>
                    )}
                  </div>
                </div>
              </li>

              <button className="primary block">Add to Cart</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )}
  </div>
    
  );
}
