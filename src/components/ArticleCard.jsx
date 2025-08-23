// src/components/ArticleCard.jsx
import { ArrowRight } from 'react-feather';
// A reusable component to display a single news article.
export const ArticleCard = ({ article }) => (
  <div className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl border border-gray-200">
    <img src={article.image} alt={article.title} className="w-full h-48 object-cover opacity-90 transition-opacity duration-300 hover:opacity-100" />
    <div className="p-6">
      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100 rounded-full mb-2">
        {article.category}
      </span>
      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{article.summary}</p>
      <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group">
        Read more
        <ArrowRight size={16} className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);