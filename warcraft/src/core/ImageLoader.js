import Loader from './Loader.js';

export default class ImageLoader extends Loader {
	load(src) {
		let image = new Image();

		image.addEventListener('load', (e) => {
			this.loaded(src, e.target);
		});

		image.addEventListener('error', () => {
			this.failed(src);
		});

		image.src = this.getPath(src);
		// image = null;

		return this;
	}
}
