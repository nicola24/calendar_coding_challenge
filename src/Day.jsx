import React from 'react';
import PropTypes from 'prop-types';

const Day = ({
  day,
  month,
  dayBool,
  handleClick,
  clickedDay,
  clickedMonth,
}) => (
  <div
    className={clickedDay === day && clickedMonth === month ? 'grid-item-red' : 'grid-item'}
    onClick={() => handleClick(day, month)}
    onKeyPress={() => handleClick(day, month)}
    role="button"
    tabIndex={0}
  >
    <div>
      <p>{day}</p>
      {dayBool[day] ? <div className="dot" /> : null}
    </div>
  </div>
);

Day.propTypes = {
  day: PropTypes.number.isRequired,
  dayBool: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
  clickedDay: PropTypes.number.isRequired,
  clickedMonth: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
};

export default Day;
