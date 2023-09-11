import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";

function Sport() {
    const sportCars= carsData.filter(car => car.category==='sport')
    return (
        <div>
            <CarsList data={sportCars} />
        </div>
    );
}

export default Sport;