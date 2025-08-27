require "application_system_test_case"

class SeoConfigurationTest < ApplicationSystemTestCase
  # RED: Write failing test for SEO configuration

  test "should include OpenGraph meta tags on homepage" do
    # This test will fail because OpenGraph tags are not implemented yet
    visit root_path

    # Check for OpenGraph meta tags
    assert_selector "meta[property='og:title']", visible: false
    assert_selector "meta[property='og:description']", visible: false
    assert_selector "meta[property='og:image']", visible: false
    assert_selector "meta[property='og:url']", visible: false
  end

  test "should include Twitter Card meta tags on homepage" do
    # This test will fail because Twitter Card tags are not implemented yet
    visit root_path

    # Check for Twitter Card meta tags
    assert_selector "meta[name='twitter:card']", visible: false
    assert_selector "meta[name='twitter:title']", visible: false
    assert_selector "meta[name='twitter:description']", visible: false
  end

  test "should generate sitemap.xml" do
    # This test will fail because sitemap is not implemented yet
    visit "/sitemap.xml"

    # Check that we get XML content (page should load without error)
    assert_includes page.body, "xml"
    assert_includes page.body, "urlset"
  end
end
