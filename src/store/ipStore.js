// import  create  from 'vue-zustand'

// export const useStore = create((set) => ({
//   data: { data: "" },
//   updateData: (data) => set({ data }),
// }))


import { atom } from 'nanostores'

export const $data = atom(  {
  ip: '172.4.59.6',
  location: 'California, US 7018',
  timezone: 'UTC -08:00',
  isp: 'AT&T Services, Inc.'
})