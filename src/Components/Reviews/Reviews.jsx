import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { id } = useParams(); // 🎬 movie id

  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  // 🔥 Load movie-specific reviews
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`reviews-${id}`));
    if (saved) setReviews(saved);
  }, [id]);

  // 🔥 Save reviews
  useEffect(() => {
    localStorage.setItem(`reviews-${id}`, JSON.stringify(reviews));
  }, [reviews, id]);

  const handleAddReview = () => {
    if (!input.trim() || rating === 0) return;

    const newReview = {
      id: Date.now(),
      text: input,
      rating,
      user: "Anonymous",
      likes: 0,
    };

    setReviews([newReview, ...reviews]);
    setInput("");
    setRating(0);
  };

  const handleDelete = (rid) => {
    setReviews(reviews.filter((r) => r.id !== rid));
  };

  const handleLike = (rid) => {
    setReviews(
      reviews.map((r) =>
        r.id === rid ? { ...r, likes: r.likes + 1 } : r
      )
    );
  };

  // ⭐ Average rating
  const avgRating =
    reviews.length > 0
      ? (
        reviews.reduce((acc, r) => acc + r.rating, 0) /
        reviews.length
      ).toFixed(1)
      : 0;

  // 📊 Rating distribution
  const getCount = (star) =>
    reviews.filter((r) => r.rating === star).length;

  return (
    <div className="px-6 py-6 text-white">

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-red-500 mb-4">
        💬 User Reviews
      </h2>

      {/* ⭐ AVG RATING */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          ⭐ {avgRating} / 5 ({reviews.length} reviews)
        </h3>

        {/* 📊 PROGRESS BARS */}
        {[5, 4, 3, 2, 1].map((star) => {
          const count = getCount(star);
          const percent =
            reviews.length > 0 ? (count / reviews.length) * 100 : 0;

          // 🎨 Dynamic color
          let color = "bg-red-500";
          if (star >= 4) color = "bg-green-500";
          else if (star === 3) color = "bg-yellow-400";

          return (
            <div key={star} className="flex items-center gap-2 text-sm">

              {/* STAR */}
              <span className="w-10">{star}⭐</span>

              {/* BAR */}
              <div className="w-full bg-gray-700 h-3 rounded overflow-hidden">
                <div
                  className={`${color} h-3 rounded transition-all duration-700 ease-out`}
                  style={{ width: `${percent}%` }}
                />
              </div>

              {/* COUNT */}
              <span className="w-6 text-right">{count}</span>
            </div>
          );
        })}
      </div>

      {/* INPUT */}
      <div className="mb-6">

        {/* ⭐ SELECT RATING */}
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-xl ${star <= rating ? "text-yellow-400 scale-110" : "text-gray-500"
                }`}
            >
              ⭐
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <input
            value={input}
            maxLength={150}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your review..."
            className="flex-1 px-4 py-2 rounded-full bg-gray-900 border border-gray-700"
          />

          <button
            onClick={handleAddReview}
            className={`px-5 py-2 rounded-full ${input.trim() && rating > 0
                ? "bg-red-600 hover:scale-110"
                : "bg-gray-600 cursor-not-allowed"
              }`}
          >
            Post
          </button>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="flex gap-4 overflow-x-auto">

        {reviews.length === 0 && (
          <p className="text-gray-500">No reviews yet...</p>
        )}

        {reviews.map((r) => (
          <div
            key={r.id}
            className="min-w-[220px] bg-gray-900 p-4 rounded-xl border border-gray-800"
          >
            <p className="text-xs text-gray-400">{r.user}</p>

            <p className="text-yellow-400">
              {"⭐".repeat(r.rating)}
            </p>

            <p className="text-sm mt-1">{r.text}</p>

            {/* ❤️ LIKE */}
            <button
              onClick={() => handleLike(r.id)}
              className="text-red-400 text-xs mt-2"
            >
              ❤️ {r.likes}
            </button>

            {/* 🗑 DELETE */}
            <button
              onClick={() => handleDelete(r.id)}
              className="block text-xs text-gray-500 mt-1"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;