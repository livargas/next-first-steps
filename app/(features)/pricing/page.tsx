import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Luis's Pricing Page",
  description: "Generated with love",
  keywords: ["pricing", "plans", "costs"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing</span>
    </>
  )
}