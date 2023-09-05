import React from 'react'
import './productDetails.css'
export const ProductDetails = ({ productData }) => {
    console.log(productData)

    return (

        <div >
            {productData && <div className='productDetails'>

                <div className='prodImage'><img src={productData.img} alt="" /></div>
                <div className='orderdetails'>
                    <h5>Price: {productData.price}</h5>
                </div>

            </div>}
        </div>
    )
}
