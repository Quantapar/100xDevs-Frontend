import React, { createContext, useContext, useState, useEffect } from "react";

interface CurrencyContextType {
  exchangeRate: number;
  loading: boolean;
  formatPrice: (priceInr: number, currency: "INR" | "USD") => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [exchangeRate, setExchangeRate] = useState<number>(0.012); // Fallback rate
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/INR",
        );
        const data = await response.json();
        if (data.rates && data.rates.USD) {
          setExchangeRate(data.rates.USD);
        }
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, []);

  const formatPrice = (priceInr: number, currency: "INR" | "USD") => {
    if (currency === "INR") {
      return `₹${priceInr.toLocaleString("en-IN")}`;
    } else {
      const priceUsd = priceInr * exchangeRate;
      return `$${priceUsd.toFixed(2)}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ exchangeRate, loading, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
