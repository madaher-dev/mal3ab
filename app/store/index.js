export const state = () => ({
  mobilemenu: false,
})

export const mutations = {
  LunchMobileMenu: (state) => {
    if (state.mobilemenu == true) {
      state.mobilemenu = false
    } else {
      state.mobilemenu = true
    }
  },
}
