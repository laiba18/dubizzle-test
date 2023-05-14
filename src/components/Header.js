import Octicon from 'react-octicon'
import Search from './Search';
import { HeaderWrapper } from './styles';

function Header() {
  return (
    <HeaderWrapper>
      <Octicon name="mark-github" mega/>
      <Search />
    </HeaderWrapper>
  )
}

export default Header
