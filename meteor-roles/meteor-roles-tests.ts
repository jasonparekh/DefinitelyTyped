/// <reference path="meteor-roles.d.ts" />

var userId = '123';
var user1:IMeteorUser = undefined, user2:IMeteorUser = undefined;

Roles.addUsersToRoles(userId, 'admin');
Roles.addUsersToRoles(userId, ['view-secrets'], 'example.com');
Roles.addUsersToRoles([user1, user2], ['user','editor']);
Roles.addUsersToRoles([user1, user2], ['glorious-admin', 'perform-action'], 'example.org');
Roles.addUsersToRoles(userId, 'admin', Roles.GLOBAL_GROUP);

Roles.createRole('admin');

Roles.deleteRole('admin');

Roles.getAllRoles().fetch();

Roles.getRolesForUser(userId);
Roles.getRolesForUser(userId, 'group');
Roles.getRolesForUser(user1);
Roles.getRolesForUser(user2, 'group');

Roles.getUsersInRole('admin', 'group');
Roles.getUsersInRole(['admin'], 'group');

Roles.removeUsersFromRoles(user1, 'admin');
Roles.removeUsersFromRoles([user1, user2], ['editor']);
Roles.removeUsersFromRoles([user1, user2], ['editor', 'user']);
Roles.removeUsersFromRoles(user1, ['user'], 'group1');

Roles.setUserRoles(user1, 'admin');
Roles.setUserRoles([user1, user2], ['editor']);
Roles.setUserRoles([user1, user2], ['editor', 'user']);
Roles.setUserRoles(user1, ['user'], 'group1');

// non-group usage
Roles.userIsInRole(user, 'admin');
Roles.userIsInRole(user, ['admin','editor']);
Roles.userIsInRole(userId, 'admin');
Roles.userIsInRole(userId, ['admin','editor']);

// per-group usage
Roles.userIsInRole(user,   ['admin','editor'], 'group1');
Roles.userIsInRole(userId, ['admin','editor'], 'group1');
Roles.userIsInRole(userId, ['admin','editor'], Roles.GLOBAL_GROUP);

// this format can also be used as short-hand for Roles.GLOBAL_GROUP
Roles.userIsInRole(user, 'admin');