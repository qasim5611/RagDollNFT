import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminDrawer from "./AdminDrawer/AdminDrawer";
import Deposit from "./Deposit/Deposit";
import { Routes, Route } from "react-router-dom";
import InvestedPlans from "./Investedplans/Investedplans";
import InvestDashboard from "./InvestDashboard/InvestDashboard";
export default () => {
  return (
    <>
      <AdminDrawer>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Deposit />} />
          <Route path="/referral" element={<Deposit />} />
          <Route path="/transactions/list/pending" element={<Deposit />} />
          <Route path="/transactions/list/on-hold" element={<Deposit />} />
          <Route path="/transactions/list/deposit" element={<Deposit />} />
          <Route path="/transactions/list/withdrawal" element={<Deposit />} />
          <Route path="/transactions/list" element={<Deposit />} />
          <Route path="/investment/history" element={<InvestedPlans />} />
          <Route
            path="/investment/history/active"
            element={<InvestedPlans />}
          />
          <Route
            path="/investment/history/pending"
            element={<InvestedPlans />}
          />
          <Route
            path="/investment/history/completed"
            element={<InvestedPlans />}
          />
          <Route path="/investment/dashboard" element={<InvestDashboard />} />
        </Routes>
      </AdminDrawer>
    </>
  );
};
