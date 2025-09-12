export default function MissionVision() {
  return (
    <section className="py-20 bg-secondary">
       <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-headline text-primary mb-4">Our Mission</h3>
            <p className="text-xl text-foreground leading-relaxed">
              “To glorify God by making disciples, nurturing believers, and serving our community through love and compassion.”
            </p>
          </div>
          <div className="text-center md:text-left border-t-2 md:border-t-0 md:border-l-2 border-accent/30 pt-8 md:pt-0 md:pl-12">
            <h3 className="text-2xl font-bold font-headline text-primary mb-4">Our Vision</h3>
            <p className="text-xl text-foreground leading-relaxed">
              “To be a Christ-centered church that transforms lives and impacts the community through the Gospel.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
