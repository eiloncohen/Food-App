import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = props => {
    return(
    <>
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton />
    </header>
    <div className={styles["main-image"]}>
        <img src={mealsImage} alt=""/>
    </div>
    </>
    )
}

export default Header