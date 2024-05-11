import { createSlice } from "@reduxjs/toolkit"

const bottomControllerSlicer = createSlice({
    name: "bottom_controller",
    initialState: { isVisible: false },
    reducers:
        { setIsVisible(state, action) { state.isVisible = action.payload.isVisible } }
})
export default bottomControllerSlicer.reducer
export const { setIsVisible } = bottomControllerSlicer.actions