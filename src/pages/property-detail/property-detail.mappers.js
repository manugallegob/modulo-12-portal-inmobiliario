export const mapPropertyDetailFromApiToVm = (property, equipmentsList) => {
  return {
    price: `${property.price.toLocaleString()} €`,
    title: property.title,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    notes: property.notes,
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    images: property.images,
    equipmentIds: mapEquipmentsList(equipmentsList, property.equipmentIds),
    mainFeatures: property.mainFeatures,
    locationUrl: property.locationUrl,
  };
};

const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitación';
};

const mapEquipmentsList = (equipmentsApi, propertyEquipments) => {
 let equipments =  propertyEquipments.map(equipment => equipmentsApi.find(element => element.id == equipment).name);
 return equipments;
}
