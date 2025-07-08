import api from "../../api";

export const getPopup = async () => {
  try {
    const response = await api.get("/popup");
    return response.data.items;
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
};