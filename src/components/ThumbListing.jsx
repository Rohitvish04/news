// A small thumbnail list of articles for the right story section.
export const ThumbListing = ({ articles }) => (
  <div className="space-y-4">
    {articles.map(article => (
      <div key={article.id} className="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-300">
        <img
          src={article.image}
          alt={article.title}
          className="w-20 h-16 object-cover rounded-md flex-shrink-0"
        />
        <div className="ml-4">
          <h4 className="text-sm font-semibold text-gray-800">{article.title}</h4>
          <p className="text-xs text-gray-500">{article.summary.substring(0, 50)}...</p>
        </div>
      </div>
    ))}
  </div>
);