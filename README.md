# kiosk-app

Install all deps using NPM or yarn

To run:

```
npm run dev-server
yarn run dev-server
```

Some potential 3rd party modules?

* [Swipeable Carousel](http://react-responsive-carousel.js.org/)
* [Route Transitions](https://github.com/trungdq88/react-router-page-transition)

Will run on http://localhost:8080/

Colours are:

Gold: #f9c922

Red: #e74c3c

Blue: #3498db

Members JSON object...

```
{
  "name": "",
  "year": "",
  "bio": "",
  "image": "",
  "video": "",
  "member_type": "",
  "show_with_inductees": true,
  "memorabilia": [
    {
      "title": "",
      "year": "",
      "image": "",
      "description": ""
    },
    {
      "title": "",
      "year": "",
      "image": "",
      "description": ""
    }
  ]
}
```

Categories JSON object

```
[
  {
    "title": "string",
    "icon": "string",
    "image": "string"
  },
  {
    "title": "string",
    "icon": "string",
    "image": "string"
  },
  {
    // and so on as required...
  }
]
```
