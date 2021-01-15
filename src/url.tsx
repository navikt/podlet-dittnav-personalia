function getEnvironment(): "production" | "development" {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
}

type EnvUrl = { development: string; production: string };

const NAVN_URL: EnvUrl = {
  development: "https://www.nav.no/person/dittnav-api/personalia/navn",
  production: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/auth",
};

const IDENT_URL: EnvUrl = {
  development: "https://www.nav.no/person/dittnav-api/personalia/ident",
  production: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/auth",
};

export const navnUrl = NAVN_URL[getEnvironment()];
export const identUrl = IDENT_URL[getEnvironment()];
