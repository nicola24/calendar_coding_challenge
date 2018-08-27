import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Day from './Day';

const daysInMonth = (str) => {
  const days = [];
  for (let i = 1; i <= moment(str).daysInMonth(); i += 1) {
    days.push(i);
  }
  return days;
};

const Month = ({
  month,
  dayBool,
  handleClick,
  clickedDay,
  clickedMonth,
}) => (
  <div>
    <div>
      <h3>{month.str}</h3>
    </div>
    <div className="grid-container">
      {daysInMonth(month.nbr).map(x => (
        <Day
          key={x}
          day={x}
          dayBool={dayBool}
          handleClick={handleClick}
          clickedDay={clickedDay}
          clickedMonth={clickedMonth}
          month={month.str}
        />
      ))}
    </div>
  </div>
);

Month.propTypes = {
  month: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  dayBool: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
  clickedDay: PropTypes.number.isRequired,
  clickedMonth: PropTypes.string.isRequired,
};

export default Month;
