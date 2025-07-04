import { defineStore } from 'pinia';
import router from '@/router';
import { authApi } from '@/api/authApi';
import type { User, LoginRequest, ApiError } from '@/types/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null as User | null,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    isAuthenticated: state => state.isLoggedIn && !!state.user,
    userName: state => state.user?.username || '',
  },

  actions: {
    /**
     * Login with username and password
     */
    async loginWithUsernameAndPassword(username: string, password: string): Promise<boolean> {
      this.loading = true;
      this.error = null;

      try {
        const credentials: LoginRequest = { username, password };
        const response = await authApi.login(credentials);

        // Set user data and login state
        this.user = response;
        this.isLoggedIn = true;

        // Fetch current user to ensure we have the latest data
        // await this.fetchCurrentUser();

        // Navigate to dashboard
        router.push('/dashboard');

        return true;
      } catch (error) {
        console.error('Login failed:', error);
        this.handleAuthError(error as ApiError);
        return false;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Logout user
     */
    async logout(): Promise<void> {
      this.loading = true;

      try {
        await authApi.logout();
      } catch (error) {
        console.error('Logout failed:', error);
        // Continue with local logout even if server logout fails
      } finally {
        this.clearAuthState();
        this.loading = false;

        // 只有在不是由 API 层调用时才跳转（避免重复跳转）
        if (router.currentRoute.value.name !== 'auth-signin') {
          router.push({ name: 'auth-signin' });
        }
      }
    },

    /**
     * Clear authentication state
     */
    clearAuthState() {
      this.isLoggedIn = false;
      this.user = null;
      this.error = null;
    },

    /**
     * Handle authentication errors
     */
    handleAuthError(error: ApiError) {
      if (error.code === 401) {
        this.error = 'Invalid username or password';
        this.clearAuthState();
      } else if (error.code === 403) {
        this.error = 'Access denied';
      } else if (error.code === 0) {
        this.error = 'Network error. Please check your connection.';
      } else {
        this.error = error.message || 'Login failed. Please try again.';
      }
    },

    /**
     * Clear error state
     */
    clearError() {
      this.error = null;
    },
  },

  persist: {
    storage: localStorage,
    pick: ['isLoggedIn', 'user'],
  },
});
