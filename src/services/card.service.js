import axios from "axios";

export const getCards = async () => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/anime");
    return response.data;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};
