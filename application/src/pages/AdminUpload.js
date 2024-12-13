import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from '../components/navbar';
import { Sidebar } from '../components/sidebar';
import Footer from '../components/footer';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [category, setCategory] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('description', description);
    formData.append('category', category);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.statusCode === 200) {
        toast.success(response.data.message);
        setFile(null);
        setFileName('');
        setDescription('');
        setCategory('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error uploading the file');
    }
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <AdminContainer>
        <h2>Admin Upload</h2>
        <UploadForm onSubmit={handleSubmit}>
          <label>File</label>
          <UploadInput type="file" onChange={handleFileChange} />
          <label>File Name</label>
          <UploadInput
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
          <label>Description</label>
          <UploadInput
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
         
          <UploadButton type="submit">Upload</UploadButton>
        </UploadForm>
      </AdminContainer>
      <Footer />
    </>
  );
};

export default AdminUpload;
