import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../../services/api-service';

export const authGuardGuard: CanActivateFn = (route, state) => {
    const _apiService = inject(ApiService);
    const _isLogged = JSON.parse(sessionStorage.getItem('IsLogged') || 'false' );

    if (_isLogged) {
        return true;
    }
    else {
        _apiService.logout();
        return false;
    }
};