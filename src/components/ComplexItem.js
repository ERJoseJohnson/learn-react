// You can use a CSS file to do additional styling on the HTML components
import './ComplexItem.css';

function ComplexItem(){
    const date = new Date(2022, 0, 29);    // Use dynamic assignment to assign value to a HTML element
    const title = "Car Insurance";
    const price = 294.67

    {/* To return multiple HTML elements, you have to encase them in a single element. 
    This is because you can only return a single root element for React to render */}
    return (
        
        <div className="complex-item">
            {/* NOTE: You have to use class-name instead of the usual class keyword for JSX syntax */}
            <div>
                { /* You can use normal JS inside these curly braces. You can use this to assign dynamic data to the HTML elements */
                    date.toISOString()
                }
            </div>
            <div className="complex-item__description">
                {/* It's also possible to just hard code values to a HTML element */ }
                <h2>Car Insurance</h2>
                <div className="complex-item__price">${price}</div>
            </div>
        </div>
    );
}

export default ComplexItem;