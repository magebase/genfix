# Preview all emails at http://localhost:3000/rails/mailers/quote_mailer
class QuoteMailerPreview < ActionMailer::Preview
  # Preview this email at http://localhost:3000/rails/mailers/quote_mailer/quote_confirmation
  def quote_confirmation
    QuoteMailer.quote_confirmation
  end

  # Preview this email at http://localhost:3000/rails/mailers/quote_mailer/admin_notification
  def admin_notification
    QuoteMailer.admin_notification
  end

  # Preview this email at http://localhost:3000/rails/mailers/quote_mailer/quote_prepared
  def quote_prepared
    QuoteMailer.quote_prepared
  end

  # Preview this email at http://localhost:3000/rails/mailers/quote_mailer/payment_link
  def payment_link
    QuoteMailer.payment_link
  end
end
