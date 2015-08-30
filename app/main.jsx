var React = require('react/addons');

console.log("Hello");

var GroceryItemList = require('./components/GroceryItemList.jsx');

// app is global because id
React.render(<GroceryItemList />, app)