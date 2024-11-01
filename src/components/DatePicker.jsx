import { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { Days } from "./Days";

export function DatePicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="date-picker-container">
      <button onClick={() => setIsOpen(!isOpen)} className="date-picker-button">
        {value == null ? "Select a date" : format(value, "MMM do, yyyy")}
      </button>
      {isOpen && <DatePickerModal value={value} onChange={onChange} />}
    </div>
  );
}

export function DatePickerModal({ value, onChange }) {
  const [visibleMonth, setVisibleMonth] = useState(value || new Date());
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth)),
    end: endOfWeek(endOfMonth(visibleMonth)),
  });

  function showPreviousMonth() {
    setVisibleMonth((currntMonth) => {
      return addMonths(currntMonth, -1);
    });
  }
  function showNextMonth() {
    setVisibleMonth((currntMonth) => {
      return addMonths(currntMonth, 1);
    });
  }

  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button
          onClick={showPreviousMonth}
          className="prev-month-button month-button"
        >
          &larr;
        </button>
        <div className="current-month">
          {format(visibleMonth, "MMMM - yyyy")}
        </div>
        <button
          onClick={showNextMonth}
          className="next-month-button month-button"
        >
          &rarr;
        </button>
      </div>
      <Days />
      <div className="date-picker-grid-dates date-picker-grid">
        {visibleDates.map((date) => (
          <button
            onClick={() => onChange(date)}
            key={date.toString()}
            className={`date ${
              date.getMonth() != value.getMonth()
                ? "date-picker-other-month-date"
                : ""
            } ${isSameDay(date, value) && "selected"} ${
              isSameDay(date, new Date()) && "today"
            }`}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
}
