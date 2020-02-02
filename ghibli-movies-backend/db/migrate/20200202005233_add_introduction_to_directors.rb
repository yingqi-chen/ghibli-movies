class AddIntroductionToDirectors < ActiveRecord::Migration[6.0]
  def change
    add_column :directors, :introduction, :text
  end
end
