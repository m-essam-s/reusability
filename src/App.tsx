import './App.css'
import Button from './components/Button/Button'
import Menu from './components/Menu/Menu'
import MenuButton from './components/Menu/MenuButton'
import MenuDropdown from './components/Menu/MenuDropdown'
import MenuItem from './components/Menu/MenuItem'
import Star from './components/Star'
import Theme from './components/Theme/Theme'
import Toggle from './components/Toggle/Toggle'
import ToggleButton from './components/Toggle/ToggleButton'
import ToggleDisplay from './components/Toggle/ToggleDiisplay'
import ToggleOff from './components/Toggle/ToggleOff'
import ToggleOn from './components/Toggle/ToggleOn'
import { BsStar, BsStarFill } from "react-icons/bs"

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
          <Toggle>
            <ToggleButton>
              <ToggleOn>
                <MenuButton>Sports</MenuButton>
                <MenuDropdown>
                  {sports.map(sport => (
                    <MenuItem key={sport}>{sport}</MenuItem>
                  ))}
                </MenuDropdown>
              </ToggleOn>
              <ToggleOff>
                <MenuButton>Sports</MenuButton>
              </ToggleOff>
            </ToggleButton>
          </Toggle>
        </Menu>
      </section>

      <section>
        <Theme />
      </section>

      <section className='flex flex-col items-center bg-gray-100 p-10 rounded-md shadow-md gap-5'>
        <h1 className='text-3xl'>
          Toggle Component
        </h1>
        <Toggle>
          <ToggleButton>
            <ToggleOn>
              <BsStarFill className="hight-[30px] width-[30px] cursor-pointer transition-color .5s ease-in-out user-select-none color-white" />
            </ToggleOn>
            <ToggleOff>
              <BsStar className="hight-[30px] width-[30px] cursor-pointer transition-color .5s ease-in-out user-select-none color-white" />
            </ToggleOff>
          </ToggleButton>
          <ToggleButton>
            <ToggleDisplay>
              {(on: boolean) => <p>{on ? "Starred" : "Not Starred"}</p>}
            </ToggleDisplay>
          </ToggleButton>
        </Toggle>
        <Star />
      </section>
    </main>
  )
}

export default App
