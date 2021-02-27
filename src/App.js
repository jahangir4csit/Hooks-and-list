//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import productData from './data';

import './App.css';

function App() {

  const [pageInfo, setPageInfo] = useState('All Products');
  const [dataLoad, setDataLoad] = useState('false');
  const [product, setProduct] = useState({ productItem: productData });
  const [productDetails, setProductDetails] = useState({selectedProduct: null });

  useEffect(() => {
    const timer = setTimeout(() => 
    setDataLoad('true'), 
    3000);
    return () => clearTimeout(timer);
  }, []);
  
  
  const onProductSelect = productInfo =>{
    setProductDetails({selectedProduct: productInfo})
    setPageInfo('Product Details');
  }
  const productsList = product.productItem.map((item,index)=>{
    return(
      <Products
        key={index}
        productInfo={item}
        ProductSelect = {()=>onProductSelect(item)}
      />
    )
  })

  return (
    <div className="App">
      <div className="container products_list">
        <h1>{pageInfo}</h1>
        <div className="product_display">
          {dataLoad==='false' && <div class="loader"></div>}
          {productDetails.selectedProduct === null && dataLoad==='true' && productsList }
          {productDetails.selectedProduct != null && dataLoad==='true' && <ProductDetails data={productDetails.selectedProduct} /> }
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
