import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [userDetail, setUserDetail] = useState({ name: '', email: '' });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo")) || [];
    setUserInfo(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserInfo((prevUserInfo) => {
      const updatedUserInfo = [...prevUserInfo, userDetail];
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
      return updatedUserInfo;
    });

    setUserDetail({
      name: '',
      email: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields and submission button here */}
    </form>
  );
};

export default MyComponent;
