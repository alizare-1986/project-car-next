import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsDetails from "../../components/templates/CarsDetails";

function CarDeatails(props) {
    const router = useRouter()
    const {carId} = router.query
    const carDetails = carsData[carId-1]
    return (
        <div>
          <CarsDetails {...carDetails}/>
        </div>
    );
}

export default CarDeatails;