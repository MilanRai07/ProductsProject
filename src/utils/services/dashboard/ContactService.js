import axios from "axios";

export const getContacts = async() => {
    try{
        const response = await axios.get('/contact')
        return response.data.items;
    }
    catch(error){
        console.log(`Error: ${error}`);
        throw error;
    }
}