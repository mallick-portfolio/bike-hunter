import { useEffect, useState } from "react";
import axios from "axios";
const useToken = (user, displayName = null) => {
  const [token, setToken] = useState("");
  console.log(user);

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = {
      name: user?.user?.displayName ? user?.user?.displayName : displayName,
      email: email,
      image: user?.user?.photoURL,
      role: "user",
    };
    if (email) {
      const loaduser = async () => {
        const { data, status } = await axios.put(
          `http://localhost:5000/users/${email}`,
          currentUser
        );
        if (status === 200) {
          console.log("data inside useToken", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        } else {
          console.log("somthing error");
        }
      };
      loaduser();
    }
  }, [displayName, user]);
  return [token];
};

export default useToken;
