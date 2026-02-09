import {
  LayoutDashboard,
  Folder,
  Bug,
  Columns3,
  BarChart
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen shadow-md fixed left-0 top-0">
      <div className="p-6 font-bold text-xl flex items-center gap-2">
        🐛 Bug Tracker
      </div>

      <nav className="px-6">
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-center gap-2 text-indigo-600 font-semibold">
            <LayoutDashboard size={18} /> Dashboard
          </li>
          <li className="flex items-center gap-2">
            <Folder size={18} /> Projects
          </li>
          <li className="flex items-center gap-2">
            <Bug size={18} /> Tickets
          </li>
          <li className="flex items-center gap-2">
            <Columns3 size={18} /> Kanban Board
          </li>
          <li className="flex items-center gap-2">
            <BarChart size={18} /> Analytics
          </li>
        </ul>
      </nav>
    </aside>
  );
}
