// import { ArrowRight } from 'react-feather';

export const SmallArticleCard = ({ article }) => (
  <div className="flex items-center gap-4 py-4 transition-colors duration-300 hover:bg-gray-50 rounded-lg -mx-2 px-2">
    <div className="flex-shrink-0">
      <img src={article.image} alt={article.title} className="w-16 h-16 object-cover rounded-md" />
    </div>
    <div className="flex-grow">
      <span className="text-xs font-semibold uppercase text-red-600 mb-1">{article.category}</span>
      <h4 className="text-sm font-semibold text-gray-800 leading-tight mb-1">{article.title}</h4>
      <p className="text-xs text-gray-500">
        {article.time} | {article.date}
      </p>
    </div>
  </div>
);