class Movie < ApplicationRecord
    has_many :characters
    belongs_to :director
end
