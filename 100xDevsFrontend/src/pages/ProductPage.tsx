import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronDown, Package, Truck, RefreshCw, Shirt, X } from "lucide-react";
import { merchItems } from "../data";
import { useCurrency } from "../context/CurrencyContext";

const SIZES = ["S", "M", "L", "XL", "2XL"];

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("S");
  const [openAccordion, setOpenAccordion] = useState<string | null>("shipping");
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const { formatPrice } = useCurrency();

  const product = merchItems.find((item) => item.id === parseInt(id || "1"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <h2 className="text-2xl font-black text-[#04102d] mb-4">
            Product Not Found
          </h2>
          <button
            onClick={() => navigate("/store")}
            className="px-6 py-3 bg-[#0bae95] text-white font-black rounded-xl hover:bg-[#099984] transition-colors"
          >
            Back to Store
          </button>
        </div>
      </div>
    );
  }

  const toggleAccordion = (val: string) => {
    setOpenAccordion(openAccordion === val ? null : val);
  };

  return (
    <div className="w-full flex-grow bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex items-center gap-2 text-sm font-bold text-[#04102d]/60 mb-12">
          <Link
            to="/"
            className="hover:text-[#0bae95] transition-colors cursor-pointer"
          >
            Home
          </Link>
          <span>›</span>
          <Link
            to="/store"
            className="hover:text-[#0bae95] transition-colors cursor-pointer"
          >
            Store
          </Link>
          <span>›</span>
          <span className="text-[#04102d]">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-12 sm:mb-16">
          <div className="w-full flex flex-col gap-4">
            <div
              className={`w-full aspect-square ${product.bgColor} rounded-[32px] border-4 border-[#04102d] shadow-[8px_8px_0_#04102d] flex items-center justify-center relative overflow-hidden`}
            >
              <img
                src={product.imagePath}
                alt={product.title}
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
          <div className="w-full flex flex-col pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#04102d] leading-tight mb-4">
              {product.title}
            </h1>

            <p className="text-[18px] font-medium text-[#04102d]/80 mb-6">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <span className="text-4xl sm:text-5xl font-black text-[#04102d]">
                {formatPrice(product.priceInr, "INR")}
              </span>
              <span className="text-xl font-bold text-[#04102d]/50 line-through">
                {formatPrice(product.priceInr * 1.5, "INR")}
              </span>
            </div>
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[16px] font-bold text-[#04102d]">
                  Size: <span className="font-black">{selectedSize}</span>
                </span>
                <button
                  onClick={() => setIsSizeChartOpen(true)}
                  className="flex items-center gap-2 text-sm font-bold text-[#04102d] hover:text-[#0bae95] transition-colors cursor-pointer"
                >
                  <Shirt className="w-4 h-4" />
                  <span>Size chart</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center text-[16px] font-black transition-all cursor-pointer ${
                      selectedSize === size
                        ? "border-[#04102d] bg-[#04102d] text-white shadow-[4px_4px_0_#0bae95]"
                        : "border-[#04102d]/20 text-[#04102d] hover:border-[#04102d] bg-white hover:shadow-[4px_4px_0_#0bae95]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button className="w-full py-5 px-8 bg-[#04102d] text-white font-black text-xl rounded-[16px] border-4 border-[#04102d] shadow-[8px_8px_0_#0bae95] hover:shadow-[12px_12px_0_#0bae95] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mb-16 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span>Buy Now</span>
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col gap-4 mb-20">
          <div className="border-2 border-[#04102d] bg-white rounded-[24px] overflow-hidden">
            <button
              onClick={() => toggleAccordion("shipping")}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="text-lg sm:text-xl font-black text-[#04102d]">
                Shipping Details
              </span>
              <ChevronDown
                className={`w-6 h-6 text-[#04102d] transition-transform ${openAccordion === "shipping" ? "rotate-180" : ""}`}
              />
            </button>
            {openAccordion === "shipping" && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t-2 border-dashed border-gray-200">
                <ul className="flex flex-col gap-6 pt-4">
                  <li className="flex items-start gap-4">
                    <Package className="w-6 h-6 text-[#0bae95] shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#04102d] mb-1">
                        Package Type
                      </p>
                      <p className="text-[15px] font-medium text-[#04102d]/70">
                        Ships in regular packaging with protective wrapping to
                        ensure safe delivery.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Truck className="w-6 h-6 text-[#0bae95] shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#04102d] mb-1">
                        Delivery Timeline
                      </p>
                      <p className="text-[15px] font-medium text-[#04102d]/70">
                        Standard delivery within 15-20 days from order
                        confirmation. Express shipping available at checkout.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <RefreshCw className="w-6 h-6 text-[#0bae95] shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#04102d] mb-1">
                        Return Policy
                      </p>
                      <p className="text-[15px] font-medium text-[#04102d]/70">
                        This product is non-returnable. Please check size and
                        specifications carefully before ordering.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="border-2 border-[#04102d] bg-white rounded-[24px] overflow-hidden">
            <button
              onClick={() => toggleAccordion("material")}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="text-lg sm:text-xl font-black text-[#04102d]">
                Material & Care
              </span>
              <ChevronDown
                className={`w-6 h-6 text-[#04102d] transition-transform ${openAccordion === "material" ? "rotate-180" : ""}`}
              />
            </button>
            {openAccordion === "material" && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t-2 border-dashed border-gray-200">
                <div className="pt-4">
                  <div className="mb-6">
                    <p className="font-bold text-[#0bae95] mb-2">
                      Fabric Composition
                    </p>
                    <p className="text-[15px] font-medium text-[#04102d]/80 leading-relaxed">
                      Made from 100% premium cotton fabric with 300 GSM weight
                      for superior quality and comfort.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[#0bae95] mb-3">
                      Care Instructions
                    </p>
                    <ul className="flex flex-col gap-2 text-[15px] font-medium text-[#04102d]/80 list-disc ml-5">
                      <li className="pl-2 marker:text-[#0bae95]">
                        Machine wash in cold water with similar colors
                      </li>
                      <li className="pl-2 marker:text-[#0bae95]">
                        Do not bleach or use harsh detergents
                      </li>
                      <li className="pl-2 marker:text-[#0bae95]">
                        Tumble dry on low heat or air dry
                      </li>
                      <li className="pl-2 marker:text-[#0bae95]">
                        Iron on medium heat if needed
                      </li>
                      <li className="pl-2 marker:text-[#0bae95]">
                        Do not dry clean
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-2 border-[#04102d] bg-white rounded-[24px] overflow-hidden">
            <button
              onClick={() => toggleAccordion("size")}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="text-lg sm:text-xl font-black text-[#04102d]">
                Size & Fit
              </span>
              <ChevronDown
                className={`w-6 h-6 text-[#04102d] transition-transform ${openAccordion === "size" ? "rotate-180" : ""}`}
              />
            </button>
            {openAccordion === "size" && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t-2 border-dashed border-gray-200">
                <div className="pt-4">
                  <div className="mb-8">
                    <p className="font-bold text-[#0bae95] mb-2">Fit Type</p>
                    <p className="text-[15px] font-medium text-[#04102d]/80 leading-relaxed">
                      This product features an oversized fit designed for a
                      relaxed, comfortable wear. The loose silhouette provides
                      extra room and a contemporary streetwear aesthetic.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-[#0bae95] mb-4">
                      Size Chart (in inches)
                    </p>
                    <div className="overflow-x-auto rounded-xl border-2 border-[#04102d]">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#04102d]/5">
                            <th className="py-3 px-4 font-black text-[#04102d] border-b-2 border-r-2 border-[#04102d]">
                              Size
                            </th>
                            <th className="py-3 px-4 font-black text-[#04102d] border-b-2 border-r-2 border-[#04102d]">
                              Chest
                            </th>
                            <th className="py-3 px-4 font-black text-[#04102d] border-b-2 border-r-2 border-[#04102d]">
                              Length
                            </th>
                            <th className="py-3 px-4 font-black text-[#04102d] border-b-2 border-[#04102d]">
                              Shoulder
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { s: "S", c: "40", l: "27", sh: "18" },
                            { s: "M", c: "42", l: "28", sh: "19" },
                            { s: "L", c: "44", l: "29", sh: "20" },
                            { s: "XL", c: "46", l: "30", sh: "21" },
                            { s: "2XL", c: "48", l: "31", sh: "22" },
                          ].map((row, i, arr) => (
                            <tr key={row.s} className="hover:bg-gray-50">
                              <td
                                className={`py-3 px-4 font-bold text-[#04102d] border-r-2 border-[#04102d] ${i !== arr.length - 1 ? "border-b-2" : ""}`}
                              >
                                {row.s}
                              </td>
                              <td
                                className={`py-3 px-4 font-medium text-[#04102d]/80 border-r-2 border-[#04102d] ${i !== arr.length - 1 ? "border-b-2" : ""}`}
                              >
                                {row.c}
                              </td>
                              <td
                                className={`py-3 px-4 font-medium text-[#04102d]/80 border-r-2 border-[#04102d] ${i !== arr.length - 1 ? "border-b-2" : ""}`}
                              >
                                {row.l}
                              </td>
                              <td
                                className={`py-3 px-4 font-medium text-[#04102d]/80 ${i !== arr.length - 1 ? "border-b-2 border-[#04102d]" : ""}`}
                              >
                                {row.sh}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[13px] font-bold text-[#04102d]/60 mt-4 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#04102d]"></span>
                      Tip: If you're between sizes, we recommend sizing up for
                      the intended oversized look.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isSizeChartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#04102d]/40 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsSizeChartOpen(false)}
          ></div>
          <div className="relative bg-white rounded-[24px] w-full max-w-2xl overflow-hidden shadow-[8px_8px_0_#04102d] border-4 border-[#04102d] animate-in fade-in zoom-in duration-200">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-[#04102d] mb-2">
                    Measurement Chart
                  </h3>
                  <p className="text-[#04102d]/60 font-medium text-[15px]">
                    Standard size measurements in inches.
                  </p>
                </div>
                <button
                  onClick={() => setIsSizeChartOpen(false)}
                  className="w-10 h-10 bg-[#04102d]/80 hover:bg-[#04102d] rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-x-auto rounded-xl border-2 border-[#04102d]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#04102d]/5">
                      <th className="py-4 px-6 font-black text-[#04102d] border-b-2 border-r-2 border-[#04102d]">
                        Size
                      </th>
                      <th className="py-4 px-6 font-black text-[#04102d] border-b-2 border-r-2 border-[#04102d]">
                        Chest
                      </th>
                      <th className="py-4 px-6 font-black text-[#04102d] border-b-2 border-r-2 border-[#04102d]">
                        Length
                      </th>
                      <th className="py-4 px-6 font-black text-[#04102d] border-b-2 border-[#04102d]">
                        Shoulder
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { s: "S", c: "40", l: "27", sh: "18" },
                      { s: "M", c: "42", l: "28", sh: "19" },
                      { s: "L", c: "44", l: "29", sh: "20" },
                      { s: "XL", c: "46", l: "30", sh: "21" },
                      { s: "2XL", c: "48", l: "31", sh: "22" },
                    ].map((row, i, arr) => (
                      <tr
                        key={row.s}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td
                          className={`py-4 px-6 font-bold text-[#04102d] border-r-2 border-[#04102d] ${i !== arr.length - 1 ? "border-b-2" : ""}`}
                        >
                          {row.s}
                        </td>
                        <td
                          className={`py-4 px-6 font-medium text-[#04102d]/80 border-r-2 border-[#04102d] ${i !== arr.length - 1 ? "border-b-2" : ""}`}
                        >
                          {row.c}
                        </td>
                        <td
                          className={`py-4 px-6 font-medium text-[#04102d]/80 border-r-2 border-[#04102d] ${i !== arr.length - 1 ? "border-b-2" : ""}`}
                        >
                          {row.l}
                        </td>
                        <td
                          className={`py-4 px-6 font-medium text-[#04102d]/80 ${i !== arr.length - 1 ? "border-b-2 border-[#04102d]" : ""}`}
                        >
                          {row.sh}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
