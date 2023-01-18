import { useEffect,useState } from "react";

import Item from "../../components/productos/item/item";
const Home = () => {
    const [productList,setProductList] = useState ([]);

    const products = [
        {id: 1,name: "IPA ", price: 19.99},
        {id: 2,name: "APA", price: 29.99},
        {id: 3,name: "Scotish", price: 39.99},
        {id: 4,name: "Porter", price: 49.99},
        {id: 5,name: "Stout", price: 49.99},
        {id: 6,name: "Porter", price: 49.99},
        {id: 7,name: "Gin Heredero", price: 49.99},
        {id: 8,name: "Gin Frutos rojos", price: 49.99},
        {id: 9,name: "Gin Naranja", price: 49.99}
      ];

    const getProducts = new Promise ((resolve) => {
        resolve(products);
});

useEffect (()=> {
    getProducts
    .then((data) => {
        setProductList(data)
        console.log (data);
    })
    .catch(error => {console.log (error)})
},[])


  return (
    <div>
        {productList.map((Item)=>(
            <item key={products.name} productItem = {products}/>
        ))
        }
    </div>
  )
}

export default Home