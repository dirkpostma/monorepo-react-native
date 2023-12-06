import logo from './logo.svg';
import './App.css';
import { theme, someMessage, someFunction, SomeComponent } from 'shared'
import { View } from 'react-native'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <View style={{ backgroundColor: theme.backgroundColor }}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>From React Web</p>
          <p>{someMessage}</p>
          <div onClick={someFunction}>Press me</div>
          <SomeComponent onPress={() => {
            alert("SomeCompnent pressed in web")
          }} />
        </View>
      </header>
    </div>
  );
}

export default App;
