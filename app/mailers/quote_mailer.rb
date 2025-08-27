class QuoteMailer < ApplicationMailer
  default from: 'Genfix <noreply@genfix.com>'

  def quote_confirmation(quote_request)
    @quote_request = quote_request
    @greeting = "Hi #{@quote_request.name}"

    mail(
      to: @quote_request.email,
      subject: 'Quote Request Received - Genfix'
    )
  end

  def admin_notification(quote_request)
    @quote_request = quote_request
    @greeting = "Hi Admin"

    mail(
      to: ENV.fetch('ADMIN_EMAIL', 'admin@genfix.com'),
      subject: "New Quote Request - #{@quote_request.name}"
    )
  end

  def quote_prepared(quote_request)
    @quote_request = quote_request
    @greeting = "Hi #{@quote_request.name}"

    mail(
      to: @quote_request.email,
      subject: 'Your Quote is Ready - Genfix'
    )
  end

  def payment_link(quote_request, payment_url)
    @quote_request = quote_request
    @payment_url = payment_url
    @greeting = "Hi #{@quote_request.name}"

    mail(
      to: @quote_request.email,
      subject: 'Payment Link for Your Quote - Genfix'
    )
  end
end
