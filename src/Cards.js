import './App.css';
import Card from './Card';
import products from './products';


export default function Cards(){
    let productsMap = products.map(product =>{
        console.log(product.title)
        return(
            <Card
            key={product.id}
            badge= {product.badge}
            badgeText = {product.badgeText}
            img = {product.img}
            rating = {product.rating}
            opinions = {product.opinions}
            location = {product.location}
            title = {product.title}
            price = {product.price}
            />
        )
    })
    return (
        <div className='cards'>
            {productsMap}
        </div>
    )
}



// const card = (
//     <div className='cards'>
    

// <Card
//         badge = {products[0].badge}
//         badgeText = {products[0].badgeText}
//         img = {products[0].img}
//         rating = {products[0].rating}
//         opinions = {products[0].opinions}
//         location = {products[0].location}
//         title = {products[0].title}
//         price = {products[0].price}

//     />

// <Card
//         badge = {products[1].badge}
//         badgeText = {products[1].badgeText}
//         img = {products[1].img}
//         rating = {products[1].rating}
//         opinions = {products[1].opinions}
//         location = {products[1].location}
//         title = {products[1].title}
//         price = {products[1].price}

//     />

// <Card
//         badge = {products[2].badge}
//         badgeText = {products[2].badgeText}
//         img = {products[2].img}
//         rating = {products[2].rating}
//         opinions = {products[2].opinions}
//         location = {products[2].location}
//         title = {products[2].title}
//         price = {products[2].price}

//     />
//     </div>
// )
