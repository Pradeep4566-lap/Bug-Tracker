import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64 w-full">
        <Navbar />

        <div className="p-6">
          {/* Header + Action */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">
                Welcome back, Pradeep! 👋
              </h1>
              <p className="text-gray-500">
                Here's what's happening with your projects today
              </p>
            </div>

            {/* Kanban Button */}
            <Link
              to="/kanban"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Open Kanban Board
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              "Total Tickets",
              "In Progress",
              "Completed",
              "Assigned to Me",
            ].map((title) => (
              <div
                key={title}
                className="bg-white rounded-lg p-5 shadow-sm"
              >
                <p className="text-gray-500">{title}</p>
                <h2 className="text-3xl font-bold mt-2">0</h2>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Recent Activity</h3>
              <p className="text-gray-500">No recent tickets</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Your Projects</h3>
              <p className="text-gray-500">No projects yet</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
