import React from "react";

const PoE2InfoPage = () => {
  return (
    <div className="bg-black text-gray-300 font-sans min-h-screen">
      <header className="bg-gray-800 text-gray-100 p-6 shadow-md">
        <h1 className="text-4xl font-bold text-center" style={{ color: "rgb(223, 207, 153)" }}>
          Path of Exile 2 Guide: Your Ultimate PoE2 Resource
        </h1>
        <p className="text-center mt-2 text-gray-400">
          Welcome to the most comprehensive <strong>poe2 guide</strong>, your go-to resource for everything about Path of Exile 2.
        </p>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* Introduction Section */}
        <section id="introduction" className="mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Introduction</h2>
          <p>
            Path of Exile 2 (PoE2) is the highly anticipated sequel to Grinding Gear Games' critically acclaimed
            action RPG, Path of Exile. This <strong>poe2 guide</strong> is designed to provide you with everything you need to know about the game, from its new gameplay mechanics to its stunning visuals and expanded storyline.
          </p>
          <p>
            If you're looking for detailed information about PoE2, such as skill builds, ascendancy classes, or item crafting, this <strong>poe2 guide</strong> has got you covered. For even more resources, check out <a href="https://poe2db.org" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">poe2db.org</a>.
          </p>
        </section>

        {/* Key Features Section */}
        <section id="features" className="mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Seven new acts with a fresh storyline and unique environments</li>
            <li>Improved graphics engine for enhanced visuals and performance</li>
            <li>19 new ascendancy classes to expand character customization</li>
            <li>Overhauled skill gem system with socketable support gems</li>
            <li>Cross-platform play and improved multiplayer functionality</li>
          </ul>
          <p>
            Whether you're a new player or a veteran, this <strong>poe2 guide</strong> will help you navigate through these features to maximize your gameplay experience.
          </p>
        </section>

        {/* Gameplay Mechanics Section */}
        <section id="gameplay" className="mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Gameplay Mechanics</h2>
          <p>
            PoE2 introduces significant changes to the core gameplay mechanics, including a revamped skill gem
            system, new passive skill trees, and a variety of new weapons and abilities. The game also retains
            the deep itemization and build diversity that Path of Exile is known for.
          </p>
          <p>
            This <strong>poe2 guide</strong> is your ultimate companion for understanding these mechanics and mastering the game. For more advanced builds and strategies, visit <a href="https://poe2db.org" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">poe2db.org</a>.
          </p>
        </section>

        {/* Latest Updates Section */}
        <section id="updates" className="mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Latest Updates</h2>
          <p>
            Stay informed with the latest news and updates about Path of Exile 2. Check out these resources for
            detailed coverage:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://www.youtube.com/watch?v=0VZsq_vJjGk" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">
                Path of Exile 2: Early Access Gameplay Trailer
              </a> - Watch the official gameplay footage showcasing the latest features and mechanics. $CITE_1
            </li>
            <li>
              <a href="https://www.pathofexile.com/forum/view-thread/3587981" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">
                Early Access FAQ
              </a> - Learn about early access details, supporter packs, and microtransaction transfers. $CITE_2
            </li>
            <li>
              <a href="https://pathofexile.tw/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">
                繁体中文版最新消息
              </a> - 查看《流亡黯道2》的繁体中文版抢先体验信息。$CITE_3
            </li>
            <li>
              <a href="https://poe2db.org" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">
                PoE2DB.org
              </a> - Your ultimate database for Path of Exile 2 builds, items, and news.
            </li>
          </ul>
        </section>

        {/* Early Access Section */}
        <section id="early-access" className="mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Early Access Details</h2>
          <p>
            Path of Exile 2's Early Access begins on December 6, 2024, and will be available on PC, PlayStation 5, and Xbox Series X/S.
            Players can gain access through:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Purchasing Supporter Packs, which include exclusive in-game items.</li>
            <li>Lifetime spending of $480 or more on the original Path of Exile grants automatic access.</li>
          </ul>
          <p>
            The Early Access version will feature Acts 1-3 and approximately 150-200 active skill gems, with more content coming in the full release. For more details, refer to this <strong>poe2 guide</strong> or visit <a href="https://poe2db.org" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">poe2db.org</a>.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Path of Exile 2 Resource Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PoE2InfoPage;