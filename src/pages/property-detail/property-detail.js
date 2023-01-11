import {
  getEquipmentsList,
  getPropertyDetail,
  insertContact,
} from './property-detail.api';
import { history } from '../../core/router';
import { setPropertyValues, formOkMessage } from './property-detail.helpers';
import { mapPropertyDetailFromApiToVm } from './property-detail.mappers';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { formValidation } from './property.detail.validators';

const params = history.getParams();
const isID = Boolean(params.id);

if (!isID) {
  console.log(params);
  history.back();
}

Promise.all([getPropertyDetail(params.id), getEquipmentsList()]).then(
  ([propertyDetail, equipamentsList]) => {
    const viewModelPropertyDetail = mapPropertyDetailFromApiToVm(
      propertyDetail,
      equipamentsList
    );
    setPropertyValues(viewModelPropertyDetail);
  }
);

let formData = {
  propertyId: params.id,
  email: '',
  message: '',
};

onUpdateField('email', (event) => {
  const value = event.target.value;
  formData = {
    ...formData,
    email: value,
  };
  formValidation.validateField('email', formData.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('message', (event) => {
  const value = event.target.value;
  formData = {
    ...formData,
    message: value,
  };
  formValidation.validateField('message', formData.email).then((result) => {
    onSetError('message', result);
  });
});

onSubmitForm('contact-button', () => {
  formValidation.validateForm(formData).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      insertContact(formData).then(() => {
        formOkMessage();
      });
    }
  });
});
