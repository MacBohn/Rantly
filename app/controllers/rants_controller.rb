class RantsController < ApplicationController

  def index
    @rants = Rant.all
    render json: @rants
  end

  def show
    @rant = Rant.find(params[:id])
    render json: @rant
  end

  def create
    @rant = Rant.new(rant_params)
    @rant.save
    render json: @rant
  end

  private

  def rant_params
    params.require(:rant).permit(:title, :body, :user_id)
  end

end
