# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
director_a = Director.create(
    "name"=> "Hayao Miyazaki",
    "introduction" => "Hayao Miyazaki is a Japanese animator, filmmaker, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, a film and animation studio, he has attained international acclaim as a masterful storyteller and as a maker of animated feature films, and is widely regarded as one of the most accomplished filmmakers in the animation business." 
    "image" => "hayao_miyazaki.jpg"
    )
director_b = Director.create(
    "name"=> "Isao Takahata"
    "introduction" =>"Isao Takahata was a Japanese film director, screenwriter and producer. In 1985, he co-founded Studio Ghibli with his long-time collaborative partner Hayao Miyazaki and Miyazaki's collaborators Toshio Suzuki and Yasuyoshi Tokuma. Takahata earned international critical acclaim for his work as a director of anime films, among them Grave of the Fireflies (1988), Only Yesterday (1991), Pom Poko (1994), and My Neighbors the Yamadas (1999). His last film as director was The Tale of the Princess Kaguya (2013), which was nominated for an Oscar in the category of Best Animated Feature Film at the 87th Academy Awards."
    "image"=> "isao_takahata.jpg"
    )
director_c = Director.create(
    "name"=> "Yoshifumi Kondō",
    "introduction" =>"Yoshifumi Kondō was a Japanese animator who worked for Studio Ghibli in his last years. He worked as an animation director on Anne of Green Gables, Sherlock Hound, Kiki's Delivery Service, Only Yesterday and Princess Mononoke. Kondō directed the animated film Whisper of the Heart, and was expected to become one of the top directors at Studio Ghibli, alongside Hayao Miyazaki and Isao Takahata, and to become their eventual successor."
    "image"=>"yoshifumi_kondou.jpg"
    )

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
    "name"=> "Princess Sheeta",
    "introduction"=> "Sheeta is the rightful princess of Laputa. She possesses an Aetherium crystal, which can save her in times of danger. Possessing the Aetherium crystal, she is chased down by the Dola gang, Muska and the military. Muska manages to capture her and take her into custody aboard the civilian passenger airship Saturn.",
    "movie_id"=> movie_a.id
    "image" =>"sheeta.jpg"
    )
character_b = Character.create(
    "name"=> "Ashitaka",
    "introductions"=> "Ashitaka is the main protagonist in the 1997 Studio Ghibli film Princess Mononoke. He is the prince of an Emishi village who, after being cursed by a demon boar, travels to the west to seek a cure and prevent his curse from falling onto another.",
    "movie_id"=> movie_i.id,
    "image" =>"ashitaka.jpg"
)
character_c = Character.create(
    "name"=> "Shizuku Tsukishima",
    "image" =>"shizuku_tsukishima.jpg"
    "movie_id"=> movie_h.id,
    "introduction" => "Shizuku Tsukishima is the protagonist of Whisper of the Heart. Shizuku attends the local Junior High School and is currently sitting tests to get into High School. She loves reading."
)
character_d = Character.create(
    "name"=> "Kiki",
    "introduction"=> "Kiki also known as Kiki the Witch is a fictional 13-year-old female witch. Kiki is upbeat, outspoken, a little naive, independent, responsible and enterprising when she goes on an adventure.",
    "movie_id"=> movie_d.id,
    "image" =>"kiki.jpg"

)
character_e = Character.create(
    "name"=> "Taeko Okajima",
    "introduction"=> "Taeko is 27, unmarried and has lived her whole life in Tokyo, currently holding a position with a company there. She decides to take a 10 day vacation to visit her elder sister’s in-laws at their rural countryside farm to help with the safflower harvest and get away from city life. ",
    "movie_id"=> movie_e.id,
    "image" =>"taekp.jpg"
)
character_f = Character.create(
    "name"=> "Setsuko Yokokawa",
    "introduction"=> "Setsuko Yokokawa is a preschool student and the younger sister of Seita Yokokawa in the Studio Ghibli movie Grave of the Fireflies. She was born in 1941, but later dies in 1945 towards the end of the film.",
    "movie_id"=> movie_b.id,
    "image" => "setsuko.jpg"
)
character_g = Character.create(
    "name"=> "Totoro",
    "introduction"=> "Totoro is the title tetartagonist and forest spirit that lives in the largest camphor tree in a small village. ",
    "movie_id"=> movie_c.id,
    "image" => "totoro.jpg"
)

character_h = Character.create(
    "name"=> "Marco Pagot",
    "introduction"=> "Marco Pagot is the protagonist in the movie Porco Rosso. He is a human who was transformed into a pig. He is known as Porco Rosso, the bounty hunter.",
    "movie_id"=> movie_f.id,
    "image" => "marco.jpg"
)

character_i = Character.create(
    "name"=> "Inugami Gyobu",
    "introduction"=> "Inugami Gyobu was a leader of Raccoons Dogs. He passes away due to a heart attack amidst the Monster Festival. He is one of Shikoku's Wise Men, who leads 800 tanukis. He is worship by humans in Iyo (today Ehime Prefecture)[1]"
    "movie_id"=> movie_g.id,
    "image" => "inugami.jpg"
)




