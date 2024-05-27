import React from 'react';

function App() {
  return (
    <div>
      <header className="w-full absolute top-0 left-0 flex justify-between items-center px-10 py-1 bg-red-600 animate-fade-in">
        <a href="#"><img src="/img/BDQ MICROCREDITO LOGO 1.png" alt="" className="w-20" /></a> 
        <nav className="flex">
          <ul className="flex space-x-20">
            <li className="mr-8">
              <a href="#" className="text-white transition duration-300 ease-in-out hover:text-yellow-300">Home</a>
            </li>
            <li className="mr-8">
              <a href="#" className="text-white transition duration-300 ease-in-out hover:text-yellow-300">Sobre</a>
            </li>
            <li className="mr-8">
              <a href="#" className="text-white transition duration-300 ease-in-out hover:text-yellow-300">Serviços</a>
            </li>
            <li>
              <a href="#" className="text-white transition duration-300 ease-in-out hover:text-yellow-300">Suporte</a>
            </li>
          </ul>
        </nav>
      </header>
      
      <div className="relative mt-80 ml-10 mb-6">
        <h1 className="text-white text-4xl">Transforme seus sonhos <br /> em realidade com nosso <br /> microcrédito</h1>
        <button className="border-2 border-white text-white py-2 px-6 rounded-lg ml-15 mt-10">ver mais</button>
        <div className="absolute right-0 bottom-0 mb-10">
          <img src="/img/BDQ MICROCREDITO LOGO 1.png" alt="Descrição da imagem" className="w-40" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        </div>
      </div>

      <div className="bg-white mt-80">
        <div className="container mx-auto px-50 py-5 flex flex-wrap">
          <div className="w-full md:w-1/1 bg-white rounded-lg shadow-md mb-6 md:mr-2 flex justify-center">
            <div className="p-2 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Conheça BDQ Microcredito</h2>
              <p className="text-gray-700">Generate Lorem Ipsum placeholder text.<br /> Select the number of characters, words,<br /> sentences or paragraphs, and hit<br /> generate!</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md justify-center">
            <div className="p-6">
              <img className="w-5 h-auto" src="/img/26388521_7199771 1.png" alt="Placeholder Image" />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex items-center">
          <img src="/img/illustration-Hosting.png" alt="Example Image" className="w-1/1 h-auto" style={{ margin: '20px' }} />
          <h1 className="ml-6 text-3xl font-bold" style={{ color: 'rgba(255, 255, 255, 1)', fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '700', lineHeight: '39.01px', textAlign: 'left' }}>Desbloqueie o potencial do seu <br />negócio com nosso microcrédito<br /> rápido e acessível!</h1>
        </div>
      </section>

      <section className="bg-white py-8">
        {/* Adicione suas seções de conteúdo aqui */}
      </section>

      <footer style={{ marginTop: '300px' }}>
        <footer style={{ background: '#3D0B1F' }} className="text-white py-8">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex justify-center items-center">
              <img src="/img/BDQ MICROCREDITO LOGO 1.png" alt="Logo" />  
            </div>
            <div>
              <h4 className="font-bold mb-2">Sobre</h4>
              {/* Adicione links para páginas sobre */}
            </div>
            <div>
              <h4 className="font-bold mb-2">Serviços</h4>
             
            </div>
            <div>
              <h4 className="font-bold mb-2">Termos e condições</h4>
              {/* Adicione links para termos e condições */}
              <h4 className="font-bold mb-2">Políticas de Privacidade</h4>
              {/* Adicione links para políticas de privacidade */}
              <h4 className="font-bold mb-2">Licenças</h4>
              {/* Adicione links para licenças */}
            </div>
          </div>
        </footer>
      </footer>
    </div>
  );
}

export default App;
