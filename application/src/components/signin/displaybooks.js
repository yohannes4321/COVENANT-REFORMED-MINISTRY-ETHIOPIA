import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const BookDisplay = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/books');
        if (response.data) {
          setBooks(response.data);
        } else {
          console.error("No data received from backend");
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false)
      }
    };
    fetchBooks();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value || ""; // Handle undefined gracefully
    setSearchQuery(query);
  };

  const filteredBooks = books.filter((book) => {
    const regex = new RegExp(searchQuery, 'i'); // Create a case-insensitive regex
    return (
      regex.test(book.filename) ||
      (book.description && regex.test(book.description))
    );
  });

  const handleDownload = async (bookId) => {
    try {
      const response = await axios.get(`http://localhost:8000/download/${bookId}`);
      if (response.data.downloadUrl) {
        window.open(response.data.downloadUrl, '_blank');
      } else {
        console.error("Download URL not received from backend");
      }
    } catch (error) {
      console.error("Error downloading book:", error);
    }
  };

  return (
    <div className="book-container">
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
        <div className="loading-spinner">Loading...</div>
      ) : (
        <div className="book-list-container">
          <div className="book-list">
            {filteredBooks.map((book) => (
              <div className="book-card" key={book._id}>
                <div className="book-image">{book.imageurl}</div>
                <h3 className="book-title">{book.filename}</h3>
                <p className="book-description">{book.description}</p>
                <button className="download-btn" onClick={() => handleDownload(book._id)}>
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .book-container {
          padding: 20px;
          background-color: #f9f9f9;
          color: #333;
          min-height: 100vh;
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
          text-align: center;
        }

        .book-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }

        .book-title {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 10px;
        }

        .book-description {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 20px;
        }

        .download-btn {
          padding: 10px 15px;
          background: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .download-btn:hover {
          background: #0056b3;
        }

        .loading-spinner {
          text-align: center;
          font-size: 1.5rem;
          color: #0073e6;
        }

        .book-list-container::-webkit-scrollbar {
          width: 8px;
        }

        .book-list-container::-webkit-scrollbar-thumb {
          background: #007bff;
          border-radius: 4px;
        }

        .book-list-container::-webkit-scrollbar-thumb:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default BookDisplay;
