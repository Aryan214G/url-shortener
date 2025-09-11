import { useEffect, useState } from "react";
import Service from "../../utils/http";
import "./Profile.css"

const Profile = () => {
  const service = new Service();
  const [userData, setUserData] = useState(null);

  const getData = async () => {
    const response = await service.get("user/me");
    console.log(response);
    setUserData(response);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(userData);
  return (
    <div className="profile-container">
      <div className="card">
        <h1>Profile Page</h1>
        {userData && (
          <div className="user-info">
            <h2>User Information</h2>
            <img src={userData.avatar} alt="Profile" className="circular-image" />
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;