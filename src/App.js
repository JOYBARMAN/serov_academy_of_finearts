import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routing from './Routing';


function App() {
  return (
    <>
      <Routing />
      <ToastContainer />
    </>
  );
}

export default App;
