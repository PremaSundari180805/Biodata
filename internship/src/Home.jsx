import './App.css'

function Home({ personalInfo, clearData }) {
  return (
    <div>
      <h2>Home Page</h2>
      <table className="info-table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{personalInfo.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{personalInfo.age}</td>
          </tr>
          <tr>
            <td>Dept</td>
            <td>{personalInfo.dept}</td>
          </tr>
          <tr>
            <td>School Name</td>
            <td>{personalInfo.schoolName}</td>
          </tr>
          <tr>
            <td>College Degree</td>
            <td>{personalInfo.collegeDegree}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default Home
