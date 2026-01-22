import { create } from 'zustand'
import { persist, subscribeWithSelector } from 'zustand/middleware'

const useStore = create(
  subscribeWithSelector(
    persist(
      (set) => ({
        avatarColor: 'blue',
        setAvatarColor: (color) => {
          set({ avatarColor: color })
        },
        gameEnded: false,
        setGameEnded: (value) => {
          set({ gameEnded: value })
        },
      }),
      {
        name: 'game-store',
        partialize: (state) => {
          return {
            avatarColor: state.avatarColor,
          }
        },
      },
    ),
  ),
)

export default useStore
