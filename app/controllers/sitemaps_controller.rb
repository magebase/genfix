class SitemapsController < ApplicationController
  def show
    respond_to do |format|
      format.xml do
        # Generate sitemap on the fly
        sitemap_content = generate_sitemap
        render xml: sitemap_content
      end
    end
  end

  private

  def generate_sitemap
    host = ENV['APP_URL'] || 'http://localhost:3000'

    xml = Builder::XmlMarkup.new(indent: 2)
    xml.instruct! :xml, version: '1.0', encoding: 'UTF-8'
    xml.urlset(xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9') do
      # Home page
      xml.url do
        xml.loc "#{host}/"
        xml.lastmod Time.current.strftime('%Y-%m-%d')
        xml.changefreq 'daily'
        xml.priority '1.0'
      end

      # Blog index
      xml.url do
        xml.loc "#{host}/blog"
        xml.lastmod Time.current.strftime('%Y-%m-%d')
        xml.changefreq 'weekly'
        xml.priority '0.8'
      end

      # Equipment page
      xml.url do
        xml.loc "#{host}/equipment"
        xml.lastmod Time.current.strftime('%Y-%m-%d')
        xml.changefreq 'weekly'
        xml.priority '0.7'
      end

      # Quote page
      xml.url do
        xml.loc "#{host}/quote"
        xml.lastmod Time.current.strftime('%Y-%m-%d')
        xml.changefreq 'monthly'
        xml.priority '0.6'
      end

      # About page
      xml.url do
        xml.loc "#{host}/about"
        xml.lastmod Time.current.strftime('%Y-%m-%d')
        xml.changefreq 'monthly'
        xml.priority '0.4'
      end

      # Contact page
      xml.url do
        xml.loc "#{host}/contact"
        xml.lastmod Time.current.strftime('%Y-%m-%d')
        xml.changefreq 'monthly'
        xml.priority '0.4'
      end
    end

    xml.target!
  end
end
