class Movie < ApplicationRecord
    has_many :characters
    belongs_to :director
    accepts_nested_attributes_for :characters
end
