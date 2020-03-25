import HttpConfig from "./HttpConfig"

/**
 * Defines the main functionality of interaction with the server.
 */
export default class HttpProvider {
    private readonly url: string

    constructor(config: HttpConfig) {
        this.url = "http://" + config.host + ":" + config.port + "/"
    }

    protected get(route: string): Promise<Response> {
        return fetch(this.buildUrl(route), {
            method: "GET"
        })
    }

    protected put(route: string, content?: any): Promise<Response> {
        return fetch(this.buildUrl(route), {
            method: "PUT",
            body: content
        })
    }

    protected post(route: string, content?: any): Promise<Response> {
        return fetch(this.buildUrl(route), {
            method: "POST",
            body: content,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    protected delete(route: string): Promise<Response> {
        return fetch(this.buildUrl(route), {
            method: "DELETE"
        })
    }

    /**
     * Creates a request based on the URL and route
     */
    private buildUrl(route: string): string {
        return this.url + route
    }
}
