import GUI from "lil-gui";
import ParticleControl from "./ParticleControl";
import DemoScene from "./DemoScene";

export default class ParticleGui {
    gui: GUI;
    control: ParticleControl;
    constructor(scene: DemoScene, control: ParticleControl) {
        this.gui = new GUI({
            title: 'control',
        });
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
        );

        // deathOpacityBase
        this.gui.add(
            this.control,
            'deathOpacityBase',
            0,
            1,
            0.05,
        );

        // dimensions
        const dimensionsFolder = this.gui.addFolder('dimensions');
        dimensionsFolder.add(
            this.control.dimensions,
            'width',
            0,
            32,
            1,
        );
        dimensionsFolder.add(
            this.control.dimensions,
            'height',
            0,
            32,
            1,
        );

        // emitZone
        const emitZoneFolder = this.gui.addFolder('emitZone');
        emitZoneFolder.add(
            this.control.emitZone,
            'width',
            0,
            400,
            5,
        );
        emitZoneFolder.add(
            this.control.emitZone,
            'height',
            0,
            300,
            5,
        );

        // emitFrequency
        this.gui.add(
            this.control,
            'emitFrequency',
            10,
            1000,
            10,
        );

        // duration
        this.gui.add(
            this.control,
            'duration',
            0,
            10000,
            100,
        );

        // angle
        const angleFolder = this.gui.addFolder('angle');
        angleFolder.add(
            this.control.angle,
            'min',
            0,
            355,
            5,
        );
        angleFolder.add(
            this.control.angle,
            'max',
            this.control.angle.min + 5,
            360,
            5,
        );

        // speed
        const speedFolder = this.gui.addFolder('speed');
        speedFolder.add(
            this.control.speed,
            'min',
            5,
            100,
            5,
        );
        speedFolder.add(
            this.control.speed,
            'max',
            this.control.speed.min + 5,
            200,
            5,
        );

        // fixedRotation
        this.gui.add(
            this.control,
            'fixedRotation',
        );
    }
}