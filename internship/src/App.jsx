import { useState } from 'react'
import './App.css'
import Home from './Home'
import AboutMe from './AboutMe'
import Modification from './Modification'

function App() {
  const [activeTab, setActiveTab] = useState('Home')
  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Doe',
    age: '25',
    dept: 'Computer Science',
    schoolName: 'ABC High School',
    collegeDegree: 'Bachelor of Science'
  })
  

  
  

  const tabs = ['Home', 'About Me', 'Modification']

  

  const components = {
    'Home': Home,
    'About Me': AboutMe,
    'Modification': Modification
  }

  const renderContent = () => {
    const Component = components[activeTab]
    if (Component) {
      if (activeTab === 'Modification') {
        return <Component personalInfo={personalInfo}  />
      
      } else {
        return <Component personalInfo={personalInfo} />
      }
    }

    return null
  }

  return (
    <div className="app">
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  )
}

export default App
