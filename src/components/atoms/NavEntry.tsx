import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  routeName: string;
  icon: ReactNode;
  title: string;
};

function SidebarEntry({ routeName, icon, title }: Props) {
  const router = useRouter();

  return (
    <li
      className={clsx(
        'my-2 flex h-10 items-center gap-2 rounded-md px-4 hover:cursor-pointer hover:bg-sidebarHover',
        { 'bg-sidebarSelect': router.pathname === routeName }
      )}
      onClick={() => router.push(`/${routeName}`)}
    >
      {icon}
      <span>{title}</span>
    </li>
  );
}

export default SidebarEntry;
