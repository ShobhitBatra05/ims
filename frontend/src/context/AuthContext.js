import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Holds user information
    const [userRole, setUserRole] = useState(null); // Holds user role

    
        useEffect(() => {
            // Check if the user is authenticated by retrieving from local storage
            const storedUser = localStorage.getItem('user');

            // Ensure that the stored user data is valid JSON
            if (storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    setUser(parsedUser); // Set the user state
                    setUserRole(parsedUser.role); // Set user role, defaulting to null if undefined
                } catch (error) {
                    console.error("Error parsing user data from local storage:", error);
                    // Optionally handle the error: e.g., clear local storage or reset state
                    localStorage.removeItem('user'); // Clean up invalid data
                }
            } else {
                setUser(null); // Clear user state if no stored user found
                setUserRole(null); // Clear user role
            }
        }, []); // Empty dependency array to run effect only once on mount

    const login = (userData) => {
        console.log("userData:",userData)
        setUser(userData);
        setUserRole(userData.role);
        localStorage.setItem('user', JSON.stringify(userData)); // Save user to local storage
    };

    const logout = () => {
        setUser(null);
        setUserRole(null);
        localStorage.removeItem('user'); // Remove user from local storage
    };

    return (
        <AuthContext.Provider value={{ user, userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContextProvider, AuthContext };