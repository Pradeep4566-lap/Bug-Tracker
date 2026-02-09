export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-white px-6 py-4 shadow-sm">
      <input
        type="text"
        placeholder="Search tickets, projects..."
        className="border rounded px-4 py-2 w-80"
      />

      <div className="flex items-center gap-4">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">
          + New Ticket
        </button>
        <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded">
          + New Project
        </button>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
            PG
          </div>
          <span className="text-sm font-medium">Pradeep Gupta</span>
        </div>
      </div>
    </header>
  );
}
