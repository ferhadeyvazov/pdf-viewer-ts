import React from 'react'
import Nav from '../components/navbar/Nav';

type IProps={
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({children}) => {
  return (
    <>
    <Nav />
    {children}

    </>
  )
}

export default MainLayout