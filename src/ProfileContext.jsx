import React, { createContext, useContext, useState } from 'react';
import StartIcon from "@mui/icons-material/Start";
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import WindowTwoToneIcon from "@mui/icons-material/WindowTwoTone";

const ProfileContext = createContext();

const ProfileData ={
    startingposition:{
        icon:<StartIcon/>,required:true,expandable:false
    },
    finish:{
        icon:<SportsScoreIcon/>,required:true,expandable:false
    },
    emptyspace:{
        icon:<WindowTwoToneIcon/>,required:false,expandable:true
    },
    wall:{
        icon:<WindowTwoToneIcon/>,required:true,expandable:true
    }


}

export const ProfileProvider = ({ children }) => {
    return (
        <ProfileContext.Provider value={ ProfileData }>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
