# AWS SES Configuration
# This initializer sets up AWS SES for email delivery

require 'aws-sdk-ses'

# Configure AWS credentials if environment variables are present
if ENV['AWS_ACCESS_KEY_ID'].present? && ENV['AWS_SECRET_ACCESS_KEY'].present?
  Aws.config.update({
    region: ENV.fetch('AWS_REGION', 'us-east-1'),
    credentials: Aws::Credentials.new(
      ENV['AWS_ACCESS_KEY_ID'],
      ENV['AWS_SECRET_ACCESS_KEY']
    )
  })

  # Configure ActionMailer to use SES
  Rails.application.config.action_mailer.delivery_method = :ses
  Rails.application.config.action_mailer.ses_settings = {
    region: ENV.fetch('AWS_REGION', 'us-east-1')
  }

  Rails.logger.info "AWS SES configured successfully"
else
  # Fallback to test delivery method if AWS credentials are not available
  Rails.application.config.action_mailer.delivery_method = :test

  Rails.logger.warn "AWS SES credentials not found, falling back to test delivery method"
end
