// The main featured story in the hero section.
import {
  ThumbsUp,
  MessageCircle,
} from 'lucide-react';

export const HeroLeftStory = ({ article }) => (
  <div className="p-4 md:p-8 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <img src={article.image} alt={article.title} className="w-full md:w-2/5 h-64 md:h-auto object-cover rounded-xl" />
      <div className="w-full md:w-3/5">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100 rounded-full mb-2">
          {article.category}
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2">{article.title}</h2>
        <p className="text-sm md:text-base text-gray-500 mb-4">By <span className="font-semibold text-gray-700">{article.byline}</span></p>
        <p className="text-sm text-gray-600 leading-relaxed">{article.summary}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4 pt-4 mt-4 md:mt-8">
      <div className="flex items-center text-gray-500">
        <ThumbsUp size={16} className="mr-1" />
        <span className="text-sm">{article.likes}</span>
      </div>
      <div className="flex items-center text-gray-500">
        <MessageCircle size={16} className="mr-1" />
        <span className="text-sm">{article.comments}</span>
      </div>
    </div>
  </div>
);