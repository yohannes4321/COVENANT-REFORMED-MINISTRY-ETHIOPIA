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
        // Correct the API endpoint to fetch books from the backend.
        const response = await axios.get('https://crms-website-backend.onrender.com/books'); 
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
        // Ensure properties exist before testing with regex to prevent errors.
        const description = book.description || '';
        const filename = book.filename || '';
        const regex = new RegExp(searchQuery, 'i');
        return regex.test(filename) || regex.test(description);
      })
    : [];

const handleDownload = (bookId) => {
  window.open(`https://crms-website-backend.onrender.com/download/${bookId}`, "_blank");
};


  if (loading) {
    return <div style={styles.loading}>Loading books...</div>;
  }

  if (filteredBooks.length === 0 && searchQuery) {
    return <div style={styles.noResults}>No books found for "{searchQuery}".</div>;
  }
  
  if (filteredBooks.length === 0 && !searchQuery) {
    return <div style={styles.noResults}>No books available. Please check the backend.</div>;
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
            {/* Use the uploadedUrl for the image source. The filename can be the alt text. */}
            <img src={book.uploadedUrl} alt={book.filename || 'Book cover'} style={styles.bookImage} />
            <div style={styles.bookDetails}>
              <h3 style={styles.bookTitle}>{book.filename || 'Untitled'}</h3>
              <p style={styles.bookDescription}>{book.description || 'No description available.'}</p>
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

// CSS styles remain mostly the same but with minor additions for hover effects.
const styles = {
  bookDisplayContainer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  homeLink: {
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  searchBar: {
    padding: '12px 15px',
    width: '60%',
    border: '1px solid #ccc',
    borderRadius: '25px',
    fontSize: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  bookCarousel: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  bookCard: {
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '280px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    cursor: 'pointer',
  },
  bookCardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
  },
  bookImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderBottom: '1px solid #e0e0e0',
  },
  bookDetails: {
    padding: '15px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bookTitle: {
    fontSize: '20px',
    color: '#333',
    margin: '0 0 10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  bookDescription: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '15px',
    maxHeight: '4.2em', // Limit description to 3 lines
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '1.4em',
  },
  downloadButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    marginTop: 'auto',
  },
  downloadButtonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.02)',
  },
  loading: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '20px',
    color: '#555',
  },
  noResults: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '20px',
    color: '#888',
  }
};

export default BookDisplay;