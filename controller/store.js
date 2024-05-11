import musicSlice from "./slices/audio_slice";
import { configureStore } from "@reduxjs/toolkit";
import controllerSlice from "./slices/controller_slice";
import bottomControllerSlicer from "./slices/bottom_controller_slice";

const store = configureStore({
    reducer: {
        audio: musicSlice,
        controller: controllerSlice,
        bottom_controller: bottomControllerSlicer,
    }
});

export default store