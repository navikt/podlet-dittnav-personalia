function getEnvironment(): "production" | "development" {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
}

type EnvUrl = { development: string; production: string };

const NAVN_URL: EnvUrl = {
  development: "https://www.nav.no/person/dittnav-api/personalia/navn",
  production: "https://www.dev.nav.no/person/dittnav-api/personalia/navn",
};

const IDENT_URL: EnvUrl = {
  development: "https://www.nav.no/person/dittnav-api/personalia/ident",
  production: "https://www.dev.nav.no/person/dittnav-api/personalia/ident",
};

export const navnUrl = NAVN_URL[getEnvironment()];
export const identUrl = IDENT_URL[getEnvironment()];
