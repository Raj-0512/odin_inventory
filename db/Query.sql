alter table genre
alter column genre_id
add generated always as identity

SELECT setval(
               pg_get_serial_sequence('genre', 'genre_id'),
               (SELECT MAX(genre_id) FROM genre)
       );