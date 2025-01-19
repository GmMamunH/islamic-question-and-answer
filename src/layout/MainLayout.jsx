
import { Navbar } from '../components/shared/header/navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
