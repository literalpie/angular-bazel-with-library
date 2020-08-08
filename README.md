# Angular Bazel With Library
This is an example project of an Angular workspace with a library and application.

note: only building currently works

## angular-oauth2-oidc error

This branch shows an error that happens when the angular-oauth2-oidc library is used. The app builds fine, but when you serve with ibazel, there is an error. The error does not exist if a version of the library is packaged that doesn't include the ngfactory files.
