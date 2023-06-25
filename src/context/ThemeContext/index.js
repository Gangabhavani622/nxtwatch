import React from 'react'

const ThemeContext = React.createContext({
  savedVideos: [],
  displayMode: false,
  toggleDisplayMode: () => {},
  activeTab: 'Home',
  addVideo: () => {},
  changeActiveTab: () => {},
  removeVideo: () => {},
})

export default ThemeContext
