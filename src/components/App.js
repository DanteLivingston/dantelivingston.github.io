import { lazy, Suspense, useState } from 'react';
import { CameraFill, EaselFill, GearFill, HouseFill, PersonFill } from 'react-bootstrap-icons';
import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import strings from '../config/strings';

const About = lazy(() => import('./About'));
const Art = lazy(() => import('./Art'));
const ArtDetails = lazy(() => import('./ArtDetails'));
const DocumentTitle = lazy(() => import('./DocumentTitle'));
const Home = lazy(() => import('./Home'));
const NotFound = lazy(() => import('./NotFound'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <Suspense fallback={null}>
        <DocumentTitle />
      </Suspense>
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark fixed-top bg-dark'>
          <div className='container'>
            <NavLink className='navbar-brand' to='/' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <HouseFill style={{ marginTop: '-5px' }} className='mr-2' />
              {strings.danteLivingston}
            </NavLink>
            <button
              className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
              type='button'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className={`navbar-collapse collapse ${isMenuOpen ? 'show' : ''}`}
              id='navbarCollapse'
            >
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <NavLink
                    to='/about'
                    className='nav-link'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <PersonFill style={{ marginTop: '-5px' }} className='mr-2' />
                    {strings.about}
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='/digital-art'
                    className='nav-link'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <CameraFill style={{ marginTop: '-5px' }} className='mr-2' />
                    {strings.digital}
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='/traditional-art'
                    className='nav-link'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <EaselFill style={{ marginTop: '-5px' }} className='mr-2' />
                    {strings.traditional}
                  </NavLink>
                </li>
                {strings.enableTools && (
                  <li className='nav-item'>
                    <NavLink
                      to='/art-details/tools'
                      className='nav-link'
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <GearFill style={{ marginTop: '-5px' }} className='mr-2' />
                      {strings.tools}
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main role='main' className='flex-shrink-0 mb-5'>
        <div className='container mt-4'>
          <Suspense fallback={null}>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/digital-art'>
                <Art type='digital' />
              </Route>
              <Route path='/traditional-art'>
                <Art type='traditional' />
              </Route>
              <Route path='/art-details/:slug'>
                <ArtDetails />
              </Route>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route>
                <NotFound is404={true} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </main>
      {strings.footer && (
        <footer className='footer mt-auto py-3 bg-dark text-white text-center'>
          <div className='container'>
            {strings.footer}
            {strings?.socialLinks?.map((socialLink) => (
              <SocialIcon
                key={socialLink.network}
                style={{ height: 35, width: 35 }}
                className='ml-3'
                network={socialLink.network}
                rel='noopener noreferrer'
                target='_blank'
                title={socialLink.title}
                url={socialLink.url}
              />
            ))}
          </div>
        </footer>
      )}
    </Router>
  );
}

export default App;
