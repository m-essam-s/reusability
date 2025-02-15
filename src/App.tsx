import './App.css'
import Button from './components/Button/Button'
import Menu from './components/Menu/Menu'
import MenuButton from './components/Menu/MenuButton'
import MenuDropdown from './components/Menu/MenuDropdown'
import MenuItem from './components/Menu/MenuItem'

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <main className='flex flex-wrap items-center justify-center h-screen gap-10'>
      <section className='flex flex-col items-center bg-gray-100 p-10 rounded-md shadow-md gap-5'>
        <h1 className='text-3xl'>
          Button Component </h1>
        <Button>
          Click me
        </Button>
      </section>

      <section className='flex flex-col items-center bg-gray-100 p-10 rounded-md shadow-md gap-5'>
        <h1 className='text-3xl'>
          Dropdown Menu Component
        </h1>
        <Menu>
          <MenuButton>Sports</MenuButton>
          <MenuDropdown>
            {sports.map(sport => (
              <MenuItem key={sport}>{sport}</MenuItem>
            ))}
          </MenuDropdown>
        </Menu>
      </section>

    </main>
  )
}

export default App
