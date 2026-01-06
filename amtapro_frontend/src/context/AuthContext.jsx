import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [loading, setLoading] = useState(true);

    // Configure global axios defaults
    // You should set VITE_API_URL in your .env file, e.g., VITE_API_URL=http://localhost:5000
    // defaulting to localhost for dev if env not set, or the render url as fallback
    const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    axios.defaults.withCredentials = true;

    useEffect(() => {
        // Check if user is logged in
        const storedUser = localStorage.getItem("user");
        if (storedUser && token) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user from local storage");
                localStorage.removeItem("user");
                localStorage.removeItem("token");
            }
        }
        setLoading(false);
    }, []);


    const login = async (credentials) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
            const { data, message, success } = response.data;

            if (success) {
                const userData = data.currentUser;
                // The backend sets a cookie 'token', but might not return it in JSON body directly unless we change it.
                // Looking at backend code: it sends 'token' as a cookie.
                // BUT it also returns 'currentUser'.
                // We need the token for subsequent requests if we aren't using cookie-based auth purely.
                // Let's assume we rely on the cookie for now, OR we might need to extract it if the backend fails to set it cross-origin.
                // Note: Backend code: res.cookie("token", token);

                // For now, let's store the user.
                setUser(userData);
                localStorage.setItem("user", JSON.stringify(userData));

                // If your backend isn't returning the token in the body, you might rely on the cookie.
                // However, usually for APIs it's safer to return it in the body too.
                // For this rescue mission, we will assume cookie handling works or we update backend later.

                return { success: true, message };
            }
            return { success: false, message };
        } catch (error) {
            console.error("Login Error:", error);
            return {
                success: false,
                message: error.response?.data?.message || "Login failed",
            };
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/register`, userData);
            const { data, message, success } = response.data;
            if (success) {
                // Auto login after register? 
                // Backend code: res.cookie("token", token); and returns newUser
                const newUser = data.newUser;
                setUser(newUser);
                localStorage.setItem("user", JSON.stringify(newUser));
                return { success: true, message };
            }
            return { success: false, message };
        } catch (error) {
            console.error("Register Error:", error);
            return {
                success: false,
                message: error.response?.data?.message || "Registration failed",
            };
        }
    };

    const logout = async () => {
        try {
            await axios.post(`${BASE_URL}/auth/logout`);
        } catch (error) {
            console.error("Logout error", error);
        }
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading, isAuthenticated: !!user }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
