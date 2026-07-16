const API_URL = "http://localhost:5000/api/notes";

const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

let editId = null;

// Fetch All Notes
async function fetchNotes() {
    try {
        const response = await fetch(API_URL);
        const notes = await response.json();

        notesContainer.innerHTML = "";

        // Empty State
        if (notes.length === 0) {
            notesContainer.innerHTML = `
                <div class="empty">
                    📒 No notes available.
                </div>
            `;
            return;
        }

        notes.forEach((note) => {

            const noteDiv = document.createElement("div");
            noteDiv.className = "note";

            noteDiv.innerHTML = `
                <span>📝 ${note.title}</span>

                <div class="note-buttons">

                    <button
                        class="edit-btn"
                        onclick="editNote('${note._id}','${note.title}')">
                        ✏️ Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteNote('${note._id}')">
                        🗑️ Delete
                    </button>

                </div>
            `;

            notesContainer.appendChild(noteDiv);

        });

    } catch (error) {
        console.error(error);
    }
}

// Add / Update Note
addBtn.addEventListener("click", async () => {

    const title = noteInput.value.trim();

    if (title === "") {
        alert("Please enter a note.");
        return;
    }

    try {

        if (editId) {

            await fetch(`${API_URL}/${editId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title })
            });

            editId = null;
            addBtn.innerHTML = "💾 Save Note";

        } else {

            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title })
            });

        }

        noteInput.value = "";

        fetchNotes();

    } catch (error) {
        console.error(error);
    }

});

// Edit Note
function editNote(id, title) {

    noteInput.value = title;
    editId = id;

    addBtn.innerHTML = "✏️ Update Note";

    noteInput.focus();

}

// Delete Note
async function deleteNote(id) {

    const confirmDelete = confirm("Are you sure you want to delete this note?");

    if (!confirmDelete) return;

    try {

        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        fetchNotes();

    } catch (error) {
        console.error(error);
    }

}

// Load Notes
fetchNotes();