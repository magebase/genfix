# config/sitemap.rb
require 'sitemap_generator'

SitemapGenerator::Sitemap.default_host = ENV['APP_URL'] || 'http://localhost:3000'
SitemapGenerator::Sitemap.sitemaps_path = 'sitemaps/'

SitemapGenerator::Sitemap.create do
  # Home page
  add '/', changefreq: 'daily', priority: 1.0

  # Blog pages
  add '/blog', changefreq: 'weekly', priority: 0.8

  # Quote request pages (if we have a public quote page)
  add '/quote', changefreq: 'monthly', priority: 0.6

  # Static pages
  add '/about', changefreq: 'monthly', priority: 0.4
  add '/contact', changefreq: 'monthly', priority: 0.4
  add '/equipment', changefreq: 'weekly', priority: 0.7
end
