import React from 'react'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
const navigate=useNavigate()
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1>Diva</h1>
        <nav>
          <ul>
          <li><a onClick={()=>navigate('/')} href="">Home</a></li>
          <li><a onClick={()=>navigate('/basket')} href="">Basket</a></li>
          <li><a onClick={()=>navigate('/admin')} href="">Admin</a></li>
          </ul>
        </nav>
        <div className={styles.bar}>
        <FaBarsStaggered onClick={toggleDrawer}/>
        </div>
      </div>
      <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className={styles.menu}
            >
                <div>
                <nav>
          <ul>
          <li><a onClick={()=>navigate('/')} href="">Home</a></li>
          <li><a onClick={()=>navigate('/basket')} href="">Basket</a></li>
          <li><a onClick={()=>navigate('/admin')} href="">Admin</a></li>
          </ul>
        </nav>
                </div>
            </Drawer>
    </div>
  )
}

export default Header
