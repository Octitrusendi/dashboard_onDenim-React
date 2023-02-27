import React from 'react';
import '../assets/css/style.css';
import image from '../assets/images/logo.png';
import ContentWrapper from './ContentWrapper';
import ContentRowMovies from './ContentRowMovies';
import AllUsers from './allUsers';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import AllProducts from './AllProducts';
import Categories from './Categories';


function SideBar(){
    return(
        
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
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
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
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
            <Route path="/AllUsers">
                    <AllUsers />
                </Route> 
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;