import { useEffect, useState } from "react";

const useToken = (user, displayName = "") => {
  const [token, setToken] = useState("");
  const [load, setLoading] = useState(false);
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
      setLoading(true);
      fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside useToken", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
          setLoading(false);
        });
    }
  }, [displayName, user]);
  return [token, load];
};

export default useToken;
