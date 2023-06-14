import explore from '../views/pages/Explore';
import Detail from '../views/pages/Detail';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/explore': explore,
  '/detail/:id': Detail,
};

export default routes;
