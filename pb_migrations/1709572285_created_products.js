/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4qgbyuq5cjl8x75",
    "created": "2024-03-04 17:11:25.431Z",
    "updated": "2024-03-04 17:11:25.431Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yf3wwotq",
        "name": "title",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "opk6gxoj",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 200,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sjx3ticr",
        "name": "price",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 99999,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "a7fmnvso",
        "name": "img",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4qgbyuq5cjl8x75");

  return dao.deleteCollection(collection);
})
