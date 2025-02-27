import { client, urlFor } from "@/lib/sanity";

export async function getServerSideProps() {
  const query = `*[_type == "landingPage"][0]{
    heroTitle,
    heroImage,
    introText,
    galleryImages
  }`;
  const landingPage = await client.fetch(query);

  return { props: { landingPage } };
}

export default function Home({ landingPage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-start mb-16">
        <h1 className="text-4xl font-bold mb-4">{landingPage.heroTitle}</h1>
        {landingPage.heroImage && (
          <img
            src={urlFor(landingPage.heroImage).url()}
            alt="Hero"
            className="w-full h-80 object-cover rounded-lg"
          />
        )}
      </section>

      {/* Intro Section */}
      <section className="mb-12">
        <div className="prose mx-auto text-center">
          {landingPage.introText &&
            landingPage.introText.map((block, index) => (
              <p key={index}>{block.children && block.children[0] && block.children[0].text}</p>
            ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {landingPage.galleryImages &&
          landingPage.galleryImages.map((image, index) => (
            <img
              key={index}
              src={urlFor(image).width(400).height(300).url()}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
      </section>
    </div>
  );
}
