import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilContrast,
  cilMoon,
  cilSun,
  cilAccountLogout,
} from '@coreui/icons'

import { AppHeaderDropdown } from './header/index'
import { useNavigate } from 'react-router-dom'

const AppHeader = () => {
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <CHeader position="sticky" className="mb-4 p-0">
      <CContainer className="d-flex justify-content-end px-4" fluid>
        <CHeaderNav>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <AppHeaderDropdown />
          <CDropdown variant="nav-item">
            <CDropdownToggle caret={false}>
              <CIcon icon={cilAccountLogout} size="lg" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem onClick={handleLogout}>Logout</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader