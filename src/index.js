import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProviderMode, RecProvider, TokenProvider }
from "../src/components/stete";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import './index.css';
import App from './App';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer />
          <ProviderMode>
            <TokenProvider>
              <RecProvider>
                <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary:  '#00b96b',
                    }
                    
                  },
                }}
                >
                  <StyleProvider>
                    <App />
                  </StyleProvider >
                </ConfigProvider>
              </RecProvider>
            </TokenProvider>
          </ProviderMode>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode> 
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
