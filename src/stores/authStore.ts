import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  username: string;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      username: '',
      login: (username, password) => {
        const isValid = username === 'admin' && password === '123456';
        if (isValid) {
          set({ isAuthenticated: true, username });
        }
        return isValid;
      },
      logout: () => set({ isAuthenticated: false, username: '' }),
    }),
    {
      name: 'auth-storage', // nama key di localStorage
    }
  )
);

export default useAuthStore;
