---
id: global-settings
title: Global Settings
---

You can configure MockIt to enable extra features like The Chaos Monkey, Cors, Authentication and more...

## CORS

By default `cors` will be enabled your API, letting other applications not hosted on the same domain call the API without any issues. You can enable/disable CORS using the `settings` screen.

![Cors feature switch](/img/docs/global-settings/cors-switch.png "Cors feature switch")

## Authenication

By default authentication is disabled, and any route can be accessed. If you want to enable [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) then you need to enable it on the `settings` screen.

![Authentication feature switch](/img/docs/global-settings/authentication-switch.png "Authentication feature switch")

Once turned on, ALL routes will have basic authentication enabled. You will need to send the correct headers to get access to the APIS.

`Authorization: Basic dGVzdDp0ZXN0`

_This is the example header you will need to get access as test:test_

The default username and password can be seen in the `configuration/routes.json` file.

## Chaos Monkey

The Chaos monkey feature was inspired by [https://principlesofchaos.org/](https://principlesofchaos.org/).

When enabled all your routes on your API will be "flakey". Sometimes they will return what you expect but other times they might be down, delayed or even return strange things.

This feature was designed to help developers code against non-perfect situations (like we can see in production environments). It's important we write our code to scale and handle all types of API responses. This small feature hopefully can help you along your way to get there.

### How to enable the monkey

If you click on `Settings` you can see all the global features. Scross to the `Chaos Monkey` feature and enable it. The server and UI will refresh and the monkey will be enabled.

![Monkey feature switch](/img/docs/global-settings/monkey-switch.png "Monkey feature switch")

Once he is enabled he will cause disruption's on your APIS.

![Monkey feature UI](/img/docs/global-settings/monkey.png "Monkey feature UI")
