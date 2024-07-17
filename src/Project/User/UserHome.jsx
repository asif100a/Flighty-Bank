import BalanceInquery from "../../Components/Parts/BalanceInquery";
import Header from "../../Components/Parts/Header";
import UserRoute from "../../Components/Parts/UserRoute";

const UserHome = () => {
    return (
        <section>
            <Header />
            <BalanceInquery />
            <UserRoute />
        </section>
    );
};

export default UserHome;