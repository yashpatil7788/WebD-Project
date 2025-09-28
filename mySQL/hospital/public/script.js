document.addEventListener('DOMContentLoaded', () => {
    fetch('/patients')
        .then(response => response.json())
        .then(data => {
            const app = document.getElementById('app');
            app.innerHTML = '<h2>Patients</h2>';
            data.forEach(patient => {
                const div = document.createElement('div');
                div.textContent = `${patient.name} - ${patient.age} years old`;
                app.appendChild(div);
            });
        })
        .catch(err => console.error('Error fetching patients:', err));
});