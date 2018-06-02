var React = require('react');


var TimeKeeper = React.createClass({
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
   render: function () {
       var {totalSeconds, timeSpentWorking, timeSpentRelaxing, workingStatus, timerStatus} = this.props;
       
        return (
            <div className="time-keeper">
               <p>You are currently {workingStatus}</p>
               <p>Time spent working: <span className="total-working-time-text">{this.formatSeconds(timeSpentWorking)}</span></p>
               <p>Time spent relaxing: <span className="total-relaxing-time-text">{this.formatSeconds(timeSpentRelaxing)}</span></p>
               <p>Total time: {this.formatSeconds(totalSeconds)}</p>
            </div>
        )
   } 
});

module.exports = TimeKeeper;