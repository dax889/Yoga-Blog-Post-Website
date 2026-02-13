import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load from sessionStorage (PER TAB)
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const storedToken = sessionStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }

    setLoading(false);
  }, []);

  // ✅ Login (PER TAB)
  const login = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data.user));
    sessionStorage.setItem("token", data.token);

    setUser(data.user);
    setToken(data.token);
  };

  // ✅ Logout (ONLY THIS TAB)
  const logout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");

    setUser(null);
    setToken(null);
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
