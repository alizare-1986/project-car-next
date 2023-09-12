import Link from 'next/link';
import styles from './AllButton.module.css'
function AllButton() {
    return (
        <div className={styles.container}>
          <Link href={'/cars'}>see all cars</Link>  
        </div>
    );
}

export default AllButton;