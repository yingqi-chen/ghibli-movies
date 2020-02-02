class AddImageToDirectors < ActiveRecord::Migration[6.0]
  def change
    add_column :directors, :image, :string
  end
end
