Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'site#index'
  
  namespace :api do
  	namespace :v1 do
  		resources :items, only: [:index, :create, :destroy, :update, :show]
  	end
  end
end
