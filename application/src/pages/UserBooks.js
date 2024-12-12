import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Navbar } from './../components/navbar';
import { Sidebar } from './../components/sidebar';
import Footer from './../components/footer';

const BooksContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
`;

const BookCard = styled.div`
  background-color: #fff;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BookTitle = styled.h3`
  margin: 0;
`;

const BookDescription = styled.p`
  margin: 0;
`;

const DownloadButton = styled.a`
  padding: 10px;
  background-color: #28a745;
  color: white;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #218838;
  }
`;

const UserBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Sidebar />
      <Navbar />
      <BooksContainer>
        <h2>All Books</h2>
        {books.map((book) => (
          <BookCard key={book._id}>
            <BookTitle>{book.filename}</BookTitle>
            <BookDescription>{book.description}</BookDescription>
            <DownloadButton href={book.url} target="_blank" rel="noopener noreferrer">
              Download
            </DownloadButton>
          </BookCard>
        ))}
      </BooksContainer>
      <Footer />
    </>
  );
};

export default UserBooks;
