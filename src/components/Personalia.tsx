import React from "react";
import useSWR from "swr";
import { fetcher, IdentResponse, NavnResponse } from "../api";
import { identUrl, navnUrl } from "../url";
import personikon from "../assets/person.svg";

const Personalia = () => {
  const { data: personaliaNavn, error } = useSWR<NavnResponse>(navnUrl, fetcher);
  const { data: personaliaIdent } = useSWR<IdentResponse>(() => (error ? identUrl : null), fetcher);

  const personalia = error ? personaliaIdent?.ident : personaliaNavn?.navn.toLowerCase();

  return (
    <div className="person-info">
      <img className="person-info__ikon" src={personikon} alt="" />
      <h1>{personalia}</h1>
    </div>
  );
};

export default Personalia;
