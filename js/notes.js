// Load notes from localStorage on page load
window.addEventListener('load', function() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        document.getElementById('notes-textarea').value = savedNotes;
    }
});

// Save notes to localStorage
document.getElementById('notes-textarea').addEventListener('input', function() {
    localStorage.setItem('notes', this.value);
});
