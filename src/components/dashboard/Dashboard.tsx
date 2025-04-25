import menuItems from "./menuItems";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white shadow-lg px-4 py-6">
      <h2 className="text-xl font-bold text-blue-800 mb-6">Dashboard</h2>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="flex items-center gap-3 p-2 hover:bg-blue-100 rounded-md transition text-gray-700 font-medium"
            >
              <item.icon size={20} /> 
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
