/* eslint-disable no-unused-vars */

// DrugEditPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const DrugEditPage = () => {
    const { index } = useParams();
    const drugToEdit = /* Retrieve the drug to edit based on the index */ {};

    const [editedDrug, setEditedDrug] = useState({
        genericName: drugToEdit.genericName,
        commercialName: drugToEdit.commercialName,
        drugVolumeMl: drugToEdit.drugVolumeMl,
        drugDosageMG: drugToEdit.drugDosageMG,
        emptyVialWeight: drugToEdit.emptyVialWeight,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedDrug((prevDrug) => ({
            ...prevDrug,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Implement the logic to save the edited drug
        console.log('Saving edited drug:', editedDrug);
    };

    const handleDelete = () => {
        // Implement the logic to delete the drug
        console.log('Deleting drug:', drugToEdit);
    };

    return (
        <div>
            <h2>Edit Drug</h2>
            <form>
                <label>
                    Generic Name:
                    <input
                        type="text"
                        name="genericName"
                        value={editedDrug.genericName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Commercial Name:
                    <input
                        type="text"
                        name="commercialName"
                        value={editedDrug.commercialName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Drug Volume (ml):
                    <input
                        type="number"
                        name="drugVolumeMl"
                        value={editedDrug.drugVolumeMl}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Drug Dosage (MG):
                    <input
                        type="number"
                        name="drugDosageMG"
                        value={editedDrug.drugDosageMG}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Empty Vial Weight:
                    <input
                        type="number"
                        name="emptyVialWeight"
                        value={editedDrug.emptyVialWeight}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
            </form>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DrugEditPage;
