export class ApiErrorsDictionary {
    static readonly apiErrors: { [key: string]: string } = {
        // Register errors
        'User.AlreadyRegistered': 'Користувач з такою поштою або іменем вже зареєстрований.',
        'Username.Empty': 'Ім\'я користувача не може бути порожнім.',
        'Username.TooLong': 'Ім\'я користувача занадто довге.',
        'Username.InvalidFormat': 'Ім\'я користувача має містити тільки літери та цифри.',

        // Login errors
        'User.NotFound': 'Користувача не знайдено.',
        'User.InvalidCredentials': 'Неправильні дані для входу.',
        'User.EmailNotConfirmed': 'Пошту не підтверджено.',

        // Login and Register errors
        'Email.Empty': 'Адрес пошти не може бути порожнім.',
        'Email.TooLong': 'Адрес пошти занадто довгий.',
        'Email.InvalidFormat': 'Неправильний формат пошти.',

    }

    static getErrorDescription(code: string): string {
        return this.apiErrors[code];
    }
}