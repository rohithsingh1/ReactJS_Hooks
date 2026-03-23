import React from 'react'

function ProductList({productList}) {
    return (
        <React.Fragment>
            {productList?.map((product) => {
                return <div key={product?.id} className='productCardContainer' >
                    <div style={{width: "70%", height: "250px", margin: "auto"}} >
                        <img src={product?.image_url} style={{width: "inherit", height: "inherit"}} />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: 8}}  >
                        <h4>{product?.name}</h4>
                        <div>
                            <span>rating - <b>{product?.ratings?.average_rating}</b></span>
                        </div>
                        <div>
                            <span>Price - <b>{product?.price}</b></span>
                        </div>
                    </div>
                    <button style={{marginTop: 12, marginBottom: 12}}>{product?.cta}</button>
                </div>
            })}
        </React.Fragment>
    )
}

export default ProductList