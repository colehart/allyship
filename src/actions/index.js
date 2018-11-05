export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool,
})

export const receivedError = (message) => ({
  type: 'RECEIVED_ERROR',
  receivedError: message,
})