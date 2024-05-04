import { createSlice } from '@reduxjs/toolkit'
import { isObject } from 'lodash'


const initialState = {
    products: [
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://imgs.search.brave.com/XjEB2B4uM5-gcHUPxil6A-E0gqNgAGJjL25n_MtBtO8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnBvY2tldGxp/bnRpbWFnZXMuY29t/L3dvcmRwcmVzcy93/cC1jb250ZW50L3Vw/bG9hZHMvMTQ1NzAx/LXBob25lcy1mZWF0/dXJlLXdoeS13YXMt/dGhlcmUtbm8taXBo/b25lLTktcGx1cy13/aGF0LWhhcHBlbmVk/LXRvLXRoZS1pcGhv/bmUtMTAtaW1hZ2Ux/LTJlZW15bGtxZmQu/cG5n",
            images: [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
        {
            id: 2,
            title: "iPhone X",
            description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://imgs.search.brave.com/ANdkQWIgM90EhlRj_Be0-3BLu2jbgo6My_npHVLfycg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudGVjaHJlcHVi/bGljLmNvbS91cGxv/YWRzLzIwMTgvMDkv/aXBob25lLXhzLmpw/Zw",
            images: [
                "https://i.dummyjson.com/data/products/2/1.jpg",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            ]
        },
        {
            id: 3,
            title: "Samsung Universe 9",
            description: "Samsung's new variant which goes beyond Galaxy to the Universe",
            price: 1249,
            discountPercentage: 15.46,
            rating: 4.09,
            stock: 36,
            brand: "Samsung",
            category: "smartphones",
            thumbnail: "https://imgs.search.brave.com/0HmcDjiHRvkmsrlNkPBvhIAWdpUJX4UV-31D6ljwgQ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c3R1ZmYudHYvd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzIv/MjAyMS8wOC9ub3Rl/XzlfdnNfczkucG5n/P3c9MTA4MA",
            images: [
                "https://i.dummyjson.com/data/products/3/1.jpg"
            ]
        },
        {
            id: 4,
            title: "OPPOF19",
            description: "OPPO F19 is officially announced on April 2021.",
            price: 280,
            discountPercentage: 17.91,
            rating: 4.3,
            stock: 123,
            brand: "OPPO",
            category: "smartphones",
            thumbnail: "https://imgs.search.brave.com/3JNmCNcQEty9g-MBto6HsawFaEq9L2TMAsmGt3ueZuw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oYW1h/cml3ZWIuY29tL21v/YmlsZXMvTGFyZ2VJ/bWFnZXMvNDQ5Ml8w/MS5qcGc",
            images: [
                "https://i.dummyjson.com/data/products/4/1.jpg",
                "https://i.dummyjson.com/data/products/4/2.jpg",
                "https://i.dummyjson.com/data/products/4/3.jpg",
                "https://i.dummyjson.com/data/products/4/4.jpg",
                "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
            ]
        },
        {
            id: 5,
            title: "Huawei P30",
            description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            price: 499,
            discountPercentage: 10.58,
            rating: 4.09,
            stock: 32,
            brand: "Huawei",
            category: "smartphones",
            thumbnail: "https://imgs.search.brave.com/UHoAPnonAnUmRjYipzYpZD9N16fFcT7Z_MnW-kR6e1M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBj/bWFnLmNvbS9pbWFn/ZXJ5L3Jldmlld3Mv/MDNPOGFBNkpYaXZh/M1FQNVE1V2pCa1Yt/MjAuZml0X3NjYWxl/LnNpemVfNzYweDQy/Ny52MTU2OTQ4MTc2/Ni5qcGc",
            images: [
                "https://i.dummyjson.com/data/products/5/1.jpg",
                "https://i.dummyjson.com/data/products/5/2.jpg",
                "https://i.dummyjson.com/data/products/5/3.jpg"
            ]
        }
    ]
}

const postSlice = createSlice(
    {
        name: "post",
        //>>>initial State<<
        initialState,
        //>>>Reducer<< as (plural)
        reducers: {
            //To add products
            //>>>Actions<<
            addProduct: (state, action) => {
                const isObjectF = isObject(action.payload); // To check action.payload is {} object or not
                if (isObjectF === false) {
                    const selDat = state.products.findIndex(data => data.id === action.payload)
                    if (state.products[selDat].count === undefined) {
                        state.products[selDat] = { ...state.products[selDat], count: 1, added: 1 }
                    } else {
                        state.products[selDat] = { ...state.products[selDat], count: state.products[selDat].count += 1 }
                    }
                } else {
                    const selDat = state.products.findIndex(data => data.id === action.payload.id)
                    if (action.payload.selectedVal !== 0) {
                        state.products[selDat] = { ...state.products[selDat], count: parseInt(action.payload.selectedVal) }
                    }
                    
                    //Need to fix
                    if(action.payload.selectedVal === 0){
                        delete state.products[selDat].count
                        delete state.products[selDat].added
                    }
                }
            },
            resetAll: (state) => state
        }

    }
)

//CallBack function from display all data
export const selectAllPost = (state) => state.post.products
//exporting all actions from postSlice.actions (plural)
export const { addProduct } = postSlice.actions
//exporting all reducer as default postSlice.reducer (singular)
export default postSlice.reducer