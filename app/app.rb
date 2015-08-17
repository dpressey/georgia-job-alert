# myapp.rb
require 'sinatra'
require 'sinatra/reloader' if development?
require 'yaml'

get '/' do
  #YAML.load()
  #Dir.pwd + '/config/config.yml'
end
