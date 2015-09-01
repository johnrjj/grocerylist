jest.dontMock('./../app/components/GroceryListAddItem.jsx');
jest.dontMock('react/addons');

describe('GroceryListAddItemUnitTests', function() {

    var React,
        GroceryListAddItem,
        TestUtils,
        itemAdder;

    beforeEach(function(){
        React = require('react/addons');
        GroceryListAddItem = require('./../app/components/GroceryListAddItem.jsx');
        TestUtils = React.addons.TestUtils;
        itemAdder = TestUtils.renderIntoDocument(
            <GroceryListAddItem />
        );
    })

    it('Should Initialize Input', function() {

        // Arrange
        var button = TestUtils.findRenderedDOMComponentWithTag(
            itemAdder, 'button');
        var input = TestUtils.findRenderedDOMComponentWithTag(
            itemAdder, 'button');
        //Act
        //Assert
        expect(button.getDOMNode().textContent).toEqual(' Add Item ');
    });

    it('User Input should update input state', function(){
        //Arrange
        var input = TestUtils.findRenderedDOMComponentWithTag(itemAdder, 'input');
        //Act
        TestUtils.Simulate.change(input, { target: { value: 'Changed Value' } });
        //Assert
        expect(itemAdder.state.input).toBe('Changed Value');

    });

    it('Form submit should call addItem function', function() {
        //Arrange
        var form = TestUtils.findRenderedDOMComponentWithTag(
            itemAdder, 'form');
        itemAdder.addItem = jest.genMockFunction();

        //Act
        TestUtils.Simulate.submit(form);

        //Assert
        expect(itemAdder.addItem.mock.calls.length, 1);

    });
});