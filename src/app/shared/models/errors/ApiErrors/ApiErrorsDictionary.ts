export class ApiErrorsDictionary {
    static readonly apiErrors: { [key: string]: string } = {
        'User.AlreadyRegistered': 'Користувач з такою поштою або іменем вже зареєстрований.'
    }

    static getErrorDescription(code: string): string {
        return this.apiErrors[code];
    }
}