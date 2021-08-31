import Link from 'next/link';
import ArticleStyle from '../styles/Article.module.css';

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={ArticleStyle.card}>
        <h3>{article.title} &rarr;</h3>
        <h3>{article.body}</h3>
      </a>
    </Link>
  );
};

export default ArticleItem;
