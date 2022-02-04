// You can use a CSS file to do additional styling on the HTML components
import Card from './Card';
import './ComplexItem.css';

function ComplexItem(props){

    // To return multiple HTML elements, you have to encase them in a single element. 
    // This is because you can only return a single root element for React to render
    return (
        
        <Card className="complex-item">
            {/* NOTE: You have to use class-name instead of the usual class keyword for JSX syntax */}
            <div>
                { /* You can use normal JS inside these curly braces. You can use this to assign dynamic data to the HTML elements */
                    props.date.toISOString().substring(0, 10)
                }
            </div>
            <div className="complex-item__description">
                {/* It's also possible to just hard code values to a HTML element */ }
                {/* <h2>Car Insurance</h2> */}
                <p className="complex-item">{props.title}</p>
                <div className="complex-item__price">${props.price}</div>
            </div>
        </Card>
    );
}

export default ComplexItem;