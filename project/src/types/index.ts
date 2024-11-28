export interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType;
}

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
  restaurant?: string;
}

export interface MenuItem {
  name: string;
  description: string;
  image: string;
}