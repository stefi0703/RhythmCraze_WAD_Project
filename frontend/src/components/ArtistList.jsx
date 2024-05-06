import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import Axios from "axios";
import CustomNavbar from "./CustomNavbar";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

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

  console.log(artists); // Log the value of artists state

  return (
    <>
      <CustomNavbar />
      <Container>
        <h1>Artists</h1>
        {artists.length > 0 ? (
          artists.map((artist) => (
            <Card key={artist.id} className="my-3">
              <Card.Body>
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