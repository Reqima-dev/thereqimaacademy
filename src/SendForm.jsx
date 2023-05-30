import React from "react";
import "./App.css";
import { useForm, ValidationError } from "@formspree/react";
import checkBox from "./image/checked.png";
import logo01 from "./image/logo01.png";

function SendForm() {
  const [state, handleSubmit] = useForm("xbjeeeko");

  if (state.succeeded) {
    return (
      <div className="thanksContainer">
        <div className="thanksMessage">
          <img className="check" src={checkBox} alt="" />
          <h1>Merci d'avoir remplir le formulaire !</h1>
        </div>

        <span>
          Vous allez recevoir votre Guide par E-mail ou bien par WhatsApp.
          <br />
          Assurez vous que le message ne tombe pas dans un spam
        </span>

        <article>
          <h2>[Confidentialité des données]</h2>
          <span>
            Nous respectons votre vie privée et vos informations ne seront
            jamais partagées avec des tiers. Vous pouvez vous désinscrire à tout
            moment.
          </span>
        </article>
        <img className="logoThanks" src={logo01} alt="" />
      </div>
    );
  }
  return (
    <>
      <h1>
        Découvrez le <br /> <span>Guide Post-Examen</span>
      </h1>
      <p>
        Ne laissez pas le doute s'installer après l'obtention de votre diplôme.
        Se préparer aux défis et opportunités qui vous attendent après
        l'obtention de votre diplôme DT/BAC/CAP...
      </p>
      <form onSubmit={handleSubmit}>
        <div className="group">
          <div className="label_Subject">
            <label htmlFor="name" for="name">
              Votre Nom<span>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              placeholder="votre nom"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="label_Subject">
            <label htmlFor="prenom" for="prenom">
              Votre Prénom<span>*</span>
            </label>
            <input
              type="text"
              id="prenom"
              name="Prenom"
              placeholder="votre prénom"
              required
            />
            <ValidationError
              prefix="Prenom"
              field="prenom"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="group">
          <div className="label_Subject">
            <label htmlFor="exam" for="exam">
              Vous avez passer quel examen ?<span>*</span>
            </label>
            <input
              type="text"
              id="exam"
              name="Exam"
              placeholder="Entrez le diplôme"
              required
            />
            <ValidationError prefix="Exam" field="exam" errors={state.errors} />
          </div>
          <div className="label_Subject">
            <label htmlFor="phone" for="phone">
              Votre Numéro WhatsApp<span>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="Phone"
              placeholder="+229......."
              required
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="label_Subject pt">
          <label htmlFor="email" for="email">
            Votre E-mail<span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="tonemail@gmail.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <button type="submit" disabled={state.submitting}>
          Envoyer
        </button>
      </form>
    </>
  );
}

export default SendForm;
