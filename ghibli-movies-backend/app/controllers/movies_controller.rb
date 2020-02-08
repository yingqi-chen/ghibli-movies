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

    end

    def create
        binding.pry
        movie = Movie.new(movie_params)
        if params["characters_attributes"]['0']["name"] == ""
          Character.last.destroy
        end
        movie.save
        render json: movie.to_json(
            :include => {
                :characters =>{ :except => [:created_at, :updated_at] },
                :director =>{ :except => [:created_at, :updated_at]}
        },   :except =>[:director_id, :created_at, :updated_at]
        )
    end

private

   def movie_params
    params.require(:movie).permit(
        :title, :rt_score, :release_year, :description, :director_id, :image, characters_attributes: [
            :name,
            :image,
            :introduction
        ]
      )
   end
  


end
