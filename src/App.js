import React, {Component} from 'react'
import Routes from './Routes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

class App extends Component {
    render(){
        return (
            <div>
            <Navbar />
            <Routes />
            <Footer />
            </div>
        )
    }
}
export default App