import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (dispatch, getState) => {
        const response = await fetch('https://www.reddit.com/r/popular.json');
        const jsonResponse = await response.json();
    
        return jsonResponse.data.children
    } // end of callback
) // end of createAsyncThunk


const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        isLoading: false,
        hasError: false
    },
    extraReducers: {
        [fetchData.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.data = action.payload;
        },
        [fetchData.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }


    
} // end of options object
) // end of create Slice


export default dataSlice.reducer;
