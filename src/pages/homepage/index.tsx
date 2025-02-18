import Navbar from '../../components/navbar';

function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <header className="container mx-auto py-4 mt-16">
        <h1>Home Page</h1>
      </header>
      <section className="container mx-auto">
        {/* Main content goes here */}
      </section>
      <footer className="mt-auto py-4">
        {/* Footer content */}
      </footer>
    </main>
  );
}

export default HomePage;