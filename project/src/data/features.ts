import { Utensils, Clock, BarChart3, Smartphone, Shield, Users } from 'lucide-react';
import type { Feature } from '../types';

export const features: Feature[] = [
  {
    name: 'Easy Menu Management',
    description: 'Update your menu items, prices, and specials in real-time with our intuitive dashboard.',
    icon: Utensils
  },
  {
    name: 'Real-Time Orders',
    description: 'Receive and manage orders instantly with automatic kitchen notifications.',
    icon: Clock
  },
  {
    name: 'Sales Analytics',
    description: 'Track your best-selling items, peak hours, and customer preferences.',
    icon: BarChart3
  },
  {
    name: 'Mobile App',
    description: 'Custom-branded mobile app for your restaurant to boost customer loyalty.',
    icon: Smartphone
  },
  {
    name: 'Secure Payments',
    description: 'PCI-compliant payment processing with multiple payment options.',
    icon: Shield
  },
  {
    name: 'Customer Management',
    description: 'Build customer profiles and loyalty programs to drive repeat business.',
    icon: Users
  }
];