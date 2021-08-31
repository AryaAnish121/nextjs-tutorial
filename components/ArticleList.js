import ArticleStyle from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
  return (
    <div className={ArticleStyle.grid}>
      {articles.map((article, index) => {
        return <ArticleItem key={index} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
