import styles from "./Card.module.css";
import Location from "../icons/Location";
import Link from "next/link";
function Card(props) {
  const { name, image, id, model, year, distance, location, price } = props;
  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <img src={image} className={styles.image} alt="cars" />
        <h4 className={styles.title}>{`${name}  ${model}`}</h4>
        <p className={styles.detail}>{`${year} . ${distance}km`}</p>
        <div className={styles.footer}>
          <p className={styles.price}>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
