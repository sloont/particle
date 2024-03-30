import ParticleGui from './ParticleGui';
import ParticleControl from './ParticleControl';
import cellsheet from '../assets/particles/exampleCellsheet.png';

export default class DemoScene extends Phaser.Scene {
    config: Phaser.Types.GameObjects.Particles.ParticleEmitterConfig;
    control: ParticleControl;
    gui: ParticleGui;

    constructor() {
        super();

        this.control = new ParticleControl();
        this.gui = new ParticleGui(this.control);
        this.config = this.controlToConfig(this.control);
    }
    init() {
    }

    preload() {
        this.load.spritesheet(
            'demo',
            cellsheet,
            { frameWidth: 32 },
        );
    }

    create() {
        this.add.particles(
            400,
            300,
            'demo',
            this.config,
        )
    }

    controlToConfig(control: ParticleControl): Phaser.Types.GameObjects.Particles.ParticleEmitterConfig {
        return {
            frame: 0,
            speed: { min: control.speed.min, max: control.speed.max },
            lifespan: control.lifeBase,
            alpha: { start: 1, end: control.deathOpacityBase },
            duration: control.duration,
            frequency: control.emitFrequency,
            scaleX: 1 / control.dimensions.width,
            scaleY: 1 / control.dimensions.height,
            emitting: true,
        }
    }
}