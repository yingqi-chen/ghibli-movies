class RenameSpeciesInCharacters < ActiveRecord::Migration[6.0]
  def change
    rename_column :characters, :species, :introduction
  end
end
