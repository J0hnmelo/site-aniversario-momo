import { useState, useEffect } from "react";
import "./App.css";
import img1 from "./assets/imagens/tela1/imagem1.webp";
import img2 from "./assets/imagens/tela1/imagem2.webp";
import img3 from "./assets/imagens/tela1/imagem3.png";
import img4 from "./assets/imagens/tela1/imagem4.png";
import img5 from "./assets/imagens/tela1/imagem5.png";
import img6 from "./assets/imagens/tela1/imagem6.png";
import img7 from "./assets/imagens/tela1/imagem7.png";
import img8 from "./assets/imagens/tela1/imagem8.png";
import img9 from "./assets/imagens/tela1/imagem9.png";
import img10 from "./assets/imagens/tela1/imagem10.webp";
import img11 from "./assets/imagens/tela1/imagem11.png";
import img12 from "./assets/imagens/tela1/imagem12.png";
import img13 from "./assets/imagens/tela1/imagem13.png";
import img14 from "./assets/imagens/tela1/imagem14.webp";
import img15 from "./assets/imagens/tela1/imagem15.png";
import img16 from "./assets/imagens/tela1/imagem16.png";
import img17 from "./assets/imagens/tela1/imagem17.png";
import img18 from "./assets/imagens/tela1/imagem18.png";

import t2img1 from "./assets/imagens/tela2/imagem1.png";
import t2img2 from "./assets/imagens/tela2/imagem2.png";
import t2img3 from "./assets/imagens/tela2/imagem3.png";
import t2img4 from "./assets/imagens/tela2/imagem4.png";
import t2img5 from "./assets/imagens/tela2/imagem5.png";
import t2img6 from "./assets/imagens/tela2/imagem6.png";
import t2img7 from "./assets/imagens/tela2/imagem7.png";
import t2img8 from "./assets/imagens/tela2/imagem8.png";
import t2img9 from "./assets/imagens/tela2/imagem9.png";
import t2img10 from "./assets/imagens/tela2/imagem10.png";


import tl1 from "./assets/imagens/timeline/imagem1.jpeg";
import tl2 from "./assets/imagens/timeline/imagem2.jpeg";
import tl3 from "./assets/imagens/timeline/imagem3.jpeg";
import tl4 from "./assets/imagens/timeline/imagem4.jpeg";
import tl5 from "./assets/imagens/timeline/imagem5.jpeg";
import tl6 from "./assets/imagens/timeline/imagem6.jpeg";
import tl7 from "./assets/imagens/timeline/imagem7.png";



function App() {
  const [inputDate, setInputDate] = useState("");
  const [error, setError] = useState(false);
  const [screen, setScreen] = useState("entry");
  const [showMessage, setShowMessage] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const correctDate = "04/02/1999";
  const [loveScreen, setLoveScreen] = useState(false);
  const [heartsActive, setHeartsActive] = useState(false);
  const [showBigText, setShowBigText] = useState(false);
  const [miniPopup, setMiniPopup] = useState(null);

  const imagesTela1 = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];

  const imagesTela2 = [
  t2img1, t2img2, t2img3, t2img4, t2img5,
  t2img6, t2img7, t2img8, t2img9, t2img10
];

const timelineData = [
  {
    image: tl1,
    text: "Aqui nasceu a minha Kalinezinha, doce, carinhosa, nascida para brilhar✨."
  },
  {
    image: tl2,
    text: "Posso não ter estado presente, mas sempre que vejo você se formando, sinto um amor gigante e um carinho maior ainda, você é incrível."
  },
  {
    image: tl3,
    text: "Aqui, eu, John, Sacomã, entra de vez na sua vida, mal sabiamos nós onde chegariamos né?"
  },
  {
    image: tl4,
    text: "Aqui a maravilhosa professora Kalezinha mostrou que consegue transmitir seu brilho através das suas alunas.✨"
  },
  {
    image: tl5,
    text: "Aqui eu e minha pequena Kalinezinha nos encontramos fisicamente pela primeira vez... que dia não? KKKKK ❤️"
  },
  {
    image: tl6,
    text: "Aqui nos nos vimos com mais liberdade e demos o nosso primeiro beijo"
  },
  {
    image: tl7,
    text: "E aqui... aqui foi um grande passo para nós, o nosso primeiro date, primeiro encontro de muitos que viriam e ainda virão...❤️"
  }
];

  const openLoveScreen = () => {
  setLoveScreen(true);
  setHeartsActive(true);

  setTimeout(() => {
    setHeartsActive(false);
    setShowBigText(true);
  }, 3000);
  };
  const formatDate = (value) => {
    let numbers = value.replace(/\D/g, "");

    if (numbers.length > 2) {
      numbers = numbers.slice(0, 2) + "/" + numbers.slice(2);
    }
    if (numbers.length > 5) {
      numbers = numbers.slice(0, 5) + "/" + numbers.slice(5, 9);
    }

    return numbers.slice(0, 10);
  };

  const handleChange = (e) => {
    setInputDate(formatDate(e.target.value));
  };

  const handleSubmit = () => {
    if (inputDate === correctDate) {
      setScreen("second");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  /* ============================= */
  /* CONTROLE DO CARD DA TELA 3 */
  /* ============================= */
  useEffect(() => {
    if (screen === "third") {
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowMessage(false);
    }
  }, [screen]);

  /* ============================= */
  /* TELA 1 */
  /* ============================= */
  if (screen === "entry") {
    return (
      <div className="entry-container">
        <h1 className="question">
          Qual a data mais importante desse universo ?
        </h1>

        <input
          type="text"
          placeholder="DD/MM/AAAA"
          value={inputDate}
          onChange={handleChange}
          className="date-input"
        />

        <button
          onClick={handleSubmit}
          className="submit-button"
          disabled={inputDate.length !== 10}
        >
          Enviar
        </button>

        {error && (
          <div className="error-popup">
            🤨 Como assim você não sabe? Tenta novamente.
          </div>
        )}
      </div>
    );
  }

  /* ============================= */
  /* TELA 2 */
  /* ============================= */
  if (screen === "second") {
    return (
      <div className="second-container">
        <h1 className="second-title">
          Claro que você sabe...
        </h1>

        <p className="second-text">
          Foi o dia que o universo ganhou você. ✨
        </p>

        <button
          className="continue-button"
          onClick={() => setScreen("third")}
        >
          Continuar
        </button>
      </div>
    );
  }

  /* ============================= */
  /* TELA 3 */
  /* ============================= */
  if (screen === "third") {
    return (
      <div className="third-container">
       {imagesTela1.map((img, index) => (
        <div key={index} className="real-image">
          <img src={img} alt={`memoria-${index}`} />
        </div>
      ))}

        {showMessage && (
          <div className="birthday-card">
            <p>
              Hoje o ser mais lindo do universo está completando mais um ano de vida,
              eu venho aqui com muito amor e muito carinho te desejar paz, saúde e
              muita paciência para me aguentar,
              <br /><br />
              <span
                className="love-anchor"
                onClick={() => setScreen("fourth")}
              >
                eu te amo
              </span>{" "}
              e sou o homem mais sortudo por ter você!
              <br /><br />
              Feliz aniversário meu amor, você é minha vida!
            </p>
          </div>
        )}
      </div>
    );
  }
  /* ============================= */
/* TELA 4 */
/* ============================= */
if (screen === "fourth") {
  const steps = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="fourth-container">

      {/* Fundo com imagens espalhadas */}
      <div className="background-images">
              {imagesTela2.map((img, index) => (
        <div
          key={index}
          className={`bg-image ${index === 3 ? "clickable-bg" : ""}`}
          onClick={index === 3 ? openLoveScreen : undefined}
        >
          <img src={img} alt={`background-${index}`} />
        </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="timeline">
        <div className="line"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`dot ${activeStep === index ? "active" : ""}`}
            onClick={() =>
              setActiveStep(activeStep === index ? null : index)
            }
          ></div>
        ))}
      </div>

      {/* Conteúdo aberto */}
      {activeStep !== null && (
      <div className="timeline-card">
        <div className="timeline-image">
          <img
            src={timelineData[activeStep].image}
            alt="momento"
          />
        </div>

        <div className="timeline-text">
          {timelineData[activeStep].text}
        </div>
      </div>
      )}

      {/* ================= LOVE OVERLAY ================= */}
      {loveScreen && (
        <div className="love-overlay">

                {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 2}s`,
              fontSize: `${16 + Math.random() * 20}px`
            }}
          >
            ❤️
          </span>
        ))}

          {showBigText && (
            <div className="love-card">
              <p>
                Chegamos até o final, meu amor…  
                E antes de qualquer coisa, eu quero que você saiba que nada aqui foi por acaso.

                Cada detalhe, cada clique, cada imagem espalhada nesse caminho carrega um pedaço do que eu sinto por você.  
                Pode parecer simples, pode parecer até bobo… mas foi feito com muito carinho.

                Eu sempre soube que queria{" "}
                <span 
                  className="click-word" 
                  onClick={() => setMiniPopup("casar")}
                >
                  casar
                </span>{" "}
                com alguém que me fizesse sentir paz, orgulho e amor ao mesmo tempo.  
                E hoje eu sei exatamente quem é essa pessoa.

                Talvez eu não tenha colocado tudo o que eu gostaria na timeline, talvez eu ainda tenha muito para viver ao seu lado antes de conseguir expressar tudo…  
                Mas cada foto foi escolhida com carinho. Cada palavra foi escrita pensando em você.

                Eu{" "}
                <span 
                  className="click-word" 
                  onClick={() => setMiniPopup("amo")}
                >
                  amo
                </span>{" "}
                o seu jeito, a sua força, a sua luz, a sua coragem.  
                Amo a mulher que você é e a mulher que você está se tornando.

                Feliz aniversário, meu amor.  
                Que esse novo ano seja um marco, que você se sinta mais confiante, mais dona de si, mais viva.  
                Que a Professora Kalinezinha floresça ainda mais.

                Obrigado por me permitir fazer parte da sua vida.  
                Obrigado por me deixar te amar.

                Eu te amo hoje, te amo amanhã e vou continuar escolhendo você todos os dias.

                Com amor,  
                seu namorado,  
                seu marido,  
                seu amor proibido…  

                Sacomã 💕
              </p>

              {miniPopup && (
                <div className="mini-popup">
                  {miniPopup === "casar"
                    ? "hummmmmmmmmmmm vai casar comigo neeeeeeee"
                    : "hummmmmmmmmmmm me ama neeeee"}
                </div>
              )}
            </div>
          )}

        </div>
      )}

    </div>
  );
}
}

export default App;