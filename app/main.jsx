var React = require('react/addons');

console.log("Hello");

var GroceryItemList = require('./components/GroceryItemList.jsx');

var groceryItemStore = require('./stores/GroceryItemStore.jsx')

//get initial items
var currentItems = groceryItemStore.getItems();

function render() {
    React.render(<GroceryItemList items={currentItems}/>, app)
}

groceryItemStore.onChange(function(items) {
    currentItems = items;
    render();
})

render();