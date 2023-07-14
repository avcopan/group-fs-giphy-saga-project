import axios from "axios";

export async function searchGifs(searchString) {
  try {
    const response = await axios.get(`/api/search?q=${searchString}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  alert(`Oops! Something went wrong ${error.message}`);
  console.error(error);
}
