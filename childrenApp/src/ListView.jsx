import React, { useState } from 'react';
import ChildProfile from './ChildProfile';

// Define the ListView functional component
const ListView = ({ registrations }) => {
  // State to track the selected registration
  const [selectedRegistration, setSelectedRegistration] = useState(null);

  // Styles for the registration blocks
  const blockStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '20px',
    cursor: 'pointer',
  };

  // Styles for immunizations details
  const immunizationsStyle = {
    marginBottom: '10px',
  };

  // Handler to set the selected registration
  const onClickRegistration = (registration) => {
    setSelectedRegistration(registration);
  };

  // Render the ListView component
  return (
    <div className="list-view">
      <h2>Registrations:</h2>

      {/* Check if there are no registrations */}
      {registrations.length === 0 ? (
        <p>No registrations yet.</p>
      ) : (
        // Map through registrations and render each registration block
        registrations.map((registration, index) => (
          <div
            key={index}
            style={blockStyle}
            onClick={() => onClickRegistration(registration)}
          >
            {/* Display registration details */}
            <p>
              <strong>Name:</strong> {registration.firstName} {registration.lastName}
            </p>
            <p>
              <strong>Age:</strong> {registration.age}
            </p>
            <p>
              <strong>Gender:</strong> {registration.gender}
            </p>
            <p style={immunizationsStyle}>
              <strong>Immunizations:</strong> {registration.immunizations.join(', ')}
            </p>
          </div>
        ))
      )}

      {/* Render the ChildProfile component with the selected registration */}
      <ChildProfile registration={selectedRegistration} />
    </div>
  );
};

// Export the ListView component as the default export
export default ListView;
