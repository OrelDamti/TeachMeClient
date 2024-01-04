/* eslint-disable no-unused-vars */

// DrugList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './DrugList.css';

const DrugList = ({ drugs }) => (
    <div className="drug-list-container">
        <div className="drug-list-header">
            <h2>Teach Me</h2>
            <h2>The largest teachers in Israel</h2>
        </div>
        <table className="table drug-table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Generic Name</th>
                    <th scope="col">Commercial Name</th>
                    <th scope="col">Drug Volume (ml)</th>
                    <th scope="col">Drug Dosage (MG)</th>
                    <th scope="col">Empty Vial Weight</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {drugs.map((drug, index) => (
                    <tr key={index} className="drug-row">
                        <td>{drug.genericName}</td>
                        <td>{drug.commercialName}</td>
                        <td>{drug.drugVolumeMl}</td>
                        <td>{drug.drugDosageMG}</td>
                        <td>{drug.emptyVialWeight}</td>
                        <td>
                            <Link to={`/drugs/edit/${index}`} className="d-flex align-items-center link-no-underline">
                                <button className="btn btn-purple btn-shadow" type="button">
                                    Edit
                                </button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

DrugList.propTypes = {
    drugs: PropTypes.arrayOf(
        PropTypes.shape({
            genericName: PropTypes.string.isRequired,
            commercialName: PropTypes.string.isRequired,
            drugVolumeMl: PropTypes.number.isRequired,
            drugDosageMG: PropTypes.number.isRequired,
            emptyVialWeight: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default DrugList;
