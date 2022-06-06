import React from 'react';
import CalendarWeek from './CalendarWeek';

function Calendar({days}) {
    return (
        <table>
            <tr>
                {days.map((days, index) => 
                    <CalendarWeek days={days} index={index}/>
                )}
                {DataTransfer.map((dates, index) => 
                    <CalendarWeek dates={dates} index={index}/>
                )}
            </tr>
        </table>
    );
}

export default Calendar;