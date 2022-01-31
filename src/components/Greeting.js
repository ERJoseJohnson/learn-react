/*
Arguments that have been passed to the component can only be accessed via the first argument of the component function.

This `props` argument can be treated as a JS object with some key-value pairs. 
Some of which can be assigned as arguments to the component.
*/
function Greeting(props) {

    {/* Access the input argument via the props object */}
    if (props.logIn){
        return <h4>Greetings boss!</h4>
    }   
    return <h4>Greetings puny human!</h4>
}

export default Greeting;