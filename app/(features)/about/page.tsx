import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Luis's About Page",
  description: "Generated with love",
};

export default function AboutPage() {
  return <span className="text-7xl">About Us</span>;
}
