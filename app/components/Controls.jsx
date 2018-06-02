var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function (newTimerStatus, newWorkingStatus) {
        return () => {
            this.props.onStatusChange(newTimerStatus, newWorkingStatus);   
        }
    },
    render: function () {
        var {countdownStatus, workingStatus, lastState} = this.props;
        var renderStartStopButton = () => {
            if (workingStatus === 'working') {
                return <button className = "button success" onClick={this.onStatusChange('paused', 'relaxing')}>Relax</button>
            } else if (workingStatus === 'relaxing') {
                return <button className = "button primary" onClick={this.onStatusChange('started', 'working')}>Start work</button>
            } else if ('paused') {
                    return <button className = "button primary" onClick={this.onStatusChange('started', 'working')}>Start work</button>
            }
        }
        var renderPauseButton = () => {
            if (workingStatus !== 'paused') {
                return <button className = "button secondary" onClick={this.onStatusChange('paused', 'paused')}>Pause</button>
            }
        }
        
        // var renderWorkRelaxButton = () => {
        //     if (workingStatus === 'working') {
        //         return <button className="button alert hollow" onClick={this.onStatusChange('stopped', 'relaxing')}>Take a break</button>
        //     } else {
        //         return <button className="button alert hollow" onClick={this.onStatusChange('started', 'working')}>Back to work</button>
        //     }
        // }
        
        return (
            <div className = "controls button-group">
                {renderStartStopButton()}
                {renderPauseButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped', 'stopped')}>Clear Session</button>
            </div>
        )
    }
    
});

module.exports = Controls;