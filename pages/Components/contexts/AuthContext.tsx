import { createContext, useContext, useState, useEffect } from 'react';
import React from 'react';
import { auth } from '../config/firebase';


const AuthContext = createContext({

	currentUser: null,

})

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null)

	const value = {
		currentUser

	}

	return <AuthContext.Provider value = { value }>
		{children}
	</AuthContext.Provider>
}