import mapsTwig from './maps.twig';
import mapsData from './maps.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/maps' };

export const mapslisting = () => mapsTwig(mapsData);
