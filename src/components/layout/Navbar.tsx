import useAuthStore from "@/stores/authStore";

const Navbar = () => {
  const { username, isAuthenticated, logout } = useAuthStore();

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Dashboard</h1>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <span className="text-gray-700 hidden sm:inline">Hello, {username}</span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <span className="text-gray-500 italic text-sm">Not logged in</span>
        )}
      </div>
    </header>
  );
};

export default Navbar;
