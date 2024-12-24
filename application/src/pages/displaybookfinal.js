import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Loader component
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

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

  return (
    <div className="book-container">
      <div className="header">
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
      <div className="search-bar-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="book-list-container">
          <div className="book-list">
            {filteredBooks.map((book) => (
              <div className="book-card" key={book._id}>
                <div className="book-image">
                  <img src={book.imageurl} alt={book.filename} />
                </div>
                <h3 className="book-title">{book.filename}</h3>
                <p className="book-description">{book.description}</p>
                <button
                  className="download-btn"
                  onClick={() => handleDownload(book._id)}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .loader-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        .loader {
          border: 16px solid #f3f3f3;
          border-top: 16px solid blue;
          border-right: 16px solid green;
          border-bottom: 16px solid red;
          border-left: 16px solid pink;
          border-radius: 50%;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .book-container {
          padding: 20px;
          background-color: #f9f9f9;
          color: #333;
          min-height: 100vh;
        }

        .header {
          display: flex;
          justify-content: flex-end;
          padding: 10px 0;
        }

        .home-button {
          background: #007bff;
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;
          font-size: 1rem;
          transition: background 0.3s ease;
        }

        .home-button:hover {
          background: #0056b3;
        }

        .search-bar-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .search-icon {
          position: relative;
          font-size: 20px;
          color: #555;
          margin-right: 10px;
        }

        .search-bar {
          width: 100%;
          max-width: 500px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 25px;
          outline: none;
          font-size: 16px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .book-list-container {
          max-height: 70vh;
          overflow-y: auto;
          padding: 10px;
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .book-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .book-card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .book-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }

        .book-image img {
          max-width: 100%;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .book-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .book-description {
          font-size: 14px;
          color: #555;
          margin-bottom: 15px;
        }

        .download-btn {
          background: #28a745;
          color: #fff;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          transition: background 0.3s ease;
        }

        .download-btn:hover {
          background: #218838;
        }
      `}</style>
    </div>
  );
};

export default BookDisplay;
