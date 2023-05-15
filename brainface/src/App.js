import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Rank from "./Components/Rank/Rank";
// import ParticlesBg from "particles-bg";
import { Component } from "react";

let config = {
  type: "lines",
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: "center", // all or center or {x:1,y:1,width:100,height:100}
  color: ["random", "#ff0000"],
  cross: "dead", // cross or bround
  random: 15, // or null,
  g: 5, // gravity
  // f: [2, -1], // force
  // onParticleUpdate: (ctx, particle) => {
  //   ctx.beginPath();
  //   ctx.rect(
  //     particle.p.x,
  //     particle.p.y,
  //     particle.radius * 2,
  //     particle.radius * 2
  //   );
  //   ctx.fillStyle = particle.color;
  //   ctx.fill();
  //   ctx.closePath();
  // },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    // const returnClarifaiRequestOptions() {

    // }
    // URL of image to use. Change this to your image.
    const IMAGE_URL = { imageUrl: this.state.input };

    const raw = JSON.stringify({
      user_app_id: {
        user_id: "markandmueller",
        app_id: "face-detection-brain",
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + "c6304965fa1e44069f0843f6ab9b97ed",
      },
      body: raw,
    };

    fetch(
      `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
        {/* <ParticlesBg type="custom" config={config} bg={true} /> */}
      </div>
    );
  }
}

export default App;
