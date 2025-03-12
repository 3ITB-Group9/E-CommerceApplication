import React, { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Laptop", price: 50000, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Smartphone", price: 25000, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Headphones", price: 5000, image: "https://via.placeholder.com/150" },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Product List</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {this.state.products.map((product) => (
            <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              <img src={product.image} alt={product.name} style={{ width: "150px" }} />
              <h3>{product.name}</h3>
              <p>Price: ₱{product.price}</p>
              <button onClick={() => this.props.addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;