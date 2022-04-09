import './App.css';
import image from "./cat.jpg"
import './style.css'
function App() {
  return (
<div>
<div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Ramzi Touffaha</h1>
    <br />
    <img src={image} alt ='myImage' />
    <br />
    <img src="/public.jpg" alt="public" />
  </div>
  <video width={320} height={240} controls="">
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>
  );
}

export default App;
