import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import{Provider} from "react-redux";
import { Store } from './app/Store.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
        <QueryClientProvider client={queryClient}>

<Provider store={Store}>
    <AppRoutes/>
    <ToastContainer />
</Provider>

    </QueryClientProvider>


)
