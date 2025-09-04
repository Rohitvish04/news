import { ArrowRight } from 'react-feather';

export const FeaturedArticle = ({ article }) => (
  <div className="relative mb-8 overflow-hidden animate-fade-in ">
    <img
      src={article.image}
      alt={article.title}
      className="w-full h-96 object-cover rounded-3xl "
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end p-8 md:p-12 lg:p-16">
      <div className="text-white">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 rounded-full mb-2">
          {article.category}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 md:mb-4 drop-shadow-sm">{article.title}</h1>
        <p className="text-sm sm:text-base md:text-xl max-w-2xl drop-shadow-sm">{article.summary}</p>
        <a
          href="#"
          className="mt-4 sm:mt-6 inline-flex items-center text-white bg-red-600 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
        >
          Read the full story
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  </div>
);