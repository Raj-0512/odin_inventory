create table game(
    game_id int primary key ,
    game_name varchar(30) not null,
    genre_id int not null,
    platform_id int not null
);

create table genre(
    genre_id int primary key ,
    genre_name varchar(20) not null
);

create table platform(
    platform_id int primary key ,
    platform_name varchar(20) not null
);

create table inventory(
    inventory_id int primary key ,
    game_id int not null unique ,
    quantity int not null check ( quantity >= 0 )
);

alter table game
add constraint fk_game_to_genre foreign key (genre_id) references genre(genre_id);

alter table game
add constraint fk_game_to_platform foreign key (platform_id) references platform(platform_id);

alter table inventory
add constraint fk_inventory_to_game foreign key (game_id) references game(game_id);

ALTER TABLE game
    ADD COLUMN description TEXT;

ALTER TABLE game
    ALTER COLUMN game_name TYPE TEXT;

