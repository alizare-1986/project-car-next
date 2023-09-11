import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";

function Sedan() {
    const sedanCars = carsData.filter(car => car.category==='sedan')

    return (
        <div>
          <CarsList data={sedanCars}/>
        </div>
    );
}

export default Sedan;