import midnightRide from './midnight-ride.json';
import skyDolphins from './sky-dolphins.json';
import flightToSerbia from './flight-to-serbia.json';
import starlitDream from './starlit-dream.json';
import rainbowUnicorn from './rainbow-unicorn.json';
import shipOfStars from './ship-of-stars.json';
import whenSamanthaBegan from './when-samantha-began.json';
import bicycleNights from './bicycle-nights.json';
import samanthasSuperpower from './samanthas-superpower.json';

const stories = [midnightRide, skyDolphins, flightToSerbia, starlitDream, rainbowUnicorn, shipOfStars, whenSamanthaBegan, bicycleNights, samanthasSuperpower];

export default stories;

export function getStory(id) {
  return stories.find(s => s.id === id);
}
