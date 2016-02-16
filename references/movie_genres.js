var allNetflixGenres = ["Action & Adventure", "Action Classics", "Action Comedies", "Action Thrillers", "Adventures", "African-American Action", "Blaxploitation", "Blockbusters", "Comic Books and Superheroes", "Crime Action", "Deadly Disasters", "Espionage Action", "Foreign Action & Adventure", "Heist Films", "Martial Arts", "Military & War Action", "Super Swashbucklers", "Westerns", "Classics", "Classic Comedies", "Classic Dramas", "Classic Sci-Fi & Fantasy", "Classic Thrillers", "Classic War Stories", "Classic Westerns", "Epics", "Film Noir", "Foreign Classics", "Foreign Classic Comedies", "Foreign Classic Dramas", "Foreign Silent Films", "Silent Films", "Drama", "African-American Dramas", "Biographies", "Classic Dramas", "Courtroom Dramas", "Crime Dramas", "Dramas Based on Real Life", "Dramas Based on the Book", "Dramas Based on Bestsellers", "Dramas Based on Classic Literature", "Dramas Based on Contemporary Literature", "Family Dramas", "Foreign Dramas", "Gambling Dramas", "Gay & Lesbian Dramas", "Indie Dramas", "Latino Dramas", "Medical Dramas", "Military & War Dramas", "Period Pieces", "Pre-20th Century Period Pieces", "20th Century Period Pieces", "Political Dramas", "Romantic Dramas", "Showbiz Dramas", "Social Issue Dramas", "Sports Dramas", "Tearjerkers", "Gay & Lesbian", "Gay & Lesbian Comedies", "Gay & Lesbian Dramas", "Gay & Lesbian Romance", "Foreign Gay & Lesbian", "Indie Gay & Lesbian", "Gay", "Lesbian", "Bisexual", "LOGO", "Music & Musicals", "Classical Music", "Classical Choral Music", "Classical Instrumental Music", "Opera & Operetta", "Sacred Classical Music", "Country & Western/Folk", "American Folk & Bluegrass", "Classic Country & Western", "New Country", "Inspirational Music", "Gospel Music", "Inspirational Rock & Pop", "New Age", "Sacred Classical Music", "Sacred Folk & Traditional Music", "Jazz & Easy Listening", "Afro-Cuban & Latin Jazz", "Classic Jazz", "Contemporary Jazz", "Jazz Greats", "Swing & Big Band", "Vocal Jazz", "Vocal Pop", "Karaoke", "Latin Music", "Afro-Cuban & Latin Jazz", "Brazilian Music", "Latin Pop", "Reggaeton", "Rock en Español", "Traditional Latin Music", "Music Lessons", "Bass Lessons", "Drum Lessons", "Guitar & Banjo Lessons", "Miscellaneous Music Lessons", "Piano & Keyboard Lessons", "Voice Lessons", "Musicals", "Classic Movie Musicals", "Classic Stage Musicals", "Contemporary Movie Musicals", "Contemporary Stage Musicals", "Foreign Musicals", "Must-See Musicals", "Show Tunes", "Rock & Pop", "Classic Rock", "Goth & Industrial", "Hard Rock & Heavy Metal", "Modern & Alternative Rock", "Must-See Concerts", "Pop", "Punk Rock", "Rock & Roll Oldies", "Rockumentaries", "Singer-Songwriters", "Urban & Dance", "Blues", "Classic R&B/Soul", "Contemporary R&B", "Dance & Electronica", "Disco", "Rap & Hip-Hop", "World Music", "African Music", "Asian Music", "Celtic Music", "European Folk & Traditional Music", "Hawaiian & Polynesian Music", "Reggae", "World Fusion", "Special Interest", "Art & Design", "Computer Animation", "Painting", "Photography", "Sculpture", "Career & Finance", "Dance", "Ballet & Modern Dance", "Bellydance", "Dance Workouts", "Hip-Hop & Contemporary Dance", "Latin & Ballroom Dance", "Tap & Jazz Dance", "World Dance", "Food & Wine", "Cooking Instruction", "Food Stories", "Wine & Beverage Appreciation", "Hobbies & Games", "Boating & Sailing", "Car Culture", "Fishing", "Hunting", "Magic & Illusion", "Miscellaneous Hobbies & Games", "Poker & Gambling", "Home & Garden", "Entertaining", "Gardening", "Home Improvement", "Pets", "Homework Help", "English & Language Arts", "History & Social Studies", "Language Instruction", "Math", "Science", "IMAX", "Mind & Body", "Healing & Reiki", "Healthy Living", "Meditation & Relaxation", "Pregnancy & Parenting", "Style & Beauty", "Theater Arts", "Classic Stage Musicals", "Contemporary Stage Musicals", "Opera & Operetta", "Performance Art & Spoken Word", "Shakespeare", "Theatrical Performances", "Thrillers", "Action Thrillers", "Classic Thrillers", "Crime Thrillers", "Erotic Thrillers", "Espionage Thrillers", "Foreign Thrillers", "Indie Suspense & Thriller", "Mobster", "Mystery", "Political Thrillers", "Psychological Thrillers", "Sci-Fi Thrillers", "Supernatural Thrillers", "Suspense", "Anime & Animation", "Animation for Grown-ups", "Anime Action", "Anime Comedy", "Anime Drama", "Anime Fantasy", "Anime Feature Films", "Anime Horror", "Anime Sci-Fi", "Anime Series", "Kids' Anime", "Comedy", "African-American Comedies", "Best of British Humor", "Cult Comedies", "Dark Humor & Black Comedies", "Foreign Comedies", "Late Night Comedies", "Latino Comedies", "Political Comedies", "Romantic Comedies", "Saturday Night Live", "Screwball", "Slapstick", "Spoofs and Satire", "Sports Comedies", "Stand-Up", "Mockumentaries", "Showbiz Comedies", "Faith & Spirituality", "Faith & Spirituality Feature Films", "Inspirational Stories", "Religious & Mythic Epics", "Religious & Spiritual Dramas", "Religious Comedies & Satires", "Faith & Spirituality Documentaries", "Inspirational Biographies", "Religion & Mythology Documentaries", "Spiritual Mysteries", "Inspirational Music", "Gospel Music", "Inspirational Rock & Pop", "New Age", "Sacred Classical Music", "Sacred Folk & Traditional Music", "Judaica", "Kids' Inspirational", "Inspirational Sing-Alongs", "Inspirational Stories for Kids", "Mindfulness & Prayer", "Healing & Reiki", "Meditation & Relaxation", "Prayer & Spiritual Growth", "Horror", "B-Movie Horror", "Creature Features", "Cult Horror", "Foreign Horror", "Asian Horror", "Italian Horror", "Frankenstein", "Horror Classics", "Monsters", "Satanic Stories", "Slashers and Serial Killers", "Supernatural Horror", "Teen Screams", "Vampires", "Werewolves", "Zombies", "Romance", "African-American Romance", "Foreign Romance", "Foreign Steamy Romance", "Indie Romance", "Romance Classics", "Romantic Comedies", "Romantic Dramas", "Steamy Romance", "Sports & Fitness", "Baseball", "Basketball", "Extreme Sports", "BMX & Extreme Biking", "Extreme Combat & Mixed Martial Arts", "Extreme Motorsports", "Extreme Snow & Ice Sports", "Extreme Sports Compilations", "Mountain Biking", "Mountaineering & Climbing", "Skateboarding", "Stunts & General Mayhem", "Football", "Golf", "Martial Arts, Boxing & Wrestling", "Boxing", "Extreme Combat & Mixed Martial Arts", "General Martial Arts", "Karate", "Kung Fu", "Martial Arts & Boxing Workouts", "Self-Defense", "Tai Chi & Qigong", "Wrestling", "Motorsports", "Auto Racing", "Car Culture", "Extreme Motorsports", "Motorcycles & Motocross", "Other Sports", "Bodybuilding", "Cycling", "Horse Racing", "Tennis", "Miscellaneous Sports", "Outdoor & Mountain Sports", "Fishing", "Hunting", "Mountain Biking", "Mountaineering & Climbing", "Snow & Ice Sports", "Extreme Snow & Ice Sports", "Ice Hockey", "Skiing", "Snowboarding", "Soccer", "Sports Stories", "Olympics & Other Games", "Sports Comedies", "Sports Documentaries", "Sports Dramas", "Triumph of the Underdogs", "Women In Sports", "Water Sports", "Boating & Sailing", "Surfing & Boardsports", "Other Water Sports", "Workouts", "Abs, Glutes, & More", "Cardio & Aerobics", "Dance Workouts", "General Strength & Flexibility", "Kids' Fitness", "Low-Impact Workouts", "Martial Arts & Boxing Workouts", "Pilates & Fitness Ball", "Pregnancy & Post-Natal Fitness", "Step Aerobics Workouts", "Tai Chi & Qigong", "Yoga", "Children & Family", "Ages 0-2", "Ages 2-4", "Ages 5-7", "Ages 8-10", "Ages 11-12", "Animal Tales", "Book Characters", "Cartoons", "Coming of Age", "Dinosaurs", "Disney", "Disneynature", "Education & Guidance", "Family Adventures", "Family Animation", "Family Classics", "Family Comedies", "Family Dramas", "Family Sci-Fi & Fantasy", "Kids' Music", "Kids' TV", "Nickelodeon", "Teen Comedies", "Teen Dramas", "Teen Romance", "Documentary", "African-American Documentaries", "Biographical Documentaries", "Crime Documentaries", "Faith & Spirituality Documentaries", "Inspirational Biographies", "Religion & Mythology Documentaries", "Spiritual Mysteries", "Foreign Documentaries", "HBO Documentaries", "Historical Documentaries", "Indie Documentaries", "Military Documentaries", "Miscellaneous Documentaries", "PBS Documentaries", "Political Documentaries", "Rockumentaries", "Science and Nature Documentaries", "Social & Cultural Documentaries", "Sports Documentaries", "Travel & Adventure Documentaries", "Mockumentaries", "Foreign", "Foreign Action & Adventure", "Foreign Art House", "Foreign Children & Family", "Foreign Classics", "Foreign Classic Comedies", "Foreign Classic Dramas", "Foreign Silent Films", "Foreign Comedies", "Foreign Regions", "Africa", "Argentina", "Australia/ New Zealand", "Belgium", "Brazil", "China", "Czech Republic", "Eastern Europe", "France", "Germany", "Greece", "Hong Kong", "India", "Iran", "Israel", "Italy", "Japan", "Korea", "Latin America", "Mexico", "Middle East", "Netherlands", "Philippines", "Poland", "Russia", "Scandinavia", "Southeast Asia", "Spain", "Thailand", "United Kingdom", "Foreign Documentaries", "Foreign Dramas", "Foreign Gay & Lesbian", "Foreign Horror", "Asian Horror", "Italian Horror", "Foreign Languages", "Arabic Language", "Bengali Language", "Cantonese Language", "Czech Language", "Danish Language", "Dutch Language", "Farsi Language", "French Language", "German Language", "Greek Language", "Gujarati Language", "Hebrew Language", "Hindi Language", "Hungarian Language", "Italian Language", "Japanese Language", "Korean Language", "Malayalam Language", "Mandarin Language", "Norwegian Language", "Polish Language", "Portuguese Language", "Punjabi Language", "Russian Language", "Serbo-Croatian Language", "Spanish Language", "Swedish Language", "Tagalog Language", "Tamil Language", "Telugu Language", "Thai Language", "Vietnamese Language", "Foreign Musicals", "Foreign Must-See", "Foreign Romance", "Foreign Steamy Romance", "Foreign Sci-Fi & Fantasy", "Foreign Television", "Foreign Thrillers", "Bollywood", "Independent", "Experimental", "Foreign Art House", "Indie Action", "Indie Classics", "Indie Comedies", "Indie Dramas", "Indie Gay & Lesbian", "Indie Romance", "Indie Suspense & Thriller", "Sci-Fi & Fantasy", "Action Sci-Fi & Fantasy", "Alien Sci-Fi", "Classic Sci-Fi & Fantasy", "Fantasy", "Foreign Sci-Fi & Fantasy", "Sci-Fi Adventure", "Sci-Fi Cult Classics", "Sci-Fi Dramas", "Sci-Fi Horror", "Sci-Fi Thrillers", "Supernatural Sci-Fi", "TV Shows", "British TV", "British TV Comedies", "British TV Dramas", "Kids' TV", "TV Action & Adventure", "TV Classics", "Classic TV Comedies", "Classic TV Dramas", "Classic TV Sci-Fi & Fantasy", "TV Comedies", "Must-See TV Comedies", "TV Animated Comedies", "TV Sitcoms", "TV Sketch Comedies", "TV Documentaries", "HBO Documentaries", "PBS Documentaries", "TV Science & Nature", "TV Dramas", "Must-See TV Dramas", "TV Courtroom Dramas", "TV Crime Dramas", "TV Dramedy", "TV Family Dramas", "TV Medical Dramas", "TV Soaps", "TV Teen Dramas", "TV Miniseries", "TV Mysteries", "TV Networks", "A&E", "ABC", "BBC", "Bravo", "Cartoon Network", "CBS", "Comedy Central", "CW/WB", "Discovery Channel", "Disney Channel", "Fox", "HBO", "History Channel", "LOGO", "MTV", "National Geographic", "NBC", "Nickelodeon", "PBS", "Syfy Channel", "Showtime", "TLC", "Adult Swim", "AMC", "FX", "ITV", "Lifetime", "Netflix", "Starz", "Sundance", "TNT", "Travel Channel", "USA", "TV Reality Programming", "TV Sci-Fi & Fantasy", "TV Variety & Talk Shows", "TV War & Politics", "TV Westerns", "Made-for-TV Movies"]