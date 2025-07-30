import React, { useState} from 'react';

const App = () => {
  const [typingArea, setTypingArea] = useState('')
  const [addNotes, setAddNotes] = useState([])

  const handelClick = () => {
    if (typingArea.trim() === '') {
      alert('fill out')
      return;
    }

    const newNote = {
      id: Date.now(),
      text: typingArea,

    }

    setAddNotes([...addNotes, newNote]);
    setTypingArea("");
  }


  const deleteNote = (id) => {
    const updatedNotes = addNotes.filter(note => note.id !== id);
    setAddNotes(updatedNotes);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-200 p-6 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🗒️ Notes App</h1>

        {/* Note Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Write your note</label>
          <textarea
            value={typingArea}
            onChange={(e) => setTypingArea(e.target.value)}
            placeholder="Type your note here..."
            rows={4}
            className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            onClick={handelClick}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-md">
            ➕ Add Note
          </button>
        </div>

        {/* Notes List */}
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-4">📝 Your Notes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto pr-2">
            {/* Example Note */}

            {addNotes.map((note) =>
              <div key={note.id} className="bg-yellow-100 border border-yellow-300 p-4 rounded-md shadow-sm relative">
                <p className="text-gray-800">{note.text}</p>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold">✕</button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
