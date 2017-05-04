var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TimerControls = require('TimerControls');

describe('TimerControls', () => {
    it('should exist', () => {
        expect(TimerControls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            var controls = TestUtils.renderIntoDocument(<TimerControls timerStatus="started" onStatusChange={undefined}/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });
    });
});