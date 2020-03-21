import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.React = require(`react`);
window.renderer = require(`react-test-renderer`);
window.shallow = Enzyme.shallow;
window.mount = Enzyme.mount;

Enzyme.configure({adapter: new Adapter()});
