# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
director_a = Director.create(name: "Hayao Miyazaki" )
director_b = Director.create(name: "Isao Takahata")
director_c = Director.create(name: "Yoshifumi Kondō")

movie_a = Movie.create(title: "Castle in the Sky",
"description"=> "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
"director_id"=> director_a.id,
"release_year"=> "1986",
"rt_score"=> "95",
"image"=> "castle.jpg"
)

movie_b = Movie.create(
    "title"=> "Grave of the Fireflies",
    "description"=> "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    "director_id"=> director_b.id,
    "release_year"=> "1988",
    "rt_score"=> "97",
    "image"=> "fireflies.jpg"
    )

movie_c = Movie.create(
    "title"=> "My Neighbor Totoro",
    "description"=> "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    "director_id"=> director_a.id,
    "release_year"=> "1988",
    "rt_score"=> "93",
    "image"=> "totoro.jpg"
)

movie_d = Movie.create(
    "title"=> "Kiki's Delivery Service",
    "description"=> "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    "director_id"=> director_a.id,
    "release_year"=> "1989",
    "rt_score"=> "96",
    "image"=>"kiki.jpg"
)

movie_e = Movie.create(
    "title"=> "Only Yesterday",
    "description"=> "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    "director_id"=> director_b.id,
    "release_year"=> "1991",
    "rt_score"=> "100",
    "image" =>"only_yesterday.jpg"
)

movie_f = Movie.create(
    "title"=> "Porco Rosso",
    "description"=> "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
    "director_id"=> director_a.id,
    "release_year"=> "1992",
    "rt_score"=> "94",
    "image" =>"porco_rosso.jpg"
)

movie_g = Movie.create(
    "title"=> "Pom Poko",
    "description"=> "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
    "director_id"=> director_b.id,
    "release_year"=> "1994",
    "rt_score"=> "78",
    "image" => "pom_poko.jpg"
)

movie_h = Movie.create(
    "title"=> "Whisper of the Heart",
    "description"=> "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather.",
    "director_id"=> director_c.id,
    "release_year"=> "1995",
    "rt_score"=> "91",
    "image" =>"whisper.jpg"
)

movie_i = Movie.create(
  "title"=> "Princess Mononoke",
  "description"=> "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
  "director_id"=> director_a.id,
  "release_year"=> "1997",
  "rt_score"=> "92",
  "image" =>"mononoke.jpg"
)

character_a = Character.create(
    "name"=> "Colonel Muska",
    "species"=> "Human",
    "movie_id"=> movie_a.id
    )
character_b = Character.create(
    "name"=> "Ashitaka",
    "species"=> "Human",
    "movie_id"=> movie_i.id
)
character_c = Character.create(
    "name"=> "San",
    "species"=> "Human",
    "movie_id"=> movie_i.id
)
character_d = Character.create(
    "name"=> "Jiji",
    "species"=> "Cat",
    "movie_id"=> movie_d.id

)
character_e = Character.create(
    "name"=> "Satsuki Kusakabe",
    "species"=> "Human",
    "movie_id"=> movie_c.id
)
character_f = Character.create(
    "name"=> "Mei Kusakabe",
    "species"=> "Human",
    "movie_id"=> movie_c.id
)
character_g = Character.create(
    "name"=> "Totoro",
    "species"=> "Totoro",
    "movie_id"=> movie_c.id
)


