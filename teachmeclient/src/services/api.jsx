// services/api.js


const BASE_URL = 'https://localhost:7132/api';

const b_url = 'https://localhost:44321/api/Drugs'

export const fetchDrugs = async () => {
    try {
        //const response = await fetch(`${BASE_URL}/Drugs`);
        const response = await fetch(`${b_url}`);
        if (!response.ok) {
            throw new Error('Failed to fetch drugs');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching drugs:', error);
        throw error;
    }
};

export const deleteDrug = async (drugToDelete) => {
    try {
        const response = await fetch(`${BASE_URL}/DeleteDrug`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(drugToDelete),
        });

        if (!response.ok) {
            throw new Error('Failed to delete drug');
        }

        // Return the response data if needed
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to delete drug');
    }
};
