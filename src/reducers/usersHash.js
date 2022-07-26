export default (state = {}, action = {}) => {
	switch (action.type) {
	  case 'USERS_FETCHED': {
		console.log(`handling USERS_FETCHED`)
		const { users } = action.payload
		console.log(`users in reducer = ${users}`)
		return users.reduce((users, user) => {
		  state[user.userId] = user
		//   return state
		}, state)
		// return state
	  }
	//   case 'USER_FOUND': {
	// 	const { userId, user } = action.payload
	// 	state[userId] = user
	// 	// return { ...state, [slug]: video }
	// 	return state
	//   }
	  default:
		return state
	}
  }
  
  // eg: { 'slug-1': video1, 'slug-2': video2 }
  