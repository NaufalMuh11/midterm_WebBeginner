import MyLink from "./components/MyLink";
import profile from './assets/foto_muh.jpeg';

function App() {
  return (
    <div className="h-screen bg-[#141414] flex justify-center items-center overflow-hidden">
    g<div className="bg-[#1f1f1f] w-[80%] max-w-[400px] p-8 flex flex-col rounded-l overflow-hidden">
      <div className="text-center">
        <div className="flex justify-center">
          <img src={profile} alt="foto-profile" className="rounded-full size-24"/>
          </div>
          <h1 className="text-white font-bold text-xl pt-6"> Naufal Muhammad</h1>
          <h1 className="text-lime-400 font-medium text-l">
            Depok, Indonesia
          </h1>
          <div className="text- italic text-white pt-7 py-5 text-base md:text-sm">
            "Front-end Developer and avid reader."
          </div>
          <div className="grid gap-4">
          <MyLink href="https://github.com/NaufalMuh11">Github</MyLink>
          <MyLink href="https://www.linkedin.com/in/naufal-muhammad-a36839247">LinkedIn</MyLink>
          <MyLink href="https://twitter.com/Paannih1">Twitter</MyLink>
          <MyLink href="https://www.instagram.com/naufalmuh.11/">Instagram</MyLink>
          <MyLink href="">Frontend Mentor</MyLink>
          </div>
        </div>
        <div class="w-full flex flex-col gap-4"></div>
      </div>
    </div>
  );
}

export default App;
