import { SemanticICONS } from "semantic-ui-react";

export interface AuthMethod {
  oauthEndpoint: string;
  client_id: string;
  scope: string;

  name: string;
  icon: SemanticICONS;
  type: number;
}

export const AviableAuthMethods: AuthMethod[] = [
  {
    oauthEndpoint: "https://discord.com/oauth2/authorize",
    client_id: "517423360091881484",
    scope: "identify",
    name: "Discord",
    icon: "discord",
    type: 1,
  },
  {
    oauthEndpoint: "https://oauth.vk.com/oauth/authorize",
    client_id: "3953872",
    scope: "offline",
    name: "Вконтакте",
    icon: "vk",
    type: 2,
  },
];
