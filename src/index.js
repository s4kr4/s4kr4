import {
  h,
  render,
  Component,
} from 'ink'
import path from 'path'

import Header from './Header'
import Menu from './Menu'

const Profile = () => pug`
  .profile
    Header
    Menu
`

render(<Profile />)
