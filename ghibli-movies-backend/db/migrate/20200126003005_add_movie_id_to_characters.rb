class AddMovieIdToCharacters < ActiveRecord::Migration[6.0]
  def change
    add_column :characters,:movie_id,:integer
  end
end
