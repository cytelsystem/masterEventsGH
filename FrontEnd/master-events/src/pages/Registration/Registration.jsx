import React, { useState } from 'react';

const Registration = () => {
    const [isUserSection, setIsUserSection] = useState(true);
    const [userData, setUserData] = useState({
        userName: '',
        userEmail: '',
        userPassword: '',
    });
    const [organizerData, setOrganizerData] = useState({
        organizerName: '',
        organizerEmail: '',
        organizerEvent: '',
    });

    const handleUserChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleOrganizerChange = (e) => {
        setOrganizerData({ ...organizerData, [e.target.name]: e.target.value });
    };

    const handleUserSubmit = (e) => {
        e.preventDefault();
        // Add user registration submission logic here
    };

    const handleOrganizerSubmit = (e) => {
        e.preventDefault();
        // Add organizer registration submission logic here
    };

    const toggleSection = () => {
        setIsUserSection(!isUserSection);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="w-full max-w-md">
                {isUserSection ? (
                    <form onSubmit={handleUserSubmit} className="mb-8">
                        <h2 className="text-3xl font-bold mb-4">User Registration</h2>
                        <input
                            // User registration form inputs
                            onChange={handleUserChange}
                        />
                        {/* Additional user registration form fields */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register as User
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleOrganizerSubmit}>
                        <h2 className="text-3xl font-bold mb-4">Event Organizer Registration</h2>
                        <input
                            // Organizer registration form inputs
                            onChange={handleOrganizerChange}
                        />
                        {/* Additional organizer registration form fields */}
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register as Organizer
                        </button>
                    </form>
                )}
                <div className="mt-4">
                    <button
                        onClick={toggleSection}
                        className="text-blue-500 hover:underline focus:outline-none"
                    >
                        {isUserSection ? 'Or register as an Organizer' : 'Or register as a User'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registration;