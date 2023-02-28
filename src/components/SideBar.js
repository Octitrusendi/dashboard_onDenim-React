import React from 'react';
import '../assets/css/style.css';
import image from '../assets/images/logo.png';
import ContentWrapper from './ContentWrapper';
import ContentRowProducts from './ContentRowProducts';
import AllUsers from './AllUsers';
import NotFound from './NotFound';
import { Link, Route, Switch } from 'react-router-dom';
import AllProducts from './AllProducts';
import Categories from './Categories';
import AllSales from './AllSales';
import Contact from './Contact';

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-sidebar sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="img" src={image} alt="Ondenim" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - On Denim</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/Categories">
            <i className="fas fa-fw fa-folder"></i>
            <span>Categorias</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/AllProducts">
            <i className="fas fa-shopping-cart"></i>
            <span>Todos los Productos</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/AllSales">
            <i className="fas fa-fw fa-table"></i>
            <span>Ventas</span>
          </Link>
        </li>
        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/AllUsers">
            <i className="fas fa-user-check"></i>
            <span>Todos los Usuarios</span>
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/Contact">
            <i className="fas fa-id-card"></i>
            <span>Solicitudes de contacto</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      {/*<!-- Microdesafio 1 -->*/}
      {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowProducts">
                <ContentRowProducts />
            </Route>*/}
      {/*<!-- End Microdesafio 1 -->*/}

      {/*<!-- End Microdesafio 2 -->*/}
      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/Categories">
          <Categories />
        </Route>
        <Route path="/AllProducts">
          <AllProducts />
        </Route>
        <Route path="/AllSales">
          <AllSales />
        </Route>
        <Route path="/ContentRowProducts">
          <ContentRowProducts />
        </Route>
        <Route path="/AllUsers">
          <AllUsers />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route component={NotFound} />
      </Switch>
      {/*<!-- End Microdesafio 2 -->*/}
    </React.Fragment>
  );
}
export default SideBar;
