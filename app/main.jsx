var React = require('react/addons');
var GroceryItemList = require('./components/GroceryItemList.jsx');
var groceryItemStore = require('./stores/GroceryItemStore.jsx')

//Get initial items
var currentItems = groceryItemStore.getItems();

function render() {
    React.render(<GroceryItemList items={currentItems}/>, app)
}

// Register a listener to the store, and listen for changes
groceryItemStore.onChange(function(items) {
    currentItems = items;
    render();
})

render();