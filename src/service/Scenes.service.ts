export interface Scene {
  path: string;
  component: JSX.Element;
}

export class ScenesService {
  public static readonly default = new ScenesService();

  private scenes: Scene[];

  private footer: JSX.Element | null;

  constructor() {
    this.scenes = [];
    this.footer = null;
  }

  public setFooter(footer: JSX.Element) {
    this.footer = footer;
  }

  public add(scene: Scene) {
    this.scenes.push(scene);
  }

  public use(scenes: ScenesService) {
    this.scenes = this.scenes.concat(scenes.getAll());
  }

  public getAll(): Scene[] {
    return this.scenes;
  }
}

export default ScenesService;
