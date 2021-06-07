import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { Editor } from './pages/Editor';
import { Template } from './pages/Template';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { About } from './pages/About';
import { WebDetails } from './pages/WebDetails';
import { connect } from 'react-redux';
import { AppFooter } from './cmps/AppFooter';

function _App({ isPageView, isEditMode }) {
  return (
    <section className="app">
      <Router>
        {!isPageView && <AppHeader />}
        <main>
          <Switch>
            <Route path="/view/:webId" component={WebDetails} />
            <Route path="/profile/login" component={Login} />
            <Route path="/profile/signup" component={SignUp} />
            <Route path="/profile/:userId" component={Profile} />
            <Route path="/template" component={Template} />
            <Route path="/editor" component={Editor} />
            <Route path="/about" component={About} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        {(!isEditMode && !isPageView) && <AppFooter />}
      </Router>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    isPageView: state.appModule.isPageView,
    isEditMode: state.appModule.isEditMode
  }
}


export const App = connect(mapStateToProps, null)(_App)