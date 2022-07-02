import mapsTwig from './maps.twig';
// import officeListingData from './office-listing.yml';
import mapsData from './maps.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/maps' };

export const mapslisting = () => mapsTwig(mapsData);
