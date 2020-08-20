import React from 'react';
import StartPage from './pages/StartPage';
import FeedPage from './pages/FeedPage';
import LayoutSimple from './components/LayoutSimple';
import PostDetailPage from './pages/PostDetailPage';
import PostDetailPage2 from './pages/PostDetailPage2';
import PostDetailPage3 from './pages/PostDetailPage3';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/paper/:id/:date/:pages"
          render={(props) => {
            return (
              <LayoutSimple>
                <PostDetailPage3 {...props} />
              </LayoutSimple>
            );
          }}
        ></Route>
        <Route
          path="/paper/:id/:date"
          render={(props) => {
            return (
              <LayoutSimple>
                <PostDetailPage2 {...props} />
              </LayoutSimple>
            );
          }}
        ></Route>
        <Route
          path="/paper/:id"
          render={(props) => {
            return (
              <LayoutSimple>
                <PostDetailPage {...props} />
              </LayoutSimple>
            );
          }}
        ></Route>

        <Route path="/feed">
          <LayoutSimple>
            <FeedPage />
          </LayoutSimple>
        </Route>

        <Route path="/">
          <LayoutSimple>
            <StartPage />
          </LayoutSimple>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
