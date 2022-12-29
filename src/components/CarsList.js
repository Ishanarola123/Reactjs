import React from 'react'
function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
function CarsList() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
      ];
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <ul>
      {/* here key means id inshort key value pair  */}
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </div>
  )
}

export default CarsList
