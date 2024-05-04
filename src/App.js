import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectAllPost } from './features/postSlice';
import NavBar from './components/Navbar';
import Main from './pages/Main';
import Checkout from './pages/Checkout';
import NoItemsAdded from './components/NoItemsAdded';

const App = () => {
  const postAll = useSelector(selectAllPost);
  const addedCart = postAll.filter(element => element.added !== undefined && element)
  console.log(postAll)
  return (
    <>
      <NavBar
        postAll={postAll}
      />
      <Routes>

        <Route path='/' element={
          <Main
            postAll={postAll}
          />
        } />

        <Route
          path='/checkout'
          element={
            addedCart.length !== 0 ?
              <Checkout
                postAll={addedCart}
              /> :
              <NoItemsAdded />
          }
        />

      </Routes>

    </>

  )
}

export default App;