import React, { createContext, useState, useContext } from "react";

// Create Context
const ProfileContext = createContext();

// Create Provider
export const ProfileProvider = ({ children }) => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  return (
    <ProfileContext.Provider value={{ profilePhoto, setProfilePhoto }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom Hook to Use Context
export const useProfile = () => {
  return useContext(ProfileContext);
};
