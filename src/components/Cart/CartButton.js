import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
 const cartQuantity= useSelector(state=>state.cart.totalQuantity)

  const clickHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
