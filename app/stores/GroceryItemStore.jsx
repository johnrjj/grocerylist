var dispatcher = require('./../dispatcher.js');


// only the store may change the data inside the store :~)
function GroceryItemStore() {
    var items = [
        {name:"1"},
        {name:"2"},
        {name:"3", purchased:true}
    ];

    var listeners = [];

    function getItems() {
        return items;
    };

    function addGroceryItem(item) {
        items.push(item);
        triggerListeners();
    }

    function onChange(listener){
        console.log(listener);
        listeners.push(listener);
    };

    function triggerListeners() {
        console.log('triggering listeners for the items',items);
        listeners.forEach(function(listener){

            listener(items)  ;
        })
    };

    dispatcher.register(function(event){
        console.log('the dispatcher has called me (the callback) because i was registered to an event')
        var split = event.type.split(':');
        if (split[0]==='grocery-item') {
            switch(split[1]){
                case "add":
                    console.log('grocery store: adding grocery item')
                    addGroceryItem(event.payload);
                    break;
            }
        }
    })


    //public methods
    return {
        getItems:getItems,
        onChange:onChange
    }
}

module.exports = new GroceryItemStore();