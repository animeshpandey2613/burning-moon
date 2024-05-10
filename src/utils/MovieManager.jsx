import axios from "axios";
const MovieImporter = async () => {
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("Authentication")}`,
    },
  };
  const resp = await axios.get("http://127.0.0.1:8000/movies", config);
  //   return resp.
  return resp.data
};

export { MovieImporter };
