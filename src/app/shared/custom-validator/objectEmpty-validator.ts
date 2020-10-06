import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * 檢查Object是否為空值
 * 是空值則回傳{ objectEmptyInvalid: true }
 * @param control
 * @returns {any}
 * @constructor
 */
let hasOwnProperty = Object.prototype.hasOwnProperty;
export function ObjectEmptyValidator(control: AbstractControl): ValidationErrors | null {

    let obj = control.value;

    try {
        obj = JSON.parse(obj);
    } catch (e) {
        return { objectEmptyInvalid: true };
    }

    // null and undefined are "empty"
    if (obj == null) return { objectEmptyInvalid: true };
    if (typeof obj == undefined) return { objectEmptyInvalid: true };

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return null;
    if (obj.length === 0)  return { objectEmptyInvalid: true };

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return null;
    }

    // Assume if it is time
    if (isNaN(Date.parse(obj)) == false)  return null;

    return { objectEmptyInvalid: true };

};
