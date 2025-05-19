import React, { createContext, useContext, useState } from 'react';
import data from './Profiles/default.json';

const ProfileContext = createContext();


export const ProfileProvider = ({ children }) => {
    return (
        <ProfileContext.Provider value={ data }>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
