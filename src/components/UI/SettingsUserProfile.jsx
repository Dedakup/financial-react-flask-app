// UserProfile.jsx

import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the profile
const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const ProfileForm = styled.form`
  width: 100%;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ProfilePictureContainer = styled.div`
  width: 200px;
  text-align: center;
`;

const ProfilePicture = styled.div`
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const UserProfile = () => {
    const [profile, setProfile] = useState({
        fullName: 'Tanzir Rahman',
        email: 'tanzir.rahman@email.com',
        username: 'tanzir.rahman',
        phoneNumber: '+880 51547 58868',
    });

    // Handle file upload here
    const handleFileUpload = () => {
        // Implement file upload logic
    };

    // Update state with form input
    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement update profile logic
    };

    return (
        <ProfileContainer>
            <ProfileForm onSubmit={handleSubmit}>
                <h2>Account</h2>
                {/* ... other tabs like 'Security' can be implemented here */}
                <InputGroup>
                    <Label>Full name</Label>
                    <Input name="fullName" value={profile.fullName} onChange={handleChange} />
                </InputGroup>
                <InputGroup>
                    <Label>Email</Label>
                    <Input name="email" type="email" value={profile.email} onChange={handleChange} />
                </InputGroup>
                <InputGroup>
                    <Label>Username</Label>
                    <Input name="username" value={profile.username} onChange={handleChange} />
                </InputGroup>
                <InputGroup>
                    <Label>Phone Number</Label>
                    <Input name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} />
                </InputGroup>
                <Button type="submit">Update Profile</Button>
            </ProfileForm>
            <ProfilePictureContainer>
                <h3>Your Profile Picture</h3>
                <ProfilePicture>
                    <p>Upload your photo</p>
                    {/* Add a file input here for file upload */}
                </ProfilePicture>
                <Button onClick={handleFileUpload}>Upload</Button>
            </ProfilePictureContainer>
        </ProfileContainer>
    );
};

export default UserProfile;
