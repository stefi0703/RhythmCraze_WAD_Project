package org.example.backend.repositories;

import org.example.backend.domain.Artist;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ArtistRepository extends JpaRepository<Artist, Long> {

    @Query("select distinct a from Artist a")
    @EntityGraph(value = "artist.songs", type = EntityGraph.EntityGraphType.LOAD)
    List<Artist> findAllArtistsWithSongs();
}
