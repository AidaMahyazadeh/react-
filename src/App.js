
import './App.css'; 
import ProductList from './components/productList/ProductList';
import { useState } from "react";
import CreateProduct from './components/CreateProduct/CreateProduct';
import FilterProduct from './components/filterProduct/FilterProduct';
const products = [
  {
      pID: 1,
      pName: 'Fresh Milk',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: 'images/fresh-milk.png',
      price: 14
  },
  {
      pID: 2, 
      pName: 'Cottage Cheese', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/cottage-cheese.png",
      price: 10
  },
  {
      pID: 3, 
      pName: 'Brocoli', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/brocoli.png",
      price: 15
  },
  {
      pID: 4, 
      pName: 'oranges', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/oranges.png",
      price: 20
  },
  {
      pID: 5, 
      pName: 'Olive oil', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/olive-oil.png",
      price: 14
  },
  {
      pID: 6, 
      pName: 'Olive oil Test', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/olive-oil.png",
      price: 14
  }
]

function App() {
  let[newProductList,updateProductList]=useState(products);
  let[filterTextvalue,updateFilterText]=useState('All');

  // eslint-disable-next-line no-unused-vars
  let filterProductList=newProductList.filter((product)=>{
    if(filterTextvalue === 'available'){
      return product.isAvailable === true;
  } else if(filterTextvalue === 'unavailable'){
      return product.isAvailable === false;
  } else {
      return product;
  }
  })

 function createProduct(product){
  product.pID=newProductList.length+1;
 updateProductList([product,...newProductList])
  }
  function onFilterValueSelected(filtervalue){
 updateFilterText(filtervalue)
  }
  return ( 
    <div className='row'>
    <div className='col-lg-8 mx-auto'>
      <CreateProduct createProduct={createProduct}></CreateProduct>
      <FilterProduct filterValueSelected={onFilterValueSelected}></FilterProduct>
      <ProductList newProductList={filterProductList}></ProductList>
      </div>
  </div>)
 
 
}

export default App;
