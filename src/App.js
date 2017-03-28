import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import ms from 'ms';
import Device from 'tago/device';
import emulators from './emulators';
const minInterval = 10000;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInterval: minInterval / 1000,
      deviceType: 'null',
      token: null,
      running: false,
      timer: null,
      logs: []
    };

    this.handleToken = this.handleToken.bind(this);
    this.handleTimeInterval = this.handleDeviceType.bind(this);
    this.handleDeviceType = this.handleDeviceType.bind(this);
    this.addLog = this.addLog.bind(this);
  }

  handleToken(event) {
    const token = event.target.value;
    this.setState({ token });
  }

  handleTimeInterval(event) {
    const timeInterval = event.target.value;
    this.setState({ timeInterval });
  }

  handleDeviceType(event) {
    const deviceType = event.target.value;
    this.setState({ deviceType });
  }

  buttonRun() {
    if (!this.state.running) {
      return <button type="button" onClick={this.runEmulator.bind(this)} className="btn btn-outline-primary btn-lg btn-block">Start Emulator</button>;
    } else {
      return <button type="button" onClick={this.stopEmulator.bind(this)} className="btn btn-outline-danger btn-lg btn-block">Stop Emulator</button>;
    }
  }

  addLog(record) {
    const now = moment().format('LTS');
    const newRecord = `${now} - ${record}`;
    const logs = [newRecord].concat(this.state.logs);
    this.setState({ logs });
  }

  runEmulator() {
    if (!this.state.token) {
      return alert("Invalid device token!");
    }
    else if (!emulators[this.state.deviceType]) {
      return alert("Invalid device type!");
    }

    const { timeInterval } = this.state;
    const msInterval = ms(`${timeInterval} seconds`);
    const interval = msInterval <= minInterval ? minInterval : msInterval;

    const sendDataFunc = () => {
      const device = new Device(this.state.token);
      device.insert(emulators[this.state.deviceType]()).then(this.addLog).catch(this.addLog);
    };

    this.setState({
      running: true,
      timeInterval: interval / 1000,
      timer: setInterval(sendDataFunc, msInterval),
    });

    sendDataFunc();
  }

  stopEmulator() {
    clearInterval(this.state.timer);
    this.setState({ running: false, timer: null });
  }

  render() {
    if (!this.state.logs.length) {
      this.addLog('Emulator loaded successfully.');
    }
    return (
      <div className="App">
        <div className="container">
          <div className="mt-1">
            <h1>Tago Emulator</h1>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Token</label>
              <input type="text" className="form-control" value={this.state.token} onChange={this.handleToken} id="formGroupExampleInput" placeholder="Device Token" />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Type of Device</label>
              <select className="form-control" value={this.state.deviceType} onChange={this.handleDeviceType}>
                <option disabled defaultValue value="null">Select a Device Type</option>
                <option value="car">Car</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="example-number-input">Time Interval <small>(seconds)</small></label>
              <div>
                <input className="form-control" type="number" value={this.state.timeInterval} onChange={this.handleTimeInterval} id="example-number-input" />
              </div>
            </div>
            {this.buttonRun()}
          </form>

          <div className="container">
            <div className="jumbotron">
              {this.state.logs.map(log => {
                return <p>{log}</p>;
              })}
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">Tago @ Open Source</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
