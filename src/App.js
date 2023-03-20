import styled from 'styled-components';
import './app.scss';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import ProductList from './pages/ProductList';
import {BrowserRouter , Routes , Route} from 'react-router-dom'


const Container = styled.div`
  width : 100vw;
`

function App() {
  return (
    <Container >
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/product' element={<SingleProduct/>} />
        <Route exact path='/productList' element={<ProductList/>} />
      </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
