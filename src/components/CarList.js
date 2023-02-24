import { useSelector } from 'react-redux'

function CarList() {
    const cars = useSelector((state) => {
        return state.cars.data;
    });

    console.log(cars)

    return <div>Car List</div>
}

export default CarList;