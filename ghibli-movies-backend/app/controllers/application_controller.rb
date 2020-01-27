class ApplicationController < ActionController::API
    def test
        characters = Character.all
        render json: characters.to_json(:include => { 
          :movie => {:only => [:title]}
          }, :except => [:updated_at,:created_at])
    end
end
