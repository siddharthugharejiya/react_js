const { Component } = require("react");


class Counter extends Component{


    constructor (props){
        super(props)
        this.state={count:0}
    }
    counter = () => {
        this.setState({count: this.state.count + 1})
    }
    render(){
        return(
            <div>
                
                <h1>{this.state.count}</h1>
                <button type="button" onClick={this.counter}>Increment</button>
            </div>
        )
    }
}
export default Counter