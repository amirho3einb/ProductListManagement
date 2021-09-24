
import {Component} from 'react';
import "./App.css";

class App extends Component {
  state = {
    producGroup : ["none","electronic","health","clothes"],
    input : "",
    product : {
      name : "",
      group : ""
    },
    products : [],
  }
  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };
  addNewItem = () => {
    this.setState({producGroup: [...this.state.producGroup, this.state.input]});
  };
  handleChangeGroup = (e) =>{
    const product = {...this.state.product};
    product.group = e.target.value;
    this.setState({product});
  };
  handleChangeName = (e) =>{
    const product = {...this.state.product};
    product.name = e.target.value;
    this.setState({product});
  };
  addNewProduct = () => {
    this.setState({products: [...this.state.products, this.state.product]});
  };
  render(){
      return(
        <div className="container" id="title">
            <h1>product list managment</h1>
            <div className="addGroup">
              <h3>Insert your group :</h3>
              <input type="text" placeholder="add your new group item" onChange={this.saveInput}/>
              <button onClick={this.addNewItem}> Add Item </button>
            </div>
            <div className="addProduct">
              <h3>Add Product</h3>
              <div className="form">
                <div>
                  <label>Name of product :</label>
                  <input type="text" placeholder="add your new product name" onChange={this.handleChangeName}/>
                </div>
                <div>
                  <label>Group of product :</label>
                  <select onChange={this.handleChangeGroup}>
                    {this.state.producGroup.map((item, index) => {
                      return <option value={item} key={index}> {item}</option>
                    })}
                  </select>
                </div>
                <div><button onClick={this.addNewProduct}> Add New Product </button></div>
              </div>
              <ul>
                {this.state.products.map((product,index) => {
                  return <li key={index}>
                    <span>Product Name : {product.name}</span>
                    <span>Group : {product.group}</span>
                  </li>
                })
                }
              </ul>
            </div>
        </div>
      )
    }
}



 
export default App;
 