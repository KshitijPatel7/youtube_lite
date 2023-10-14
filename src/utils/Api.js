import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': "85ded09400msh86ca0c11e8fa550p1c9f75jsn539e4c2ef751",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }