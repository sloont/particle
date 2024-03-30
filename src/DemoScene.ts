import ParticleGui from './ParticleGui';
import ParticleControl from './ParticleControl';
import cellsheet from '../assets/particles/exampleCellsheet.png';

type ParticleEmitter = Phaser.GameObjects.Particles.ParticleEmitter;
type ParticleEmitterConfig = Phaser.Types.GameObjects.Particles.ParticleEmitterConfig;
export default class DemoScene extends Phaser.Scene {
    config: Phaser.Types.GameObjects.Particles.ParticleEmitterConfig;
    control: ParticleControl;
    gui: ParticleGui;
    emitters: ParticleEmitter[] = [];
    constructor() {
        super();

        this.control = new ParticleControl();
        this.gui = new ParticleGui(this, this.control);
        this.config = this.initConfig(this.control);
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
        this.emitters.push(
            this.add.particles(
                400,
                300,
                'demo',
                this.config,
            )
        );
    }

    initConfig(control: ParticleControl): ParticleEmitterConfig {
        return {
            frame: 0,
            speed: { min: control.speed.min, max: control.speed.max },
            lifespan: control.lifeBase,
            alpha: { start: 1, end: control.deathOpacityBase },
            duration: control.duration,
            frequency: control.emitFrequency,
            scaleX: control.dimensions.width / 32,
            scaleY: control.dimensions.height / 32,
            emitting: true,
        }
    }

    // hardcode these for 1 emitter for now, but wrap with fetch by index
    findEmitter(index: number) {
        return this.emitters[index];
    }

    lifespan(emitter: ParticleEmitter, val: number) {
        emitter.setParticleLifespan(val);
    }

    alphaEnd(emitter: ParticleEmitter, val: number ) {
        emitter.setParticleAlpha({ start: 1, end: val });
    }

    dimensions(emitter: ParticleEmitter, val: { width: number, height: number }) {
        // this takes receives a value between 1 and 32
        // need to convert here to appropriate scale
        emitter.setParticleScale(
            val.width / 32,
            val.height / 32,
        );
    }

    emitZone(emitter: ParticleEmitter, val: { width: number, height: number }) {
        // need to remove the old emitZone
        emitter.clearEmitZones();
        // need to create a rectangle with this data and use it for a RandomZone
        emitter.addEmitZone(new Phaser.GameObjects.Particles.Zones.RandomZone(
            new Phaser.Geom.Rectangle(
                val.width / -2,
                val.height / -2,
                val.width,
                val.height,
            ) as Phaser.Types.GameObjects.Particles.RandomZoneSource
        ));
    }

    emitFrequency(emitter: ParticleEmitter, val: number) {
        emitter.setFrequency(val);
    }

    duration(emitter: ParticleEmitter, val: number) {
        // stop and kill all particles
        emitter.stop(true);
        // restart, advancing 0ms and with new duration
        emitter.start(0, val);
    }

    angle(emitter: ParticleEmitter, val: { min: number, max: number }) {
        emitter.setEmitterAngle({ min: val.min, max: val.max });
    }

    speed(emitter: ParticleEmitter, val: { min: number, max: number }) {
        emitter.speed = { min: val.min, max: val.max };
    }

    radial(emitter: ParticleEmitter, val: boolean) {
        emitter.setRadial(!val);
    }
}