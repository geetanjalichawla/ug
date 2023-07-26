import React, { useEffect, useState } from "react";
import axios from "axios";

const BasicAuthExample = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const username = "trial";
        const password = "assignment123";
        const basicAuthString = `${username}:${password}`;
        const encodedCredentials = btoa(basicAuthString);

        const response = await axios.post("http://ec2-54-89-22-72.compute-1.amazonaws.com:8000/sample_assignment_api_5",{ auth:encodedCredentials}, {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        },);

        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProtectedData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default BasicAuthExample;
