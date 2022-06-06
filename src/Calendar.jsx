import React from 'react';
import CalendarWeek from './CalendarWeek';
import CalendarMonth from './CalendarMonth';

function Calendar({days}) {
    return (
        <ul>
            <li>{days.map((days, index) => 
                    <CalendarWeek days={days} index={index}/>
                )}
            </li>
            <li>
                {dates.map((dates, index) => 
                    <CalendarMonth dates={dates} index={index}/>
                )}
            </li>
        </ul>
    );
}

export default Calendar;