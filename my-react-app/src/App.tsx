// App.tsx
import './App.css';
import MainChart from './component/MainChart';
function App() {
  

  return (
    <div className="min-h-[100vh] flex gap-5  flex-col pt-20 items-center">
      <p className='font-bold text-3xl mb-10'>Allied Medical</p>
    <MainChart/>
    </div>
  );
}

export default App;
