// src/components/layout/footer.tsx
export function Footer() {
  return (
    <footer className="bg-surface-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-lg mb-4">Dressed Up</h3>
            <p className="text-content-secondary">
              Special occasion dress boutique
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg mb-4">Visit</h3>
            <p className="text-content-secondary">15 W Central St.</p>
            <p className="text-content-secondary">Chippewa Falls, WI 54729</p>
          </div>
          <div>
            <h3 className="font-display text-lg mb-4">Hours</h3>
            <p className="text-content-secondary">Tuesday-Thursday</p>
            <p className="text-content-secondary">10am-4pm</p>
          </div>
          <div>
            <h3 className="font-display text-lg mb-4">Contact</h3>
            <p className="text-content-secondary">715-861-3899</p>
            <p className="text-content-secondary">
              dressedupfashions@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
