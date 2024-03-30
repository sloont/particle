import GUI from "lil-gui";
import ParticleControl from "./ParticleControl";
import DemoScene from "./DemoScene";

export default class ParticleGui {
    gui: GUI;
    scene: DemoScene;
    control: ParticleControl;
    constructor(scene: DemoScene, control: ParticleControl) {
        this.gui = new GUI({
            title: 'control',
        });
        this.scene = scene;
        this.control = control;

        this.createGuiControls();
    }

    createGuiControls(): void {
        // lifeBase
        this.gui.add(
            this.control,
            'lifeBase',
            100,
            10000,
            100,
        )
        .onFinishChange((val: number) => {
            this.scene.lifespan(
                this.scene.findEmitter(0),
                val,
            );
        });

        // deathOpacityBase
        this.gui.add(
            this.control,
            'deathOpacityBase',
            0,
            1,
            0.05,
        )
        .onFinishChange((val: number) => {
            this.scene.alphaEnd(
                this.scene.findEmitter(0),
                val,
            );
        });

        // dimensions
        const dimensionsFolder = this.gui.addFolder('dimensions');
        const onDimensionChange = () => {
            this.scene.dimensions(
                this.scene.findEmitter(0),
                this.control.dimensions,
            );
        }
        dimensionsFolder.add(
            this.control.dimensions,
            'width',
            1,
            32,
            1,
        )
        .onFinishChange(onDimensionChange);
        dimensionsFolder.add(
            this.control.dimensions,
            'height',
            1,
            32,
            1,
        )
        .onFinishChange(onDimensionChange);

        // emitZone
        const emitZoneFolder = this.gui.addFolder('emitZone');
        const onEmitZoneChange = () => {
            if (this.control.emitZone.width > 0 && this.control.emitZone.height > 0) {
                this.scene.emitZone(
                    this.scene.findEmitter(0),
                    this.control.emitZone,
                );
            }
        }
        emitZoneFolder.add(
            this.control.emitZone,
            'width',
            0,
            400,
            5,
        )
        .onFinishChange(onEmitZoneChange);
        emitZoneFolder.add(
            this.control.emitZone,
            'height',
            0,
            300,
            5,
        )
        .onFinishChange(onEmitZoneChange);

        // emitFrequency
        this.gui.add(
            this.control,
            'emitFrequency',
            2,
            250,
            2,
        )
        .onFinishChange((val: number) => {
            this.scene.emitFrequency(
                this.scene.findEmitter(0),
                val,
            );
        });

        // duration
        this.gui.add(
            this.control,
            'duration',
            0,
            10000,
            100,
        )
        .onFinishChange((val: number) => {
            this.scene.duration(
                this.scene.findEmitter(0),
                val,
            );
        });

        // angle
        const angleFolder = this.gui.addFolder('angle');
        const onAngleChange = () => {
            this.scene.angle(
                this.scene.findEmitter(0),
                this.control.angle,
            );
        }
        angleFolder.add(
            this.control.angle,
            'min',
            0,
            355,
            5,
        )
        .onFinishChange(onAngleChange);
        angleFolder.add(
            this.control.angle,
            'max',
            this.control.angle.min + 5,
            360,
            5,
        )
        .onFinishChange(onAngleChange);

        // speed
        const speedFolder = this.gui.addFolder('speed');
        const onSpeedChange = () => {
            this.scene.speed(
                this.scene.findEmitter(0),
                this.control.speed,
            );
        }
        speedFolder.add(
            this.control.speed,
            'min',
            5,
            100,
            5,
        )
        .onFinishChange(onSpeedChange);
        speedFolder.add(
            this.control.speed,
            'max',
            this.control.speed.min + 5,
            200,
            5,
        )
        .onFinishChange(onSpeedChange);

        // fixedRotation
        this.gui.add(
            this.control,
            'fixedRotation',
        )
        .onFinishChange((val: boolean) => {
            this.scene.radial(
                this.scene.findEmitter(0),
                val,
            );
        });
    }
}