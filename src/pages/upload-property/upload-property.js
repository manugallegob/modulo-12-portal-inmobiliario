import {
  onSubmitForm,
  onUpdateField,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers/element.helpers';
import {
  getSaleTypeList,
  getEquipmentsList,
  getProvincesList,
  uploadNewProperty,
} from './upload-property.api';
import {
  formatCheckboxId,
  setCheckboxList,
  setOptionList,
  onAddFeature,
  onRemoveFeature,
  onAddImage,
} from './upload-property.helpers';
import { onAddFile } from '../../common/helpers/element.helpers';
import { formValidation } from './upload-property.validators';
import { mapUploadPropertyFromVmToApi } from './upload-property.mappers';
import { history } from '../../core/router/history';

Promise.all([getSaleTypeList(), getEquipmentsList(), getProvincesList()]).then(
  ([saleTypeIdsList, equipmentsList, provincesList]) => {
    setCheckboxList(saleTypeIdsList, 'saleTypes');
    setEvents(saleTypeIdsList, newProperty.saleTypes);
    setCheckboxList(equipmentsList, 'equipments');
    setEvents(equipmentsList, newProperty.equipmentsIds);
    setOptionList(provincesList, 'province');
  }
);

let newProperty = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypes: [],
  province: '',
  city: '',
  address: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  newFeature: [],
  equipmentsIds: [],
  images: [],
};

const setEvents = (list, array) => {
  list.forEach((element) => {
    const id = formatCheckboxId(element);
    onUpdateField(id, (event) => {
      const value = event.target.value;
      if (event.target.checked) {
        array.push(value);
        array.sort();
      } else {
        let index = array.indexOf(value);
        if (index > -1) {
          array.splice(index, 1);
          array.sort();
        }
      }
    });
  });
};

onUpdateField('title', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    title: value,
  };
  formValidation.validateField('title', newProperty.title).then((result) => {
    onSetError('title', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    notes: value,
  };
  formValidation.validateField('notes', newProperty.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    email: value,
  };
  formValidation.validateField('email', newProperty.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('phone', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    phone: value,
  };
  formValidation.validateField('phone', newProperty.phone).then((result) => {
    onSetError('phone', result);
  });
});

onUpdateField('price', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    price: value,
  };
  formValidation.validateField('price', newProperty.price).then((result) => {
    onSetError('price', result);
  });
});

onUpdateField('saleTypes', () => {
  formValidation
    .validateField('saleTypes', newProperty.saleTypes)
    .then((result) => {
      onSetError('saleTypes', result);
    });
});

onUpdateField('address', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    address: value,
  };
  formValidation
    .validateField('address', newProperty.address)
    .then((result) => {
      onSetError('address', result);
    });
});

onUpdateField('city', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    city: value,
  };
  formValidation.validateField('city', newProperty.city).then((result) => {
    onSetError('city', result);
  });
});

onUpdateField('province', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    province: value,
  };
  formValidation
    .validateField('province', newProperty.province)
    .then((result) => {
      onSetError('province', result);
    });
});

onUpdateField('squareMeter', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    squareMeter: value,
  };
  formValidation
    .validateField('squareMeter', newProperty.squareMeter)
    .then((result) => {
      onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    rooms: value,
  };
  formValidation.validateField('rooms', newProperty.rooms).then((result) => {
    onSetError('rooms', result);
  });
});

onUpdateField('bathrooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    bathrooms: value,
  };
  formValidation
    .validateField('bathrooms', newProperty.bathrooms)
    .then((result) => {
      onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    locationUrl: value,
  };
  formValidation
    .validateField('locationUrl', newProperty.locationUrl)
    .then((result) => {
      onSetError('locationUrl', result);
    });
});

onUpdateField('newFeature', () => {
  validateFieldNewFeature();
});

onSubmitForm('insert-feature-button', () => {
  AddAndRemoveFeature('newFeature', newProperty.newFeature);
  validateFieldNewFeature();
});

const validateFieldNewFeature = () => {
  formValidation
    .validateField('newFeature', newProperty.newFeature)
    .then((result) => {
      onSetError('newFeature', result);
    });
};

const AddAndRemoveFeature = (id, objectProperty) => {
  const element = document.getElementById(id);
  const value = element.value;
  onAddFeature(value);
  objectProperty.push(value);
  const elementClear = document.getElementById(`delete-${value}`);
  elementClear.onclick = (e) => {
    let index = objectProperty.indexOf(value);
    objectProperty.splice(index, 1);
    onRemoveFeature(value);
    validateFieldNewFeature();
  };
};

onAddFile('add-image', (value) => {
  onAddImage(value);
  newProperty.images.push(value);
});

onSubmitForm('save-button', () => {
  formValidation.validateForm(newProperty).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      const ApiUploadProperty = mapUploadPropertyFromVmToApi(newProperty);
      console.log(ApiUploadProperty);
      uploadNewProperty(ApiUploadProperty).then((response) => {
        history.back();
      });
    }
  });
});
