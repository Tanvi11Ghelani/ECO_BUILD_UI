import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Footer from './Pages/footer'; // ← Import Footer
import PlusSeriesSection from './Pages/plus-series'; // adjust path as needed
import Login from './Pages/login';
import Registration from './Pages/Registration';
import BelowTheConstructionSlope from './Pages/below-the-construction-slope';
import FlamableConstruction from './Pages/flamable-construction';
import NonCombustibleConstruction from './Pages/non-combustible-construction';
import FireWall from './Pages/firewall';
import FormUnitProfile from './Pages/form-unit-profile';
import BIMLibrary from './Pages/bim-library';
import EarlyDesignCriteria from './Pages/early-design-criteria';
import TheCombinedSeries from './Pages/the-combined-series';
import OneSeries from './Pages/one-series';
import NUDURASeries from './Pages/nudura-series';
import Plannig from './Pages/planning';
import CatalogForDirectDownload from './Pages/catalog-for-direct-viewing';
import FileToDownload from './Pages/files-to-download';
import StandardAndLaboratoryCertification from './Pages/standard-and-laboratory-certifications';
import Specifications from './Pages/specifications';
import Brouchers from './Pages/brouchers';
import ProjectDescription from './Pages/project-description';
import ArticlesAndArticles from './Pages/articles-and-articles';
import RockPlaster from './Pages/rock-plaster';
import PhotoGallery from './Pages/photo-gallery';
import VideoGalery from './Pages/video-gallery';
import Academy from './Pages/academy';
import EcobuildAcademy from './Pages/ecobuild-academy';
import ContactUS from './Pages/contactus';
import PrivateRoute from './privateroute';
import FAQ from './Pages/faq';
import ForgetPassword from './Pages/forgetpassword';
import ThermalMass from './Pages/thermal-mass';
import SustanableConstruction from './Pages/sustainable-construction';
import Innovation from './Pages/innovation';
import ConstructionMethods from './Pages/construction-methods';
import NodoraSeries from './Pages/nodora-series';
import NodoraXR35 from './Pages/nodora-xr35';
import AboutUS from './Pages/about-us';
import BroadcastNews from './Pages/broadcast-news';
import WriteAboutUsInPress from './Pages/about-us-in-press';
import './i18n/index';

// import other pages if you have them

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plus-series" element={<PlusSeriesSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/belowtheconstructionslope" element={
          <BelowTheConstructionSlope />
          } 
          />
        <Route path="/flamableconstruction" element={
          <FlamableConstruction />
          } 
          />
        <Route path="/noncombstibleconstruction" element={
          <NonCombustibleConstruction />
          } 
          />
        <Route path="/firewall" element={
          <FireWall />
          } 
          />
        <Route path="/formunitprofile" element={
          <FormUnitProfile />
          } 
          />
        <Route path="/bimlibrary" element={
          <BIMLibrary />
          } 
          />
        <Route path="/earlydesigncriteria" element={
          <EarlyDesignCriteria />
          } 
          />
        <Route path="/thecombinedseries" element={
          <TheCombinedSeries />
          } 
          />
        <Route path="/oneseries" element={
          <OneSeries />
          } 
          />
        <Route path="/nuduraseries" element={
          <NUDURASeries />
          } 
          />
        <Route path="/planning" element={
          <Plannig />
          } 
          />
        <Route path="/catalogfordirectviewing" element={
          <CatalogForDirectDownload />
          } 
          />
        <Route path="/filestodownload" element={
          <FileToDownload />
          } 
          />
        <Route path="/standardandlaboratory" element={
          <StandardAndLaboratoryCertification />
          }
           />
        <Route path="/specification" element={
          <Specifications />
          }
           />
        <Route path="/brochures" element={
          <Brouchers />
        }
           />
        <Route path="/projectdescription" element={
          <ProjectDescription />
          } 
          />
        <Route path="/articales" element={
          <ArticlesAndArticles />
          } 
          />
        <Route path="/rockplaster" element={
          <RockPlaster />
          } 
          />
        <Route path="/photogallery" element={
          <PhotoGallery />
          } 
          />
        <Route path="/videogallery" element={
          <VideoGalery />
          } 
          />
        <Route path="/academy" element={
          <EcobuildAcademy />
          } 
          />
        <Route path="/contactus" element={
          <ContactUS />
        }
        />
        <Route path="/faq" element={
          <FAQ />
        }
        />
      <Route path="/thermalmass" element={<ThermalMass />} />
      <Route path="/sustainable-construction" element={<SustanableConstruction />} />
      <Route path="/innovation" element={<Innovation />} />
      <Route path="/construction-methods" element={<ConstructionMethods />} />
      <Route path="/nodoraseries" element={<NodoraSeries />} />
      <Route path="/nodoraxr35" element={<NodoraXR35 />} />
      <Route path="/aboutus" element={<AboutUS />} />
      <Route path="/aboutusinpress" element={<WriteAboutUsInPress />} />
      <Route path="/broadcastnews" element={<BroadcastNews />} />
      {/* <Route path="/aboutuspress" element={<WriteAboutUsInPress />} /> */}

        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
