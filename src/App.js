import React from "react";

import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
