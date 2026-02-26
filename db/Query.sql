alter table genre
alter column genre_id
add generated always as identity;


SELECT setval(
               pg_get_serial_sequence('inventory','inventory_id'),
               (SELECT MAX(inventory_id) FROM inventory)
       );

SELECT setval(
               pg_get_serial_sequence('inventory','inventory_id'),
               COALESCE((SELECT MAX(inventory_id) FROM inventory),1)
       );