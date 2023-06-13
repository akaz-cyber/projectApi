import { useEffect } from "react";
import { json } from "react-router-dom";
import HR from "../component/hr-g";
import Git from "../images/Git.png";

const Profile = () => {
  let userSession = sessionStorage.getItem("user");
  userSession = JSON.parse(userSession);

  useEffect(() => {
    if (userSession === null) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="border border-dark p-5 mt-4 w-50 mx-auto mb-4 shadow p-3 mb-5 bg-light rounded " style={{ height: "400px" }}>
      <div className="text-center">
        <img src={Git} alt="" width="120px" />
      </div>
      <h1 className="text-center color-b">Welcome To my website</h1>
      {userSession && <h4 className="text-center color-b">{userSession.email}</h4>}
    </div>
  );
};

export default Profile;
