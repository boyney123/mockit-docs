---
id: routes
title: Adding, editing and delete routes
---

MockIt allows you to add, edit and delete routes. This short guide will explain how.

## Adding routes

When adding a new route click on the button "Add Route".

You will be shown a modal dialog which allows you to configure your new route.

![Adding a new route](/img/docs/routes/add-route.png "Adding a new route")

As you can see in the photo above, you can change your route name by entering in the first input field.
You can then use the dropdowns under the name to configure the HTTP method, status code and add a delay if wanted.

You can also use the text area to enter your JSON response.

Clicking `Save changes` will save the changes to the configuration file and the server will be updated.

## Editing routes

If you want to edit a route, click the `Edit` button seen on the dashboard.

![Editing a new route](/img/docs/routes/edit.png "Editing a new route")

Clicking `Edit` will show the route model where you can edit anything you like on the route.

## Deleting routes

If you want to delete a route, click `Delete` button seen on the dashboard.

![Deleting a new route](/img/docs/routes/edit.png "Deleting a new route")

This will show a configuration dialog.

![Confirmation on deleting route](/img/docs/routes/delete-confirm.png "Confirmation on deleting route")

If you click on the `Delete` button the route will be removed and the server will be updated to reflect the new change.

## Disabling a route

Disabling a route will stop any response from the server for that route. To disable a route click `edit` on the route.

![Disable a route](/img/docs/routes/disable.png "Disable a route")

Then click on the `disable route` checkbox seen in the modal.
