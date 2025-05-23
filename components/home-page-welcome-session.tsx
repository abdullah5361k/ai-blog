const HomePageWelcomeSession = () => {
  return (
    <>
      <section className="relative pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* <h1 className="font-serif text-7xl md:text-4xl font-bold mb-2">
              Welcome to{" "}
              <span className="text-primary bg-clip-text ">Teche</span>
            </h1> */}
            <h1 className="text-5xl font-serif md:text-6xl font-bold text-muted-foreground mb-6 animate-fade-in">
              Welcome to{" "}
              <span className="text-primary bg-clip-text ">Teche</span>
            </h1>
            {/* <p className="text-xl text-muted-foreground  max-w-3xl mx-auto mb-1 ">
              Discover insightful articles about technology, development,
              design, and the future of digital innovation.
            </p> */}

            <p className="font-small text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover insightful articles about technology, development,
              design, and the future of digital innovation.
            </p>

            {/* Search Bar */}
            {/* <div className="max-w-md mx-auto relative animate-fade-in">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border-2 border-gray-200 focus:border-blue-500 rounded-full"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageWelcomeSession;
