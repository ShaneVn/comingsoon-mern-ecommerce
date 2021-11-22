import { data } from "../data";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";

export default function ProductScreen(props) {
  const params = useParams();

  const product = data.products.find((item) => item._id === params.id);

  if (!product) {
    return <p>Product Not Found</p>;
  }

  return (
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
  );
}
