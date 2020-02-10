class MoviesController < ApplicationController
    
    def index
        movies = Movie.all
        render json: MovieSerializer.new(movies).to_serialized_json
    end


    def create
        movie = Movie.create(movie_params)
        binding.pry
        if params["characters_attributes"]['0']
          if params["characters_attributes"]['0']["name"] == ""
          Character.last.destroy
          movie.characters.delete_all
          end
        end
        movie.save
        render json: MovieSerializer.new(movie).to_serialized_json
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
        :title, :rt_score, :release_year, :description, :director_id, :image, :characters_attributes =>[:name,:image,:introduction]
      )
   end
  


end
