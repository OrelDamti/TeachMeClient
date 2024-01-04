/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { fetchDrugs, deleteDrug } from '../../services/api';
import DrugList from './DrugList';
import LoadingSpinner from '../common/Spinner';
import omri from '../../assets/omri.jpg'
import './DrugView.css';


const DrugsView = () => {
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
 
        </div>
    );
};

export default DrugsView;