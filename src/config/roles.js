const allRoles = {
  Worker: ['viewCategory', 'manageMessages'],
  Admin: ['all'],
};

const workerTypes = ['Farmer', 'Other'];
const workerStatus = ['Active', 'Pending', 'Reviewing', 'Deactivated'];

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
  workerTypes,
  workerStatus,
};
