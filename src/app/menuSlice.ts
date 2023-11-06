import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
export interface MenuState {
    value: boolean
}

const initialState: MenuState = {
  value: false
}
export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if(state.value){
        state.value = false
      } else {
        state.value = true
      }
      
    },
  }
})

export const { toggleMenu } = menuSlice.actions

export const selectMenuState = (state: RootState) => state.menu.value

export default menuSlice.reducer
