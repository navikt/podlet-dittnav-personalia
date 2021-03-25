function getEnvironment() {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
}

const NAVN_URL = {
  development: "https://www.nav.no/person/dittnav-api/personalia/navn",
  production: "https://www.dev.nav.no/person/dittnav-api/personalia/navn",
};

const IDENT_URL = {
  development: "https://www.nav.no/person/dittnav-api/personalia/ident",
  production: "https://www.dev.nav.no/person/dittnav-api/personalia/ident",
};

export const navnUrl = NAVN_URL[getEnvironment()];
export const identUrl = IDENT_URL[getEnvironment()];
