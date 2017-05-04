var React = require('react');

var TimerControls = React.createClass({
    propTypes: {
        timerStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function(newStatus){
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function() {
        var {timerStatus} = this.props;

        var renderStartStopButton = () => {
            if (timerStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if (timerStatus === 'paused' || timerStatus === 'stopped') {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button secondary alert" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
});

module.exports = TimerControls;