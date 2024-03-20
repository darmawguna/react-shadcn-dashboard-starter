import { navItems } from '@/constants/data';
import DashboardNav from './dashboard-nav';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto overflow-x-hidden rounded-tr-[100px] border-r bg-primary py-8 pl-5">
      <Link to="/" className="text-3xl font-bold text-white">
        Logo
      </Link>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <DashboardNav items={navItems} />
      </div>
    </aside>
  );
}
