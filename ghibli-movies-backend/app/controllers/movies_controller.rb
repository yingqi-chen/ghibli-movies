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
        if params["characters_attributes"]['0']["name"] == ""
          Character.last.destroy
          movie.characters.delete_all
        end
        movie.save
        render json: movie.to_json(
            :include => {
                :characters =>{ :except => [:created_at, :updated_at] },
                :director =>{ :except => [:created_at, :updated_at]}
        },   :except =>[:director_id, :created_at, :updated_at]
        )
    end

    def destroy
        movie = Movie.find_by id: params["id"]
        if movie
          movie.delete
          render plain:  "Succesfully deleted from database!"
        else
          render plain: "Cannot find this movie!"
        end
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
