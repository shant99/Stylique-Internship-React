import './card.scss'

function Card({cardDetails , productsArray }){
    console.log(cardDetails)
    return (
        <div className='card-details'>
            <p>Produt name - {cardDetails.productname}</p>
            <p>Product price - {cardDetails.price}€</p>
            <p>Product tags - {cardDetails.tags}</p>
            <p>Product description - {cardDetails.description}</p>
            <p>Products images gallery</p>
            <div className='products-images-gallery'>
                {productsArray.map((item , index)=>{
                    return <img src={item.img_url} alt="a" key={index} className='products-images-gallery-img'/>
                })}
            </div>
        </div>
    )
}

export default Card