import React, { useState } from 'react'

import Sidebar from '../../components/sidebar/Sidebar'
import Actionbar from '../../components/actionbar/Acionbar'
import './adminLayout.scss'

const AdminLayout = ({children}) => {
  const [activeSidebarItem, setActiveSidebarItem] = useState(null)

  const handleSidebarItemClick = (item) => {
    setActiveSidebarItem(item)
  }
  return (
    <div className='layoutWrapper'>
        <Sidebar activeItem={activeSidebarItem} onItemClick={handleSidebarItemClick} />
        <div className='rightContainer'>
          <Actionbar />
          <div className='content'>
          {
            children
          }
          </div>
        </div>
    </div>
  )
}

export default AdminLayout