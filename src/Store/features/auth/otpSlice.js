
import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    toast
} from 'react-toastify'
import authService from './authService'


const initialState = {
    otp: null,
    isOtpError: false,
    isOtpSuccess: false,
    isOtpLoading: false,
    Otpmessage: ""
}


// Generate Otp
export const generateOtp = createAsyncThunk(
    'auth/generateotp',
    async (otp, thunkAPI) => {
        try {
            return await authService.generateOtp(otp)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const otpSlice = createSlice({
    name: 'otp',
    initialState,
    reducers: {
        resetOtp: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(generateOtp.pending, (state) => {
                state.isLoading = true
            })
            .addCase(generateOtp.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.otp = action.payload
            })
            .addCase(generateOtp.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.otp = null
            })

    },
})


export const {
    resetOtp
} = otpSlice.actions
export default otpSlice.reducer