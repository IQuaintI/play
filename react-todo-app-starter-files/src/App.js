import React from 'react';
import PageTitle from './components/PageTitle';
import style from './styles/modules/app.module.scss';
import AppHeader from './components/AppHeader';

function App() {
  return (
    // The container class is from the GlobalStyles.css file.//
    <div className="container">
      <PageTitle>TO-DO LIST</PageTitle>

      {
        // AppHeader is a component. The style.app__wrapper class is from the app.module.scss file.//}
        <div className={style.app__wrapper}>
          <AppHeader />
        </div>
      }
    </div>
  );
}

export default App;
