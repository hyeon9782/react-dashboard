import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
