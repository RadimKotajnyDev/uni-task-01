import './App.css'
import {Router} from "./router/router.tsx";
import {Layout} from "./layouts/layout.tsx";

const App = () => {
  return (
    <Layout>
      <Router/>
    </Layout>
  )
}

export default App
