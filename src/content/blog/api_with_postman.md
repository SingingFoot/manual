---
title: Create API documentation with Postman
description: Create API documentation with Postman
published: 2023-08-07
---

[Documentation](https://www.postman.com/api-platform/api-documentation/) is an important part of any collection or API. Good documentation helps the people who use your collection to understand what it does and how each request works. And comprehensive API documentation lets your consumers know what endpoints are available and how to interact with them.

Once you've generated documentation for your collection or API, users can [view the documentation](/docs/publishing-your-api/viewing-documentation/) in Postman. By default your documentation is private, so you must share a collection or API with others before they can access it. If you're creating a public API, you can [publish your documentation](/docs/publishing-your-api/publishing-your-docs/) to make it publicly available to anyone with a web browser.

## Contents

* [Documenting a collection](#documenting-a-collection)
    * [Documenting gRPC and WebSocket collections](#documenting-grpc-and-websocket-collections)
* [Generating API documentation](#generating-api-documentation)
    * [Viewing schema documentation](#viewing-schema-documentation)
    * [Creating new documentation for an API](#creating-new-documentation-for-an-api)
    * [Adding existing documentation to an API](#adding-existing-documentation-to-an-api)
    * [Editing API documentation](#editing-api-documentation)
    * [Deleting API documentation](#deleting-api-documentation)
* [Associating environments with documentation](#associating-environments-with-documentation)

## Documenting a collection

Postman automatically generates basic documentation for any collection you create. [View the documentation](/docs/publishing-your-api/viewing-documentation/) for details about all of the requests in your collection, along with sample code in various client languages. Request details include the method, authorization type, URL, headers, request and response structures, and examples. In addition, the documentation displays all key-value pairs for request parameters, headers, and bodies.

To make your documentation even more valuable to users, [add descriptions](/docs/publishing-your-api/authoring-your-documentation/) to the items in your collection. Any descriptions you add are automatically included in the documentation for your collection.

To add a description to a collection or folder, do the following:

1. Select **Collections** in the sidebar, and then select a collection or a folder.
1. Enter a description in the **Overview** tab. To learn more about using Postman's built-in editing tools, see [Writing your docs](/docs/publishing-your-api/authoring-your-documentation/).
1. Select outside of the editor to save your new content.

<img alt="Documenting a collection" src="https://assets.postman.com/postman-docs/v10/documentation-overview-tab-v10.jpg" >

To add a description to a request, do the following:

1. Select **Collections** in the sidebar, and then select a request.
1. Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> in the right sidebar.
1. Enter a description in the right sidebar. To learn more about using Postman's built-in editing tools, see [Writing your docs](/docs/publishing-your-api/authoring-your-documentation/).
1. Select outside of the editor to save your new content.

<img alt="Documenting a request" src="https://assets.postman.com/postman-docs/v10/documentation-pane-v10.jpg" width="600px">

> You can also edit descriptions when viewing the complete documentation for a collection. Select a collection in the sidebar, then select **View complete documentation** in the **Overview** tab. From here, you can add a description to any item in the collection.

### Documenting gRPC and WebSocket collections

Collections with gRPC or WebSocket requests use a different format than collections with HTTP requests. You can view documentation and add descriptions for gRPC or WebSocket requests. You can also add a description on the collection's **Overview** tab, but you can't view or edit documentation for the full collection. Learn more about [documenting gRPC requests](/docs/sending-requests/grpc/grpc-request-interface/#the-right-sidebar) or [documenting WebSocket requests](/docs/sending-requests/websocket/websocket/#documenting-requests).

## Generating API documentation

The API Builder provides one place to view, create, and manage all of your API's documentation. Postman automatically generates API docs for any OpenAPI 2.0 or 3.0 definition. You can also add detailed documentation to any API by generating a collection from the API or by adding a copy of an existing collection.

### Viewing schema documentation

If you are [designing an API](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) based on the OpenAPI 2.0 or 3.0 specification, Postman automatically creates documentation based on your API definition.

The API documentation includes complete API, path, and operation information, such as authentication methods, parameters, request bodies, response bodies and headers, and examples. The documentation also includes information for various data models, such as required attributes, default, minimum, and maximum values, and other constraints.

To view the documentation for an OpenAPI 2.0 or 3.0 API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, under **Definition**, select **View schema documentation**.

<img alt="Viewing schema documentation" src="https://assets.postman.com/postman-docs/v10/documentation-view-schema-docs-v10-16.jpg" />

### Creating new documentation for an API

To generate a new collection for API documentation, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, next to **Collections**, select **+** and select **Generate from definition**.
1. Change any settings to customize the new collection.
1. Select **Generate Collection**.

The new collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, select the collection and select **View complete documentation**.

<img alt="Generating new API documentation" src="https://assets.postman.com/postman-docs/v10/documentation-generate-api-docs-v10-16.jpg" />

### Adding existing documentation to an API

To use an existing collection for API documentation, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, next to **Collections**, select **+** and select **Copy existing collection**.
1. Select an available collection and select **Copy Collection**.

The copy of the collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, select the collection and select **View complete documentation**.

<img alt="Adding existing API documentation" src="https://assets.postman.com/postman-docs/v10/documentation-add-api-docs-v10-16.jpg" />

> When you add a collection, an independent copy of the collection is added to the API. The copy in the API will no longer be in sync with the original. If you move or delete an API, any collections contained in the API are moved or deleted with it.

### Editing API documentation

You can add to your API documentation collections from the API Builder.

To edit a documentation collection for an API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, select a collection and select **View complete documentation**.
1. Enter a description for any item. To learn more about using Postman's built-in editing tools, see [Writing your docs](/docs/publishing-your-api/authoring-your-documentation/).
1. Select outside of the editor to save your new content.

> Schema documentation can't be edited directly. Instead, [edit your API's definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) and then select **Save**. Postman automatically updates the API docs to reflect the latest changes to your definition.

<img alt="Editing API documentation" src="https://assets.postman.com/postman-docs/v10/documentation-editing-api-docs-v10-16.jpg" />

### Deleting API documentation

To delete a documentation collection from an API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection and select **Delete**.

## Associating environments with documentation

An [environment](/docs/sending-requests/managing-environments/) is a set of related [variables](/docs/sending-requests/variables/) you can use in Postman requests. You can also refer to variables when [writing descriptions](/docs/publishing-your-api/authoring-your-documentation/) in a collection. In each case, the initial value of the variable is automatically populated in the documentation.

Anyone using your collection will be able to view the variables in the documentation if the associated environment is also shared with them. For public documentation, you can select an environment during the [publishing process](/docs/publishing-your-api/publishing-your-docs/). Publishing an environment makes it available to anyone [viewing public documentation](/docs/publishing-your-api/viewing-documentation/).

To use an environment variable in your documentation, do the following:

1. [Create a new environment](/docs/sending-requests/managing-environments/#creating-environments) if one doesn't already exist.
1. Make the environment active by selecting it in the [environment dropdown list](/docs/sending-requests/managing-environments/#selecting-an-active-environment).
1. If needed, [add a new variable](/docs/sending-requests/managing-environments/#adding-environment-variables) to the environment.
1. Add a [reference to the variable](/docs/sending-requests/variables/#accessing-variables) to requests or descriptions in your collection.

<img alt="Referencing a variable" src="https://assets.postman.com/postman-docs/v10/documentation-add-variable-v10-16.jpg" width="566px">

> If someone imports a collection using the **Run in Postman** button from your documentation, they will also import the environment and any associated variables. The initial values for variables are published in your documentation, so make sure they don't contain any sensitive data.

Postman [automatically generates documentation](/docs/publishing-your-api/documenting-your-api/) for every collection you create. The documentation includes all of the requests in your collection, along with examples, authorization details, and example code.

To help your teammates ([or the world](/docs/publishing-your-api/publishing-your-docs/)) better understand what you're building, add detailed descriptions to your collection and the items in it. Use the Postman editor to view how your content will look as you write it. Or use the classic Markdown editor to structure and format your descriptions using [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). All of your descriptions are included in the documentation for your collection.

> You can also add a description when [creating a new request](/docs/sending-requests/requests/#creating-requests).

## Contents

* [Adding descriptions to your documentation](#adding-descriptions-to-your-documentation)
    * [Writing descriptions in the Postman editor](#writing-descriptions-in-the-postman-editor)
    * [Writing descriptions in Markdown](#writing-descriptions-in-markdown)
    * [Selecting a default documentation editor](#selecting-a-default-documentation-editor)
    * [Adding descriptions to parameters and headers](#adding-descriptions-to-parameters-and-headers)
* [Including authorization details](#including-authorization-details)
* [Including examples](#including-examples)
* [Adding links](#adding-links)
* [Adding images](#adding-images)
* [Embedding videos](#embedding-videos)
* [Finding help and inspiration](#finding-help-and-inspiration)

## Adding descriptions to your documentation

Use descriptions to tell people who use your collection more about what your collection does and the purpose of each request. Structure your descriptions with headings and add content such as text, tables, images, and links.

To add a description to a collection or folder, do the following:

1. Select **Collections** in the sidebar, and then select a collection or a folder.
1. Enter a description in the **Overview** tab. You can write your description using the visual [Postman editor](#writing-descriptions-in-the-postman-editor) or the classic [Markdown editor](#writing-descriptions-in-markdown). Both are compatible, so feel free to switch between the two editors as you work.

    <img alt="Switching editors" src="https://assets.postman.com/postman-docs/v10/documentation-switch-editor-menu-v10-16.jpg" width="660px">

1. Select outside of the editor to save your new content. If you ever need to make changes, you can edit the description again.

To add a description to a request, do the following:

1. Select **Collections** in the sidebar, and then select a request.
1. Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> in the right sidebar.
1. Enter a description in the right sidebar. You can write your description using the visual [Postman editor](#writing-descriptions-in-the-postman-editor) or the classic [Markdown editor](#writing-descriptions-in-markdown). Both are compatible, so feel free to switch between the two editors as you work.

    <img alt="Switching editors" src="https://assets.postman.com/postman-docs/v10/documentation-switch-editor-icon-v10-16.jpg" width="600px">

1. Select outside of the editor to save your new content. If you ever need to make changes, you can edit the description again.

> To give users even more details about requests in your collection, add descriptions to the request [parameters and headers](#adding-descriptions-to-parameters-and-headers).

### Writing descriptions in the Postman editor

To write a description using rich text editing tools, select the **Postman editor** option. You can use the Postman editor to write a description without having to write any Markdown code. Use the tools on the toolbar to work with text and other content, as you would in a typical word processor. Or use common keyboard shortcuts to format text, like **⌘+B** or **Ctrl+B** to make text bold.

<img alt="Postman editor" src="https://assets.postman.com/postman-docs/v10/documentation-use-postman-editor-v10-16a.jpg" width="600px">

**View the tooltips to get help as you work.** Hold your cursor over an item on the toolbar to see a description of the tool and the associated keyboard shortcut. If all of the tools aren't visible on the toolbar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

<img alt="Postman editor toolbar" src="https://assets.postman.com/postman-docs/v10/documentation-wysiwyg-toolbar-v10-16.jpg" width="600px">

**Create tables without Markdown.** No need to fuss with Markdown code to get your tables to work. To add a table, select the **Table** tool. To add or remove columns or rows, or to delete the table, select a cell and then select the shortcut menu.

<img alt="Postman editor table shortcuts" src="https://assets.postman.com/postman-docs/v10/documentation-wysiwyg-table-tool-v10-16.jpg" width="600px">

**The Postman editor understands Markdown syntax.** If you're comfortable using Markdown, enter any standard [Markdown code](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to format text. For example, enter `#` followed by a space to start a new heading, or enter `---` to add a horizontal line. To reuse documentation that's already written in Markdown, copy the existing Markdown code and paste it into the editor to instantly format it.

> If you copy content from the Postman editor, the content will retain its formatting when you paste it into another application like a word processor or an email.

<img alt="Using Markdown shortcuts" src="https://assets.postman.com/postman-docs/v10/documentation-trigger-markdown-v10-16.gif" width="600px">

### Writing descriptions in Markdown

To write a description using Markdown, select the **Classic Markdown editor** option. Use standard [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to create your content:

* Structure content with headings, lists, and tables
* Format text with bold, emphasis, and blockquotes
* Add images, links, and code blocks

As you work, select the **Preview** tab to review how your documentation will appear and to make sure the formatting is correct. To continue editing, select the **Markdown** tab.

> Leave a blank line before and after [block elements](https://daringfireball.net/projects/markdown/syntax#block) (such as headings, paragraphs, and lists) to avoid any formatting issues.

<img alt="Markdown editor" src="https://assets.postman.com/postman-docs/v10/documentation-use-markdown-editor-v10-16.jpg" width="600px">

### Selecting a default documentation editor

You can choose the default editor you want to use for editing documentation descriptions in Postman. When you edit a description, Postman will switch to your preferred editor. (You can still switch between the Postman and Markdown editors while editing a description.)

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and then select **Settings**.
1. Under **User Interface**, select a **Default documentation editor** (Postman editor or Markdown editor).

### Adding descriptions to parameters and headers

Add descriptions to parameters and headers to help others understand and use the requests in your collection. Open a request and enter the description in the box next to the key-value pair.

![Parameter descriptions](https://assets.postman.com/postman-docs/v10/documentation-parameter-descriptions-v10-16.jpg)

The parameter and header descriptions are visible to people who have access to your collection or anyone viewing your [published documentation](/docs/publishing-your-api/publishing-your-docs/). The descriptions appear in the documentation along with the request, next to the parameter or header name.

> All key-value pairs are included in your documentation even if their checkboxes aren't selected. Use the description to note which parameters and headers are required and which are optional. Anyone using your collection can choose which key-value pairs to include when sending requests or [generating code snippets](/docs/sending-requests/generate-code-snippets/).

## Including authorization details

Your documentation automatically includes the type of authorization required to access your endpoints. The authorization details appear below the collection description and also below each request in your documentation.

If you [specify authorization details](/docs/sending-requests/authorization/specifying-authorization-details/) for the collection, those authorization requirements are inherited by every request in the collection. If one of your endpoints requires a different authorization type, open the request and [change the authorization details](/docs/sending-requests/authorization/specifying-authorization-details/#inheriting-authorization). The changes are reflected in your documentation.

<img alt="Authorization type in documentation" src="https://assets.postman.com/postman-docs/v10/documentation-authorization-v10-16.jpg" width="600px">

## Including examples

Examples are paired requests and responses that show your endpoints in action. Any [examples you add to a collection](/docs/sending-requests/examples/#adding-an-example) are automatically included in the documentation. For each request, your documentation shows the example code snippets as well the example response body and headers.

> Examples are displayed when you [view the complete documentation](/docs/publishing-your-api/viewing-documentation/#viewing-documentation-for-a-collection) for a collection or when you [view published documentation](/docs/publishing-your-api/viewing-documentation/#viewing-public-documentation).

<img alt="Examples in documentation" src="https://assets.postman.com/postman-docs/v10/documentation-including-examples-v10-16.jpg" width="708px">

## Adding links

Use links to direct users to your repository, web site, or other online resources.

* To add a link using the Postman editor, select the **Link** tool. Paste or enter the URL and the link text, and then select **Add**. (If you need to change the link later, select it and then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.)

    <img alt="Adding a link" src="https://assets.postman.com/postman-docs/v10/documentation-link-tool-v10-16.jpg" width="600px">

* To add a link using the Markdown editor, use the following syntax:

    ```md
    [link text to display](https://your-link-url.com)
    ```

## Adding images

Images liven up your documentation and help your ideas come across with more clarity. You can upload an image file from your computer or embed an image that's hosted online.

### Uploading an image

To upload an image using the Postman editor, select the **Image** tool and select **Browse**. Select the image you want to upload and select **Open**. The Postman editor supports GIF, JPG, PNG, and SVG formats. The maximum supported image size is 5 MB.

> You can also upload an image by copying and pasting an image into the Postman editor, or by dragging an image file into the Postman editor.

<img alt="Uploading an image" src="https://assets.postman.com/postman-docs/v10/documentation-upload-image-v10-16.jpg" width="600px">

### Embedding an image

Your image must be hosted online (for example, on a website) before you can embed it in your documentation.

* To embed an image using the Postman editor, select the **Image** tool and select **Embed URL**. Paste or enter the URL of the image, and then select **Embed**.

    <img alt="Embedding an image" src="https://assets.postman.com/postman-docs/v10/documentation-embed-image-v10-16.jpg" width="600px">

* To embed an image using the Markdown editor, use the following syntax:

    ```md
    ![image alt text](https://your-image-location.com)
    ```

### Editing images

You can change an image after uploading or embedding it:

* To change an image in the Postman editor, first select it and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">. Then upload or embed a new image.

* To change an image in the Markdown editor, edit the Markdown code as needed.

* To resize an image, select the image in the Postman editor and drag the resize handles. You can also specify a new value for `width` in the Markdown editor.

* To add or edit a caption, select the image in the Postman editor and enter a caption below the image.

### Image storage limits

If you are on a [Postman Free plan](https://www.postman.com/pricing/) and aren't part of a team, the total size of your uploaded images is limited to 20 MB. If you are part of a team ([free or paid plans](https://www.postman.com/pricing/)), the total size of your team's uploaded images is limited to 100 MB.

To check how much storage you're using, go to your [billing dashboard](http://go.postman.co/billing) and select **Resource Usage**. The amount of space used by uploaded images and files appears under **Storage Usage**. To upgrade your available storage, contact [Postman support](https://www.postman.com/support/).

> When you reach 90% of your storage limit and above, you will get a warning each time you try to add an image. To learn more about the resources included with your Postman plan and what happens when you reach your usage limits, go to [About resource usage](/docs/administration/resource-usage/).

## Embedding videos

You can embed videos hosted on YouTube or Vimeo in your documentation. Your documentation displays a preview of the video, and users can select the preview to start playback without leaving Postman.

> You can't embed a video hosted on a service other than YouTube and Vimeo, but you can [add a link](#adding-links) to the video.

* To embed a video using the Postman editor, select the **Video** tool. Paste or enter the URL of the video, and then select **Embed**.

    <img alt="Embedding a video" src="https://assets.postman.com/postman-docs/v10/documentation-embed-video-10-16.jpg" width="600px">

* To embed a video using the Markdown editor, use the following syntax:

    ```md
    <video src="https://youtube.com/embed/1xTTNGacuaQ" alt="Set Up Live Collections" width="340" height="170"></video>
    ```

> You can't play videos when editing documentation. Select **Save**, and then select the video to start playback.

You can change a video after uploading or embedding it:

* To change a video in the Postman editor, first select it and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">. Then embed a new video.

* To change a video in the Markdown editor, edit the Markdown code as needed.

* To resize a video preview, select the video in the Postman editor and drag the resize handles. You can also specify a new value for `width` in the Markdown editor.

* To add or edit a caption, select the video in the Postman editor and enter a caption below the video.

## Finding help and inspiration

**Need some help using Markdown?** Check out the Postman [Markdown demo collection](https://documenter.postman.com/view/4630964/S1LsXVJy) to learn how Markdown is formatted in published documentation. Select the **Run in Postman** button to add the demo collection to your workspace and view the Markdown code.

![Markdown demo collection](https://assets.postman.com/postman-docs/v10/documentation-markdown-demo-v10-16.jpg)

**Looking for some documentation inspiration?** Browse through the Public API Network to find examples of great documentation created in Postman.

1. Open the [Public API Network](https://www.postman.com/explore) page or select **Explore** in the Postman header.
1. Select **Collections** or **Workspaces** in the left pane.

    ![Public API Network page](https://assets.postman.com/postman-docs/v10/documentation-explore-docs-v10-16.jpg)

1. Select a collection or workspace to access documentation written by others who are part of the Public API Network.

    ![Documentation example](https://assets.postman.com/postman-docs/v10/documentation-docs-example-v10-16.jpg)

Publishing your documentation makes it publicly available to anyone with the link to the documentation and a web browser. Publish your documentation to help people around the world learn how to use your collection or interact with your Public API.

Public documentation automatically includes details for each request or endpoint in the published collection, along with sample code in various client languages. As you update your collection, the published documentation automatically stays in sync with  your latest changes. There's no need to publish the documentation again after making changes.

> Your public documentation includes the **Run in Postman** button so users can interact with your collection or API directly in Postman. For an example, check out the [Postman API documentation](https://documenter.getpostman.com/view/12959542/UV5XjJV8) which was published from a Postman Collection.

## Contents

* [Making your documentation public](#making-your-documentation-public)
* [Sharing your public docs](#sharing-your-public-docs)
* [Changing publication settings](#changing-publication-settings)
* [Unpublishing your docs](#unpublishing-your-docs)

## Making your documentation public

To publish [documentation](/docs/publishing-your-api/documenting-your-api/), it must be part of a collection. You can publish documentation for any collections that you created or have permission to edit.

> You can't publish a collection that has [gRPC requests](/docs/sending-requests/grpc/grpc-request-interface/#the-right-sidebar) or [WebSocket requests](/docs/sending-requests/websocket/websocket/#documenting-requests). Also, you can't publish a collection that has been added to an API. Instead, you can [publish a version of the API](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/). A published version includes the API's definition and collections.

To publish the documentation for a collection, do the following:

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection, and then select **View Documentation**.
1. Select **Publish** at the upper right.

    <img alt="Publish documentation" src="https://assets.postman.com/postman-docs/documentation-publish-button-v9.jpg" width="753px">

1. Change any publication settings as needed:

    * **Version** - If the collection has multiple versions, select the versions to publish. (You can no longer create versions or releases for collections in Postman v10, but you can [publish versions of an API](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).)
    * **Environment** - Select an [environment](/docs/publishing-your-api/documenting-your-api/#associating-environments-with-documentation) to publish environment variables with your documentation. *The initial values of all variables are published with your documentation, so make sure they don't contain sensitive information such as passwords or tokens.*
    * **Custom domain** - Select a [custom domain](/docs/publishing-your-api/custom-doc-domains/) where you want to publish your documentation.
    * **Default layout** - Select a layout style for your documentation. **Double column** displays sample code in a column next to the documentation. **Single column** displays sample code inline beneath each request.
    * **Default Theme** - Select a light or dark theme for your documentation. You can also choose to use the system theme. Your documentation will use the selected theme by default, but users can switch between themes.
    * **Logo** - By default, public documentation uses your [team logo](/docs/administration/team-settings/#editing-your-team-profile). You can also select a custom logo for each theme (light and dark):

        * To add a logo, select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> and select **Upload**. Drag and drop an image file, or select an image file. Drag the handles to adjust the part of the image you want to display, then select **Upload**.
        * To delete a logo, select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> and select **Delete**.

        > You can use different logos for each collection you publish. Logos must be 2 MB or less in size and must be in JPEG or PNG format. The logo can be any aspect ratio (square or rectangle.)

    * **Colors** - You can customize the colors for each theme (light and dark):

        * **Header background** - Specify a color (hex format) for the header at the top of the documentation window.
        * **Code background** - Specify a color (hex format) for sample code blocks.
        * **Highlight** - Specify a color (hex format) for hyperlinks.

    * **SEO** - You can add metadata to your documentation to make it more discoverable on the web:

        * **Title** - Add a title for your documentation (60 characters or less). The title will appear in web searches and in browser tabs.
        * **Description** - Add a brief description to let users know what your documentation is about (160 characters or less). You can also add relevant keywords to help users find your documentation when searching the web.

1. To preview your documentation using the current settings, select **Preview Documentation**. The preview automatically updates as you change settings.

    > If Postman detects a possibly sensitive token or other secret, a warning appears at the top of the preview window. Postman also highlights the token so you can remove it from the documentation before publishing.

1. When you're finished changing settings, publish your documentation:

    * **Postman Free, Basic, and Professional plans** - You can optionally select a [public workspace](/docs/collaborating-in-postman/using-workspaces/public-workspaces/) to move the collection to. This will make the collection discoverable on the [Public API Network](https://www.postman.com/explore). When you're ready, select **Publish**. You can view your public documentation at the provided URL.

    * **Postman Enterprise plans** - Your [Community Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) controls the Postman elements your team makes public. Enter a note for your Community Manager and select **Request Publish**. When your request is approved, you will receive an email notification with a link to the public documentation. To retract your publish request, [change the pending publication settings](#changing-publication-settings) and select **Retract request**.

![Published documentation example](https://assets.postman.com/postman-docs/v10/documentation-published-docs-v10.jpg)

## Sharing your public docs

To share your public documentation, share the published URL with your team members, other users, or the community. If you have forgotten the URL of your published documentation, you can get it at any time.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection with published docs, and then select **View Documentation**.
1. Select **Published** at the upper right, and then select **Copy published link**.

<img alt="Copy published link" src="https://assets.postman.com/postman-docs/documentation-published-link-v9.jpg" width="753px">

If your collection is in a public workspace, others can search for and find your collection on the [Public API Network](https://www.postman.com/explore), along with its documentation. If you haven't already moved your collection to a public workspace, you can do so at any time by [changing the publication settings](#changing-publication-settings).

> By sharing your documentation with the Public API Network, you increase the visibility of your API to a wider range of consumers in the Postman community. Learn more about [public workspaces](/docs/collaborating-in-postman/using-workspaces/public-workspaces/).

## Changing publication settings

Change the publication settings for your documentation to update your documentation's look or make your collection public. You can change the publication settings at any time after publishing your documentation.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection with published docs, and then select **View Documentation**.
1. Select **Published** at the upper right, and then select **Edit published documentation**.

    <img alt="Edit published documentation" src="https://assets.postman.com/postman-docs/documentation-edit-published-docs-v9.jpg" width="753px">

1. Select **Edit settings**, and then change the [publication settings](#making-your-documentation-public) as needed.
1. Select **Save and republish**.

## Unpublishing your docs

If you no longer want your documentation to be publicly available, you can unpublish it.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection with published docs, and then select **View Documentation**.
1. Select **Published** at the upper right, and then select **Edit published documentation**.
1. Select **Unpublish**.

If you change your mind, you can [publish your documentation](#making-your-documentation-public) again at any time.

<img alt="Unpublish documentation" src="https://assets.postman.com/postman-docs/v10/documentation-unpublish-v10.jpg">