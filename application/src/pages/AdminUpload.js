import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
import Footer from "../components/footer";
 
import { Navbar } from "./../components/navbar/index";
import { Sidebar } from "./../components/sidebar/index";







import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "../components/signin/SigninElements";
import { ButtonBasic } from "../components/ButtonElements";
const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7;
`;

const UploadForm = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const UploadInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const UploadTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  min-height: 100px;
`;

const UploadButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const AdminUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('url', url);
    formData.append('description', description);

    try {
      const response = await axios.post('https://crms-website-backend.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success(response.data.message || 'Upload successful');
      setFile(null);
      setFileName('');
      setDescription('');
      setUrl('');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error uploading the file');
    }
  };

  return (
    <>
   <Sidebar   />
      <Navbar />
      <AdminContainer>
  <h2>Admin Upload</h2>
  <UploadForm onSubmit={handleSubmit}>
    <label>Choose Photo</label>
    <UploadInput type="file" onChange={handleFileChange} />

    <label>File Name</label>
    <UploadInput
      type="text"
      value={fileName}
      onChange={(e) => setFileName(e.target.value)}
      placeholder="Enter a file name"
    />

    <label>Google Drive URL</label>
    <UploadInput
      type="text"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      placeholder="Enter a Google Drive link"
    />

    <label>Description</label>
    <UploadTextarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Enter a detailed description"
    />

    <UploadButton type="submit">Upload</UploadButton>
  </UploadForm>
</AdminContainer>
<Footer/> 

</>
  );
};

export default AdminUpload;
