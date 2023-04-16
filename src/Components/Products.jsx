import product1 from './Productimages/image1.jpg'
import product2 from "./Productimages/image2.jpg"
import product3 from "./Productimages/image3.png"
import product4 from "./Productimages/image4.jpg"
import product5 from "./Productimages/image5.jpg"
import product6 from "./Productimages/image6.jpg"
import product7 from "./Productimages/image7.jpg"
import product8 from "./Productimages/image8.jpg"

export const PRODUCTS = [
    {
      key : 0,
      id: 1,
      productName: "IPhone",
      price: 999.0,
      productImage: <img src={product1}  height="200" width="200" alt="" />
    },
    {
      key : 1,
      id: 2,
      productName: "Macbook Pro 2022 (M1)",
      price: 1999.0,
      productImage: <img src={product2}  height="200" width="200" alt="" />
    },
    {
      key : 2,
      id: 3,
      productName: "Cannon M50 Camera",
      price: 699.0,
      productImage: <img src={product3}  height="200" width="200" alt="" />
    },
    {
      key : 3,
      id: 4,
      productName: "WLS Van Gogh Denim Jacket",
      price: 228.0,
      productImage: <img src={product4}  height="200" width="200" alt="" />
    },
    {
      key : 4,
      id: 5,
      productName: "LED Light Strips",
      price: 19.99,
      productImage: <img src={product5} height="200" width="200" alt="" />
    },
    {
      key : 5,
      id: 6,
      productName: "bat",
      price: 68.0,
      productImage: <img src={product6}  height="200" width="200" alt="" />
    },
    {
      key : 6,
      id: 7,
      productName: "AUTO SERVICE SHIRT by GOLF WANG",
      price: 120.0,
      productImage: <img src={product7}  height="200" width="200" alt="" />
    },
    {
      key : 7,
      id: 8,
      productName: "DON'T TRIP UNSTRUCTURED HAT",
      price: 40.0,
      productImage: <img src={product8} height="200" width="200" alt="" />
    },
  ];

export default PRODUCTS;
