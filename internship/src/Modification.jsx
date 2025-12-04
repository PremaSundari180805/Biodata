import { useState } from 'react'
import './App.css'

function Modification({ personalInfo }) {
  const [formData, setFormData] = useState(personalInfo)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleClear = () => {
    setFormData({
      name: '',
      age: '',
      dept: '',
      schoolName: '',
      collegeDegree: ''
    })
  }
  return (
    <div>
      <h2>Modification</h2>
      <form className="edit-form">
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            value={formData.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
          />
        </label>
        <label>
          Dept:
          <input
            type="text"
            value={formData.dept}
            onChange={(e) => handleInputChange('dept', e.target.value)}
          />
        </label>
        <label>
          School Name:
          <input
            type="text"
            value={formData.schoolName}
            onChange={(e) => handleInputChange('schoolName', e.target.value)}
          />
        </label>
        <label>
          College Degree:
          <input
            type="text"
            value={formData.collegeDegree}
            onChange={(e) => handleInputChange('collegeDegree', e.target.value)}
          />
        </label>
      </form>
      <div>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  )
}

export default Modification
