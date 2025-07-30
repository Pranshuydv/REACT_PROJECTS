import React, { useState } from 'react'

const App = () => {
  const [searchInput, setSearchInput] = useState('')

  const Courses = ['Html', 'CSS', 'JavaScript', 'Java', 'Jquery', 'Python', 'React-JS', 'Tailwind-CSS', 'Bootstrap']

  const filteredCourses = Courses.filter(Courses =>
    Courses.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">🔍 Search Courses</h1>

      <input
        type="text"
        placeholder="Search by course name..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
      />

      <ul className="w-full max-w-md space-y-3">
        {
          filteredCourses.map((Course, index) =>
            <li className="bg-white p-4 rounded-lg shadow text-gray-700" key={index}>{Course}</li>
          )

        }
        {filteredCourses.length === 0 && (
          <p className="text-gray-500">No courses found.</p>
        )}

      </ul>
    </div>

  )
}

export default App