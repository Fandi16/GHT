import explore from '../views/pages/Explore';
import Detail from '../views/pages/Detail';
import Home from '../views/pages/home';
import AboutUs from '../views/pages/AboutUs';

const routes = {
  '/': Home,
  '/explore': explore,
  '/about': AboutUs,
  '/detail/:id': Detail,
};

export default routes;
