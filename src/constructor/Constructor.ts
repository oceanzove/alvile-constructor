import MouseOffsetObserver from './observers/MouseOffsetObserver';
import ConstructorCamera from './camera/ConstructorCamera';
import MouseDownObserver from './observers/MouseDownObserver';
import MouseUpObserver from './observers/MouseUpObserver';

class Constructor {
	private readonly containerElement: HTMLElement;
	private readonly mouseOffsetObserver: MouseOffsetObserver;
	private readonly mouseDownObserver: MouseDownObserver;
	private readonly mouseUpObserver: MouseUpObserver;
	private readonly camera: ConstructorCamera;

	constructor(container: HTMLElement) {
		// точка входа
		this.containerElement = container;

		this.mouseUpObserver = new MouseUpObserver();
		this.mouseDownObserver = new MouseDownObserver();
		this.mouseOffsetObserver = new MouseOffsetObserver();

		this.camera = new ConstructorCamera({
			mouseUpObserver: this.mouseUpObserver,
			mouseDownObserver: this.mouseDownObserver,
			mouseOffsetObserver: this.mouseOffsetObserver,
		});
		const cameraElement = this.camera.getCanvasElement();

		this.containerElement.append(cameraElement);
	}
}

export default Constructor;
