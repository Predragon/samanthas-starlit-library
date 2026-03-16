import midnightRide from './midnight-ride.json';
import skyDolphins from './sky-dolphins.json';
import countingStars from './counting-stars.json';
import moonGarden from './moon-garden.json';

const stories = [midnightRide, skyDolphins, countingStars, moonGarden];

export default stories;

export function getStory(id) {
  return stories.find(s => s.id === id);
}
