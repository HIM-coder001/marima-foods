import React, { useState, useMemo } from "react";
import { Search, ArrowRight, ArrowLeft, SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

const ITEMS_PER_PAGE = 6;

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState("default");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const matchCat =
        activeCategory === "All" || p.category === activeCategory;
      const matchSearch = p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "name-asc") result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const visible = filtered.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setPage(0);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
    setPage(0);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    setSortBy("default");
    setPage(0);
  };

  const hasActiveFilters =
    searchQuery || activeCategory !== "All" || sortBy !== "default";

  return (
    <main className="pt-24 lg:pt-28">
      {/* Page Header */}
      <section className="bg-marama-green px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            Marama Foods
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Our Shop
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Browse our full range of wholesome foods, digital meal plans, recipes,
            and carefully selected ingredients — all sourced with your health in mind.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Toolbar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="flex flex-1 items-center rounded-full border border-gray-200 bg-white px-5 py-3 shadow-sm focus-within:border-marama-green focus-within:ring-2 focus-within:ring-marama-green/10">
              <Search className="mr-3 h-5 w-5 shrink-0 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search products..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="ml-2 text-gray-400 hover:text-maroon"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Sort + Filter toggle */}
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={handleSort}
                className="cursor-pointer rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 outline-none transition hover:border-marama-green focus:border-marama-green"
              >
                <option value="default">Sort: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A–Z</option>
              </select>

              <button
                type="button"
                onClick={() => setFiltersOpen(!filtersOpen)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition sm:hidden ${
                  filtersOpen
                    ? "border-marama-green bg-marama-green text-white"
                    : "border-gray-200 text-gray-700 hover:border-marama-green"
                }`}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Categories — desktop always visible, mobile toggle */}
          <div
            className={`mt-4 overflow-x-auto pb-1 ${
              filtersOpen ? "block" : "hidden sm:block"
            }`}
          >
            <div className="flex min-w-max gap-2 px-1 sm:flex-wrap sm:min-w-0">
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

          {/* Result count + clear */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-marama-green">
                {filtered.length}
              </span>{" "}
              product{filtered.length !== 1 ? "s" : ""}
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-semibold text-maroon transition hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Products Grid */}
          {visible.length > 0 ? (
            <>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="mt-10 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(p - 1, 0))}
                    disabled={page === 0}
                    aria-label="Previous page"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-marama-green transition hover:border-marama-green hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setPage(i)}
                        className={`h-9 w-9 cursor-pointer rounded-full text-sm font-semibold transition ${
                          i === page
                            ? "bg-marama-green text-white"
                            : "border border-gray-200 text-gray-600 hover:border-marama-green hover:text-marama-green"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
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
            <div className="mt-20 text-center">
              <p className="text-xl font-semibold text-gray-400">
                No products match your search.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 text-sm font-semibold text-marama-green underline transition hover:text-maroon"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Shop;
