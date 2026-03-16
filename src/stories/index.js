import midnightRide from './midnight-ride.json';
import skyDolphins from './sky-dolphins.json';
import countingStars from './counting-stars.json';
import moonGarden from './moon-garden.json';
import flightToSerbia from './flight-to-serbia.json';
import starlitDream from './starlit-dream.json';

const stories = [midnightRide, skyDolphins, flightToSerbia, starlitDream, countingStars, moonGarden];

export default stories;

export function getStory(id) {
  return stories.find(s => s.id === id);
}
