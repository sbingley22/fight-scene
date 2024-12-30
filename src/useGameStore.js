import { create } from "zustand"

const gamepadState = {
  moveX: 0,
  moveY: 0,
  interact: false,
}

export const useGameStore = create((set, get) => ({
  getGamepad: () => gamepadState,

  mode: 0,
  setMode: (mode) => set({ mode }),

  options: {
    volume: 0.5,
    mute: false,
    useController: true,
    resolution: 1.0,
  },
  setOptions: (newOptions) => set((state) => ({
    options: { ...state.options, ...newOptions },
  })),
  getVolume: () => get().options.volume,
  getMute: () => get().options.mute,

  player: null,
  setPlayer: (player) => set({ player }),
  setPlayerFlag: (flag, value) => {
    const state = get()
    if (state.player.current) state.player.current[flag] = value
  },

  score: 0,
  setScore: (score) => set({ score }),
  addScore: (amount) => {
    const state = get()
    const newScore = state.score + amount
    set({ score: newScore })
  },
  getScore: () => get().score,
  
  hudInfo: {
    playerHealth: 100,
    msg: "",
  },
  setHudInfo: (hudInfo) => set({ hudInfo }),
  setHudInfoParameter: (newParameter) => set((state) => ({
    hudInfo: { ...state.hudInfo, ...newParameter },
  })),

  resetGame: () => {
    set({
      score: 0,
      player: null,
      hudInfo: {
        playerHealth: 100,
        msg: "",
      },
    });
  }
}))
