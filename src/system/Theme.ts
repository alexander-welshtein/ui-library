export default class Theme {
    private readonly _name: string

    constructor(name: string) {
        this._name = name
    }

    get name(): string {
        return this._name
    }
}
