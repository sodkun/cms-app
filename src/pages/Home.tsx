import DashboardLayout from '../components/layout/DashboardLayout';
import useAuthStore from '../stores/authStore';

const Home = () => {
  const { username } = useAuthStore();

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Welcome, {username || 'User'}!</h1>
      <p>This is your dashboard.</p>
      {/* Tambahkan widget, chart, statistik, dsb di sini */}
    </DashboardLayout>
  );
};

export default Home;
