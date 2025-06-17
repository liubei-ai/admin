import { defineStore } from 'pinia';

export const useStableDiffusionStore = defineStore('stableDiffusion', {
  state: () => ({
    imgList: [],
    modelList: [],
    currentModel: '',
  }),

  persist: {
    storage: localStorage,
    pick: ['imgList', 'modelList', 'currentModel'],
  },

  getters: {},
  actions: {
    updateImgList(imgList: []) {
      this.imgList = imgList;
    },

    updateModelList(modelList: []) {
      this.modelList = modelList;
    },
  },
});
