export const Type = {
  AudioStreaming: "audio-streaming",
  Blockchain: "blockchain",
  CloudStorage: "cloud-storage",
  Email: "email",
  OnlineGaming: "online-gaming",
  Searching: "searching",
  SmartDevices: "smart-devices",
  SocialMedia: "social-media",
  VideoConferencing: "video-conferencing",
  VideoStreaming: "video-streaming",
};

export const EMISSIONS_FACTOR_NL = 0.3284; // kg CO2/kWh

export const kwhToInfo = (kwh) => {
  const co2kg = kwh * EMISSIONS_FACTOR_NL;
  return {
    kwh,
    co2kg,
    trees: co2kg / 6,
  };
};
