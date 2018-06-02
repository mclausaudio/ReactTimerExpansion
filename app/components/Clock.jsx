var React = require('react');

var Clock = React.createClass({
    getDeafultProps: function () {
        totalSeconds: 0
    },
    propTypes: {
        totalSeconds: React.PropTypes.number
    },
    formatSeconds: function (totalSeconds) {
        var seconds = totalSeconds % 60;
        var minutes = Math.floor(totalSeconds / 60);
        
        if(seconds < 10) {
            seconds = "0" + seconds;
        }
        
        if(minutes < 10) {
            minutes = "0" + minutes;
        }
        
        
        return minutes + ":" + seconds;
    },
    render: function(){
        var {totalSeconds, workingStatus} = this.props;
        var bgColor;
        if (workingStatus === "working") {
            bgColor = '#3adb76';
        }
        
        
        return (
            <div className="clock" style={{background: bgColor}}>

                <p className="clock-text">{workingStatus.charAt(0).toUpperCase() + workingStatus.slice(1)}</p>
                <p className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </p>
            </div>
        );
    }
});
// style='background-color:#3adb76'>
module.exports = Clock;