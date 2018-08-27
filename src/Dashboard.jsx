import React, { Component } from 'react';

import Month from './Month';

import data from './data/calendar_data.json';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedDay: 0,
      clickedMonth: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(d, m) {
    this.setState({
      clickedDay: d,
      clickedMonth: m,
    });
  }

  render() {
    const { clickedDay, clickedMonth } = this.state;
    return (
      <div>
        {data.map(x => (
          <Month
            key={x.id}
            month={x.month}
            dayBool={x.days}
            handleClick={this.handleClick}
            clickedDay={clickedDay}
            clickedMonth={clickedMonth}
          />
        ))}
      </div>
    );
  }
}

export default Dashboard;
