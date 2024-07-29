import React, {  useState, createContext } from 'react'

export const Nav = createContext();

const ContextNav = ({ children }) => {

    const [show, setShow] = useState(false);

    const handelList = () => {
      setShow(!show)
    }

  return (
    <Nav.Provider value={{ show, handelList, setShow }}>
        { children }
    </Nav.Provider>
  )
}

export default ContextNav