import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ShoppingCart,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

const breastfeedingMother = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop";
const bulkingUp = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop";
const hypertension = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop";
const diabetes = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop";
const weaningBaby = "https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=800&auto=format&fit=crop";
const antenatal = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop";

const mealKits = [
  {
    id: "meal-kit-breastfeeding",
    name: "Breastfeeding Mother's Meal Kit",
    image: breastfeedingMother,
    price: 4000,
    description:
      "A carefully selected collection of organic products for mothers during breastfeeding.",
    points: [
      "Carefully selected food products",
      "Conveniently packed together",
      "Designed around a specific nutritional need",
    ],
  },
  {
    id: "meal-kit-bulking",
    name: "Bulking Up Meal Kit",
    image: bulkingUp,
    price: 4000,
    description:
      "A wholesome selection of products designed for customers looking to support their nutritional goals.",
    points: [
      "Selected wholesome products",
      "Convenient meal planning",
      "Everything packed together",
    ],
  },
  {
    id: "meal-kit-hypertension",
    name: "Hypertension Meal Kit",
    image: hypertension,
    price: 4000,
    description:
      "A carefully selected collection of foods for customers following a balanced eating approach.",
    points: [
      "Selected organic products",
      "Convenient food sourcing",
      "Packed as one complete kit",
    ],
  },
  {
    id: "meal-kit-diabetes",
    name: "Diabetes Meal Kit",
    image: diabetes,
    price: 4000,
    description:
      "A convenient selection of organic products assembled around a specific dietary need.",
    points: [
      "Carefully selected products",
      "Conveniently packaged",
      "Simplifies food sourcing",
    ],
  },
  {
    id: "meal-kit-weaning",
    name: "Weaning Baby Meal Kit",
    image: weaningBaby,
    price: 4000,
    description:
      "A convenient selection of products for families introducing complementary foods to babies.",
    points: [
      "Selected food products",
      "Convenient family shopping",
      "Everything packed together",
    ],
  },
  {
    id: "meal-kit-antenatal",
    name: "Antenatal Meal Kit",
    image: antenatal,
    price: 4000,
    description:
      "A carefully selected collection of organic products for customers during pregnancy.",
    points: [
      "Selected organic products",
      "Convenient food sourcing",
      "Packed as one complete kit",
    ],
  },
];

const MealKits = () => {
  const { addToCart } = useCart();

  const [selectedKit, setSelectedKit] = useState(null);
  const [addedKit, setAddedKit] = useState(null);

  const handleAddToCart = (kit) => {
    addToCart({
      id: kit.id,
      name: kit.name,
      image: kit.image,
      category: "Meal Kits",
      price: kit.price,
    });

    setAddedKit(kit.id);

    setTimeout(() => {
      setAddedKit(null);
    }, 1800);
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bulkingUp}
            alt="Marama Meal Kits"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-32">
          <div className="max-w-3xl text-white">
            <Link
              to="/#products"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Marama Foods
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Meal Kits
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Carefully selected combinations of organic products designed
              around different nutritional needs and stages of life.
            </p>

            <a
              href="#kits"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-marama-green transition duration-300 hover:bg-maroon hover:text-white"
            >
              Explore Meal Kits
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-maroon">
            Find Your Kit
          </p>

          <h2 className="mt-3 text-3xl font-bold text-marama-green sm:text-4xl">
            Nutrition made more convenient
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Marama Meal Kits bring selected organic products together in one
            convenient package, helping simplify the process of sourcing food
            around different nutritional needs.
          </p>
        </div>
      </section>

      {/* Meal Kits */}
      <section
        id="kits"
        className="scroll-mt-28 bg-gray-50 px-6 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-maroon">
                Our Collection
              </p>

              <h2 className="mt-2 text-3xl font-bold text-marama-green sm:text-4xl">
                Choose your Meal Kit
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Select a kit to see more information or add it directly to your
              shopping cart.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mealKits.map((kit) => (
              <article
                key={kit.id}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-marama-green">
                    Meal Kit
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="min-h-[56px] text-xl font-bold leading-tight text-marama-green">
                    {kit.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                    {kit.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Price
                      </p>

                      <p className="mt-1 text-xl font-bold text-gray-800">
                        KSh {kit.price.toLocaleString()}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedKit(kit)}
                      className="flex cursor-pointer items-center gap-2 rounded-full border border-marama-green px-4 py-2.5 text-sm font-semibold text-marama-green transition duration-300 hover:bg-marama-green hover:text-white"
                    >
                      View Kit
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(kit)}
                    className={`mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition duration-300 ${
                      addedKit === kit.id
                        ? "bg-maroon"
                        : "bg-marama-green hover:bg-maroon"
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4" />

                    {addedKit === kit.id ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Meal Kits */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-maroon">
              Why Meal Kits?
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-marama-green sm:text-4xl">
              Less searching. More convenience.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              Instead of sourcing different products individually, Meal Kits
              bring selected products together in one convenient package.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Carefully selected organic products",
                "Conveniently packed together",
                "Options built around different needs",
                "Easy ordering through your shopping cart",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-marama-green text-white">
                    <Check className="h-4 w-4" />
                  </div>

                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={antenatal}
              alt="Marama Meal Kit"
              className="h-[420px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/75">
                Marama Foods
              </p>

              <p className="mt-1 text-2xl font-bold">
                Carefully selected. Conveniently packed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-marama-green px-6 py-14 text-center text-white sm:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-white/70">
            Marama Foods
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Looking for everyday foods instead?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/75">
            Browse our wider product collection and add individual products
            directly to your cart.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-marama-green transition duration-300 hover:bg-maroon hover:text-white"
          >
            Visit Shop
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* KIT DETAILS MODAL */}
      {selectedKit && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={() => setSelectedKit(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden sm:h-80">
              <img
                src={selectedKit.image}
                alt={selectedKit.name}
                className="h-full w-full object-cover"
              />

              <button
                type="button"
                onClick={() => setSelectedKit(null)}
                className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 text-gray-700 transition hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-maroon">
                Meal Kit
              </p>

              <h2 className="mt-2 text-3xl font-bold leading-tight text-marama-green">
                {selectedKit.name}
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                {selectedKit.description}
              </p>

              <div className="mt-6 space-y-3">
                {selectedKit.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-marama-green">
                      <Check className="h-4 w-4" />
                    </div>

                    <p className="text-sm text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Price
                  </p>

                  <p className="text-2xl font-bold text-gray-800">
                    KSh {selectedKit.price.toLocaleString()}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(selectedKit);
                    setSelectedKit(null);
                  }}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-marama-green px-6 py-3 font-semibold text-white transition duration-300 hover:bg-maroon"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MealKits;
