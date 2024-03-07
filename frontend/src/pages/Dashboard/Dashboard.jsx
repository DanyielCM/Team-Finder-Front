import styles from "./Dashboard.module.css";
// import DateTime from "../../components/common/DateTime";
import MainNav from "./MainNav/MainNav.jsx";
import SecondaryNav from "./SecondaryNav/SecondaryNav.jsx";
import Banner from "./Banner/Banner.jsx";


export default function Dashboard() {
    return (
        <div className={styles.background}>
            <MainNav></MainNav>
            <SecondaryNav></SecondaryNav>
            <Banner></Banner>
        </div>
    )
}
            {/* 
            <Banner></Banner>
            <Main></Main> */}