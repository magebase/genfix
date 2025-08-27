import { Head } from '@inertiajs/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  published_at: string;
  author_name: string;
  author_title: string;
  author_profile_picture: string;
}

interface BlogIndexProps {
  blogPosts: BlogPost[];
}

export default function BlogIndex({ blogPosts }: BlogIndexProps) {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen">
      <Head title="Blog - Genfix Generator Hire" />
      <Header />

      <main className="w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              ⚡ Generator Hire Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay powered up with the latest news, tips, and insights about generator hire and power solutions
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {blogPosts.length === 0 ? (
              <div className="text-center py-12" data-aos="fade-up">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Blog Posts Yet</h3>
                <p className="text-gray-500">Check back soon for the latest updates and insights!</p>
              </div>
            ) : (
              blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-sm text-orange-600 mb-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {formatDate(post.published_at)}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={post.author_profile_picture}
                        alt={post.author_name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-orange-200"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author_name}</p>
                        <p className="text-xs text-gray-600">{post.author_title}</p>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 text-gray-900 hover:text-orange-600 transition-colors">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h2>

                    {post.excerpt && (
                      <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    )}

                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
