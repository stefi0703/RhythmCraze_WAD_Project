import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import CustomNavbar from "./CustomNavbar";
import heartIcon from "./heart_icon.png"; // Adjust the import path as needed
import './ArtistList.css'; // Import the CSS file

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [artistFavorites, setArtistFavorites] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await Axios.get("http://localhost:8080/artists");
        setArtists(response.data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("artistFavorites")) || [];
    setArtistFavorites(savedFavorites);
  }, []);

  // const handleFavorite = (artist) => {
  //   const exists = artistFavorites.some(fav => fav.name === artist.name);
  //   if (!exists) {
  //     const updatedFavorites = [...artistFavorites, artist];
  //     setArtistFavorites(updatedFavorites);
  //     localStorage.setItem("artistFavorites", JSON.stringify(updatedFavorites));
  //   }
  // };

  const handleFavorite = (artist) => {
    const exists = artistFavorites.some(fav => fav.name === artist.name);
    if (!exists) {
      const updatedFavorites = [...artistFavorites, artist];
      setArtistFavorites(updatedFavorites);
      localStorage.setItem("artistFavorites", JSON.stringify(updatedFavorites));
      alert("Artist added to favorites");
    } else {
      alert("Artist is already in favorites");
    }
  };

  return (
    <>
      <CustomNavbar />
      <Container>
        <h1>Artists</h1>
        {artists.length > 0 ? (
          artists.map((artist) => (
            <Card key={artist.id} className="my-3">
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>{artist.name}</Card.Title>
                    <Card.Text>Age: {artist.age}</Card.Text>
                    {artist.songTitles && artist.songTitles.length > 0 && (
                      <div>
                        <h5>Songs:</h5>
                        <ul>
                          {artist.songTitles.map((songTitle, index) => (
                            <li key={index}>{songTitle}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Col>
                  <Col className="text-end">
                    <div className="favorite-container">
                      <Button variant="link" onClick={() => handleFavorite(artist)}>
                        <img
                          src={heartIcon}
                          alt="Favorite"
                          className="heart-icon"
                        />
                      </Button>
                      <div className="favorite-text">Add to favorite</div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No artists available</p>
        )}
      </Container>
    </>
  );
};

export default ArtistList;

