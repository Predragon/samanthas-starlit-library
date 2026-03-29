import React from 'react';

import {
  StartScene, BikesScene, FireflyScene, RooftopsScene, CometsScene,
  OwlsScene, AuroraScene, DescentScene, TreeScene, FinalScene,
} from './MidnightRideScenes';

import {
  OceanStartScene, DolphinsRisingScene, BayaniStarScene, FlamingoCloudScene,
  RainbowJellyfishScene, MoonbeamWhaleScene, AnimalsBedtimeScene, PlanetsMoonScene,
  DolphinDescentScene, StillWaterScene, PromiseScene, RefrainScene,
} from './SkyDolphinsScenes';

import {
  BedroomStarsScene, UnicornArrivalScene, CloudGallopScene, BelgradeGlowScene,
  SerbianFeastScene, ButterflyOceanScene, MeadowGallopScene, UnicornDescentScene,
  UnicornLandingScene,
} from './RainbowUnicornScenes';

import {
  SerbiaNightScene, SvetlostShipScene, SolarSystemScene, SaturnJupiterScene,
  MilkyWayScene, GalaxiesScene, StarNurseryScene, DeepSpaceScene, HomewardScene,
} from './ShipOfStarsScenes';

import {
  BedtimeQuestionScene, StoryBeginsScene, TinyBeginningsScene, MamasHeartScene,
  GrowingScene, DadyWhispersScene, HeartbeatScene, ArrivalDayScene,
  FirstCryScene, FirstHoldScene, BrightWorldScene,
} from './WhenSamanthaBeganScenes';

import {
  SunsetStartScene, BicycleSeatScene, AngelesEveningScene, ParadeGroundsScene,
  AirplaneTakeoffScene, AirplaneLandingScene, StarbucksScene, SevenElevenScene,
  MoonlitRideScene, BeltSafetyScene, WhisperRideScene, LastLaneScene,
  SipAndSingScene, MammyWaitingScene, MammyKissScene, CarriedToBedScene,
} from './BicycleNightsScenes';

import {
  SpWishScene, SpTransformScene, SpWingsScene, SpPhoneScene,
  SpBluedotScene, SpLiftoffScene, SpFlightScene, SpArrivalScene,
  SpLandingScene, SpMagicScene, SpBelgradeScene, SpBelgradeWalkScene,
  SpTataScene, SpFadingScene, SpPromiseScene, SpEmbraceScene,
  SpWakingScene, SpFinalScene,
} from './SuperpowerScenes';

import {
  CloudsScene, FlightScene, OceanScene, DefaultScene,
} from './GenericScenes';

// ── Scene registry ──────────────────────────────
const SCENES = {
  // Midnight Ride
  start: StartScene,
  bikes: BikesScene,
  firefly: FireflyScene,
  rooftops: RooftopsScene,
  comets: CometsScene,
  owls: OwlsScene,
  aurora: AuroraScene,
  descent: DescentScene,
  tree: TreeScene,
  final: FinalScene,

  // Sky Dolphins
  'ocean-start': OceanStartScene,
  'dolphins-rising': DolphinsRisingScene,
  'bayani-star': BayaniStarScene,
  'flamingo-cloud': FlamingoCloudScene,
  'rainbow-jellyfish': RainbowJellyfishScene,
  'moonbeam-whale': MoonbeamWhaleScene,
  'animals-bedtime': AnimalsBedtimeScene,
  'planets-moon': PlanetsMoonScene,
  'dolphin-descent': DolphinDescentScene,
  'still-water': StillWaterScene,
  'promise': PromiseScene,
  'refrain': RefrainScene,

  // Rainbow Unicorn
  'bedroom-stars': BedroomStarsScene,
  'unicorn-arrival': UnicornArrivalScene,
  'cloud-gallop': CloudGallopScene,
  'belgrade-glow': BelgradeGlowScene,
  'serbian-feast': SerbianFeastScene,
  'butterfly-ocean': ButterflyOceanScene,
  'meadow-gallop': MeadowGallopScene,
  'unicorn-descent': UnicornDescentScene,
  'unicorn-landing': UnicornLandingScene,

  // Ship of Stars
  'serbia-night': SerbiaNightScene,
  'svetlost-ship': SvetlostShipScene,
  'solar-system': SolarSystemScene,
  'saturn-jupiter': SaturnJupiterScene,
  'milky-way': MilkyWayScene,
  'galaxies': GalaxiesScene,
  'star-nursery': StarNurseryScene,
  'deep-space': DeepSpaceScene,
  'homeward': HomewardScene,

  // When Samantha Began
  'bedtime-question': BedtimeQuestionScene,
  'story-begins': StoryBeginsScene,
  'tiny-beginnings': TinyBeginningsScene,
  'mamas-heart': MamasHeartScene,
  'growing': GrowingScene,
  'dady-whispers': DadyWhispersScene,
  'heartbeat': HeartbeatScene,
  'arrival-day': ArrivalDayScene,
  'first-cry': FirstCryScene,
  'first-hold': FirstHoldScene,
  'bright-world': BrightWorldScene,

  // Bicycle Nights
  'sunset-start': SunsetStartScene,
  'bicycle-seat': BicycleSeatScene,
  'angeles-evening': AngelesEveningScene,
  'parade-grounds': ParadeGroundsScene,
  'airplane-takeoff': AirplaneTakeoffScene,
  'airplane-landing': AirplaneLandingScene,
  'starbucks': StarbucksScene,
  'seven-eleven': SevenElevenScene,
  'moonlit-ride': MoonlitRideScene,
  'belt-safety': BeltSafetyScene,
  'whisper-ride': WhisperRideScene,
  'last-lane': LastLaneScene,
  'sip-and-sing': SipAndSingScene,
  'mammy-waiting': MammyWaitingScene,
  'mammy-kiss': MammyKissScene,
  'carried-to-bed': CarriedToBedScene,

  // Samantha's Superpower
  'sp-wish': SpWishScene,
  'sp-transform': SpTransformScene,
  'sp-wings': SpWingsScene,
  'sp-phone': SpPhoneScene,
  'sp-bluedot': SpBluedotScene,
  'sp-liftoff': SpLiftoffScene,
  'sp-flight': SpFlightScene,
  'sp-arrival': SpArrivalScene,
  'sp-landing': SpLandingScene,
  'sp-magic': SpMagicScene,
  'sp-belgrade': SpBelgradeScene,
  'sp-belgrade-walk': SpBelgradeWalkScene,
  'sp-tata': SpTataScene,
  'sp-fading': SpFadingScene,
  'sp-promise': SpPromiseScene,
  'sp-embrace': SpEmbraceScene,
  'sp-waking': SpWakingScene,
  'sp-final': SpFinalScene,

  // Generic fallbacks
  clouds: CloudsScene,
  flight: FlightScene,
  ocean: OceanScene,
  default: DefaultScene,
};

export default function SceneRenderer({ scene, storyId, accent }) {
  const S = SCENES[scene] || SCENES['default'];
  return <S accent={accent} storyId={storyId} />;
}
