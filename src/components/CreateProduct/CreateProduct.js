import ProductForm from "./ProductForm";
import { useState } from "react";

function CreateProduct(props){
   let[showForm,updateShowForm]=useState(false);

    function onCreateProduct(product){
       props.createProduct(product);
    }

    function onCreateNewProduct(){
        updateShowForm(true)
    }

    function onProductSubmittedCancle(){
      updateShowForm(false)
    }

return(
   
        <div style={{backgroundColor :"white",padding :'10px 20px',borderRadius:2}}>
          {!showForm &&<button onClick={onCreateNewProduct}>Create product</button>}
          {showForm && <ProductForm createProduct={onCreateProduct} onCancel ={onProductSubmittedCancle}></ProductForm>}
        </div>
  
)
}
export default CreateProduct;