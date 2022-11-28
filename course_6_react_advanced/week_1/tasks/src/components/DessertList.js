const DessertsList = (props) => {
    const lowCaloriesDesserts = props.data
    //filtering data to get calories < 500
      .filter((dessert) => {
        return dessert.calories < 500;
      })

      //sort calories from data filtered
      .sort((a, b) => { 
        return a.calories - b.calories; 
      })

      //show in map filtered and sorted data
      .map((dessert) => { 
        return ( 
          <li>
            {dessert.name} - {dessert.calories} cal 
          </li> 
        ); 
      }); 
    return <ul>{lowCaloriesDesserts}</ul>; 
   
   }
   export default DessertsList; 
   
   
  