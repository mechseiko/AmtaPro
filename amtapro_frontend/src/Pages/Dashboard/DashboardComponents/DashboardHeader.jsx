import React, { useState, useEffect } from "react";
import {footballers, academies, logo} from '../assets/dashboardLinks';
import { Menu} from "lucide-react";
import * as lucid from 'lucide-react';

const DashboardHeader = ({footballer, academy, onMenuClick, headBlur}) => {
  const date = new Date();
  const hours = date.getHours();
  
  const getHours = () => {
    if(hours >= 5 && hours < 12)
      return "Good morning"
    else if(hours >=12 && hours < 17)
      return "Good afternoon"
    else if(hours >=17 && hours < 20)
      return "Good evening"
    return "Good night"
  };

  return (
    <nav className={`sticky top-0 z-9990 ${headBlur ? "blur-sm" : "blur-none"}`}>
      <header className="p-4 flex justify-between items-center bg-white shadow-lg">
        <h1 className="font-medium text-lg md:text-2xl">
          {footballer ? `${getHours()},`
            : <h1 className="font-semibold text-lg md:text-2xl">{academy}</h1>
          }
          <span className="font-semibold">
            {footballer ? ` ${footballer} 👋` 
              : ``
            }
          </span>
        </h1>
          <div className="flex items-center gap-x-2 md:gap-x-5">
            <lucid.Bell size={25}/>
            <Menu size={25} onClick={onMenuClick} />
            <img 
              className="size-10 rounded-full border-2 border-green-600" 
              src=
              {footballer ? footballers.find(player => player.username === footballer).image :
              academies.find(scout => scout.name === academy).logo
              } 
              alt=
              {footballer ? footballers.find(player => player.username === footballer).fullName :
              academies.find(scout => scout.name === academy).name
              } />
          </div>
    </header>

    </nav>
  );
};

export default DashboardHeader;