import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookDisplay = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          'https://crms-website-backend-erc2.onrender.com/books'
        );
        if (response.data) {
          setBooks(response.data);
        } else {
          console.error('No data received from backend');
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value || '');
  };

  const filteredBooks = books.filter((book) => {
    const regex = new RegExp(searchQuery, 'i');
    return (
      regex.test(book.filename) ||
      (book.description && regex.test(book.description))
    );
  });

  const handleDownload = async (bookId) => {
    try {
      const response = await axios.get(
        `https://crms-website-backend-erc2.onrender.com/download/${bookId}`
      );
      if (response.data.downloadUrl) {
        window.open(response.data.downloadUrl, '_blank');
      } else {
        console.error('Download URL not received from backend');
      }
    } catch (error) {
      console.error('Error downloading book:', error);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Please wait...</div>;
  }

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <input
        type="text"
        placeholder="Search for books..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div>
        {filteredBooks.map((book) => (
          <div key={book._id}>
            <img src={book.imageurl} alt={book.filename} />
            <h3>{book.filename}</h3>
            <p>{book.description}</p>
            <button onClick={() => handleDownload(book._id)}>Download</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDisplay;
