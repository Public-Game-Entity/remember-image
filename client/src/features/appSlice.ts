
import { createSlice } from '@reduxjs/toolkit'
import { LocalStorage } from '../utils/localStorage'

type state = {
    isDarkmode: boolean
    score: number
}

const initialDarkmode = (): boolean => {
    const ls = new LocalStorage()
    const isExist = ls.exist('darkmode')

    if (isExist) {
        return ls.get('darkmode') == 'true' ? true : false
    }

    ls.set('darkmode', 'false')
    return false
}



const initialState: state = {
    isDarkmode: initialDarkmode(),
    score: 100
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleDarkmode(state, action) {
            const ls = new LocalStorage()
            ls.set('darkmode', action.payload.isDarkmode)
            state.isDarkmode = action.payload.isDarkmode
        },
        setScore(state, action) {
            state.score = action.payload.score
        }
    }
})

export const { toggleDarkmode, setScore } = appSlice.actions
export default appSlice.reducer