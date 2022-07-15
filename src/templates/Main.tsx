import type { ReactNode } from 'react';

import Sidebar from '@/components/organisms/Sidebar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full bg-background-100 px-1 antialiased">
    {props.meta}
    <div className="flex flex-row">
      <Sidebar />
      {props.children}
    </div>
  </div>
);

export { Main };
