import React from 'react'
import GlobalStyle from '../globalStyle'

import TitleBar from '../titleBar'
import Main from '../main'
import Spinner from '../spinner'

import LoadingProvider from '../loadingProvider'
import UserDetailsProvider from '../userDetailsProvider'
import Header from '../header.js';
const App = () => (
  <>
  <Header>
    <GlobalStyle />
    <LoadingProvider>
      <Spinner />
      <UserDetailsProvider>
        <TitleBar />
        <Main />
      </UserDetailsProvider>
    </LoadingProvider>
    </Header>
  </>
)

export default App
