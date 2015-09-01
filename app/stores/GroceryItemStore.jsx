var dispatcher = require('./../dispatcher.js');


// only the store may change the data inside the store :~)
function GroceryItemStore() {
    var items = [
        {name:"Cheese"},
        {name:"Bacon"},
        {name:"Milk", purchased:true}
    ];

    var listeners = [];

    function getItems() {
        return items;
    };

    function addGroceryItem(item) {
        items.push(item);
        triggerListeners();
    }

    function deleteGroceryItem(item) {
        var index;
        items.filter(function(_item, _index){
            if(_item.name == item.name) {
                index = _index;
            }
        })
        items.splice(index,1);
        triggerListeners();
    }

    function onChange(listener){
        //registers listener to be sent items array when they change
        listeners.push(listener);
    };

    function triggerListeners() {
        listeners.forEach(function(listener){
            listener(items)  ;
        })
    };

    function setGroceryItemBought(item, isBought) {
        var _item = items.filter(function(a){
            return a.name == item.name
        })[0];

        _item.purchased = isBought || false;
        triggerListeners();
    }

    dispatcher.register(function(event){
        console.log('The dispatcher has called me (the callback) because i was registered to an event')
        var split = event.type.split(':');
        if (split[0]==='grocery-item') {
            switch(split[1]){
                case "add":
                    addGroceryItem(event.payload);
                    break;
                case "delete":
                    deleteGroceryItem(event.payload);
                    break;
                case "buy":
                    setGroceryItemBought(event.payload, true);
                    break;
                case "unbuy":
                    setGroceryItemBought(event.payload, false);
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