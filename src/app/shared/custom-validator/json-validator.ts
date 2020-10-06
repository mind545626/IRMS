import {AbstractControl, ValidationErrors} from "@angular/forms";

/**
 * 驗證是否為Json格式
 * @returns {(control:AbstractControl)=>(ValidationErrors|null)}
 * @constructor
 */
export function JsonValidator(control: AbstractControl): ValidationErrors | null {
    try {
        JSON.parse(control.value);
    } catch (e) {
        return { jsonInvalid: true };
    }

    return null;
};
