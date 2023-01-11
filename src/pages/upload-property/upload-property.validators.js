import { Validators, createFormValidation } from '@lemoncode/fonk';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';
import { isNumber } from '@lemoncode/fonk-is-number-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';

const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Introduce un email válido',
      },
    ],
    phone: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: new RegExp(/^(6|7|8|9)\d{8}$/) },
        message: 'Introduce un número telefónico válido',
      },
    ],

    price: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isNumber.validator,
        message: 'Introduce solo números',
      },
    ],
    province: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    saleTypes: [
      {
        validator: arrayRequired.validator,
        message: 'Debe seleccionar al menos una opción',
      },
    ],
    city: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    address: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    squareMeter: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isNumber.validator,
        message: 'Introduce solo números',
      },
    ],
    rooms: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isNumber.validator,
        message: 'Introduce solo números',
      },
    ],
    bathrooms: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isNumber.validator,
        message: 'Introduce solo números',
      },
    ],
    locationUrl: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isUrl.validator,
        message: 'Introduce una URL correcta',
      },
    ],
    newFeature: [
      {
        validator: arrayRequired.validator,
        message: 'Debe introducir alguna caracterísca',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
