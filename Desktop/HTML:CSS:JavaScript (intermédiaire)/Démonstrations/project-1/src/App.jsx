import logo from './assets/logo.avif'
import './App.css'
import MyButton from './components/MyButton'
import { EditOutlined } from '@ant-design/icons'

export default function App () {
  return (
    <>
      <img src={logo} className='logo' alt='Logo de Coding Blog' />

      <h1>My Coding Blog</h1>

      <MyButton
        icon={<EditOutlined />}
        handleClick={() => console.log("Rédaction d'un article...")}
      />
    </>
  )
}
