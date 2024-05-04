import React from 'react'
import CheckoutCard from './helper/Checkoutcard';

const Checkout = ({ postAll }) => {

    const addedCart = postAll.filter(element => element.added !== undefined && element)
    
    return (
        <div className="container" style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ width: "100%" }}>
                {
                    addedCart.map((element, index) => {
                        return (
                            <div key={index} className="container">
                                <CheckoutCard
                                    postAll={element}
                                />
                            </div>
                        );
                    })
                }
            </div>
            <div >
                <div className="card mt-4" style={{ width: "18rem", position: "sticky", top: "90px" }}>
                    <div className="card-body">
                        <h5 style={{ textAlign: "center" }} className="card-title">Total</h5>
                        <hr />
                        {
                            addedCart.map((element, index) => <p key={index} className="card-text">{`${element.title} x ${element.count} =   ₹ ${element.price * element.count}`}</p>)
                        }
                        <hr />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <div> <p className="card-text">Total</p></div>
                            <div><p>:</p></div>
                            <div> <p className="card-text">₹{
                                addedCart.reduce((accum, current) => accum + (current.count * current.price), 0)
                            }</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;