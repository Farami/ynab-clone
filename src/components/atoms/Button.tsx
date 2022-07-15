import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  icon?: ReactNode;
  title: string;
};

function Button({ icon, title }: Props) {
  return (
    <div className="flex w-fit items-center gap-1 rounded-md bg-sidebarSelect px-3 py-1 text-sm duration-300 hover:bg-sidebarHover hover:transition-all">
      {icon}
      {title}
    </div>
  );
}

export default Button;
