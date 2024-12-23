import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
// import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import VehicleInspectionForms from "./VehicleInspectionForms";
import IncidentReportForm from "./IncidentReportForm";
import VehicleMovingForm from './VehicleMovingForm';
import TruckInspectionForm from "./TruckInspectionForm";
import DailyReports from './DailyReports';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';

import VIForm from "./VIForm";
import VMForm from './VMForm';
import DRForm from './DRForm';
import IRForm from './IRForm';
import TIForm from "./TIForm";

import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";
import S3FileList from "../components/S3FileList";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
    const [userRole,setUserRole] = useState(localStorage.getItem('accessRole'));
    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }
if(userRole===null){
    return <Redirect to={Routes.Signin.path} />
}
  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => {
    return (
        <Switch>
            {/* <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} /> */}
            <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
            <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
            <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
            <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
            <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
            <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
            <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />
            {/* <Route exact path="/{Routes.Contracts.path}/:projectName" component={Contracts} /> */}

            {/* pages */}
            <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
            <RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />
            <RouteWithSidebar exact path={Routes.VehicleInspectionForms.path} component={VehicleInspectionForms} />
            <RouteWithSidebar exact path={Routes.IncidentReportForm.path} component={IncidentReportForm} />
            <RouteWithSidebar exact path={Routes.VehicleMovingForm.path} component={VehicleMovingForm} />
            <RouteWithSidebar exact path={Routes.DailyReports.path} component={DailyReports} />
            <RouteWithSidebar exact path={Routes.TruckInspectionForm.path} component={TruckInspectionForm} />
            <RouteWithSidebar exact path={Routes.Projects.path} component={Projects} />
            <RouteWithSidebar exact path={Routes.ProjectDetails.path} component={ProjectDetails} />
            <RouteWithSidebar exact path={Routes.VIForm.path} component={VIForm} />
            <RouteWithSidebar exact path={Routes.VMForm.path} component={VMForm} />
            <RouteWithSidebar exact path={Routes.DRForm.path} component={DRForm} />
            <RouteWithSidebar exact path={Routes.IRForm.path} component={IRForm} />
            <RouteWithSidebar exact path={Routes.TIForm.path} component={TIForm} />
            <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />

            {/* components */}
            <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
            <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
            <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
            <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
            <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
            <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
            <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
            <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
            <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
            <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
            <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
            <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
            <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
            <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
            <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
            <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />

            {/* documentation */}
            <RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />
            <RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />
            <RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
            <RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />
            <RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
            <RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />
            <RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} />

            <RouteWithSidebar exact path={Routes.S3.path} component={() => <S3FileList folderUrl="https://cdi-build.s3.us-east-1.amazonaws.com/VI-forms/form59" />} />
            <Redirect to={Routes.NotFound.path} />
        </Switch>
    );
}
