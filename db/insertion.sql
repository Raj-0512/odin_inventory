INSERT INTO genre (genre_id, genre_name) VALUES
                                             (1, 'RPG'),
                                             (2, 'Action'),
                                             (3, 'Strategy'),
                                             (4, 'Sports');

INSERT INTO platform (platform_id, platform_name) VALUES
                                                      (1, 'PC'),
                                                      (2, 'PlayStation 5'),
                                                      (3, 'Xbox Series X'),
                                                      (4, 'Nintendo Switch');

INSERT INTO game (game_id, game_name, description, genre_id, platform_id , game_price) VALUES
                                                                              (1, 'The Witcher 3: Wild Hunt', 'Open-world RPG following Geralt of Rivia as he searches for his adopted daughter while battling monsters and political intrigue.', 1, 1 , 300.00),
                                                                              (2, 'Red Dead Redemption 2', 'Story-driven open-world action game set in the dying days of the American Wild West with outlaw Arthur Morgan.', 2, 2,341.00),
                                                                              (3, 'God of War Ragnarök', 'Mythological action adventure where Kratos and Atreus face Norse gods during the events leading to Ragnarök.', 2, 2,420.00),
                                                                              (4, 'Elden Ring', 'Large-scale fantasy action RPG by FromSoftware featuring exploration, challenging combat, and a dark open world.', 1, 3,400.00),
                                                                              (5, 'The Legend of Zelda: Breath of the Wild', 'Open-world adventure where Link explores Hyrule freely to defeat Calamity Ganon.', 1, 4,600.00),
                                                                              (6, 'Call of Duty: Modern Warfare II', 'Military first-person shooter with cinematic campaign, multiplayer modes, and modern combat setting.', 2, 1,350.00),
                                                                              (7, 'Grand Theft Auto V', 'Open-world crime action game following three protagonists across the city of Los Santos.', 2, 1,322.00),
                                                                              (8, 'Cyberpunk 2077', 'Futuristic open-world RPG set in Night City focusing on cybernetic upgrades, crime, and narrative choices.', 1, 1,300.00),
                                                                              (9, 'Starfield', 'Space exploration RPG by Bethesda featuring planetary travel, factions, and customizable ships.', 1, 3,900.00),
                                                                              (10, 'FIFA 23', 'Football simulation featuring licensed teams, realistic gameplay mechanics, and competitive online modes.', 4, 2,420.00),
                                                                              (11, 'NBA 2K24', 'Basketball simulation game with realistic player mechanics, career mode, and online competition.', 4, 3,100.00),
                                                                              (12, 'Halo Infinite', 'Sci-fi first-person shooter featuring Master Chief in a semi-open world combat environment.', 2, 3,100.00),
                                                                              (13, 'Horizon Forbidden West', 'Action RPG where Aloy explores a post-apocalyptic world dominated by robotic creatures.', 1, 2,500.00),
                                                                              (14, 'Assassin’s Creed Valhalla', 'Historical action RPG focused on Viking conquest, exploration, and stealth combat.', 1, 1,600.00),
                                                                              (15, 'Total War: Warhammer III', 'Strategy game combining turn-based empire management with real-time fantasy battles.', 3, 1,650.00),
                                                                              (16, 'Civilization VI', 'Turn-based strategy game about building civilizations from ancient era to modern age.', 3, 1,450.00),
                                                                              (17, 'Forza Horizon 5', 'Open-world racing game set in Mexico featuring realistic cars, exploration, and events.', 4, 3,200.00),
                                                                              (18, 'Spider-Man 2', 'Action adventure featuring Marvel heroes Peter Parker and Miles Morales battling villains in New York.', 2, 2,210.00),
                                                                              (19, 'Super Smash Bros. Ultimate', 'Platform fighting game featuring crossover characters from multiple Nintendo franchises.', 2, 4,122.00),
                                                                              (20, 'Mario Kart 8 Deluxe', 'Arcade-style kart racing game with iconic Nintendo characters and multiplayer tracks.', 4, 4,750.00);

INSERT INTO inventory (inventory_id, game_id, quantity) VALUES
                                                            (1, 1, 45),
                                                            (2, 2, 38),
                                                            (3, 3, 32),
                                                            (4, 4, 50),
                                                            (5, 5, 27),
                                                            (6, 6, 41),
                                                            (7, 7, 60),
                                                            (8, 8, 36),
                                                            (9, 9, 29),
                                                            (10, 10, 55),
                                                            (11, 11, 48),
                                                            (12, 12, 34),
                                                            (13, 13, 30),
                                                            (14, 14, 33),
                                                            (15, 15, 22),
                                                            (16, 16, 40),
                                                            (17, 17, 44),
                                                            (18, 18, 37),
                                                            (19, 19, 52),
                                                            (20, 20, 58);