var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var TimeKeeper = require('TimeKeeper');

var Timer = React.createClass({
  getInitialState: function () {
    return {
     count: 0,
     timerStatus: 'stopped',  //will I even need this anymore?
     workingStatus: 'paused',  //will either be "working" "relaxing" "paused" "stopped"
     timeSpentWorking: 0,
     timeSpentRelaxing: 0,
     lastState: undefined
    };
  },
 componentDidUpdate: function (prevProps, prevState) {
        if (this.state.workingStatus !== prevState.workingStatus) {
          switch (this.state.workingStatus) {
            case 'working':  /*case 'started':*/
              clearInterval(this.timer);
              this.startTimer();
              break;
            case 'relaxing':
              clearInterval(this.timer);
              this.startTimer();
              break;
            case 'paused':
              clearInterval(this.timer);
              break;
            case 'stopped':  /*'stopped'*/
              clearInterval(this.timer);
              this.setState({
                count: 0,
                timeSpentWorking: 0,
                timeSpentRelaxing: 0
              });
              break;
          }
        }
  },
  componentWillUnmount: function () {
      clearInterval(this.timer);
  },
  startTimer: function() {
      this.timer = setInterval(() => {
          if (this.state.workingStatus === 'working') {
            this.setState({
              timeSpentWorking: this.state.timeSpentWorking + 1
            })
          } else if (this.state.workingStatus === 'relaxing') {
            this.setState({
              timeSpentRelaxing: this.state.timeSpentRelaxing + 1
            })
          }
          this.setState({
              count: this.state.count + 1
          })
      }, 1000)
  },
  handleStatusChange: function (newTimerStatus, newWorkingStatus) {
      this.setState({
        timerStatus: newTimerStatus,
        workingStatus: newWorkingStatus
      });
      // this.previousStateHolder();
  },
  render: function () {
    var {count, timerStatus, timeSpentWorking, timeSpentRelaxing, workingStatus, timerStatus, lastState} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} workingStatus={workingStatus} />
        <Controls countdownStatus={timerStatus} workingStatus={workingStatus} onStatusChange={this.handleStatusChange}  />
        <TimeKeeper timeSpentWorking={timeSpentWorking} timeSpentRelaxing={timeSpentRelaxing} workingStatus={workingStatus} timerStatus={timerStatus}/>
      </div>
    );
  }
});

module.exports = Timer;