// src/pages/HomePage.jsx
import {
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  Mail,
  Newspaper,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  PlayCircle,
} from 'lucide-react';
import React from 'react';
import { newsArticles } from '../data/newsArticles';
import { ArticleCard } from '../components/ArticleCard';
// import { ArrowRight } from 'react-feather';
import { ThumbListing } from '../components/ThumbListing';
import { HeroLeftStory } from '../components/HeroLeftStory';
import { SmallArticleCard } from '../components/SmallArticleCard';
import {FeaturedArticle } from '../components/FeaturedArticle'

// The main landing page component with the new layout.
export const LeftStory = ({ article }) => (
  <div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
    <img
      src={article.image}
      alt={article.title}
      className="w-full h-96 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-transparent flex items-end p-8 md:p-12 lg:p-16">
      <div className="text-gray-900">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 md:mb-4 drop-shadow-sm">{article.title}</h1>
        <p className="text-sm sm:text-base md:text-xl max-w-2xl drop-shadow-sm">{article.summary}</p>
        <a
          href="#"
          className="mt-4 sm:mt-6 inline-flex items-center text-white bg-gradient-to-r from-blue-600 to-purple-600 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
        >
          Read the full story
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  </div>
);

const TopNews2 = ({ article }) => (
  <div className=" text-gray-800 rounded-xl   p-6    ">
    {/* <img src="https://images.unsplash.com/photo-1754851357071-e22af991e590?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="top 2 news" className="w-full h-full object-cover rounded-2xl " /> */}
    <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{article.summary}</p>
    <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group">
      Read more
      <ArrowRight size={16} className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  </div>
);

const VideoContent = () => (
  <div className="relative w-full h-64 bg-gray-200 rounded-xl overflow-hidden mb-6 shadow-md">
    <img
      src="https://images.unsplash.com/photo-1549241695-1e30953a992d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTYxNzR8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMG5ld3N8ZW58MHx8fHwxNjc3MTI2MTI5&ixlib=rb-4.0.3&q=80&w=1080"
      alt="Video Content"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <PlayCircle size={64} className="text-white cursor-pointer hover:scale-110 transition-transform duration-300" />
    </div>
  </div>
);

const SuperfastHeader = () => (
  <div className="p-4 mb-4 bg-blue-50 rounded-lg shadow-sm border border-blue-100">
    <h3 className="text-lg font-bold text-blue-800">Superfast Updates</h3>
    <p className="text-sm text-blue-600 mt-1">Get the latest news in 60 seconds.</p>
  </div>
);

const RightStory = () => {
  const thumbArticles = newsArticles.slice(3, 6);
  return (
    <div className="space-y-6">
      <VideoContent />
      <SuperfastHeader />
      <ThumbListing articles={thumbArticles} />
    </div>
  );
};

const HeroSection = ({ topNews, sideArticles }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {/* Main story section on the left, spanning 2 columns on large screens */}
    <div className="lg:col-span-2 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Leftmost part of the hero */}
        <div className="w-full md:w-3/5">
          <HeroLeftStory article={topNews} />
        </div>
        {/* Middle column of the hero */}
        <div className="w-full md:w-2/5 space-y-6">
          {/* Top article with image */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={newsArticles[1].image} alt={newsArticles[1].title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <span className="text-xs font-semibold uppercase text-red-600 mb-1">{newsArticles[1].category}</span>
              <h3 className="text-sm font-bold text-gray-800 leading-tight">{newsArticles[1].title}</h3>
              <div className="flex items-center space-x-3 text-gray-500 mt-2">
                <div className="flex items-center">
                  <ThumbsUp size={12} className="mr-1" />
                  <span className="text-xs">{newsArticles[1].likes}</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle size={12} className="mr-1" />
                  <span className="text-xs">{newsArticles[1].comments}</span>
                </div>
              </div>
            </div>
          </div>
          {/* "Passion led us here" article */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTYxNzR8MHwxfHxwYXNzaW9uJTIwYm9hcmR8ZW58MHx8fHwxNzAzNzU5MTY0&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Passion led us here"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <span className="text-xs font-semibold uppercase text-red-600 mb-1">Finance</span>
              <h3 className="text-sm font-bold text-gray-800 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac...
              </h3>
              <div className="flex items-center space-x-3 text-gray-500 mt-2">
                <div className="flex items-center">
                  <ThumbsUp size={12} className="mr-1" />
                  <span className="text-xs">392</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle size={12} className="mr-1" />
                  <span className="text-xs">10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right column with article list */}
    <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-4">
      <div className="space-y-4">
        {sideArticles.map(article => (
          <SmallArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  </div>
);


export const HomePage = () => {
  const featuredArticle = newsArticles.find(article => article.isFeatured);
  const topNews2Article = newsArticles.find(article => article.isTopStory);
  const sideArticles = newsArticles.filter(article => !article.isFeatured && !article.isTopStory);

  return (
    <section className="font-['Inter'] py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {featuredArticle && <FeaturedArticle article={featuredArticle} />}
        {/* The hero section is now a seamless part of the page, not a boxed layout */}
        <HeroSection
          topNews={topNews2Article}
          sideArticles={sideArticles}
        />
      </div>
      
      {/* Popular News Section */}
      <div className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 animate-fade-in">
            Popular News
          </h2>
          <div className="flex justify-center mb-8">
            <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors">
              Popular News
            </button>
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors ml-4">
              Info
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sideArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};