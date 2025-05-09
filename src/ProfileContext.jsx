import React, { createContext, useContext, useState } from 'react';
import StartIcon from "@mui/icons-material/Start";
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import WindowTwoToneIcon from "@mui/icons-material/WindowTwoTone";
import data from './Profiles/default.json';

const ProfileContext = createContext();


export const ProfileProvider = ({ children }) => {
    return (
        <ProfileContext.Provider value={ data.default }>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
