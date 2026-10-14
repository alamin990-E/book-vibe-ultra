import getBookData from "@/allTheComponent/shared/lib";
import Image from "next/image";
import React from "react";

const BookDetailsViewPage = async ({ params }) => {

  const bookData = await getBookData();
  
  const { bookViewId } = await params;

const book = bookData.find(
  (book) => book.bookId === Number(bookViewId)
);
const {
  bookName,
  author,
  image,
  review,
  totalPages,
  rating,
  category,
  tags,
  publisher,
  yearOfPublishing,
}= book

  return (

<div className="container mx-auto mt-10 p-4 md:p-0">
  <div className="grid grid-cols-1 gap-6 overflow-hidden border border-gray-200 bg-base-100 p-4 shadow-md transition-all duration-300 hover:shadow-xl md:grid-cols-[300px_minmax(0,1fr)] md:gap-8 md:p-6">

    {/* Book Image */}
    <div className="flex items-center justify-center">
      <Image
        src={image}
        width={300}
        height={420}
        className="h-auto max-h-105 max-w-full object-contain"
        loading="eager"
        alt={bookName}
      />
    </div>

    {/* Book Details */}
    <div className="card-body min-w-0 rounded-2xl bg-slate-50 p-4 sm:p-6">

      {/* Category & Rating */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
          {category}
        </span>

        <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1.5">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold text-gray-700">
            {rating}
          </span>
        </div>
      </div>

      {/* Book Name */}
      <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
        {bookName}
      </h2>

      {/* Author */}
      <p className="text-sm text-gray-500">
        By{" "}
        <span className="font-semibold text-gray-700">
          {author}
        </span>
      </p>

      {/* Review */}
      <p className="mt-4 text-base leading-7 text-gray-600">
        {review}
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Book Information */}
      <div className="my-4 grid grid-cols-2 gap-3 border-y border-gray-100 py-4 sm:grid-cols-3">

        <div>
          <p className="text-xs text-gray-400">Pages</p>
          <p className="font-semibold text-gray-800">
            {totalPages}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Publisher</p>
          <p className="wrap-break-word font-semibold text-gray-800">
            {publisher}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Published</p>
          <p className="font-semibold text-gray-800">
            {yearOfPublishing}
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="card-actions flex-wrap justify-start gap-3 sm:gap-5">
        <button className="btn rounded-lg border border-gray-500 bg-white px-6 text-black">
          Read
        </button>

        <button className="btn rounded-lg border-0 bg-green-500 px-6 text-white hover:bg-green-600">
          Wish List
        </button>
      </div>

    </div>
  </div>
</div>
  );
};

export default BookDetailsViewPage;
