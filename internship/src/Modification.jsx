import './App.css'

function Modification({ personalInfo, onInputChange, clearData }) {
  const handleInputChange = (field, value) => {
    // call parent updater so App's state updates and flows to other tabs
    if (typeof onInputChange === 'function') onInputChange(field, value)
  }

  const handleClear = () => {
    if (typeof clearData === 'function') clearData()
  }

  return (
    <div>
      <h2>Modification</h2>
      <form className="edit-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name:
          <input
            type="text"
            value={personalInfo.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            value={personalInfo.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
          />
        </label>
        <label>
          Dept:
          <input
            type="text"
            value={personalInfo.dept}
            onChange={(e) => handleInputChange('dept', e.target.value)}
          />
        </label>
        <label>
          School Name:
          <input
            type="text"
            value={personalInfo.schoolName}
            onChange={(e) => handleInputChange('schoolName', e.target.value)}
          />
        </label>
        <label>
          College Degree:
          <input
            type="text"
            value={personalInfo.collegeDegree}
            onChange={(e) => handleInputChange('collegeDegree', e.target.value)}
          />
        </label>
      </form>
      <div>
        <button type="button" onClick={handleClear}>Clear</button>
      </div>
    </div>
  )
}

export default Modification
