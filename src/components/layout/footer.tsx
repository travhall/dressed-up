// src/components/layout/footer.tsx
import {
  businessInfo,
  formatPhoneNumber,
  getFormattedAddress,
} from "@/lib/config/contact";
import { ThemeToggle } from "../ui/theme-toggle";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { phone, email } = businessInfo.contact;

  return (
    <footer className="bg-surface-primary py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-lg mb-4">{businessInfo.name}</h3>
            <p className="text-content-secondary">{businessInfo.tagline}</p>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Visit</h3>
            <address className="text-content-secondary not-italic">
              <a
                href={businessInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Get directions to our store"
              >
                {getFormattedAddress()
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
              </a>
            </address>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Hours</h3>
            {businessInfo.hours.regular.map(({ days, hours }) => (
              <div key={days} className="text-content-secondary mb-2">
                <p className="font-light">{days}</p>
                <p className="font-bold">{hours}</p>
              </div>
            ))}
            <p className="text-content-secondary italic mt-4">
              {businessInfo.hours.notes}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href={`tel:${phone}`}
                className="text-content-secondary block hover:underline"
                aria-label="Call our store"
              >
                {formatPhoneNumber(phone)}
              </a>
              <a
                href={`mailto:${email}`}
                className="text-content-secondary block hover:underline"
                aria-label="Email us"
              >
                {email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-ui-card-border text-content-secondary text-sm">
          <div className="md:hidden mb-8">
            <ThemeToggle />
          </div>
          <p>
            &copy;{currentYear} {businessInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
