import React, { useState, useEffect } from "react";
import CustomNavbar from "./CustomNavbar";
import { Container, Button } from "react-bootstrap";
import heartIcon from "./heart_icon.png";
import './MyAccount.css';

const MyAccount = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favoritesData = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(favoritesData);
    }, []);

    const handleDeleteFavorite = (indexToDelete) => {
        const updatedFavorites = favorites.filter((_, index) => index !== indexToDelete);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <>
            <CustomNavbar />
            <div className="bg-dark text-light py-4">
                <Container>
                    <p></p>
                    <h3 style={{ color: "#FAFAED" }}>Welcome to your account page!</h3>
                    <p style={{ color: "#FAFAED" }}>Here you can view your account details, purchase history, and more.</p>
                </Container>
            </div>
            <p></p>
            <Container className="favorites-section py-4">
                <div className="favorites-title">
                    <h4>My Favorites</h4>
                </div>
                <p></p>
                <div className="favorites">
                    <div className="favorite-item">
                        <a href="#">Concerts</a>
                        {favorites.length > 0 && (
                            <div className="favorites-list">
                                {favorites.map((favorite, index) => (
                                    <div key={index} className="favorite-dropdown-item">
                                        {favorite.name} - {favorite.artist}
                                        <Button
                                            className="delete-button"
                                            size="sm"
                                            onClick={() => handleDeleteFavorite(index)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <a href="#">Artists</a>
                    <a href="#">Venues</a>
                </div>
            </Container>
        </>
    );
};

export default MyAccount;




