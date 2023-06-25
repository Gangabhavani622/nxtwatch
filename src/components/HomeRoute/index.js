import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'

const HomeRoute = () => (
  <ThemeContext.Consumer>
    <Header />
  </ThemeContext.Consumer>
)

export default HomeRoute
