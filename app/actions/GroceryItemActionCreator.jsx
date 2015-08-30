var dispatcher = require('./../dispatcher.js');

module.exports = {
    add:function(item) {
        console.log('inside groceryitem action, call dispatcher for item: ', item)
        dispatcher.dispatch({
            payload:item,
            type:"grocery-item:add"
        })
    }
}