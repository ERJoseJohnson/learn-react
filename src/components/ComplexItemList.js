import './ComplexItem.css';
import ComplexItem from './ComplexItem';

/*
    You can also use loops to create multiple components instead of hardcoding them one by one.
    
    Belo are two examples of how to create components automatically through loops
*/
function ComplexItemList(props) {
    
    /*
        The first way is by using the usual for loop.

         A react component expects either a string, another component, or an array of components. For loops do not return any of these.
         Therefore, you cannot just include a for loop in the return method.
         You have to instead construct an array of components before you can assign the array to the return funtion.
    */
    let components = [];

    for (let i = 0; i < 5; i++) {
        components.push(<ComplexItem></ComplexItem>);
    }

    /* 
        The second way is by using some form of iteratable on a dictionary or an array. 

        This example uses a map funciton on a an narray of the keys in the dictionary 'items'.
        It is fine to use an iterable directly in the return function because the mapping function can be configured to return a component.
    */

    // This is the dictionary used for the map function
    const items = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];

    return (
        <div>
            {
                // The map function maps a function to each item in the array.
                // For each of the item, we return a componpent
                Object.keys(items).map(
                    (item,index) => {
                        return <ComplexItem></ComplexItem>
                    }
                )
            }

            
            {/* This is where the resultant array of the for loop is returned */}
            <div>{components}</div>
        </div>
        
    );
}

export default ComplexItemList;