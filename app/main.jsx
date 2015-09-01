var React = require('react/addons');
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