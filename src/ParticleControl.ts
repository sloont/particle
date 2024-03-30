export default class ParticleControl {
    private _lifeBase: number = 1000;
    private _deathOpacityBase: number = 1;
    private _dimensions: {
        width: number;
        height: number;
    } = {
        width: 4,
        height: 4,
    };
    private _emitZone: {
        width: number;
        height: number;
    } = {
        width: 0,
        height: 0,
    };
    private _emitFrequency: number = 10;
    private _duration: number = 0;
    private _angle: {
        min: number;
        max: number;
    } = {
        min: 0,
        max: 360,
    };
    private _speed: {
        min: number;
        max: number;
    } = {
        min: 50,
        max: 100,
    };
    private _fixedRotation: boolean = false;
    private _configDirty: boolean = true;

    constructor() {

    }

    get lifeBase() {
        return this._lifeBase;
    }
    set lifeBase(val: number) {
        if (!isNaN(val) && val > 0) {
            this._lifeBase = val;
        }
    }

    get deathOpacityBase() {
        return this._deathOpacityBase;
    }
    set deathOpacityBase(val: number) {
        if (
            !isNaN(val) &&
            val >= 0 &&
            val <= 1
        ) {
            this._deathOpacityBase = val;
        }
    }

    get dimensions() {
        return this._dimensions;
    }
    set dimensions({ width, height }) {
        if (!isNaN(width) && width > 0) {
            this._dimensions.width = width;
        }

        if (!isNaN(height) && height > 0) {
            this._dimensions.height = height;
        }
    }

    get emitZone() {
        return this._emitZone;
    }
    set emitZone({ width, height }) {
        if (!isNaN(width) && width > 0) {
            this._emitZone.width = width;
        }

        if (!isNaN(height) && height > 0) {
            this._emitZone.height = height;
        }
    }

    get emitFrequency() {
        return this._emitFrequency;
    }
    set emitFrequency(val: number) {
        if (!isNaN(val) && val > 0) {
            this._emitFrequency = val;
        }
    }

    get duration() {
        return this._duration;
    }
    set duration(val: number) {
        if (!isNaN(val)) {
            this._duration = val;
        }
    }

    get angle() {
        return this._angle;
    }
    set angle({ min, max }) {
        if (
            !isNaN(min) &&
            !isNaN(max) &&
            min > 0 &&
            max > min &&
            max <= 360
        ) {
            this._angle.min = min;
            this._angle.max = max;
        }
    }

    get speed() {
        return this._speed;
    }
    set speed({ min, max }) {
        if (
            !isNaN(min) &&
            !isNaN(max) &&
            min > 0 &&
            max > min
        ) {
            this._speed.min = min;
            this._speed.max = max;
        }
    }

    get fixedRotation() {
        return this._fixedRotation;
    }
    set fixedRotation(val: boolean) {
        this._fixedRotation = val;
    }
}