// You can use a CSS file to do additional styling on the HTML components
import CalendarDate from './CalendarDate';
import Card from './Card';
import './ComplexItem.css';

function ComplexItem(props){

    // To return multiple HTML elements, you have to encase them in a single element. 
    // This is because you can only return a single root element for React to render
    return (
        
        // NOTE: You have to use class-name instead of the usual class keyword for JSX syntax
        <Card className="complex-item">

            <CalendarDate date={props.date}></CalendarDate>

            <div className="complex-item__description">
                {/* It's also possible to just hard code values to a HTML element */ }
                {/* <h2>Car Insurance</h2> */}
                { /* You can use normal JS inside these curly braces. You can use this to assign dynamic data to the HTML elements */ }
                <p className="complex-item">{props.title}</p>
                <div className="complex-item__price">${props.price}</div>
            </div>
        </Card>
    );
}

export default ComplexItem;