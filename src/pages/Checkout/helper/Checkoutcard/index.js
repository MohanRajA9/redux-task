import React from 'react'
import Rating from '@mui/material/Rating';
import Dropdown from '../../../../components/Dropdown';
import {useDispatch} from 'react-redux'
import { addProduct } from '../../../../features/postSlice';

const CheckoutCard = ({ postAll }) => {
    const dispatch = useDispatch();

    const handleClick = (e, id) => {
        const data = {
            selectedVal : e.target.value,
            id
        }
        dispatch(addProduct(data))
        
    }
    return (
        <>
            <div className="container mt-2 mb-1" >
                <div className="card">
                    <div style={{ textAlign: "center" }} className="card-header fw-bolder">
                        {postAll.title}
                    </div>
                    <div className="card-body">
                        <div style={{ display: "flex" }}>
                            <div>
                                <img src={postAll.thumbnail} alt={postAll.title} className="img-fluid rounded float-left mr-3" style={{ width: "500px", height: "300px" }} />
                            </div>
                            <div style={{ marginLeft: "2%" }}>
                                <p className="card-text">{postAll.description}</p>
                                <h5 className="card-title"><Rating name="read-only" value={postAll.rating} readOnly /></h5>
                                <label>Quantity:</label>
                                {
                                    <Dropdown
                                        stock={postAll.stock}
                                        handleClick={handleClick}
                                        count={postAll.count}
                                        id={postAll.id}
                                    />
                                }
                            </div>
                            <div style={{ marginLeft: "2%" }}>
                                <p>Total : {postAll.count} X ${postAll.price} = ${postAll.count*postAll.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutCard