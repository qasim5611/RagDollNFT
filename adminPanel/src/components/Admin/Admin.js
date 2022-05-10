import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminDrawer from "./AdminDrawer/AdminDrawer";
import Deposit from "./Deposit/Deposit";
import { Routes, Route } from "react-router-dom";
import InvestedPlans from "./Investedplans/Investedplans";
import Generalsettings from "./GeneralSetting/Generalsettings";
import SocialLinksettings from "./GeneralSetting/SocialLinksettings.jsx";
import HomeBanner from "./Home_Banner/HomeBanner.jsx";
import NftPromote from "./NFT_Market/NftPromote.jsx";
import NftPopular from "./NFT_Market/NftPopular.jsx";
import NftRecent from "./NFT_Market/NftRecent.jsx";

import NftCarousal from "./NFT_Market/NftCarousal.jsx";

import HomeServices from "./HomeServices/HomeServices.jsx";
import ServiceCreate from "./HomeServices/ServiceCreate.jsx";
import ServiceUpdate from "./HomeServices/ServiceUpdate.jsx";

import AboutUs from "./AboutUs/AboutUs.jsx";


import HomeDocs from "./Documents/HomeDocs.jsx";
import HomeDocsCreate from "./Documents/HomeDocsCreate.jsx";
import HomeDocsUpdate from "./Documents/HomeDocsUpdate.jsx";
import HomeDocsUpdateDesc from "./Documents/HomeDocsUpdateDesc.jsx";

import DevTeam from "./DevTeam/DevTeam.jsx";
import DevteamCreate from "./DevTeam/DevteamCreate.jsx";
import DevteamUpdate from "./DevTeam/DevteamUpdate.jsx";

import RoadMap from "./RoadMap/Roadmap.jsx";
import RoadmapCreate from "./RoadMap/RoadmapCreate.jsx";
import RoadmapUpdate from "./RoadMap/RoadmapUpdate.jsx";

import Blogs from "./Blogs/Blog.jsx";
import BlogsCreate from "./Blogs/BlogCreate.jsx";
import BlogsUpdate from "./Blogs/BlogUpdate.jsx";

import PrivateRoute from "./../../components/PrivateRoutes/AdminPrivateRoute";
// import PublicRoute from "./../../components/PublicRoutes/PublicRoute";


import InvestDashboard from "./InvestDashboard/InvestDashboard";
export default () => {
  return (
    <>
      <AdminDrawer>
        <Routes>
          <Route path="/" element={ <PrivateRoute> <AdminDashboard /> </PrivateRoute>} />
          <Route path="/deposit" element={ <PrivateRoute><Deposit /></PrivateRoute> } />
          <Route path="/withdraw" element={ <PrivateRoute><Deposit /></PrivateRoute>} />
          <Route path="/referral" element={ <PrivateRoute><Deposit /></PrivateRoute>} />
          {/* this below general is for site logo,name, email, sociallinkks, copyright ets.. */}
          <Route
            path="/appsetting/list/general"
            element={<Generalsettings />}
          />
          <Route path="/appsetting/list/social" element={<PrivateRoute><SocialLinksettings /></PrivateRoute>} />
          <Route path="/appsetting/list/nft-promoted" element={<PrivateRoute><NftPromote /></PrivateRoute>} />
          <Route path="/appsetting/list/nft-popular" element={<PrivateRoute><NftPopular /></PrivateRoute>} />
          <Route path="/appsetting/list/nft-recent" element={<PrivateRoute><NftRecent /></PrivateRoute>} />
          <Route path="/appsetting/list/nft-carousal" element={<PrivateRoute><NftCarousal /></PrivateRoute>} />
        
          <Route path="/appsetting/list/home-services" element={<HomeServices />} />
          <Route path="/appsetting/list/service-create" element={<ServiceCreate />} />
          <Route path="/appsetting/list/service-update/:id" element={<ServiceUpdate />} />


          <Route path="/appsetting/list/blogs" element={<Blogs />} />
          <Route path="/appsetting/list/blogs-create" element={<BlogsCreate />} />
          <Route path="/appsetting/list/blogs-update/:id" element={<BlogsUpdate />} />


            <Route path="/appsetting/list/home-docs" element={<HomeDocs />} />
          <Route path="/appsetting/list/home-createDocs" element={<HomeDocsCreate />} />
          <Route path="/appsetting/list/home-updateDocs/:id" element={<HomeDocsUpdate />} />

          <Route path="/appsetting/list/home-updateDocsDesc/:id" element={<HomeDocsUpdateDesc />} />



          <Route path="/appsetting/list/aboutUs" element={<AboutUs />} />


          <Route path="/appsetting/list/devteam" element={<DevTeam />} />
          <Route path="/appsetting/list/devteamcreate" element={<DevteamCreate />} />
          <Route path="/appsetting/list/devteamUpdate/:id" element={<DevteamUpdate />} />

         <Route path="/appsetting/list/roadmap" element={<RoadMap />} />
          <Route path="/appsetting/list/roadmapCreate" element={<RoadmapCreate />} />
          <Route path="/appsetting/list/roadmapUpdate/:id" element={<RoadmapUpdate />} />


          <Route path="/appsetting/list/homebanner" element={<PrivateRoute><HomeBanner /></PrivateRoute>} />
          {/* <Route path="/appsetting/list/homebanner" element={<HomeBanner />} /> */}
          

          <Route path="/transactions/list/pending" element={ <PrivateRoute><Deposit /></PrivateRoute>} />
          <Route path="/transactions/list/on-hold" element={ <PrivateRoute><Deposit /></PrivateRoute>} />
          <Route path="/transactions/list/deposit" element={ <PrivateRoute><Deposit /></PrivateRoute>} />
          <Route path="/transactions/list/withdrawal" element={ <PrivateRoute><Deposit /></PrivateRoute>} />
          <Route path="/transactions/list" element={ <PrivateRoute><Deposit /></PrivateRoute>} />
          <Route path="/investment/history" element={<PrivateRoute><InvestedPlans /></PrivateRoute>} />
          <Route
            path="/investment/history/active"
            element={<PrivateRoute><InvestedPlans /></PrivateRoute>}
          />
          <Route
            path="/investment/history/pending"
            element={<PrivateRoute><InvestedPlans /></PrivateRoute>}
          />
          <Route
            path="/investment/history/completed"
            element={<PrivateRoute><InvestedPlans /></PrivateRoute>}
          />
          <Route path="/investment/dashboard" element={<InvestDashboard />} />
        </Routes>
      </AdminDrawer>
    </>
  );
};
