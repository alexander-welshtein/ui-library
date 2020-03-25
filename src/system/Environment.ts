import Theme from "./Theme"

export default class Environment {
    private static currentTheme: Theme

    static setTheme(theme: Theme) {
        this.currentTheme = theme
    }

    static getThemeClass(name: string) {
        return name + "-" + this.currentTheme.name
    }
}
