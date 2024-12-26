// src/lib/config/contact.ts

export const businessInfo = {
  name: "Dressed Up",
  tagline: "Special occasion dress boutique",
  address: {
    street: "15 W Central St.",
    city: "Chippewa Falls",
    state: "WI",
    zip: "54729",
    googleMapsUrl: "https://goo.gl/maps/yourlink",
  },
  contact: {
    phone: "715-861-3899",
    email: "dressedupfashions@gmail.com",
    social: {
      facebook: "https://facebook.com/dressedupfashions",
      instagram: "https://instagram.com/dressedupfashions",
    },
  },
  hours: {
    regular: [
      { days: "Tuesday-Thursday", hours: "10am-4pm" },
      { days: "Friday-Monday", hours: "Closed" },
    ],
    notes: "Private appointments available",
  },
} as const;

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

export function getFormattedAddress(): string {
  const { street, city, state, zip } = businessInfo.address;
  return `${street}, ${city}, ${state} ${zip}`;
}
