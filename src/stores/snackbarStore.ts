import { defineStore } from 'pinia';

export const useSnackbarStore = defineStore('snackbarStore', {
  state: () => ({
    isShow: false,
    message: '',
    type: '',
  }),

  persist: {
    storage: localStorage,
    pick: ['isShow', 'message', 'type'],
  },

  getters: {},

  actions: {
    showMessage(message) {
      this.isShow = true;
      this.message = message;
      this.type = '';
    },

    showErrorMessage(message) {
      this.isShow = true;
      this.message = message;
      this.type = 'error';
    },
    showSuccessMessage(message) {
      this.isShow = true;
      this.message = message;
      this.type = 'success';
    },
    showInfoMessage(message) {
      this.isShow = true;
      this.message = message;
      this.type = 'info';
    },
    showWarningMessage(message) {
      this.isShow = true;
      this.message = message;
      this.type = 'warning';
    },
  },
});
