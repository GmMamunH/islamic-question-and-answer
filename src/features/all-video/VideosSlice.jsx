import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice(
    {
        name: "videos",
        initialState: {
            videos: [],
            isLoading: false,
            error: null,
        },
        reducers: {
            setVideos: (state, action) => {
                state.videos = action.payload;
                state.isLoading = false;
                state.error = null;
            },
            setLoading: (state, action) => {
                state.isLoading = action.payload;
                state.error = null;
            },
            setError: (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            },
        },
    }
)

export const { setVideos, setLoading, setError } = videosSlice.actions;