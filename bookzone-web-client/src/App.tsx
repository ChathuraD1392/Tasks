import "./App.css";
import Toast from "./components/Toast/Toast";

function App() {
  return (
    <>
      <Toast
        message="This is a toast"
        isShowing={true}
        onClose={() => console.log("Visible")}
      />
    </>
  );
}

export default App;
