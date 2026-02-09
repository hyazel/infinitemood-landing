import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/blogUtils';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
  const posts = getAllPosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-inverted text-text-inverted">
      <SEO
        title="Blog"
        description="Réflexions sur le design sonore, l'interactivité et le focus créatif."
        canonical="/blog"
      />

      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4">
            Blog
          </h1>
          <p className="text-xl text-primitive-neutral-warm_ivory_600">
            Réflexions sur le design sonore, l'interactivité et le focus créatif.
          </p>
        </header>

        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="pb-12 border-b border-primitive-neutral-warm_ivory_400/20 last:border-0"
            >
              <Link to={`/blog/${post.slug}`} className="group">
                <time className="text-sm text-primitive-neutral-warm_ivory_600 mb-2 block">
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h2 className="font-display text-3xl font-bold mb-4 group-hover:text-primitive-neutral-warm_ivory_600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-lg leading-relaxed text-primitive-neutral-warm_ivory_600 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-sm font-medium group-hover:underline">
                  Lire l'article →
                </span>
              </Link>
            </article>
          ))}

          {posts.length === 0 && (
            <p className="text-center text-primitive-neutral-warm_ivory_600 py-12">
              Aucun article pour le moment.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
