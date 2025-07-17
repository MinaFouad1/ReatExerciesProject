import React from 'react';
import { dummyShowsData } from '../assets/assets';
import MovieCard from '../Components/MovieCard';
import { motion } from 'framer-motion'; // for animation

const Movies = () => {
  return dummyShowsData && dummyShowsData.length > 0 ? (
    <div className="px-6 md:px-16 lg:px-20 xl:px-36 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-8">
        Now Showing
      </h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {dummyShowsData.map((movie) => (
          <motion.div
            key={movie._id}
            className="rounded-xl shadow-lg overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <MovieCard movie={movie} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-96 text-gray-400 text-xl">
      No Movies Available
    </div>
  );
};

export default Movies;
