import { PlusCircleIcon } from '@heroicons/react/outline';
import { CashIcon, ChartBarIcon, HomeIcon } from '@heroicons/react/solid';
import React from 'react';

import Button from '../atoms/Button';
import NavEntry from '../atoms/NavEntry';
import Menu from '../molecules/Menu';
import SidebarBudgetAccounts from '../molecules/SidebarBudgetAccounts';

function Sidebar() {
  return (
    <ul className="h-screen w-4/12 border-r border-border p-2">
      <Menu />
      <NavEntry
        routeName="/"
        icon={<CashIcon className="h-6 w-6" />}
        title="Budget"
      />
      <NavEntry
        icon={<ChartBarIcon className="h-6 w-6" />}
        title="Reports"
        routeName="/reports"
      />
      <NavEntry
        icon={<HomeIcon className="h-6 w-6" />}
        title="All Accounts"
        routeName="/accounts"
      />
      <SidebarBudgetAccounts />
      <Button
        icon={<PlusCircleIcon className="h-4 w-4" />}
        title="Add Account"
      />
    </ul>
  );
}

export default Sidebar;
