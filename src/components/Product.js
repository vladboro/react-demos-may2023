import { useDispatch } from "react-redux";
import {
  useGetProductByIdQuery,
  useLazyGetStockByProductIdQuery,
} from "../api/shopApi";
import { ClipLoader } from "react-spinners";
import { addItem } from "../features/basketSlice";
import { useEffect } from "react";

const Product = ({ productId }) => {
  const { data: product, isLoading: isProductsLoading } =
    useGetProductByIdQuery(productId);
  const [trigger, { data: stockList, isSuccess: isStockLoaded, fulfilledTimeStamp }] =
    useLazyGetStockByProductIdQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(stockList);
    console.log(isStockLoaded);
    if (isStockLoaded) {
      if (stockList[0].quantity > 0) dispatch(addItem(product));
      else {
        alert("Out of stock");
      }
    }
  }, [fulfilledTimeStamp]);

  const addItemToBasket = (product) => {
    trigger(product.id);
  };

  return (
    <div className="ui card">
      <div className="header">
        {isProductsLoading ? <ClipLoader /> : product.name}
      </div>
      <div className="content">TODO: description</div>
      <div className="extra content">
        <div
          className="ui basic green button"
          onClick={() => addItemToBasket(product)}
        >
          <i className="shopping cart icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Product;
