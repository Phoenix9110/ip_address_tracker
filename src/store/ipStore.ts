import  { create } from 'zustand'

export const useStore = create<IPState>((set) => ({
  data:{  ip: "", location: "", timezone: "", isp: ""},
  updateData: (data:LocationIP) => set({ data }),
}))

interface LocationIP {
  ip: string,
  location: string,
  timezone: string,
  isp: string
}
interface IPState {
  data: LocationIP
}



// export const usePlayerStore = create((set) => ({
//   isPlaying: false,
//   currentMusic: { playlist: null, song: null, songs: [] },
//   volume: 1,
//   setVolume: (volume) => set({ volume }),
//   setIsPlaying: (isPlaying) => set({ isPlaying }),
//   setCurrentMusic: (currentMusic) => set({ currentMusic })
// }))
