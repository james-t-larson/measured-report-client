import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import axios from 'axios';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    catgory: null,
    categories: reactive([]),
    loading: false
  }),
  actions: {
    async fetchCategories() {
      if (this.categories.length > 0 ) {
        this.categories= this.categories
      }
      this.loading = true;
      this.error = null;

      const api_key = process.env.NEUTRAL_TIMES_CREDENTIALS;

      try {
        const response = await axios.get(`https:/neutralnew.dev/categories?api_key=${api_key}`);
        this.categories = response.data;
      } catch (err) {
        this.error = 'Failed to fetch categories';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    clearCategory() {
      this.category= null;
    },
    setCategory(id: number) {
      const category = this.categories.find((category) => category.id === id)
      this.category = category;
    },
  },
});
