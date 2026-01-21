import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header';
import { getPostBySlug } from '../utils/blogUtils';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-background-inverted text-text-inverted">
        <Header />
        <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold mb-4">Article introuvable</h1>
          <Link to="/blog" className="text-primitive-neutral-warm_ivory_600 hover:underline">
            ← Retour au blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-inverted text-text-inverted">
      <Header />
      
      <article className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <Link 
          to="/blog" 
          className="text-sm text-primitive-neutral-warm_ivory_600 hover:underline mb-8 inline-block"
        >
          ← Retour au blog
        </Link>

        <header className="mb-12">
          <time className="text-sm text-primitive-neutral-warm_ivory_600 mb-4 block">
            {new Date(post.date).toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            {post.title}
          </h1>
          {post.author && (
            <p className="text-primitive-neutral-warm_ivory_600">
              Par {post.author}
            </p>
          )}
        </header>

        <div className="prose prose-lg max-w-none
          prose-headings:font-display prose-headings:font-bold prose-headings:text-text-inverted
          prose-p:leading-relaxed prose-p:text-text-inverted
          prose-a:text-text-inverted prose-a:underline hover:prose-a:text-primitive-neutral-warm_ivory_600
          prose-strong:text-text-inverted prose-strong:font-semibold
          prose-ul:text-text-inverted prose-ol:text-text-inverted
          prose-li:text-text-inverted
          prose-blockquote:border-l-primitive-neutral-warm_ivory_400 prose-blockquote:text-primitive-neutral-warm_ivory_600
          prose-code:text-text-inverted prose-code:bg-primitive-neutral-warm_ivory_200 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-hr:border-primitive-neutral-warm_ivory_400/20
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
