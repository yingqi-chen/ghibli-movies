class Movie < ApplicationRecord
    has_many :characters, dependent: :destroy
    belongs_to :director
    accepts_nested_attributes_for :characters

    validates :title, presence: true
end
