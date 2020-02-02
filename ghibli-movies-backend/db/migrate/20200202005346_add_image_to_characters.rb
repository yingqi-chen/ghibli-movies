class AddImageToCharacters < ActiveRecord::Migration[6.0]
  def change
    add_column :characters,:image,:string
  end
end
