import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import axios from 'axios';

export const useArticleStore = defineStore('articles', {
  state: () => ({
    article: null,
    articles: reactive([]),
    loading: false
  }),
  actions: {
    async fetchArticles() {
      if (this.articles.length > 0 ) {
        this.articles = this.articles
      }
      this.loading = true;
      this.error = null;

      const api_key = process.env.NEUTRAL_TIMES_CREDENTIALS;

      try {
        const response = await axios.get(`https:/neutralnew.dev/articles?api_key=${api_key}`);
        this.articles = response.data;
      } catch (err) {
        this.error = 'Failed to fetch articles';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    clearArticle() {
      this.selectedArticle = null;
    },
    setArticle(id: number) {
      const article = this.articles.find((article) => article.id === id)
      this.article = article;
    },
  },
});
