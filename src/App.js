import React from "react";
import Personalia from "./components/Personalia";
import AlertStripe from "nav-frontend-alertstriper";
import { Undertittel } from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import "./App.less";

const App = () => (
  <div className="podlet-dittnav-personalia">
    <div className="disclaimer">
      <AlertStripe type="advarsel">
        <Undertittel>Denne siden er under utvikling</Undertittel>
        Du har kommet til en side som er under utvikling og bare skal prøves ut på utvalgte kontorer. Trykk
        <Lenke href="https://www.nav.no/person/dittnav"> her</Lenke> for å gå til DittNAV.
      </AlertStripe>
    </div>
    <Personalia />
  </div>
);

export default App;
