import Card from "./Card";
import "./CalendarDate.css"

function CalendarDate(props){

    // Do the calculations out of the return method for clarity
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
    // Componse on top of the existing card component
    <Card className="calendar-date">
        <div className="calendar-date__month">{month}</div>
        <div className="calendar-date__year">{year}</div>
        <div className="calendar-date__day">{day}</div>
    </Card>
    );
}

export default CalendarDate;