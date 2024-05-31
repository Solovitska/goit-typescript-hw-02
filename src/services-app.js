import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "9IIYVTq4_2uTho_68OVwB6ZdilGrCQGnDfaqY2heziw";

export const fetchPhotos = async (searchQuery, currentPage) => {
  const response = await axios.get("search/photos", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 15,
      client_id: ACCESS_KEY,
      orientation: "landscape",
    },
  });

  return response.data;
};