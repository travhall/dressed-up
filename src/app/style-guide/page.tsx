// src/app/style-guide/page.tsx
export default function StyleGuide() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Typography Section */}
      <section>
        <h2 className="display-heading text-display-lg mb-8">Typography</h2>
        <div className="grid gap-8">
          <div className="space-y-4">
            <h3 className="text-content-secondary mb-4">Display</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-content-tertiary mb-2">
                  display-2xl
                </p>
                <h1 className="display-heading text-display-2xl">
                  Elegant Occasions
                </h1>
              </div>
              <div>
                <p className="text-sm text-content-tertiary mb-2">display-xl</p>
                <h2 className="display-heading text-display-xl">
                  Special Events
                </h2>
              </div>
              <div>
                <p className="text-sm text-content-tertiary mb-2">display-lg</p>
                <h3 className="display-heading text-display-lg">
                  Classic Style
                </h3>
              </div>
              <div>
                <p className="text-sm text-content-tertiary mb-2">
                  display-base
                </p>
                <h4 className="display-heading text-display-base">
                  Timeless Beauty
                </h4>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-content-secondary mb-4">Body</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-content-tertiary mb-2">body-lg</p>
                <p className="text-body-lg">
                  Lead paragraph text for important content.
                </p>
              </div>
              <div>
                <p className="text-sm text-content-tertiary mb-2">body-base</p>
                <p className="text-body-base">
                  Main content text for readability and clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section>
        <h2 className="display-heading text-display-lg mb-8">Colors</h2>
        <div className="grid gap-8">
          <div>
            <h3 className="text-content-secondary mb-4">Surface</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["primary", "secondary", "tertiary"].map((variant) => (
                <div key={variant} className="space-y-2">
                  <div
                    className={`h-24 bg-surface-${variant} rounded-lg border border-ui-card-border`}
                  />
                  <p className="text-sm">surface-{variant}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-content-secondary mb-4">Content</h3>
            <div className="grid gap-4 p-6 bg-surface-primary rounded-lg">
              <p className="text-content-primary">Primary Content</p>
              <p className="text-content-secondary">Secondary Content</p>
              <p className="text-content-tertiary">Tertiary Content</p>
            </div>
          </div>
        </div>
      </section>

      {/* UI Elements Section */}
      <section>
        <h2 className="display-heading text-display-lg mb-8">UI Elements</h2>
        <div className="grid gap-8">
          <div>
            <h3 className="text-content-secondary mb-4">Buttons</h3>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-ui-button text-ui-button-text hover:bg-ui-button-hover px-6 py-2 rounded-md transition-colors">
                Primary Button
              </button>
              <button className="bg-surface-secondary text-content-primary hover:bg-surface-tertiary px-6 py-2 rounded-md transition-colors">
                Secondary Button
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-content-secondary mb-4">Cards</h3>
            <div className="max-w-sm">
              <div className="bg-ui-card-surface border border-ui-card-border p-6 rounded-lg">
                <h4 className="display-heading text-display-base mb-2">
                  Card Title
                </h4>
                <p className="text-content-secondary">
                  Elegant card content with secondary text for supporting
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
