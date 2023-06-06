import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Container } from './SharedLayout.styled';

const { Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <Container>
      <Header></Header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
export default SharedLayout;
