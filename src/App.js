import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { store } from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="flex bg-[#0f0f0f] h-14 text-white">
                    <Header />
                  </div>
                  <div className="bg-[#0f0f0f] h-full overflow-y-auto text-white">
                    <main className="flex">
                      <Sidebar />
                      <Body />
                    </main>
                  </div>
                </>
              }
            />
            <Route path="/watch" element={<VideoPlayer />} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
