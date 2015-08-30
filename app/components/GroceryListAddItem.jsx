var React = require('react/addons');
var action = require('./../actions/GroceryItemActionCreator.jsx')

module.exports = React.createClass({

    getInitialState:function(){
        console.log('getting initial state of additem');
        return {input:""};
    },

    handleInputName:function(e){
        console.log('input has changed');
        this.setState({input: e.target.value});
    },

    addItem:function(e){
        e.preventDefault();

        console.log('additem called with inputstate of: ', this.state.input);
        console.log('calling action to add input:', this.state.input);

        action.add({
            name:this.state.input
        });

        console.log('resetting input state');
        this.setState({
            input:''
        });
    },

    render:function(){
        return (
            <div className='grocery-addItem'>
                <form onSubmit={this.addItem}>
                    <input value={this.state.input} onChange={this.handleInputName}/>
                    <button> Add Item </button>
                </form>
            </div>
        )
    }
})