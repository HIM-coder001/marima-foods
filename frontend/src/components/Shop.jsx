import React, { useState, useMemo } from "react";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { products, categories } from "../data/products";
import ProductCard from "./ProductCard";

const VISIBLE_COUNT = 3;

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat =
        activeCategory === "All" || p.category === activeCategory;
      const matchSearch = p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / VISIBLE_COUNT);
  const visible = filtered.slice(
    page * VISIBLE_COUNT,
    page * VISIBLE_COUNT + VISIBLE_COUNT,
  );

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setPage(0);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  return (
    <section className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-maroon">
            Shop
          </p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-marama-green sm:text-4xl lg:text-5xl">
            Best Sellers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover wholesome foods and carefully selected ingredients for
            better everyday living.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-xl">
          <div className="flex items-center rounded-full border border-marama-green bg-white px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-marama-green/20">
            <Search className="mr-3 h-5 w-5 shrink-0 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400 sm:text-base"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6 overflow-x-auto pb-1">
          <div className="flex min-w-max justify-center gap-2 px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategory(cat)}
                className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition duration-300 ${
                  activeCategory === cat
                    ? "bg-marama-green text-white shadow-sm"
                    : "border border-gray-200 text-gray-600 hover:border-marama-green hover:text-marama-green"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {visible.length > 0 ? (
          <>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(p - 1, 0))}
                  disabled={page === 0}
                  aria-label="Previous page"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-marama-green transition hover:border-marama-green hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <span className="text-sm font-semibold text-gray-600">
                  {page + 1} / {totalPages}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setPage((p) => Math.min(p + 1, totalPages - 1))
                  }
                  disabled={page >= totalPages - 1}
                  aria-label="Next page"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-marama-green transition hover:border-marama-green hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-16 text-center">
            <p className="text-lg font-semibold text-gray-500">
              No products found.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-sm font-semibold text-marama-green underline transition hover:text-maroon"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* View All CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/shop"
            className="flex cursor-pointer items-center gap-2 rounded-full bg-marama-green px-6 py-3 font-semibold text-white transition duration-300 hover:bg-maroon"
          >
            View All Products
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Shop;
