import './App.scss';
// import { Button } from 'antd';
import {BrowserRouter, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {AppHeader,Sidebar} from './components/app-header';
import Home from './pages/home';
import { useMediaQuery } from 'react-responsive'



function App() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 960px)' })
  return (
    <div className={isBigScreen?"App desktop_layout":"App mobile_layout"}>
      {isBigScreen ? <Sidebar /> : <AppHeader />}
      <div className="app_body">
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


