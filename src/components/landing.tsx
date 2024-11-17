import LanguageSelector from './language-selector';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
      <p className="text-center mb-8">
        Before you start, please read the instructions and choose your language.
      </p>
      <LanguageSelector />
    </div>
  );
};

export default WelcomePage;