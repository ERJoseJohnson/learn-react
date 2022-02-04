import './Card.css';

/*
    This a generic Card component. The purpose of this component is to show the concept of 'Composition'.
    This is different from inheritance and the details of it can be found here: https://reactjs.org/docs/composition-vs-inheritance.html
    React encourages components to be composed together, instead of being extended or inherited.

    What this means is that we can create a generic component and have the other components compose/add on top of it. 
    Here we are extracting some aspects of the UI, specifically the roundness of the card and the box shadow, found in the CSS file.
    This forms a baseline for this Card component to be used in other components with more CSS specifications.
*/

function Card(props){

    // This allows for more CSS styling to be composed/added on top of the existing css
    // The className is the CSS that is passed to the Card component in another component 
    const classes = 'card ' + props.className;
    
    return (
        // The props.children is a reserved keyword. It allows this Card component to wrap around other React components.
        // This is done because the Card componet does not know specifically which components will be made down the tree. 
        <div className={classes}>{props.children}</div>
    );
}

export default Card;