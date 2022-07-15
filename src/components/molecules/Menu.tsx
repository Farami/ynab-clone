import { ChevronDownIcon, GlobeIcon } from '@heroicons/react/solid';
import React from 'react';

function Menu() {
  return (
    <div className="flex h-12 flex-row items-center justify-between gap-2 rounded-md px-4 duration-200 hover:cursor-pointer hover:bg-sidebarHover hover:transition-all">
      <div className="flex items-center gap-2">
        <GlobeIcon className="h-8 w-8" />
        <div className="flex flex-col leading-tight">
          <div className="text-xl font-semibold">Shared Budget</div>
          <div className="text-xs font-bold text-background-700">
            farami@gmail.com
          </div>
        </div>
      </div>
      <ChevronDownIcon className="h-8 w-8" />
    </div>
  );
}

export default Menu;
