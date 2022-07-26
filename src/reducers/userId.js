export default (state, action ) => {
	action.type === 'USERS' ? action.payload.users : state
}