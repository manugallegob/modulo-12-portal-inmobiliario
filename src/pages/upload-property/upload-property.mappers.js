export const mapUploadPropertyFromVmToApi = (property) => {
  return {
    title: property.title,
    notes: property.notes,
    email: property.email,
    phone: property.phone,
    price: Number(property.price),
    saleTypeIds: property.saleTypes,
    address: property.address,
    city: property.city,
    provinceId: property.province,
    squareMeter: Number(property.squareMeter),
    rooms: Number(property.rooms),
    bathrooms: Number(property.bathrooms),
    locationUrl: property.locationUrl,
    mainFeatures: property.newFeature,
    equipmentIds: property.equipmentsIds,
    images: property.images,
  };
};
