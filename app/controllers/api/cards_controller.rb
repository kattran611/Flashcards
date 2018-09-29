class Api::CardsController < ApplicationController
  # before_action :authenticate_user!
  # before_action :set_card, only: [:show, :update, :destroy]


  def index
    render json: Card.all
  end

  def show

  end

  def create
    card = Card.new(card_params)

    if card.save
      render json: card
    else
      render json: {errors: card.errors}
  end

  def update
    card = Card.find(params[:id])
    card.update(card_params)
    render json: card
  end

  def destroy
    Card.find(params[:id]).destroy
    render json: {message: 'Card Deleted'}
  end

  private


  def card_params
    params.require(:card).permit(:question, :answer, :is_correct)
  end

end
