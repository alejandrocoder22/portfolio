import Menu from './Menu'
import Profile from './Profile'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__wrapper'>
        <Menu />
        <Profile />
      </div>
    </aside>
  )
}

export default Sidebar
