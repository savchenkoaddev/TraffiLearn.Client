import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiErrorsDictionary } from '../../models/errors/ApiErrors/ApiErrorsDictionary';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  toastr = inject(ToastrService);

  handleHttpError(error: HttpErrorResponse): void {
    switch (error.status) {
      case HttpStatusCode.NotFound:
        this.processClientError(error);
        break;
      case HttpStatusCode.BadRequest:
        this.processClientError(error);
        break;
      case HttpStatusCode.TooManyRequests:
        this.toastr.error('Забагато запитів.', 'Помилка');
        break;
      case HttpStatusCode.InternalServerError:
        this.toastr.error('Помилка сервера.', 'Помилка');
        break;
      default:
        this.toastr.error('Невідома помилка.', 'Помилка');
        break;
    }
  }

  private processClientError(error: HttpErrorResponse): void {
    let apiError = error.error;

    if (Array.isArray(apiError.errors)) {
      this.toastr.error('Помилка валідації.', 'Помилка');
    } else {
      let description: string = ApiErrorsDictionary.getErrorDescription(apiError.errors.code)
      this.toastr.error(description, 'Помилка');
    }
  }
}
