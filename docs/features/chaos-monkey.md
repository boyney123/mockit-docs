---
id: chaos-monkey
title: Chaos Monkey
---

The Chaos monkey feature was inspired by [https://principlesofchaos.org/](https://principlesofchaos.org/).

When enabled all your routes on your API will be "flaky". Sometimes they will return what you expect but other times they might be down, delayed or even return strange things.

This feature was designed to help developers code against non-perfect situations (like we can see in production environments). It's important we write our code to scale and handle all types of API responses. This small feature hopefully can help you along your way to get there.

### How to enable the monkey

If you click on `Settings` you can see all the global features. Cross to the `Chaos Monkey` feature and enable it. The server and UI will refresh and the monkey will be enabled.

![Monkey feature switch](/img/docs/global-settings/monkey-switch.png "Monkey feature switch")

Once he is enabled, he will cause disruption on your APIs.

![Monkey feature UI](/img/docs/global-settings/monkey.png "Monkey feature UI")
