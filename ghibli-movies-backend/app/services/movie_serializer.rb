class MovieSerializer
    def initialize(movie)
        @movie_object = movie
    end

    def to_serialized_json
        @movie_object.to_json(
            :include => {
                :characters =>{ :except => [:created_at, :updated_at] },
                :director =>{ :except => [:created_at, :updated_at]}
        },   :except =>[:director_id, :created_at, :updated_at]
        )
    end
end