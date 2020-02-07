class MoviesController < ApplicationController
    
    def index
        movies = Movie.all
        render json: movies.to_json(
            :include => {
                :characters =>{ :except => [:created_at, :updated_at] },
                :director =>{ :except => [:created_at, :updated_at]}
        },   :except =>[:director_id, :created_at, :updated_at]
        )
    end

    def show
        movie = Movie.find(28)
        render json: movie.to_json(
            :include => {
                :characters =>{ :except => [:created_at, :updated_at] },
                :director =>{ :except => [:created_at, :updated_at]}
        },   :except =>[:director_id, :created_at, :updated_at]
        )

    end

    def create
        binding.pry
        movie = Movie.create(movie_params)
        character = Character.create(character_params)
        character.movie_id = movie.id
    end

private

   def movie_params
   end
  
   
   def character_params

   end

end
