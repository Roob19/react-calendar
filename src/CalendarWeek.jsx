import React from 'react';

function CalendarWeek(props) {
    return (
            <span>
                {props.days.name}
            </span>
    );
}

export default CalendarWeek;