/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DrugsView from './components/Drug/DrugsView';
import OrelDamtiPage from './components/Prescription/PrescriptionsView';
import DrugEditPage from './components/Drug/DrugEditPage';
import TeacherPage from './components/Teacher/TeacherPage';
import LoginPage from './components/Login/LoginPage';
import TeacherProfile from './components/AddProfile/TeacherProfile';
import PupilProfile from './components/AddProfile/PupilProfile';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout defaultPage="drugs">
                            <DrugsView />
                        </Layout>

                    }
                />
                <Route
                    path="/drugs/edit/:index"
                    element={
                        <Layout defaultPage="drugs">
                            <DrugEditPage />
                        </Layout>
                    }
                />
                <Route
                    path="/orelDamti"
                    element={
                        <Layout defaultPage="orelDamti">
                            <OrelDamtiPage />
                        </Layout>
                    }
                />
                <Route
                    path="/Teacher"
                    element={
                        <Layout defaultPage="Teacher">
                            <TeacherPage />
                        </Layout>
                    }
                />
                <Route
                    path="/AddProfile"
                    element={
                        <Layout defaultPage="AddProfile">
                            <TeacherPage />
                        </Layout>
                    }
                />
                <Route
                    path="/Login"
                    element={
                        <Layout defaultPage="Login">
                            <LoginPage />
                        </Layout>
                    }
                />
                <Route
                    path="/TeacherProfile"
                    element={
                        <Layout defaultPage="TeacherProfile">
                            <TeacherProfile />
                        </Layout>
                    }
                />
                <Route
                    path="/PupilProfile"
                    element={
                        <Layout defaultPage="PupilProfile">
                            <PupilProfile />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;