import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./components/providers/auth-provider";
import Router from "./routes";

function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
