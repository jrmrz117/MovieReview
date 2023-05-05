CREATE TABLE reviews ('
    id INT NOT NULL AUTO_INCREMENT,
    movie_id INT NOT NULL,
    rating INT NOT NULL,
    review TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
');