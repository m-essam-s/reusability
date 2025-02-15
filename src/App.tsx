import './App.css'
import Button from './components/Button/Button'

function App() {

  return (
    <main className='flex flex-wrap items-center justify-center h-screen gap-10'>
      <section className='flex flex-col items-center bg-gray-100 p-10 rounded-md shadow-md gap-5'>
        <h1 className='text-3xl'>
          Button Component </h1>
        <Button>
          Click me
        </Button>
      </section>
    </main>
  )
}

export default App
