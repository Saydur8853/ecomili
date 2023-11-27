import   { useState, useEffect , ReactNode} from 'react';
import { Alert, AlertTitle, Snackbar, Stack } from "@mui/material";
import { WifiOff } from "lucide-react";

const NoInternetConnection = ({children}: {children:  ReactNode}) => { 
    const [isOnline, setOnline] = useState(true);
 
    useEffect(() => {
        setOnline(navigator.onLine)
    }, [])
 
    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });
 

    return (
        <>
            {children}
            {!isOnline &&
                <Snackbar open={true} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                    <Alert severity="error" variant={"filled"}>
                        <AlertTitle><Stack direction={"row"} alignItems={"center"}><WifiOff size={20} style={{ marginRight: "10px" }} />No Internet!</Stack></AlertTitle>
                        You are not connected to internet right now. Please try again later.
                    </Alert>
                </Snackbar>
            }
        </>
    )

}

export default NoInternetConnection;