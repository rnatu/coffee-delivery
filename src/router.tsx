import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
