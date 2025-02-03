import { createRoot } from "react-dom/client"
import './App.scss'
import { Provider } from "react-redux"
import store from "./store"
import CountriesList from "./Components/UserList"

function App() {
  return (
    <Provider store={store}>
      <div className="main__container">
        <CountriesList />
      </div>
    </Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)
