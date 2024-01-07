/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { fetchDrugs, deleteDrug } from '../../services/api';
import DrugList from './DrugList';
import LoadingSpinner from '../common/Spinner';
import omri from '../../assets/omri.jpg'
import './MainPage.css';
import Form from 'react-bootstrap/Form';


const MainPage = () => {
    //const [drugs, setDrugs] = useState([]);
    //const [loading, setLoading] = useState(false);

    //useEffect(() => {
    //    const fetchData = async () => {
    //        try {
    //            const drugsData = await fetchDrugs();
    //            setDrugs(drugsData);
    //        } catch (error) {
    //            // Handle error
    //        } finally {
    //            setLoading(false);
    //        }
    //    };

    //    fetchData();
    //}, []);

    //const handleDelete = async (drugToDelete) => {
    //    try {
    //        await deleteDrug(drugToDelete);
    //        setDrugs((prevDrugs) =>
    //            prevDrugs.filter(
    //                (drug) =>
    //                    JSON.stringify(drug) !== JSON.stringify(drugToDelete)
    //            )
    //        );
    //    } catch (error) {
    //        // Handle error
    //    }
    //};

    //const handleEdit = (index) => {
    //    // Implement logic to handle editing
    //    // You may redirect to the edit page or show a modal for editing
    //    console.log(`Editing drug at index ${index}`);
    //};

    return (
        <div> 
            <img src={omri} alt="" />
            <br />
            <br />
            <br />
            <br />
                <Form.Select size="lg">
                    <option>תחום לימוד</option>
                    <option>חדווא 1</option>
                    <option>חדוא 2</option>
                    <option>אלגברה 1</option>
                    <option>אלגברה 2</option>
                    <option>מל"מ</option>
                    <option>מת"מ</option>
                    <option>מבנה נתונים</option>
                    <option>אלגוריתמים</option>
                    <option>תכנות מונחה עצמים </option>
                    <option> אוטומטים ושפות פורמליות</option>
                </Form.Select>
                <br />
                <Form.Select>
                    <option>Default select</option>
                </Form.Select>
                <br />
                <Form.Select size="sm">
                    <option>Small select</option>
                </Form.Select>
        </div>
    );
}

export default MainPage;