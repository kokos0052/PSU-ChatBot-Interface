import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/useTelegram";
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
