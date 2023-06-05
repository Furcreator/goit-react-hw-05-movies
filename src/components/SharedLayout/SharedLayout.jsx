// import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';

const { Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {/* <Footer></Footer> */}
    </>
  );
};
export default SharedLayout;
