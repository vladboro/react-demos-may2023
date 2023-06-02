import { useDispatch, useSelector } from "react-redux";
import { clear } from "../features/basketSlice";
import { usePostNewOrderMutation } from "../api/shopApi";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";

const Basket = () => {
  const basket = useSelector((store) => store.basket);
  const [postNewOrder, { data: newOrder, isLoading, isSuccess }] =
    usePostNewOrderMutation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isSuccess) {
      dispatch(clear());
    }
  }, [isSuccess]);

  console.log(basket);
  return (
    <div>
      <div>Total count: {basket.count}</div>
      <div className="ui button" onClick={() => dispatch(clear())}>
        <i className="trash icon"></i>
      </div>
      <div className="ui button" onClick={() => postNewOrder(basket.items)}>
        <i className="arrow up icon"></i>
      </div>
      {isLoading ? <ClipLoader /> : newOrder && `New order id: ${newOrder.id}`}
    </div>
  );
};

export default Basket;
