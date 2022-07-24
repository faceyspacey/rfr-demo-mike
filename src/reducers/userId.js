export default (state, action ) => {
	const { userId } = action.payload
	return { ...state, userId }
}