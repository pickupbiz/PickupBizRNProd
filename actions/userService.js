import http from "./httpService";

const apiEndpoint = "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    name: user.name,
    mobile: user.mobile,
    email: user.username,
    password: user.password,
    CategoryId: user.CategoryId,
    latitude: user.latitude,
    longitude: user.longitude,
    subscriptionId: user.subscriptionId,
    collectionName: user.collectionName,
    isAdmin: user.isAdmin,
    isPrimaryAdmin: user.isPrimaryAdmin,
    isSuperAdmin: user.isSuperAdmin
  });
}
