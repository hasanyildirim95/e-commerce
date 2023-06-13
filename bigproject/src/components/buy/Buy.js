import React, { Component } from 'react';
import { Container, Row, Col, Table} from 'reactstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";

class Buy extends Component {
    render() {
        var totalPrice= 0;
        this.props.cart.map((cartItem) => (
            totalPrice += cartItem.quantity+cartItem.product.price
        ))
        return (
            <div>
                <p>{totalPrice}</p>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      cart: state.cartReducer,
    }
  }
  
  export default connect(mapStateToProps)(Buy);