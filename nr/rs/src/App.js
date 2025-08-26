import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/hello";
import Input from "./components/input";
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Hello />
        <Input />
      </MainLayout>
    </>
  );
}

export default App;
