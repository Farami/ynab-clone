import { PencilIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useRouter } from 'next/router';

type Props = {
  routeName: string;
  title: string;
  balance: string;
};

function AccountNavEntry({ routeName, title, balance }: Props) {
  const router = useRouter();

  return (
    <li
      className={clsx(
        'group my-2 flex h-8 items-center justify-between gap-2 rounded-md pr-8 text-sm hover:cursor-pointer hover:bg-sidebarHover',
        { 'bg-sidebarSelect': router.pathname === routeName }
      )}
      onClick={() => router.push(`/${routeName}`)}
    >
      <div className="flex items-center gap-2 px-2">
        <PencilIcon className="invisible h-4 w-4 group-hover:visible" />
        <div>{title}</div>
      </div>
      <div className="text-xs">{balance}</div>
    </li>
  );
}

export default AccountNavEntry;
