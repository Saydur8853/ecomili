import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useQueryClient } from "@tanstack/react-query";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = useState(true);

    // handle user login
    /*
    const login = useMutation(data => getloginUser(data), {
      onSuccess: (data) => {
        if (data.success) {
          localStorage.setItem('accessToken', data.response_data.accessToken);
          const decodedToken = jwtDecode(data.response_data.accessToken);
          queryClient.clear();
          setUser(decodedToken);
          toast.success(data.message);
          navigate('/dashboard');
        } else {
          toast.error(data.message);
        }
      },
    });
    */

    // handle user logout
    const logout = () => {
        localStorage.removeItem("accessToken");
        navigate("/login");
        setUser(null);

        // invalidate any existing query data
        queryClient.clear();
    }; 

    return {
        user,
        logout,
        isLoading,
    };
}


export default useAuth;