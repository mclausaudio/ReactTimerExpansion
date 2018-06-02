var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TimeKeeper = require('TimeKeeper');

describe('TimeKeeper', () => {
    it('should exist', ()=> {
        expect(TimeKeeper).toExist();
    })
})

describe('render', () => {
  it("should render timeSpentWorking to output", ()=> {
    var timeKeeper = TestUtils.renderIntoDocument(<TimeKeeper timeSpentWorking={59}/>);
    var $el = $(ReactDOM.findDOMNode(timeKeeper));
    var actualText = $el.find('.total-working-time-text').text();
    
    expect(actualText).toBe('00:59')
  })
    it("should render timeSpentRelaxing to output", ()=> {
    var timeKeeper = TestUtils.renderIntoDocument(<TimeKeeper timeSpentRelaxing={59}/>);
    var $el = $(ReactDOM.findDOMNode(timeKeeper));
    var actualText = $el.find('.total-relaxing-time-text').text();
    
    expect(actualText).toBe('00:59')
  })
})

