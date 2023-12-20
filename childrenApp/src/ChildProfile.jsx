import React from 'react';

// Define the ChildProfile functional component
const ChildProfile = ({ registration }) => {
  // Check if registration data is available
  if (!registration) {
    // If not, return a message or redirect to a default page
    return <p>Please select a child from the ListView.</p>;
  }

  // Render the child profile details
  return (
    <div className="child-profile-page">
      <h2>Child Profile</h2>
      <div className="registration-details">
        <h3>Registration Details:</h3>
        <p>
          <strong>Name:</strong> {registration.firstName} {registration.lastName}
        </p>
        <p>
          <strong>Age:</strong> {registration.age}
        </p>
        <p>
          <strong>Gender:</strong> {registration.gender}
        </p>
        <p>
          <strong>Immunizations:</strong> {registration.immunizations.join(', ')}
        </p>
      </div>
    </div>
  );
};

// Export the ChildProfile component as the default export
export default ChildProfile;
