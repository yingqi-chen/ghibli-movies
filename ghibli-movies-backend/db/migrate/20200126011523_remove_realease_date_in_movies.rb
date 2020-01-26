class RemoveRealeaseDateInMovies < ActiveRecord::Migration[6.0]
  def change
    remove_column :movies,:realease_date
  end
end
