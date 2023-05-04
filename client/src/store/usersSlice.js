import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (params = { res: 5 }, thunkAPI) => {
    try {
      const { data } = await fetch(
        'http://localhost:3000/api/users?limit=3&offset=20'
      ).then((res) => res.json());
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error); 
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isFetching: false,
    error: null,
    users: [],
  },
  reducers: {
    loadUsers(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(getAllUsers.rejected, (state, action)=>{
      state.isFetching = false;
      state.error = action.payload;
    })
  },
});

const {
  reducer,
  actions: { loadUsers },
} = usersSlice;
export default reducer;
