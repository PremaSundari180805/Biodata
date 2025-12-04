import './App.css'
import mypic from './assets/mypic.jpg'

function AboutMe({ personalInfo }) {
  return (
    <div>
      <h2>About Me</h2>
      <div className="profile-picture">
        <img src={mypic} alt="Profile Picture" />
      </div>
      <p>
        Hello! I am {personalInfo.name}, a {personalInfo.age}-year-old student in the {personalInfo.dept} department.
        I graduated from {personalInfo.schoolName} and hold a {personalInfo.collegeDegree}.
        I am passionate about technology and learning new things.
      </p>
    </div>
  )
}

export default AboutMe
