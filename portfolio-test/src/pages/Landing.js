import { Navbar } from "../components/Navbar";
import { GreetMsg } from "../components/GreetMsg";
import { ContactsMe } from "../components/ContactsMe";

function Landing() {
  return (
    <div className="w-screen h-screen bg-pink-400">
      <Navbar />
      <GreetMsg />
      <ContactsMe />
    </div>
  );
}

export default Landing;
