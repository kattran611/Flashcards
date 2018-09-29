Rails.application.routes.draw do
  namespace :api do
    resources :cards, only: [:show, :index, :update, :create, :destroy]
    mount_devise_token_auth_for 'User', at: 'api/auth'
  end



  #Do not place any routes below this one
  if Rails.env.production?
    get '*other', to: 'static#index'
  end
end
