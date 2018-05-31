var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe("Timer", () => {
    it("should exist", () => {
        expect(Timer).toExist();
    })
    describe("starTimer", ()=>{
        it('should set state to started and count up', (done) => {
         var timer = TestUtils.renderIntoDocument(<Timer/>);
          expect(timer.state.timerStatus).toBe('stopped');
          timer.startTimer();
        
            setTimeout(() => {
                expect(timer.state.count).toBe(2);
                done();
            }, 2001)
        });
         it('should pause countdown on paused status', (done) => {
             var timer = TestUtils.renderIntoDocument(<Timer/>);
             timer.handleStatusChange('started');
              timer.handleStatusChange('paused');
        
           setTimeout(() => {
             expect(timer.state.timerStatus).toBe('paused');
             done();
           }, 1001);
         });
    })
});