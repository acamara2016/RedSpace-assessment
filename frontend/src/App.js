import { useState } from 'react';
import axios from 'axios';
import './App.css';
import babyYodaLight from './assets/babyYodaLight.json';
import babyYodaDark from './assets/babyYodaDark.json';
import Character from './components/Character';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles} from './components/UI/GlobalStyle';
import { lightTheme, darkTheme } from './components/UI/Themes';
import ToggleButton from './components/ToggleButton';
import { Header, Loading, Main } from './components/UI/Elements';
import Search from './components/Search';
import { Logo } from './components/Logo';
function App() {
  const [theme, setTheme] = useState('light');
  const [character, setCharacter] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const searchCharacter = async(id) => {
    setLoading(true);
    setError(null);
    setCharacter({});
    try {
      const data = await axios.get(`https://red-space-assessment.herokuapp.com/api/${id}`);
      setCharacter(data.data);
    } catch(error) {
      setError(error);
    }
    setLoading(false);
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
        <div className="App">
          <Header>
            <Logo/>
            <ToggleButton theme={theme} toggleTheme={toggleTheme} />
          </Header>
          <Search searchCharacter={searchCharacter} />
          <Main>
            {loading && <Loading loop animationData={theme==='light'?babyYodaLight:babyYodaDark} play />}
            {!loading && character.Name && <Character character={character}/>}
            {error && <h2>No result</h2>}
          </Main>
        </div>
    </ThemeProvider>
  );
}

export default App;
