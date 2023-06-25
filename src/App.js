import Component from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import HomeRoute from './components/HomeRoute'
import ThemeContext from './context/ThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {displayMode: false, savedVideos: [], activeTab: 'Home'}

  toggleDisplayMode = () => {
    this.setState(prevState => ({
      displayMode: !prevState.displayMode,
    }))
  }

  addVideo = video => {
    const {savedVideos} = this.state

    const status = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (status === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedVideos = savedVideos.filter(eachVideo => eachVideo.id !== id)
    this.setState({savedVideos: updatedVideos})
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {savedVideos, displayMode, activeTab} = this.state
    return (
      <ThemeContext.Provider
        value={{
          savedVideos,
          displayMode,
          activeTab,
          addVideo: this.addVideo,
          toggleDisplayMode: this.toggleDisplayMode,
          changeActiveTab: this.changeActiveTab,
          removeVideo: this.removeVideo,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    )
  }
}
export default App
