var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should set state to started and count up', (done)=>{
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');

        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('started');

        setTimeout(() => {
            expect(timer.state.count).toBe(1);
            done();
        }, 1001);
    });

    it('should set state to paused and stop counting', (done)=>{
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');
        
        setTimeout(() => {
            timer.handleStatusChange('paused');
            expect(timer.state.count).toBe(1);
            expect(timer.state.timerStatus).toBe('paused');
        }, 1001);

        setTimeout(() => {
            expect(timer.state.count).toBe(1);
            expect(timer.state.timerStatus).toBe('paused');
            done();
        }, 2001)
    });

    it('should set state to stop and reset counter', (done)=>{
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');
        
        setTimeout(() => {
            timer.handleStatusChange('stopped');
            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('stopped');
            done();
        }, 1001);        
    });
});