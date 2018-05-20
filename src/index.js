import {
  h,
  render,
} from 'ink'

import Header from './Header'
import Menu from './Menu'

const Profile = () => pug`
  .profile
    Header
    Menu
`

render(<Profile />)
