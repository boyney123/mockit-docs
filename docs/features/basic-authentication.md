---
id: basic-authentication
title: Basic Authentication
---

By default authentication is disabled, and any route can be accessed. If you want to enable [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) then you need to enable it on the `settings` screen.

![Authentication feature switch](/img/docs/global-settings/authentication-switch.png "Authentication feature switch")

Once turned on, ALL routes will have basic authentication enabled. You will need to send the correct headers to get access to the APIS.

`Authorization: Basic dGVzdDp0ZXN0`

_This is the example header you will need to get access as test:test_

The default username and password can be seen in the `configuration/routes.json` file.
