import './App.less';
// import { Button } from 'antd';
import {BrowserRouter, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {AppHeader,Sidebar} from './components/app-header';
import Home from './pages/home';
import { Linkitem,LinkGroup } from './components/linkitems';
import { useMediaQuery } from 'react-responsive'



function App() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
  return (
    <div className={isBigScreen ? "desktop-layout App" : "mobile-layout App"}>
      {isBigScreen ? <Sidebar /> : <AppHeader />}
      <div className="app-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;


