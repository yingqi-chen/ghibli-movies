class MoviesController < ApplicationController
    
    def index
        movies = Movie.all
        render json: movies.to_json(
            :include => {
                :characters =>{ :only => [:name, :species] },
                :director =>{ :only =>[:name]}
        },   :except =>[:director_id, :created_at, :updated_at]
        )
    end

    def show
    end

    def create
    end

    def update
    end

end
