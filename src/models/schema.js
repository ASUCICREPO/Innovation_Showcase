export const schema = {
    "models": {
        "Projects": {
            "name": "Projects",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "projectCategory": {
                    "name": "projectCategory",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "customer": {
                    "name": "customer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cicTeam": {
                    "name": "cicTeam",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "projectName": {
                    "name": "projectName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "projectType": {
                    "name": "projectType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "awsService": {
                    "name": "awsService",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "img_Url": {
                    "name": "img_Url",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "demo_Url": {
                    "name": "demo_Url",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Projects",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "codegenVersion": "3.3.6",
    "version": "e59fea9af79336bede146e10de25a411"
};