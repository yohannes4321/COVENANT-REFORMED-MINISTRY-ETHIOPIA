// Updated BookDisplay React Component
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const BookDisplay = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://crms-website-backend-erc2.onrender.com/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleDownload = async (bookId) => {
    try {
      const response = await axios.get(`https://crms-website-backend-erc2.onrender.com/download/${bookId}`);
      if (response.data.downloadUrl) {
        window.location.href = response.data.downloadUrl; // Redirects to the download URL in the same tab
      } else {
        console.error("No download URL available");
      }
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.filename &&
      typeof book.filename === "string" &&
      book.filename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Books</h1>

      {/* Search Bar */}
      <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="text"
          placeholder="Search books"
          value={searchTerm}
          onChange={handleSearch}
          style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <FaSearch size={20} color="#007bff" />
      </div>

      {loading ? (
        <p>Loading books...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book._id}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "8px",
                  width: "250px",
                  textAlign: "center",
                }}
              >
                <img
                  src={book.uploadedUrl}
                  alt={book.filename}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <h3>{book.filename}</h3>
                <p>{book.description}</p>
                <button
                  onClick={() => handleDownload(book._id)}
                  style={{
                    marginTop: "10px",
                    padding: "10px 15px",
                    border: "none",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Download
                </button>
              </div>
            ))
          ) : (
            <p>No books found matching "{searchTerm}"</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BookDisplay;
