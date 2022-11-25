function DessertsList(props) {
    // Implement the component here.
    return (
        <ul>
            {props.data.map((d) => (
                <li>{`${d.name} - ${d.calories} `}</li>
            ))}         
        </ul>
    );
  }
  
  export default DessertsList;
  