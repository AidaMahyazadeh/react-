/* eslint-disable no-unused-vars */
import { useState } from "react";
function ProductForm(props){
   let[pName,updateName]= useState('');
   let[pPrice,updatePrice]= useState('');
   let[pDescription,updateDescription]= useState('');
   let[pAvailable,updateAvailability]= useState(false);
   let[pImageUrl,updateImageUrl]= useState('');
// let[userInput,updateUserInput]=useState({
//     pName:'',
//     pPrice:'',
//     pDescription:'',
//     pAvailable:'',
//     pImageUrl:''
// })

function nameInputHandler(event){
    updateName(event.target.value);
    // updateUserInput({
    //     ...userInput,
    //     pName: event.target.value
    // })

    // updateUserInput((prevState) => {
    //     return {...prevState, pName: event.target.value}
    // })
}

function priceInputHandler(event){
    updatePrice(event.target.value);
    // updateUserInput({
    //     ...userInput,
    //     pPrice: event.target.value
    // })
}

function descriptionInputHandler(event){
    updateDescription(event.target.value);
    // updateUserInput({
    //     ...userInput,
    //     pDescription: event.target.value
    // })
}

function availabilityInputHandler(event){
    updateAvailability(event.target.checked);
    // updateUserInput({
    //     ...userInput,
    //     pAvailable: event.target.value
    // })
}

function imageInputHandler(event){
    updateImageUrl(event.target.value);
    // updateUserInput({
    //     ...userInput,
    //     pImageUrl: event.target.value
    // })
}
function createProductEventHandler(event){
    event.preventDefault();
    let product = {
        pName: pName,
        desc: pDescription,
        isAvailable: Boolean(pAvailable),
        image: pImageUrl,
        price: Number(pPrice)
    }
    updateName('');
    updatePrice('');
    updateDescription('')
    updateAvailability(false);
    updateImageUrl('');
    props.createProduct(product)
    props.onCancel();
}
return (
    <form className="row g-3" onSubmit={createProductEventHandler}>
    <div className="col-md-6">
        <label for="name">Product Name</label>
        <input type="text" 
                className="form-control" 
                id="name" onChange={nameInputHandler}
                value={pName}
                placeholder="Product Name"
                 />
    </div>
    <div className="col-md-6">
        <label for="price">Product Price</label>
        <input type="number" 
                min="0.01" step="0.01" 
                className="form-control" 
                id="price" onChange={priceInputHandler}
            value={pPrice}
                placeholder="Product Price"
                />
    </div>

    <div className="form-group">
        <label for="description">Product Description</label>
        <input type="text" 
                className="form-control" 
                id="description" 
                placeholder="Product Description" onChange={descriptionInputHandler}
                value={pDescription}
                />
    </div>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="isAvailable" onChange={availabilityInputHandler} 
        checked={pAvailable}
         />
        <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
    </div>

    <div className="form-group">
        <label for="select-image">Select product image</label>
        <input type="file" className="form-control" id="select-image" onChange={imageInputHandler} value={pImageUrl}/>
    </div>
    

    <button type="submit" className="btn btn-primary">Add Product</button>
    <button type="button" onClick={props.onCancel}>Cancel</button>
</form>
)
}
export default ProductForm;