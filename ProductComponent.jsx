import { useState } from "react";
// import Swal from 'sweetalert2';
import '../Component/ProductComponent'

function ProductForm() {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");
    const [products, setProducts] = useState([]);

    const handleChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleAddProduct = () => {
        if (productName && price && quantity && image) {
            const product = {
                name: productName,
                price: price,
                quantity: quantity,
                image: image,
            };
            setProducts([...products, product]);
            // Swal.fire({
            //     title: 'Product Added!',
            //     text: `Product: ${productName}`,
            //     icon: 'success',
            //     confirmButtonText: 'OK'
            // });
            setProductName("");
            setPrice("");
            setQuantity("");
            setImage("");
        } else {
            // Swal.fire({
            //     title: 'Error!',
            //     text: 'Please fill out all fields',
            //     icon: 'error',
            //     confirmButtonText: 'OK'
            // });
        }
    };

    const handleShowProducts = () => {
        // Swal.fire({
        //     title: 'Products',
        //     html: products.map((product, index) => (
        //         `<div key=${index} style="margin-bottom: 10px;">
        //             <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;" />
        //             <p><strong>Name:</strong> ${product.name}</p>
        //             <p><strong>Price:</strong> $${product.price}</p>
        //             <p><strong>Quantity:</strong> ${product.quantity}</p>
        //         </div>`
        //     )).join(''),
        //     confirmButtonText: 'OK'
        // });
    };

    return (
        <div>
            <h1>Product Form</h1>
            <input type="text" placeholder="Product Name" value={productName} onChange={(e) => handleChange(e, setProductName)} />
            <input type="text" placeholder="Price" value={price} onChange={(e) => handleChange(e, setPrice)} />
            <input type="text" placeholder="Quantity" value={quantity} onChange={(e) => handleChange(e, setQuantity)} />
            <input type="text" placeholder="Image URL" value={image} onChange={(e) => handleChange(e, setImage)} />
            <button onClick={handleAddProduct}>Add Product</button>
            <button onClick={handleShowProducts}>Show Products</button>
            <div>
                {products.map((product, index) => (
                    <div key={index}>
                        <img src={product.image} alt={product.name} style={{width: '50px', height: '50px'}} />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductForm;
