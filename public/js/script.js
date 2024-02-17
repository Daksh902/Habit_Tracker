document.addEventListener('DOMContentLoaded', function() {
  const addHabitBtn = document.getElementById('add-habit-btn');
  const addHabitForm = document.getElementById('add-habit-form');
  const newHabitForm = document.getElementById('new-habit-form');

  if (addHabitBtn) {
    addHabitBtn.addEventListener('click', () => {
      addHabitForm.style.display = 'block';
    });
  }

  if (newHabitForm) {
    newHabitForm.addEventListener('submit', handleNewHabit);
  }

  async function handleNewHabit(event) {
    event.preventDefault();
    const habitName = document.getElementById('habit-name').value;

    try {
      const response = await fetch('/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: habitName })
      });

      if (response.ok) {
        window.location.reload();
      } else {
        console.error('Error adding habit:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding habit:', error);
    }
  }
});
