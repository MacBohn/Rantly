Rails.application.routes.draw do
  get '/', to: redirect('/')

  resources :users
  resources :rants

end
