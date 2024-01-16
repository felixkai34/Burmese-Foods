import { Route ,Routes  } from 'react-router-dom'
import './App.css'
import Post from './assets/Pages/Post'
import Detail from './assets/Pages/Detail'

export default function App() {

  return (
    <>
    	<Routes>
			<Route path="/" element={<Post/>} />
          	<Route path="/:Id" element={<Detail/>} />
    	</Routes>
    </>
  )
}
