export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // lucide icon name
  categories: string[];
  regulation: string; // Peruvian regulation or standard (e.g. MINAM, OEFA, D.S. N° 014-2017-MINAM)
  features: string[];
}

export interface Value {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface BrandApp {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  illustrationType: 'truck' | 'report' | 'uniform' | 'stations';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  ruc: string; // Peruvian RUC number (11 digits, optional/validated)
  serviceInterest: string;
  message: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  iconName: string;
}
