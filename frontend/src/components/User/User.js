import UserDashboard from "./UserDashboard/user-dashboard";
import UserDrawer from "../UserDrawer/UserDrawer";
import UserTransaction from "./UserTransactions/user-transaction";
import Investment from "./investment/investment";
import Plan from "./ourplans/plan";
import Profile_part from "./user-profile/profile/profile_part";
import UserAccount from "./user-profile/account/userAccount";
import User_security from "./user-profile/security/user_security";
import UserProfileActivity from "./user-profile/activity/userProfileActivity";
import Referrals from "./Referrals/Referrals";
import Deposit from "./deposite/deposite";
import Withdraw from "./withdraw-page/withdraw";
import Investearn from "./Investearn/Investearn";
import Footer from "./footer/footer";
import { Routes, Route } from "react-router-dom";

const User = () => {
  return (
    <>
      <UserDrawer>
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          {/* <Route path="/dashboard" element={<UserDashboard />} /> */}
          <Route path="/transactions" element={<UserTransaction />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/investment/plans" element={<Plan />} />
          <Route path="/profile" element={<Profile_part />} />
          <Route path="/profile/accounts" element={<UserAccount />} />
          <Route path="/profile/settings" element={<User_security />} />
          <Route path="/profile/activity" element={<UserProfileActivity />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/invest" element={<Investearn />} />
        </Routes>
        <Footer />
      </UserDrawer>
    </>
  );
};

export default User;
