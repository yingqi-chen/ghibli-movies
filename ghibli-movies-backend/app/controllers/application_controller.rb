class ApplicationController < ActionController::API
    def test
        render json: {message: "hello world"}
      end
end
