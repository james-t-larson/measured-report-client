import { defineStore } from 'pinia'
import { reactive } from 'vue'
import api from '../api/service.ts'
import type { UserState } from '@/data/state/user.ts'
import type { User } from '@/data/user.ts'

const initialState = {
  id: null,
  email: null,
  signedIn: false,
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: reactive(initialState as User),
    loading: false,
    error: null
  }),
  actions: {
    async hydrate() {
      if (this.user?.signedIn) {
        return
      }

      this.loading = true

      await api.fetchCurrentUser().then(res => {
        this.user = res
      })


      this.loading = false

    },
    async signIn(email: string, password: string) {
      this.loading = true
      this.error = null

      try {
        const response = await api.signIn(email, password)
        this.user = response
      } catch {
        this.error = 'Failed to login'
      }

      this.loading = false
    },
  },
})
