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
          'https://crms-website-backend.onrender.com/books'
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

  const filteredBooks = Array.isArray(books)
    ? books.filter((book) => {
        const regex = new RegExp(searchQuery, 'i');
        return (
          regex.test(book.filename) ||
          (book.description && regex.test(book.description))
        );
      })
    : [];

  const handleDownload = async (bookId) => {
    try {
      const response = await axios.get(
        `https://crms-website-backend.onrender.com/download/${bookId}`
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
    return <div style={{ textAlign: 'center', padding: '20px' }}>Loading books...</div>;
  }

  return (
    <div style={styles.bookDisplayContainer}>
      <header style={styles.header}>
        <Link to="/" style={styles.homeLink}>Home</Link>
        <input
          type="text"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={handleSearch}
          style={styles.searchBar}
        />
      </header>
      <div style={styles.bookCarousel}>
        {filteredBooks.map((book) => (
          <div key={book._id} style={styles.bookCard}>
            <img src={book.imageurl} alt={book.filename} style={styles.bookImage} />
            <div style={styles.bookDetails}>
              <h3 style={styles.bookTitle}>{book.filename}</h3>
              <p style={styles.bookDescription}>{book.description}</p>
              <button
                style={styles.downloadButton}
                onClick={() => handleDownload(book._id)}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  bookDisplayContainer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  homeLink: {
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
  },
  searchBar: {
    padding: '10px',
    width: '60%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  bookCarousel: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  bookCard: {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '250px',
    transition: 'transform 0.3s ease',
  },
  bookCardHover: {
    transform: 'scale(1.05)',
  },
  bookImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  bookDetails: {
    padding: '15px',
  },
  bookTitle: {
    fontSize: '18px',
    color: '#333',
    margin: '10px 0',
  },
  bookDescription: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '15px',
  },
  downloadButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  downloadButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default BookDisplay;
