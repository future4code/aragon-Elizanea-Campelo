import { Router } from "./router/Router";
import GlobalState from './global/globalState'
import { ThemeProvider } from "@mui/material";
import { titleMAIN } from './title/title'
function App() {
  return (
    <ThemeProvider theme={titleMAIN} >
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
