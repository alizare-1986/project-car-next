import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";

function Suv() {
    const suvCars = carsData.filter(car=> car.category=== 'suv')
    return (
        <div>
           <CarsList data={suvCars} />
        </div>
    );
}

export default Suv;