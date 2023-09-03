// import logo from './logo.svg';
import { BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import './App.css';
import {ReactQueryDevtools} from 'react-query/devtools'
import {QueryClientProvider, QueryClient} from 'react-query'
import { SuperHerosPage } from './components/SuperHeros.page';
import { RQSuperHerosPage } from './components/RQSuperHeros.page';
import HomePage from './components/Home.page';


const queryClient=new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heros'>Super Heros</Link>
            </li>
            <li>
              <Link to='/rq-super-heros'>RQ Super Heros</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/super-heros' element={<SuperHerosPage/>}/>
        <Route path='/rq-super-heros' element={<RQSuperHerosPage/>} />
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
