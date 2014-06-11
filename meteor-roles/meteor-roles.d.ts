// Type definitions for meteor-roles v1.2.6
// Project: https://github.com/alanning/meteor-roles/
// Definitions by: Jason Parekh <https://github.com/jasonparekh>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../meteor/meteor.d.ts" />

interface IMeteorRoles {
    GLOBAL_GROUP: string;

    addUsersToRoles(users:string[], roles:string[], group?:string): void;
    addUsersToRoles(users:string[], roles:string, group?:string): void;
    addUsersToRoles(users:{_id:string}[], roles:string[], group?:string): void;
    addUsersToRoles(users:{_id:string}[], roles:string, group?:string): void;
    addUsersToRoles(users:string, roles:string[], group?:string): void;
    addUsersToRoles(users:string, roles:string, group?:string): void;

    createRole(role:string);

    deleteRole(role:string);

    getAllRoles():IMeteorCursor;

    getRolesForUser(user:string, group?:string);
    getRolesForUser(user:IMeteorUser, group?:string);

    getUsersInRole(role:string, group?:string);
    getUsersInRole(role:string[], group?:string);

    removeUsersFromRoles(users:string, roles:string, group?:string);
    removeUsersFromRoles(users:string[], roles:string, group?:string);
    removeUsersFromRoles(users:IMeteorUser, roles:string, group?:string);
    removeUsersFromRoles(users:IMeteorUser[], roles:string, group?:string);
    removeUsersFromRoles(users:string, roles:string[], group?:string);
    removeUsersFromRoles(users:string[], roles:string[], group?:string);
    removeUsersFromRoles(users:IMeteorUser, roles:string[], group?:string);
    removeUsersFromRoles(users:IMeteorUser[], roles:string[], group?:string);

    setUserRoles(users:string, roles:string, group?:string);
    setUserRoles(users:string[], roles:string, group?:string);
    setUserRoles(users:IMeteorUser, roles:string, group?:string);
    setUserRoles(users:IMeteorUser[], roles:string, group?:string);
    setUserRoles(users:string, roles:string[], group?:string);
    setUserRoles(users:string[], roles:string[], group?:string);
    setUserRoles(users:IMeteorUser, roles:string[], group?:string);
    setUserRoles(users:IMeteorUser[], roles:string[], group?:string);

    userIsInRole(user:string, roles:string, group?:string);
    userIsInRole(user:IMeteorUser, roles:string, group?:string);
    userIsInRole(user:string, roles:string[], group?:string);
    userIsInRole(user:IMeteorUser, roles:string[], group?:string);
}

declare var Roles:IMeteorRoles;

