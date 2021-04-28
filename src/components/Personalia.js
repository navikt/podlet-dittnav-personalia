import React from "react";
import { useQuery } from "react-query";
import { identUrl, navnUrl } from "../url";
import { fetcher } from "../api";
import PersonIkonZ from "../assets/PersonIkon";
import "./Personalia.less";

const Personalia = () => {
  const { data: personaliaNavn, isError } = useQuery(navnUrl, fetcher);
  const { data: personaliaIdent } = useQuery(identUrl, fetcher, { enabled: isError });

  const personalia = isError ? personaliaIdent?.ident : personaliaNavn?.navn.toLowerCase();

  return (
    <div className="person-info">
      <PersonIkonZ />
      <h1>{personalia}</h1>
    </div>
  );
};

export default Personalia;
