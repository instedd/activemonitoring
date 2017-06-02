import React from 'react'
import MenuButton from 'react-md/lib/Menus/MenuButton'
import ListItem from 'react-md/lib/Lists/ListItem'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { logout } from '../api'

const UserInfo = ({displayName}) =>
  <div className='app-user-info'>
    {displayName}
    <MenuButton
      id='user-menu'
      className='app-user-menu'
      icon
      buttonChildren='arrow_drop_down'>
      <ListItem primaryText='Preferences' />
      <ListItem onClick={logout} primaryText='Sign out' />
    </MenuButton>
  </div>

UserInfo.propTypes = {
  displayName: PropTypes.string
}

export default () =>
  <header className='md-grid app-header'>
    <div className='md-cell md-cell--middle md-cell--10'>
      <ul className='app-menu'>
        <li><NavLink to='/campaigns'>Campaigns</NavLink></li>
        <li><NavLink to='/channels'>Channels</NavLink></li>
      </ul>
    </div>
    <div className='md-cell md-cell--middle md-cell--2'>
      <UserInfo displayName='John Doe' />
    </div>
  </header>
