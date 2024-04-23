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

const UserSecurity = () => {
    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        retypePassword: '',
    });

    // Update state with form input
    const handleChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement update password logic
    };

    return (
        <ProfileContainer>
            <ProfileForm onSubmit={handleSubmit}>
                <h2>Security</h2>
                <InputGroup>
                    <Label>Old Password</Label>
                    <Input name="oldPassword" type="password" value={passwords.oldPassword} onChange={handleChange} />
                </InputGroup>
                <InputGroup>
                    <Label>New Password</Label>
                    <Input name="newPassword" type="password" value={passwords.newPassword} onChange={handleChange} />
                </InputGroup>
                <InputGroup>
                    <Label>Retype Password</Label>
                    <Input name="retypePassword" type="password" value={passwords.retypePassword} onChange={handleChange} />
                </InputGroup>
                <Button type="submit">Update Password</Button>
            </ProfileForm>
            {/* The phone number input can be reused here if needed */}
        </ProfileContainer>
    );
};

export default UserSecurity;
