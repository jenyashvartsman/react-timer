import { AddTimerModal } from "./components/feature/AddTimerModal";
import { Header } from "./components/layout/Header";
import { TimersList } from "./components/feature/TimersList";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <AddTimerModal />
      <TimersList />
      <Footer />
    </>
  );
}

export default App;
