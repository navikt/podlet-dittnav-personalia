import React from "react";
import useSWR from "swr";
import { fetcher } from "../api";
import { identUrl, navnUrl } from "../url";
import "./Personalia.less";
import PersonIkon from "../assets/PersonIkon";

const Personalia = () => {
  const { data: personaliaNavn, error } = useSWR(navnUrl, fetcher);
  const { data: personaliaIdent } = useSWR(() => (error ? identUrl : null), fetcher);

  const personalia = error ? personaliaIdent?.ident : personaliaNavn?.navn.toLowerCase();

  return (
    <div className="person-info">
      <PersonIkon />
      <h1>{personalia}</h1>
    </div>
  );
};

export default Personalia;
