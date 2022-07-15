import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

import AccountNavEntry from '../atoms/AccountNavEntry';

function SidebarBudgetAccounts() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="ml-2 flex flex-col">
      <div
        className="flex flex-row items-center justify-between hover:cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="flex flex-row gap-1">
          {collapsed ? (
            <ChevronRightIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
          <span className="text-xs tracking-widest">BUDGET</span>
        </div>
        <span className="self-end pr-8 text-xs">509.82€</span>
      </div>
      {!collapsed && (
        <AccountNavEntry
          routeName="/accounts/placeholder"
          title="BUNQ Haushalt"
          balance="509.82€"
        />
      )}
    </div>
  );
}

export default SidebarBudgetAccounts;
