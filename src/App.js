

import Table from './components/table';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './components/users';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <div >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Table />} />
            <Route path='/users/:id' element={<Users />} />

          </Routes>
        </BrowserRouter>
      </Provider>


    </div>
  );
}

export default App;
