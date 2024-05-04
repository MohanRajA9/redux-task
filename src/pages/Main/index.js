import React from 'react'
import {useDispatch } from 'react-redux';

import { addProduct } from '../../features/postSlice';
import Layout from '../../components/Layout';

const Main = ({postAll}) => {

    const dispatch = useDispatch();

    const clickHandle = (id) => {
        dispatch(addProduct(id))
    }
    
    return (
        <Layout
            products={postAll}
            clickHandle={clickHandle}
        />

    )
}

export default Main;