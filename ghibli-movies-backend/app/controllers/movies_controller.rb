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
        movie = Movie.create(movie_params)
        if params["movie"]["characters_attributes"]['0']["name"] == ""
          Character.last.destroy
        end
    end

private

   def movie_params
    params.require(:movie).permit(
        :title, :rt_score, :release_year, :description, :director_id, characters_attributes: [
            :name,
            :image,
            :introduction
        ]
      )
   end
  


end
