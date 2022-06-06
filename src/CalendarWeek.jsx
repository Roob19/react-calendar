import React from 'react';

function CalendarWeek(props) {
    return (
            <td>
                {props.days.name}
                {props.dates}
            </td>
    );
}

export default CalendarWeek;