# tmpl-widget-n-console
This project is the template for building a website with a client side, a server side and a widget component.

## How to run

For production mode
```
$ docker-compose up --build -d
```

After building, following links are available:

* **Server side(API)** `http://localhost:23360/`
* **Client side for admin panel** `http://localhost:23361/`
* **Directly access the widget**`http://localhost:23362/`
* **Embed the widget to static html file** `http://localhost:23362/sample-index.html`

## Server Side(API)

The code path is `console/server`. The server side is built with Python and [Flask](http://flask.pocoo.org/).

#### Sample Code

In this sample code, it supports 3 API endpoints:

* `GET /`: The root endpoint. It displays the welcome message.
* `GET /v1.0/reverse_echo?s=string`: For demo usage, it will reverse the given string.

#### How to update

You should create your feature folder in `xai` folder. Put in all your routes, model and anything else into this feature folder. Ex, You have a feature called `chatbot`, you should create `xai/chatbot` folder which contains `xai/chatbot/model.py`, `xai/chatbot/route.py`, etc.

#### How to run without docker

You will need Python3 to run this code without docker.

```
$ cd console/server
$ pip install -r requirements.txt
$ python run.py
```

It will starts server which listen to port `23360` by default.

## Client Side

The code path is `console/client`. The client side is built with [React](https://reactjs.org/), [React Router](https://reacttraining.com/react-router/web/guides/philosophy), [create-react-app](https://github.com/facebook/create-react-app) and [Mobx](https://mobx.js.org/).

#### Sample Code

It now supports two level menu. Please refer to [React Router](ttps://reacttraining.com/react-router/web/guides/philosophy) for more router sample.

In SubPage1, it demos how to combine MobX and React to render the page. When you type a string in the input box and hit `Send`, react collects the input value and send to the server(`console/client/src/components/SamplePage/index.js:24`). While waiting for the server response, React replaces the `Send` button with a `reversing` string. After receiving the server response, react shows the server response at the bottom.

#### How to update

For each level 1 page, you should create a folder under `console/client/src/components`. And create arbitrary sub-folders if need.

Note, all the `*.less` will automatically compile into `*.css` files. Remember to modify the `less` file instead of the `css` files.

#### How to run without docker

```
$ cd console/client
$ yarn install
$ yarn start
```

These commands will open a [create-react-app](https://github.com/facebook/create-react-app) app which listens to port `3000` by default.

## Widget Component

If you need to inject your component into other pages, you can use this widget.

The code path is `widget`. The client side is built with [React](https://reactjs.org/) and [create-react-app](https://github.com/facebook/create-react-app). Of course, you can also install the Mobx and React router if needed.

The widget is a workable React app. It can run on a standalone page. After compiling, the script will generate a third-party.js (`widget/build/static/thrid-party.js`) file. By importing this script at any HTML page, the script injects our app into the target page.

#### How to develope

Do whatever you like just like you're developing the regular react page.

But keep few things in mind:

* Do not use the general css or js naming, ex:  `button`, `Page`. Or you will crash the injected page. Best practice is always to add a prefix to anything. ex `xai-chatbot-button`, `xai-page-button`.

* The code size (css+js) directly impacts the inject speed. So keeps everything as small as possible.

#### How to deploy

```
$ yarn build
```

This command will compile files into `widget/build`. Then inject following script into your target page.

```
<script type="text/javascript">
  window.XOTOURS_AI_FUNBO = window.XOTOURS_AI_FUNBO || {}
  window.XOTOURS_AI_FUNBO.userId = "userID XXXXX"
</script>
<script src="static/thrid-party.js"></script>
```

That's all. For the sample injection, please refer to file `widget/build/sample-index.html`.
