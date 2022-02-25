export const setError = (state, action) => {
    state.isLoading = false
    state.error = action.payload
}

export const startLoading = (state) => state.isLoading = true

export const endLoading = (state) => state.isLoading = false