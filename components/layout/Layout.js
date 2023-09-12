import Link from 'next/link';
import styles from './Layout.module.css'
function Layout({children}) {
    return (
        <>
        <header className={styles.header}>
            <Link href={'/'}>
            <h2>PROJRCT_CAR</h2>
            <p>choose and buy your car</p>
            </Link>
        </header>
        <div className={styles.container}>
            {children}
        </div>
        <footer className={styles.footer}>
            project-car ... with Next.js &copy;
        </footer>
        </>
    );
}

export default Layout;