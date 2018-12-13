export const nodes = {
  "data": {
    "groups": [
      {
        "field": "node_state",
        "list": [],
        "name": "Activity"
      },
      {
        "field": "node_type",
        "list": [],
        "name": "Type"
      }
    ],
    "net_structure": {
      "parent_node": {
        "IP": "192.168.1.1",
        "children": [
          {
            "IP": "192.168.1.2",
            "children": [],
            "node_state": "inactive",
            "node_type": "plink",
            "node_type_desc": "Permalink",
            "port": 8080,
            "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf61"
          },
          {
            "IP": "192.168.1.32",
            "children": [],
            "node_state": "inactive",
            "node_type": "aux",
            "node_type_desc": "Secondary",
            "port": 8080,
            "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf62"
          },
          {
            "Cluster Info": {
              "BGT name": "Tacos",
              "Clusters": "TacoBell AirPlans"
            },
            "IP": "192.168.1.3",
            "children": [
              {
                "IP": "192.168.1.5",
                "children": [],
                "node_state": "inactive",
                "node_type": "plink",
                "node_type_desc": "Permalink",
                "port": 8080,
                "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf64"
              },
              {
                "IP": "192.168.1.6",
                "children": [],
                "node_state": "inactive",
                "node_type": "aux",
                "node_type_desc": "Secondary",
                "port": 8080,
                "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf65"
              }
            ],
            "node_state": "inactive",
            "node_type": "plink",
            "node_type_desc": "Permalink",
            "port": 8080,
            "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf63"
          },
          {
            "IP": "192.168.1.7",
            "children": [
              {
                "IP": "192.168.1.8",
                "node_state": "active",
                "node_type": "plink",
                "node_type_desc": "Permalink",
                "port": 8080,
                "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf67"
              },
              {
                "IP": "192.168.1.9",
                "node_state": "inactive",
                "node_type": "aux",
                "node_type_desc": "Secondary",
                "port": 8080,
                "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf68"
              }
            ],
            "node_state": "inactive",
            "node_type": "aux",
            "port": 8080,
            "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf66"
          },
          {
            "IP": "192.168.1.10",
            "children": [
              {
                "IP": "192.168.1.11",
                "node_state": "inactive",
                "node_type": "plink",
                "node_type_desc": "Permalink",
                "port": 8080,
                "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf6a"
              },
              {
                "IP": "192.168.1.12",
                "node_state": "inactive",
                "node_type": "aux",
                "node_type_desc": "Secondary",
                "port": 8080,
                "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf6b"
              }
            ],
            "node_state": "inactive",
            "node_type": "arbiter",
            "node_type_desc": "Arbiter",
            "port": 8080,
            "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf69"
          }
        ],
        "node_state": "active",
        "node_type": "leader",
        "node_type_desc": "Leader",
        "port": 8080,
        "public_key": "02f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf6c"
      }
    }
  },
  "link": "http://127.0.0.1:8003/peers"
}

export const transactions = {
  "data": [
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xbd3f3824d59d08ba",
        "outputs": [
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "8dd0f4c456d1e8095c96d747f08081ad0fd71e7310d2311f7e94faac81f457606bbb27e29f4d99279175105613c793f0e0e7fdc106ecf02a587cb0f279c9d1bf",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "ccb3bbc9aa758929cb6f3b235d76dea0c3b407b12f0172362364345036e45b402310c741ad9d6807c9add1049c8e32d8b197b3ee2e948ef01f81f8ab068217d9",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFbkJua1lBeXhkWmVMWWM1ZGs4UDNBb25XVk5GNU9vZkdjekxISmxxaG1OdVNCWDFVRlJOZ0cyK2Q4MWNvRkRYeXZFR0wrUm43L2VOYmhpL0VndW05eHc9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndA5oZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x2fbd406c6c7757cf",
        "outputs": [
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "cd73f8db40a514065a6edc58a11f1a4add6bb184cb2d15e7d3c5e70a6f7e845548cac238add1abc3ee55e21b2bc8d2f1bd3efc55372f07afab8ac6a2a5963848",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "8d76fc1585a4989bb1970bdb95d8f259ff6a6bfa0e9cbfd340770cd50526e1d57b602a8649829f445a2b5c798f0dd902bf56d448cd6de508b6c15f6ea83b2f3a",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFbkJua1lBeXhkWmVMWWM1ZGs4UDNBb25XVk5GNU9vZkdjekxISmxxaG1OdVNCWDFVRlJOZ0cyK2Q4MWNvRkRYeXZFR0wrUm43L2VOYmhpL0VndW05eHc9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndApoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f"
        ],
        "nonce": "0xc3c40bf699a9fd67",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f"
        ],
        "payload_sha512": "b5f0d4f95ff8046d09bbe02ae9d9939959e3067075f3184e3e212431026895ab104be52b263a0435ae339aa835dd05380d76c8fd6b91ec4f9dad3e430faec7fe",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "8bfce27b548e05acd5243fc8a17c21e9ed3fcbe3a004a1d8863b13472075b690285298e75f8f904903603d3661ea187ce238927bbdadb9e88652d401ce007471",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRW5CbmtZQXl4ZFplTFljNWRrOFAzQW9uV1ZORjVPb2ZHY3pMSEpscWhtTnVTQlgxVUZSTmdHMitkODFjb0ZEWHl2RUdMK1JuNy9lTmJoaS9FZ3VtOXh3PT1nbnVtX2JndPtAI8zMzMzMzWhncm91cF9pZGNiZ3Q="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f"
        ],
        "nonce": "0x684a0385a0733080",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f"
        ],
        "payload_sha512": "b5f0d4f95ff8046d09bbe02ae9d9939959e3067075f3184e3e212431026895ab104be52b263a0435ae339aa835dd05380d76c8fd6b91ec4f9dad3e430faec7fe",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "873697c1ff6767ffb67311ed89716199884626770c4961fd12aa3653ca14cdb7416028cebd339eb6b6bfbd9b1f08f65fe8436ce99798c056e50e805338c6646c",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRW5CbmtZQXl4ZFplTFljNWRrOFAzQW9uV1ZORjVPb2ZHY3pMSEpscWhtTnVTQlgxVUZSTmdHMitkODFjb0ZEWHl2RUdMK1JuNy9lTmJoaS9FZ3VtOXh3PT1nbnVtX2JndPtAI8zMzMzMzWhncm91cF9pZGNiZ3Q="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f"
        ],
        "nonce": "0x56d4d2cdbb95a755",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f"
        ],
        "payload_sha512": "b5f0d4f95ff8046d09bbe02ae9d9939959e3067075f3184e3e212431026895ab104be52b263a0435ae339aa835dd05380d76c8fd6b91ec4f9dad3e430faec7fe",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "2b2abb876d7d3d877c535a9ff920ac0e215aa8c41a9fc6d336420eda3147a2d7553ded9c28825b4fd04e512ecf376e003f533fdc996b825b9f25125b7fe0155c",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRW5CbmtZQXl4ZFplTFljNWRrOFAzQW9uV1ZORjVPb2ZHY3pMSEpscWhtTnVTQlgxVUZSTmdHMitkODFjb0ZEWHl2RUdMK1JuNy9lTmJoaS9FZ3VtOXh3PT1nbnVtX2JndPtAI8zMzMzMzWhncm91cF9pZGNiZ3Q="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x41fd8abd23d97130",
        "outputs": [
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "87832cfdd01e85b643cc35b4d4bc5cd817846ac940b1b76ddf4743ea7ca87a1791c99893836732e416ce4cd95fc67766b6017169424f1a22ecfca25d9b75f09a",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "349b072ed8df6b41492ddd9f262d336c30f5e3f1e4554275206a0180c007451f3811f2805dcc6f4c0bf8ba769af5cace1e7ef1cdbbbd9858263d8c908e37c980",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFbkJua1lBeXhkWmVMWWM1ZGs4UDNBb25XVk5GNU9vZkdjekxISmxxaG1OdVNCWDFVRlJOZ0cyK2Q4MWNvRkRYeXZFR0wrUm43L2VOYmhpL0VndW05eHc9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x25bcb470b7e7b89d",
        "outputs": [
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "c8fc3d7cc9c46c3d2b731bb98d9b426dd11449401c32596a8efe01f2a801f79d6103751c0ed4d42aaaa2fdd6fed11d6639a68680ce97c4489dd223be810feeef",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "d48b5bd16867925b264737f6ad529d73c283ba92a1166b7987e71465b138b69f75c14be74bcfe35f5585beb770736aedeceb504d03bc7922e3ff208752fb8c49",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFbkJua1lBeXhkWmVMWWM1ZGs4UDNBb25XVk5GNU9vZkdjekxISmxxaG1OdVNCWDFVRlJOZ0cyK2Q4MWNvRkRYeXZFR0wrUm43L2VOYmhpL0VndW05eHc9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f"
        ],
        "nonce": "0x1208a4230411d066",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174337e60dcd4ce52595cfa095b330fbdde679519bcb50e93be4e20013b58cbaa4f"
        ],
        "payload_sha512": "8fed22deedad7514a6d88ceb3ba9b85979b36c4989c20889acc7ac57816812820f8e8d3ff053158db89d990e30683ecc67b2b2d2a8f17f7f6e979c28f1a105e2",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "411ba94cf1ca4e59b3d1b3f75b67e6b9066828207bd23e00b2ca9f308a2d746706ee794d98b8612b2551901d967ef85a15a77f29429a98291f988380090a4026",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRW5CbmtZQXl4ZFplTFljNWRrOFAzQW9uV1ZORjVPb2ZHY3pMSEpscWhtTnVTQlgxVUZSTmdHMitkODFjb0ZEWHl2RUdMK1JuNy9lTmJoaS9FZ3VtOXh3PT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174dcab7c23d45f85d3d31f95e7313fc2023a248d2cf3e54b6131546abe16b52747",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x8bdee66fd7ef75ac",
        "outputs": [
          "e67174dcab7c23d45f85d3d31f95e7313fc2023a248d2cf3e54b6131546abe16b52747",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "f9ab1ab60854670e268a721d36fd154ed9ca5564ff9efe0f4819d25d1b1b86bfef095e6f537b5ff2f29754f48b373b43b26b03f1b1b6c1cae58f041d990b55d3",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "9d7c9e999fcb9354e14c205461970ced7d8397e35389f4603a630b5f030f98291ae224f00a6edc7ea0cc30f75d58707796937bc313974169474633944e31f9bd",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFZzhST0xtK2JiZ0R3c1QvUTlpOTlaL0U5TTRjejBaWk1SZFhnWHFOK1hkOWtJRHRpeTVKM0VLNEV1SHlraGJjNGRoSDg2UjRvNDEyTlFmMTRUZVZTWWc9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174dcab7c23d45f85d3d31f95e7313fc2023a248d2cf3e54b6131546abe16b52747",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x17f9dd339ba2d8ef",
        "outputs": [
          "e67174dcab7c23d45f85d3d31f95e7313fc2023a248d2cf3e54b6131546abe16b52747",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "f9ab1ab60854670e268a721d36fd154ed9ca5564ff9efe0f4819d25d1b1b86bfef095e6f537b5ff2f29754f48b373b43b26b03f1b1b6c1cae58f041d990b55d3",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "7f5ba8ac414fdb5d588013cebc06a2bac41d2f7ec4f18ced3031111f647fb9c42bcb7958f464675baf2553200c5bf84a9179e96ef86d0ab172c3f5c2d42fd077",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFZzhST0xtK2JiZ0R3c1QvUTlpOTlaL0U5TTRjejBaWk1SZFhnWHFOK1hkOWtJRHRpeTVKM0VLNEV1SHlraGJjNGRoSDg2UjRvNDEyTlFmMTRUZVZTWWc9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x1778527f324e0a87",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "0eb21d8c05de098d0fc30ba2a7765ebf3d09de805efc8398247deb9c591f57a9f13da34391d99d9da9ebd0e6965d111e0297695ffc2d529240fe8a2f6eb4a95b",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "b764e9324981e760ccc6bbe8d3d29bd3e75e6026d21f886ab7b3a96da8cc5c9d671474a8d37974be7a25055cea54ca0c1b83289045d46ff048a41cef68ccc2d8",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x31de896943eead6e",
        "outputs": [
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "c741131d0d9a902da75da33fa5c6d03d41c5c002c4082eb23206a7a7744550b33c22347140d76bc3bc53ad7ae03f25785a97f31856e8e5a867bcd353001e8188",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "60da8edaa2a13ae373954452cf5ab26d0762db3b6e539d43708eb353da0e8fd910774d55bbac201b0ffe44d43f0111da90e3ab70fa5fa5a9908a5e2f8fd0c0e3",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFRmh3OXRCL0JJZ0VaSERxZ3lnQ0QwckpIaDdHbjd5amEvSVBBQ1RCM01hdy9WVmpuSm1GbUV6cWpUeTQvekRtUGg4ekU2NnhxTEZwc04xL2lQVDNPK1E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x4532ca180955cda3",
        "outputs": [
          "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "65bd52a7f6bcbd4191708339aa2190f6b838cc20fe315b8481c7da8ed0399cb677be5b773aad8da88dab0fca91c58d185fcb197cc862184d62a8fc9a62f0213a",
        "signer_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9"
      },
      "header_signature": "4adfe6dd0b3056f2de4fc68cbc146268a6e75fd9453e262855a91cb029f423ae1b59cbe29fadaac471299c3fbb6cfb44a1592dcf08fe4ce53109ec54b649b2ed",
      "payload": "p2ROYW1laUJHWF9Ub2tlbmtwcml2YXRlX2tleXhAMjFmYWQxZGI3YzFlNGYzZmI5OGJiMTZmY2ZmNjk0MmI0YjJiOWY4OTAxOTZiODc1NDM5OWViZmQ3NDcxOGRlMXBldGhlcmV1bV9hZGRyZXNzeCoweEZCMkY3Qzg2ODdGNmQ4NmEwMzFEMkRFM2Q1MWY0YzYyZTgzQWRBMjJnbnVtX2JndGY2MDAwMDBpYmd0X3ByaWNlYTFpZGVjX3ByaWNlYTFkVmVyYmRpbml0"
    },
    {
      "header": {
        "batcher_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x18e484334e3d986",
        "outputs": [
          "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "89163265b1818177a1b1ec48b7983eab851cb2c3e2c98926bb92f7edf789067dccd89284a7d49a9459de8f522dfbda21ea3ded7dd74da6d3362593578f12a4d0",
        "signer_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9"
      },
      "header_signature": "ccc9c9675631e35f241b535dedcaa09490f05a641dfbc9d2c96ef995d8ca19ad7e98ac6b1dddad9610ef77a861859bf0315ad59f6d1cc0aa12e5a1e163ec4ce7",
      "payload": "p2ROYW1laUJHWF9Ub2tlbmtwcml2YXRlX2tleXhAMjFmYWQxZGI3YzFlNGYzZmI5OGJiMTZmY2ZmNjk0MmI0YjJiOWY4OTAxOTZiODc1NDM5OWViZmQ3NDcxOGRlMXBldGhlcmV1bV9hZGRyZXNzeCoweEZCMkY3Qzg2ODdGNmQ4NmEwMzFEMkRFM2Q1MWY0YzYyZTgzQWRBMjJnbnVtX2JndGYyMDAwMDBpYmd0X3ByaWNlYTFpZGVjX3ByaWNlYTFkVmVyYmRpbml0"
    },
    {
      "header": {
        "batcher_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x65e46d4c2ac7f0c5",
        "outputs": [
          "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "89163265b1818177a1b1ec48b7983eab851cb2c3e2c98926bb92f7edf789067dccd89284a7d49a9459de8f522dfbda21ea3ded7dd74da6d3362593578f12a4d0",
        "signer_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9"
      },
      "header_signature": "2458ef25a4ac31f8008b880c06917a27501324ed5a5de31a3668a566083264996fdf5a9333f1f1b20a98022ef46926915873828ff8fe2b3d8de52e91c4ea8919",
      "payload": "p2ROYW1laUJHWF9Ub2tlbmtwcml2YXRlX2tleXhAMjFmYWQxZGI3YzFlNGYzZmI5OGJiMTZmY2ZmNjk0MmI0YjJiOWY4OTAxOTZiODc1NDM5OWViZmQ3NDcxOGRlMXBldGhlcmV1bV9hZGRyZXNzeCoweEZCMkY3Qzg2ODdGNmQ4NmEwMzFEMkRFM2Q1MWY0YzYyZTgzQWRBMjJnbnVtX2JndGYyMDAwMDBpYmd0X3ByaWNlYTFpZGVjX3ByaWNlYTFkVmVyYmRpbml0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717498170b84f6db2243ec39413842acc4d2b88f0c1beba7c97c2ea5110382712856",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x691d9c9ec17dd3dc",
        "outputs": [
          "e6717498170b84f6db2243ec39413842acc4d2b88f0c1beba7c97c2ea5110382712856",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "71a22f77cf93cc6b61b7ba6b7d4e9c0aa7727d725f76166b31f057a26f244d3ac5409d0e1c3da85f09bec2d4761fcb8c4f8f79e6d4f7a3cfebca30dfbfacf819",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "0ff6401f5b6080c88dd57da24b423830d9e095e0528339b0b014f6d2ab416b9106a3b0e2d954438ed1e461c2d1d8f6c0d40ff355e5b705eec6bb336a0b9e70d0",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFam9TS25lRld6MVJNaDB2K2xzQ2tXcDZpWlRFQWVGN0paaDlsUDljRjJUZ0dURys4dDQrMXRETmNMRmZBWDZsaG5ydlhBQ2dEYnprQWxvT25iTmNpTVE9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndBgZaGdyb3VwX2lkY2JndA=="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717498170b84f6db2243ec39413842acc4d2b88f0c1beba7c97c2ea5110382712856",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xb99907a319fad1d1",
        "outputs": [
          "e6717498170b84f6db2243ec39413842acc4d2b88f0c1beba7c97c2ea5110382712856",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "e73857ecd611a56eb3b9c5872a04ff78c605fa118fed6ca93e0f00ad53b1dda48d4cb7f8d85fd243491937930afca23a821f977834b9da1d2ff2d9f94a3d398c",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "a7705e7876170687ba5ad5eff8f9118ba288db775ce557470d2ec98d6e2456c777cb0728d6c4a0dd329361dfaa8756128308a61de75347836462e2a9a4366577",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFam9TS25lRld6MVJNaDB2K2xzQ2tXcDZpWlRFQWVGN0paaDlsUDljRjJUZ0dURys4dDQrMXRETmNMRmZBWDZsaG5ydlhBQ2dEYnprQWxvT25iTmNpTVE9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAJoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671740625ca45337385458425ec571426bcdcbbdb66822755989d8fd245b6261461fa",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x2b89581c79fd82d8",
        "outputs": [
          "e671740625ca45337385458425ec571426bcdcbbdb66822755989d8fd245b6261461fa",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "bdaf04c78f5141aad9af1681f2e7a359990e0a1ac968135c679b7fdedce3c87cc62bd9761a61ac8e53d753af16dcd1651f4784bb637cbc43b269bbfeb8218a07",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "8dbfc642b81744cdafaf9984a3e7343135e3b6e0a61f299ed6aa167f1531f92b7e6ba92a195818b9c80420c255c3465f84e0416ccd1d88a4ac8f4da2b5656d22",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFVW90VFZWS2VNU3ppN1B3TklLbUZsdEd2ZzFScG9PQUxFWkI4ajVUY0Z1NVVFZWhqWDhkZ3JwVjloTnNMY01NQWFOYTQvYWRpdHhaU1NrNk43TFBaZUE9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndBgZaGdyb3VwX2lkY2JndA=="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e671740644c9d6a2d54303fd7393bc2506b9e3cbdabbb32c571a5b216895ff921c580a"
        ],
        "nonce": "0x832f29c6a68b3725",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e671740644c9d6a2d54303fd7393bc2506b9e3cbdabbb32c571a5b216895ff921c580a"
        ],
        "payload_sha512": "ed681bd5c210b601bc2a2fea390fa21f99a6ceb12988ee963432a4f1ac2c6afabf0765e7f905df8318e064ddcdf9ff976554d4fb1cefa55eda3daaaf2040f00f",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "4e61c381f32827b8640dfc42763374a4c1446e051fc5d5a3aa05e83b2b812b8334440292da3b7b6f5961671f806cceb0b66d894420baf78559b34bd787a7213e",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRXo5OG1OeC9pNnh4VmVBbkUvRWxOUnB5OTB6L1FyaGlLcUN2UE9tcXlFZEN5NHFlS2w0aVAycWl4dWtIZlR3dEt3aXhFV2lSZ2MwTHRnMWkvK0h3dGpRPT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x1e2a345e3fe750db",
        "outputs": [
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "0b84cc8cf2dcbcf127e98d3bdcda163725a0da9654e322c4e2ed63274ed3953809d5ebaaa87a064d57dec45555c6ac704425dbb1f058f3ac37a45add0e607929",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "bb3395944fb71e483cc35fef88f1ae5da3872bd626e01526ab080318b141f90a6a782db19df02570e0c1feb7807358876c3812c849c5d12df70930ea986a9c48",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFRmh3OXRCL0JJZ0VaSERxZ3lnQ0QwckpIaDdHbjd5amEvSVBBQ1RCM01hdy9WVmpuSm1GbUV6cWpUeTQvekRtUGg4ekU2NnhxTEZwc04xL2lQVDNPK1E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAloZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xbbada812922f1349",
        "outputs": [
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "7a6354dc8797273a9aee6afbae5c22ee3a1009688fd2fd86bcecfbfec8cf12a9c767310e9a819e8ff7196f1e7a970bf823ba0ce8294d1276f2f9f686cd57fb40",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "7601d89a4d9148ffde94130f0239c6a692b60844db181ab738b59214cc228e113ad01ec64ebf9461d13c5436e53aa30c4c79f9480c53a10571749c0dbf22b25d",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFRmh3OXRCL0JJZ0VaSERxZ3lnQ0QwckpIaDdHbjd5amEvSVBBQ1RCM01hdy9WVmpuSm1GbUV6cWpUeTQvekRtUGg4ekU2NnhxTEZwc04xL2lQVDNPK1E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndBh3aGdyb3VwX2lkY2JndA=="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x6e16b5422fe8bda",
        "outputs": [
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "b1142f1d73b3b7f0e6f25f31ea27d8bedf04fdc7e2fd4bb388d1eb112cd08dfb578aac278db5b8db471072b5dab3442ff9495d358c8fdfb47facc0d0dcc0f89d",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "de6c38a58b6a4237f37be8a2451afb13d2ce1cef6608d6f53b43d6bfddc43d1017cf86b9d590315b498645b2446303057ea01d278d7a4907b6c760c7fe58b45a",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFRmh3OXRCL0JJZ0VaSERxZ3lnQ0QwckpIaDdHbjd5amEvSVBBQ1RCM01hdy9WVmpuSm1GbUV6cWpUeTQvekRtUGg4ekU2NnhxTEZwc04xL2lQVDNPK1E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndA9oZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x81723a1c59efd4b3",
        "outputs": [
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "6b801d1a16ebb69c7c4ff269c0d8ebfa5e2ad494b59bb0341518521ac9d4f058907e08183848a999d949168b814709a5b6a595c702212eb6b25e36a0a0eb3a2d",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "4165cf5e1288b126c4bff53a20fbbab5d855e941a2860f1a28e4dd4eef9772cc03ebfcaabe228dbdd80e18843c467050f2fb5a8adb67cc4cda2c5f603884b014",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFRmh3OXRCL0JJZ0VaSERxZ3lnQ0QwckpIaDdHbjd5amEvSVBBQ1RCM01hdy9WVmpuSm1GbUV6cWpUeTQvekRtUGg4ekU2NnhxTEZwc04xL2lQVDNPK1E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndBgyaGdyb3VwX2lkY2JndA=="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671740625ca45337385458425ec571426bcdcbbdb66822755989d8fd245b6261461fa",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xec1ffb3ed2546de2",
        "outputs": [
          "e671740625ca45337385458425ec571426bcdcbbdb66822755989d8fd245b6261461fa",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "cf0ac0772f4be2a79ac0bdc636d159aeea8d1e335333b4a76321d38db08821a5af9358b4b4ce37cf9b8310765cb51205835c9a59b6b69f1058269d0fb716ac50",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "d61d42a6593b069a8772c6d57b3fe7298140d8d597be5ce15228490b6d2e4d2f7e422b9ede3b0607990010fa63b851e69a6e1c5c4758afa48efe57397cba9f39",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFVW90VFZWS2VNU3ppN1B3TklLbUZsdEd2ZzFScG9PQUxFWkI4ajVUY0Z1NVVFZWhqWDhkZ3JwVjloTnNMY01NQWFOYTQvYWRpdHhaU1NrNk43TFBaZUE9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAVoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5"
        ],
        "nonce": "0x92a0f0b5fdcc0c4",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e6717416c241b91ef57c4baa924e657f74a5b8ea92c771c3c3e9dc26b51d4cab7a42f5"
        ],
        "payload_sha512": "827ec1af3ce6600a6975596941de2c1cce3a170ab1d66cad4fd4bf74bfc1e9cb7219935aff3b6e70141cc917859f551ca9753c5faffa389a98794a00a3512c44",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "aa9a1d6e51f130da19eaf74ba3179002a51028850974ea09dd9b479ca141804268605e7a71b690c2ec2c2a6dda0acc317f33edcb3c37ab1fb7cf6c733a4516a3",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUZodzl0Qi9CSWdFWkhEcWd5Z0NEMHJKSGg3R243eWphL0lQQUNUQjNNYXcvVlZqbkptRm1FenFqVHk0L3pEbVBoOHpFNjZ4cUxGcHNOMS9pUFQzTytRPT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e6717404d8026e6273d318484e9b65b8e5d41398fd8cb8d1dbae460078a853b41f6e0b"
        ],
        "nonce": "0x8a11ace6eb034949",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e6717404d8026e6273d318484e9b65b8e5d41398fd8cb8d1dbae460078a853b41f6e0b"
        ],
        "payload_sha512": "b7f571ac4956200e94099d30c4c41680b020d6b67e651e07e6f9588ee3134d639e8817c6708f16a2952185166f5012e134d6b85491c75d8a38ee801d361ce5cd",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "26d690d04419d5bd2cdbd90e210147b2d5d09383b5afd62965973718899aca852d7a62ee95c50318ecd8c31c0116c6ed5c717869ec4a0b6f570ad22a273b1229",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUVCSFVWb1hCMEplVUZXWXg3Zm5EcWtvTVhxUHZWQVcrTkludXd3RTJIUXNEalpTa1FtTVF5bjFuRTdYSnJINkxVQkNkMFh4Y21zRytnQmJBUTFROVd3PT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174308f7d2f199dbaec8b49d98420609a09b50627c72786762e3caad44b1213494a",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xd5d0e632660f893c",
        "outputs": [
          "e67174308f7d2f199dbaec8b49d98420609a09b50627c72786762e3caad44b1213494a",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "988f85e4b5d3f7ea3acbae94e20f8e5e4ab101b8adda81de8a0bd58793adcf1d990be3f645a92814980197c4855f9aa760374c540bd7618b494e2b833195df71",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "eeb5afd42741967beee31781d8658547614685ca52e44ed1e202303cada37b5d108c2dd5d7320c4b0301b687b76a8d22c0610bd6a5ce7006ad5a4c1506517f1f",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFREtnYWFxSzlZQk4zNWJpc2kxUHNWckVDYjhUYWxVZjJHZTVINThPNk5mQTIzMHk4VC9RVWhJazVIWTkzSVUxSGZyZjVFSzhaUENrU1JkRnI1ckhjL0E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndA9oZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174308f7d2f199dbaec8b49d98420609a09b50627c72786762e3caad44b1213494a"
        ],
        "nonce": "0x1e2d8c1fc515ed8e",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174308f7d2f199dbaec8b49d98420609a09b50627c72786762e3caad44b1213494a"
        ],
        "payload_sha512": "80f5b25a1ffae79e4338a8824834e1782d43b7926507d3f9f2e2dbfe83d0742b82bbf81a3a919bb6a8db79621504cff6d1dbb561d12127b41e5ba3ca5b8f17f2",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "bc4e6db4986681461a9db6054e69a743bccd73fc8a6edb00007cd1e12d0191ea00787bc6db01ff89663e8f146f5302d81aed9fab2dbe81376037ed637b0d3e4c",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRURLZ2FhcUs5WUJOMzViaXNpMVBzVnJFQ2I4VGFsVWYyR2U1SDU4TzZOZkEyMzB5OFQvUVVoSWs1SFk5M0lVMUhmcmY1RUs4WlBDa1NSZEZyNXJIYy9BPT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174b4941045b1f9a080bef48acf6c1fa4344b885cf65c6430f835a08ba1e6f94c01"
        ],
        "nonce": "0xb98f31201d5d9289",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174b4941045b1f9a080bef48acf6c1fa4344b885cf65c6430f835a08ba1e6f94c01"
        ],
        "payload_sha512": "82b6eaf22d553b6fc3ebdbc1b7740e919318c8bde26b270208876b0f84d6b934af7bdb3c9c200c87a5327f7e846a2b43f1a0ed4f81ec6dbe6e8abff6642676bb",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "5914239fbc9a7c21de0821d6ed8d5f650d1bd5848f70d0c0f661c1e24a72cfc473eb49491c3d01acf660cd682a7692e3e9aaf03e8a13f1c5ca9f0e0210ab714e",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRWd2bkpvMGxnNGpKbUxCbkVGYmhKeG9NekhvRVRuOHltQjY4ODc4Nkd3Skl6dVJOZm1BUzBNc0ttWWczNGczcGZuS3k3V3RKUnptbE9HNUdiUWFaTy93PT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174dcab7c23d45f85d3d31f95e7313fc2023a248d2cf3e54b6131546abe16b52747",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xe98a9257df1beee5",
        "outputs": [
          "e67174dcab7c23d45f85d3d31f95e7313fc2023a248d2cf3e54b6131546abe16b52747",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "f9ab1ab60854670e268a721d36fd154ed9ca5564ff9efe0f4819d25d1b1b86bfef095e6f537b5ff2f29754f48b373b43b26b03f1b1b6c1cae58f041d990b55d3",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "c513d2d5233faae1c47e0ba5573743968c80153a1401141d6aa56538b7729db55747d1fffa6a4a6f2a5de00f1840565190e2fa4ee658c28ddb0a057d3f1e3044",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFZzhST0xtK2JiZ0R3c1QvUTlpOTlaL0U5TTRjejBaWk1SZFhnWHFOK1hkOWtJRHRpeTVKM0VLNEV1SHlraGJjNGRoSDg2UjRvNDEyTlFmMTRUZVZTWWc9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174b4941045b1f9a080bef48acf6c1fa4344b885cf65c6430f835a08ba1e6f94c01"
        ],
        "nonce": "0xf98c7bceeb93f921",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174b4941045b1f9a080bef48acf6c1fa4344b885cf65c6430f835a08ba1e6f94c01"
        ],
        "payload_sha512": "82b6eaf22d553b6fc3ebdbc1b7740e919318c8bde26b270208876b0f84d6b934af7bdb3c9c200c87a5327f7e846a2b43f1a0ed4f81ec6dbe6e8abff6642676bb",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "7073b70386e1a020947917659c967ccff78bdf936c385fbf720a89fb9c71cac728f2777baebe832aef6f42af0ae265b959ac6c85dc72555dedeba9b1de8146f0",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRWd2bkpvMGxnNGpKbUxCbkVGYmhKeG9NekhvRVRuOHltQjY4ODc4Nkd3Skl6dVJOZm1BUzBNc0ttWWczNGczcGZuS3k3V3RKUnptbE9HNUdiUWFaTy93PT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174dcab7c23d45f85d3d31f95e7313fc2023a248d2cf3e54b6131546abe16b52747"
        ],
        "nonce": "0x7e29e23a6a1307bd",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174dcab7c23d45f85d3d31f95e7313fc2023a248d2cf3e54b6131546abe16b52747"
        ],
        "payload_sha512": "f901ce9e70c26e4482b4c8aa6465450f3bf745eba2a5f21b00edf3661265ec052aa4a6ab7cd02a5bf4fd362345cfcb93a1aa3d5a19a60c2a1259201ebe1a4094",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "e69178371e9126ca55f8c48da0f18f2a5cca75ca5317f5d5b24fcba1d4da0730142a69938cbe163ab78f05e9944e626f6dc65d3342fcbbfbec853bbaf25332f7",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRWc4Uk9MbStiYmdEd3NUL1E5aTk5Wi9FOU00Y3owWlpNUmRYZ1hxTitYZDlrSUR0aXk1SjNFSzRFdUh5a2hiYzRkaEg4NlI0bzQxMk5RZjE0VGVWU1lnPT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671740625ca45337385458425ec571426bcdcbbdb66822755989d8fd245b6261461fa",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xf689231d4e6e9ec",
        "outputs": [
          "e671740625ca45337385458425ec571426bcdcbbdb66822755989d8fd245b6261461fa",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "5e281d765a5be3ae440e14ac07bcb76f42a5c0b69fc754e550db1a104777e1a04c82eb9bc72bbeb316f3d3f501d6b242e1489ea744718956be298e758064140b",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "41579e47ef52dd0177f76dd15b7feb46b2836540de20d91eee607d4f43addb1a2e9c27d7f125ebc72a2058c697d5c5107ba4925ab35dfcfd8e0f557e9fa54ea2",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFVW90VFZWS2VNU3ppN1B3TklLbUZsdEd2ZzFScG9PQUxFWkI4ajVUY0Z1NVVFZWhqWDhkZ3JwVjloTnNMY01NQWFOYTQvYWRpdHhaU1NrNk43TFBaZUE9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAJoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671740625ca45337385458425ec571426bcdcbbdb66822755989d8fd245b6261461fa",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x682f944b398e9ab2",
        "outputs": [
          "e671740625ca45337385458425ec571426bcdcbbdb66822755989d8fd245b6261461fa",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "ac8574de7190ecd36bcc99ba68de248c1c3746e849dcce502debbc40bf09f39160f5647c1bcaba51eb6772ce84370ef9c27188684258dca3b564ff3e0d68775b",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "84273fce6552c550a72bf3945bead740e5e1b92ff12ab18edfeca02bc35670ba22519b39d1478ebf0b09e49b9f9845d22a7f0a9890cfd2aa8f6ce8c9c9d7fada",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFVW90VFZWS2VNU3ppN1B3TklLbUZsdEd2ZzFScG9PQUxFWkI4ajVUY0Z1NVVFZWhqWDhkZ3JwVjloTnNMY01NQWFOYTQvYWRpdHhaU1NrNk43TFBaZUE9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAFoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e671740625ca45337385458425ec571426bcdcbbdb66822755989d8fd245b6261461fa"
        ],
        "nonce": "0x834998fc301fb7d6",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e671740625ca45337385458425ec571426bcdcbbdb66822755989d8fd245b6261461fa"
        ],
        "payload_sha512": "551016a1294398e0c7bcbcd341f5b8543d7d0021ca513d847b90a4204bb105e2501f13b90e9ec0cfd851b9f442e90c0e6f6da981400352646295569b9aabdf4b",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "beaf9e5ad505197e9b1d723131b71cde80ef4ecdb2fe9dd3533b536309a288a6312fb76ee8bd8440380f8058d570c6d04b04835d8e217903440375665b05ba04",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRVVvdFRWVktlTVN6aTdQd05JS21GbHRHdmcxUnBvT0FMRVpCOGo1VGNGdTVVRWVoalg4ZGdycFY5aE5zTGNNTUFhTmE0L2FkaXR4WlNTazZON0xQWmVBPT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671743b3a9c20cbfdbaacbb25b6fa53d44fdb5337918b93af28e5e88ff8ab1ea2be23",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xc9d8985647d1ab54",
        "outputs": [
          "e671743b3a9c20cbfdbaacbb25b6fa53d44fdb5337918b93af28e5e88ff8ab1ea2be23",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "224fc5c669cc9906aa00ad9313ff6e0fe20bcfe9c2883e79d3da3f9037a58421ffebd7e5b785cac48c7453718c29633f16ef3e1ebcc19cf31072bf26df7c221c",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "089ac13f0108eef4e686ef8ccf34a82625dadbee8ccda754ad48bc1bc913744b69f8dce709d7597ebf19d1c65d7641d04069d630063d473f2a7cecbb19c12950",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFU0k4N3drd2p5eVNnMXd3UnVJUjdRMXBsakRoL1MvME9IZXkvN2xrY041SGJZWjV5U3ZvNTVSdlR1UDZRQXRDR1NCSmMzVHQ3TnBRQlY2YWNMczB2a3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAloZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e671743b3a9c20cbfdbaacbb25b6fa53d44fdb5337918b93af28e5e88ff8ab1ea2be23"
        ],
        "nonce": "0x52ed34dbe07ba31",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e671743b3a9c20cbfdbaacbb25b6fa53d44fdb5337918b93af28e5e88ff8ab1ea2be23"
        ],
        "payload_sha512": "2d19db1aee7f6ee775a0ee54ec3038e996f445238f8496b7311b81bfe7fffe78ebc992ecc598c5ca0a2869ca269aef2c5c660523e795776cba1a7e5534114220",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "9b68566ec7dfd17691df24090158b41f7467d3a90019bfc71a076a71b2213b7672ec86b963ae94da2946cfbaf9c31cb1c061f7c0ab1e3d6bdca6197548191adb",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRVNJODd3a3dqeXlTZzF3d1J1SVI3UTFwbGpEaC9TLzBPSGV5Lzdsa2NONUhiWVo1eVN2bzU1UnZUdVA2UUF0Q0dTQkpjM1R0N05wUUJWNmFjTHMwdmt3PT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xed7740873e3b61ef",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "23fa12b6012a01473e010f8c531429765767b54945de5a99d2e5a29cdae130f7c3f83fe0d9c360261d381321f5af238a7d9e5f4c0d58ad23c94c6fee9d81f1ec",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "6255e930b2631e106872e3d9e0d082fa57467bd11e7c4227ae49ee082080527b39a2d6fe9afe878dc1e62c74f4ffd673385420fd862fd9fe125cca500663c42a",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAZoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xbe25d8aa2c68d1e7",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "0ea2151a9828da00e760a3fe504b98821e8e796d562b7b03c828b363730be52d33c59ba1b4bfffaee1fed22f77fdb09e48f4851e99d427e03caa9ae805744636",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "9de0854a42a9409ef96c2a3a7e789caca3fd241c952c8bbee5f8213eedad3e4462ea2a2707884aae4f643fa85c456b42899236220e72e6526a74c7459cbda268",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAxoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x4357c8afa27e4cd5",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "9bb29f757f11ebf5bc81c18389c6085c6774d73d6cbeaee1c1b7e7accb6588a2bef952906aedff68c058aba85ddd4f93bc33eb2ed430b29baad6e41ac6252b14",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "57de2af502b49d06ed9392e8fb65497b5aa7a4dbc071218c0a2784fd24b4a35445a4f48da8f71ef758012654a7f5fea4e85d4b886807578a6bdae2b95948c5a3",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndA9oZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x7abde967ade60275",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "7aa0bdfd311aa31570aa49bea5f3bfb8e7ae562c0602146d5a542f6421f0064199f8f65bd01b72cff8be2a6883c083efefeff9c2c696b687cb33b1527cf33e12",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "f363ae88b1e6d133eee9c73b93a33d74e1f895e3f47e6e434b640bde9f1dedbe7fab15f7a8d7c915ab69036b499b36803cefb575b275c9132fa67054fe82f309",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndBgsaGdyb3VwX2lkY2JndA=="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x72fa7594948427f6",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "b7e4a8a716d1d34d247d5adfb5c51b2a4a9521472b8177aa57d9a9fc5f075514de3c75331f590744218f12533916f62b57adcd59f70c23ff465c60e86fb3d592",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "832a376cf6334a20e8674542c071c20a9799550315153444fc8036edf4dbc0c5457b6d09ac5ce29cf380fc0760ae19a1f49758d7e4777fc0eecb73b02c6f506b",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndBJoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x21833bd10bf42554",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "832879d83f1f17a24471b7696c9063d7d68e33f73faddcfa1eca3457a677153986da9490e58000f7812cc1bcc3c42d0fe8c3823c04dca6b97ce9e1c428549e31",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "a47df959a09715c6ee579942572ccdad01291619fbe668070311e92bb43bd48b4e61377a948f20583d5f4a8d507692108bf51bcce61ec5915375176246f301c1",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndBhkaGdyb3VwX2lkY2JndA=="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xaa0a0621f77ac4d3",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "c696bce4ab0ce215a342742c524e6e8c0fcfb0c719539990ac6dd9c6ffb3738dfa0b65ceb6a0a0f3c7392c4aa33a584782cc6468f6a341c160082e0d6c752b6c",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "9c4baa47025cc1372b39bd8930a26dae37010c0efb4ee02778b8b89e2e75ab6801854aed0559607f03641fddba74ea06c88fc6339a1e3b46fd4cfe52ed84f8b1",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndBFoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xffd54999a3e2e06c",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "f30a50c044037312e2f6c8b3c9307cbd2f3daf889b6cde09e715fbf76675090439e653cc22a1ec9a42c9c03b954fcd8bdd56c1e2407f4a5492908530f5f12e94",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "940ae48b7b32b569dbc68c5e4bc429429a6327489425c6acbe6464ea87a4bb5169537890089cd35daed13a9a441d3be17eb9fe69718fb7966ab883356053b2ab",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x9ed36491046711c9",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "cef2a99a92adbac35a65a68c4e59412f5af807e1a2d2ebc46e0b9ab93ff1e6ace41a5c7411d7f5e832291f2bee867d86f8dc5f3211d365fadf1f11a594dd3b8a",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "b8cee96bff9038f37dcf574208243156282ab516a70ff304ae47fc57a9f52dda53fa743e419eda504b5415fc77b2a95d4b6f2acee491053c753c4cdc79c3570f",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAloZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xadda4c7badd91151",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "5171534b0675d007e6b3742aa754a196e17d8398c2af3ae89e9fa368b3ceefa474ad0d945511cfe45e75afe3a34139077b9b58cf22484a719aa98f4d6a9f4bd4",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "5686eaf09ad0960b858e36d0f775af660c3e3922e0170557124bc7eeb555e25374fa6f7f0f0a96a7683fb8e9bc6c783ad95e43c2709a3586fcc59eecf1c28aac",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndApoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x9e0ad0405207b9f7",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "0eb21d8c05de098d0fc30ba2a7765ebf3d09de805efc8398247deb9c591f57a9f13da34391d99d9da9ebd0e6965d111e0297695ffc2d529240fe8a2f6eb4a95b",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "150ed5f66423d7bd64e7eb5913baec92699aae61d80429c567f4cdb5d37be08071afa13a0f0f83ce355cdda632c619f51ede97d0c2d65f9f39cefc3a4c31f8e5",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x7cae747fb0853bc8",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "0eb21d8c05de098d0fc30ba2a7765ebf3d09de805efc8398247deb9c591f57a9f13da34391d99d9da9ebd0e6965d111e0297695ffc2d529240fe8a2f6eb4a95b",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "e12a72b365279bafb3a2c133f4a1d44013f55f09c21549a03aef53a4b99f51ae5116fae58a36ecf0f666bbd1d8d555f045a114310998e2787a1aa8636d3e9a27",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x4ecd3049bfb13cd4",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "0eb21d8c05de098d0fc30ba2a7765ebf3d09de805efc8398247deb9c591f57a9f13da34391d99d9da9ebd0e6965d111e0297695ffc2d529240fe8a2f6eb4a95b",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "3556788c71a6a0777143396bf816b134906d29cd8337a5d68f21b23d6aeac62f4b83c2b7d7729e577b1401ace82612e95ca34d0c4e809f8215eafa034fdcd25b",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xaf8acf96b7d548a7",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "0eb21d8c05de098d0fc30ba2a7765ebf3d09de805efc8398247deb9c591f57a9f13da34391d99d9da9ebd0e6965d111e0297695ffc2d529240fe8a2f6eb4a95b",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "cd93387f7577f2d567c71fe6cdb57b277f61804883db7c6e7a99cd83e11ab3886262554d28a38243957d2327f10656c79127362df7706b9329822759a2ab1e45",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xe0d0d632cfdfddae",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "f5451f8a7076e9dfab7c5aeda7db4c14dc0d5d0dac9f4f12984656777263ac4351fae26c9a5d64d3e2e7a76980899473304ab2cb8742620bae0e1ba47f69ff9a",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "a077367094f0d3f6c02dd931810beb750a01f860b46dbd80bc4bf2b588a850e94070d82981c08fea943ed7c09db16d28f0e2cb5b940cd9e4e717978cf9a64d09",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndBgeaGdyb3VwX2lkY2JndA=="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x22e38e1cb634649a",
        "outputs": [
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "9bb29f757f11ebf5bc81c18389c6085c6774d73d6cbeaee1c1b7e7accb6588a2bef952906aedff68c058aba85ddd4f93bc33eb2ed430b29baad6e41ac6252b14",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "cb505200b198e037b2f3878f07c48db6658d155fe5a20b035aacc5ed3c08019b00eb90c531c997b1a5908cbd69cc410c081457b4ef66635ecba35e67ee0bea8b",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFR3lvbWpaRDBBTHpweFQ2Z3AzM3U3YTBvaGdNekxHS042TWRLcFhHMXVPanhhMkFET2FGUEZ3ZXFjL1NBS3J6eU9VOUFSTXR2SytZS01EQmVUQlVOd3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndA9oZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555"
        ],
        "nonce": "0x67c32d9d539de9b1",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e671748006311cbf21957d7f150e0b4b787b1a265d495f43ad792e8ea65bfbefd16555"
        ],
        "payload_sha512": "278d26d16253a714a5e1c772aacfe32008167332741719ef1ad5565865150fe2eb66a3e90983c9af4ad214a950224a1deb662a4cec38a37d817d8edbc5c9c51f",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "8677e25ff30cb2f7894eddf941a1818eb786a2e0be8e5eae93274fad950932af1def9bd64f5431d762825f59da0d6a011934d59d0419dcf1942902397199d519",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUd5b21qWkQwQUx6cHhUNmdwMzN1N2Ewb2hnTXpMR0tONk1kS3BYRzF1T2p4YTJBRE9hRlBGd2VxYy9TQUtyenlPVTlBUk10dksrWUtNREJlVEJVTnd3PT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717498170b84f6db2243ec39413842acc4d2b88f0c1beba7c97c2ea5110382712856",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x544a8264a68b68d4",
        "outputs": [
          "e6717498170b84f6db2243ec39413842acc4d2b88f0c1beba7c97c2ea5110382712856",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "e1a77cb9008b605f50fa8b60237b59259a389e3bb9d8c5fdfa8b4ead443aa3787b3ab424dc0442058cb7d647fd279b5a56b2202a7091401bc82266d658b9c601",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "749b77430d96155e15cc27b28177d7e1730514c1e4e76ffe5847146bb33ecbb43d2be9f912e4c5eca17e52f7c8531dc5dfe336880e80c09d035744715e20d21f",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFam9TS25lRld6MVJNaDB2K2xzQ2tXcDZpWlRFQWVGN0paaDlsUDljRjJUZ0dURys4dDQrMXRETmNMRmZBWDZsaG5ydlhBQ2dEYnprQWxvT25iTmNpTVE9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndBZoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e6717498170b84f6db2243ec39413842acc4d2b88f0c1beba7c97c2ea5110382712856"
        ],
        "nonce": "0x247400ef19cceb03",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e6717498170b84f6db2243ec39413842acc4d2b88f0c1beba7c97c2ea5110382712856"
        ],
        "payload_sha512": "266cbe4c163ebf893b0432daa47dffad57b40d5ebd8799b763cd7456c052b25e73c073408a705e938ae491aefe9298060a276260d5c29044056389719ef8f725",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "ac177ca6b68ecb1a564fddbaf4883135bf26598800a94affd6ca6adb20c3749d7fc176fc12c9fd29f87d1a36d81de7c442cabdd0700402be9b5a19f25a78b051",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRWpvU0tuZUZXejFSTWgwditsc0NrV3A2aVpURUFlRjdKWmg5bFA5Y0YyVGdHVEcrOHQ0KzF0RE5jTEZmQVg2bGhucnZYQUNnRGJ6a0Fsb09uYk5jaU1RPT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e671743bf2b848f2874c7a7f3fb23a908e6f5a5a9d41b18f05bcf78fad0a7c7b50dd6c"
        ],
        "nonce": "0x758ba529c2696de8",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e671743bf2b848f2874c7a7f3fb23a908e6f5a5a9d41b18f05bcf78fad0a7c7b50dd6c"
        ],
        "payload_sha512": "0fa0aa744d8ef39074757886a6e47d4acff80b238a9a56e9ee6cddf82e9a24bcca3b60a000baa2e5138bb9ffc2d1a07e7f1f39e520867409ae6222b32e1aa89b",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "c5c7d47d8f216d0962a38eca3a4eb8eeae564689ab7a5f919c31b507d30f08d728b67bdcc2604d44dde7ae6732d4b128de09865cb7682450c23a4e38a5e331fe",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRTErK2xSYW9UVUVIdGdDSHRjbzJhN2cwY2xzZnlEYkdqL0NXNDhJOVNzazJlMzZHRXpPbXNNZTRweEsrQUxVMnFjM0tmUkJTWTVpeGV1MXFHd2RNZDNRPT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174100cea3fa70a70aa34308a4e73c8df1888c83f91f6ad9c817dc0a19d002fb00f"
        ],
        "nonce": "0x7f6b2a8ff3e60469",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174100cea3fa70a70aa34308a4e73c8df1888c83f91f6ad9c817dc0a19d002fb00f"
        ],
        "payload_sha512": "5e38e72986a08b353363b44278f4293d009121df133541a8c997a6144133cbc8502606a33bf3e84d0905ca44a02f108fdfd186b6a728c6d156cfe40ad8a971ce",
        "signer_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9"
      },
      "header_signature": "0aa376c2589f73fcdb191ee0262e7a4d548b802c59a3cd02df14b28c8509814963091f8828938def3b9fd14bf711f89b07c63f186742d36a04f164c90b8e3b1c",
      "payload": "pWROYW1leEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVndG9fYWRkcnhCMDIyZDdkMWUxNzYxM2UwNTFmYmVhZWEyZWE2ZDRhMjViYjc2MWU0MzBkYWM5YWRiYmY3NzcxNzZiNmUzOGMxNGEzZ251bV9iZ3RiMjBoZ3JvdXBfaWRjYW55ZFZlcmJodHJhbnNmZXI="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717479ad5c5f8447c48f2f682031954630979dfdd68f3404883e328dc42f06a6e061",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0xee8206d0af573410",
        "outputs": [
          "e6717479ad5c5f8447c48f2f682031954630979dfdd68f3404883e328dc42f06a6e061",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "ac38a31419f1ad92cf8e73aee8b85c33ef0d116c3bcc89f85a1048eba7135c94b3471fc63081db24935024a31f89476389303b003863bbe89d5f2ca63a619deb",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "8e5ee755e48294a6d943a7776a5327521086c951f6fd9ceef1d1f713f7c5ddd1503cd5557405588355cf4edde3574b67cba824e954c0a3a55e98927dd32e7648",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFbm02bXF0YUtzL2pyRGZMQTR4SFV4cWlJRGlxTGJZL0dOMGY1WmRDSCtCZEJEbDNoOFk4aVZBZWhNMVF1akhkSG9kQnR1V01vcGg5T1pWMTJ6VnE2cHc9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174100cea3fa70a70aa34308a4e73c8df1888c83f91f6ad9c817dc0a19d002fb00f"
        ],
        "nonce": "0xffff9f414f103cde",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174100cea3fa70a70aa34308a4e73c8df1888c83f91f6ad9c817dc0a19d002fb00f"
        ],
        "payload_sha512": "3416bbf0b14433c747c779281d20d233ba2b99043e0d2ff19def1bdd06f44a7bd8d8f429f75104e7ddb5f49cbc506f11e34cfdfd5702df9ac0ed66ddb79bab9c",
        "signer_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9"
      },
      "header_signature": "dd98d92821836ddcec488fdc608cb43f5dee793de08cd7172dedfd82b258aeb71ff08d2666a7050839beba09dfffaa162ff92052d7c748fa68e112bfa9ff7f4f",
      "payload": "pWROYW1leEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVndG9fYWRkcnhCMDIyZDdkMWUxNzYxM2UwNTFmYmVhZWEyZWE2ZDRhMjViYjc2MWU0MzBkYWM5YWRiYmY3NzcxNzZiNmUzOGMxNGEzZ251bV9iZ3RiNzBoZ3JvdXBfaWRjYW55ZFZlcmJodHJhbnNmZXI="
    },
    {
      "header": {
        "batcher_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e6717479ad5c5f8447c48f2f682031954630979dfdd68f3404883e328dc42f06a6e061"
        ],
        "nonce": "0xeeb86fbafbec7950",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e6717479ad5c5f8447c48f2f682031954630979dfdd68f3404883e328dc42f06a6e061"
        ],
        "payload_sha512": "6bffd48b971de4a2f62cb886ed5a1bc3cb823c2357121f835b24aacce7d236d733574c32d8d15280a5a6e636eeb2ff0587cfcc058fa17fc379f4cfc4f9f73359",
        "signer_public_key": "030e4817aa3fc72fde53924f95effa7a15339de5a4b68c296d2f0b62e05dd5766f"
      },
      "header_signature": "92845c2a2e9b48da029fb0bc34bdcecdf83f3160724a5b39f1caab7b35f1e6a35332b8b850703fc3b61be6bcf5a6810f78d6395738d6f69063350060a3a4efcb",
      "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRW5tNm1xdGFLcy9qckRmTEE0eEhVeHFpSURpcUxiWS9HTjBmNVpkQ0grQmRCRGwzaDhZOGlWQWVoTTFRdWpIZEhvZEJ0dVdNb3BoOU9aVjEyelZxNnB3PT1nbnVtX2JndAdoZ3JvdXBfaWRjYmd0"
    },
    {
      "header": {
        "batcher_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174100cea3fa70a70aa34308a4e73c8df1888c83f91f6ad9c817dc0a19d002fb00f"
        ],
        "nonce": "0x1621eb1a045b5d4a",
        "outputs": [
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
          "e67174100cea3fa70a70aa34308a4e73c8df1888c83f91f6ad9c817dc0a19d002fb00f"
        ],
        "payload_sha512": "13a07ddaadd68cb6137ed833ad3371e0e445eff9d9b638208320cf0005694fc65dc7637fff860582ea821cea0706de5802ec8f4b5e767021e8383d3bf330f3ca",
        "signer_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9"
      },
      "header_signature": "bcd9dcb99e468b95bfad9a66ccc331264aec95618318e10dfade7a688ba6f9a02c5f19e08b218ca4c8f4deb8bdb84df7e00fc41113930925d5551e9bfc81c9d9",
      "payload": "pWROYW1leEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVndG9fYWRkcnhCMDIyZDdkMWUxNzYxM2UwNTFmYmVhZWEyZWE2ZDRhMjViYjc2MWU0MzBkYWM5YWRiYmY3NzcxNzZiNmUzOGMxNGEzZ251bV9iZ3RiMzBoZ3JvdXBfaWRjYW55ZFZlcmJodHJhbnNmZXI="
    },
    {
      "header": {
        "batcher_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9",
        "dependencies": [],
        "family_name": "smart-bgt",
        "family_version": "1.0",
        "inputs": [
          "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "nonce": "0x8548ff7467a83d2e",
        "outputs": [
          "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
          "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
        ],
        "payload_sha512": "1ff343d03e1dc8bb6b7d43173c8be2ef3954ef0bb5757ab26cf52aebfde7c7d9e6811f2712c9b927d37c58135a18f3b8b243de71dccb0506d76b61cc4acc8acb",
        "signer_public_key": "02933d68edac451da00e448f700b70cbb994a2b41641a1017608078816f19777c9"
      },
      "header_signature": "5999cc4f321708db96f8ea24748b4b3780817fbb1e285791c0eb6dcda705f9092d118c6cda779fbddbab846a9373defcc2589ce69da266728fa6edb5c5b57f44",
      "payload": "p2ROYW1laUJHWF9Ub2tlbmtwcml2YXRlX2tleXhAMjFmYWQxZGI3YzFlNGYzZmI5OGJiMTZmY2ZmNjk0MmI0YjJiOWY4OTAxOTZiODc1NDM5OWViZmQ3NDcxOGRlMXBldGhlcmV1bV9hZGRyZXNzeCoweEZCMkY3Qzg2ODdGNmQ4NmEwMzFEMkRFM2Q1MWY0YzYyZTgzQWRBMjJnbnVtX2JndGIyMGliZ3RfcHJpY2VhMWlkZWNfcHJpY2VhMWRWZXJiZGluaXQ="
    },
    {
      "header": {
        "batcher_public_key": "02d96ec8c8d093966c2a4d78e36fe99374497f8731dee824b8100a90a24724fb9e",
        "dependencies": [],
        "family_name": "sawtooth_settings",
        "family_version": "1.0",
        "inputs": [
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7"
        ],
        "nonce": "",
        "outputs": [
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7"
        ],
        "payload_sha512": "cbb177addb7c5e279ead90c787f843da56d5fe9d4df0dcea040aee9064f7b3dda0936206be527335e53f3f53c87276db4f18317942354292f9dfa6d7f8d7e98a",
        "signer_public_key": "02d96ec8c8d093966c2a4d78e36fe99374497f8731dee824b8100a90a24724fb9e"
      },
      "header_signature": "6335295fda2f50fcca66a23c4db210a20fe9ab6830c6f467655789ceb76a089732c42b64e69347cfe781144314b486a233f49951297890b414f099de945c559b",
      "payload": "CAESgAEKJnNhd3Rvb3RoLnNldHRpbmdzLnZvdGUuYXV0aG9yaXplZF9rZXlzEkIwMmQ5NmVjOGM4ZDA5Mzk2NmMyYTRkNzhlMzZmZTk5Mzc0NDk3Zjg3MzFkZWU4MjRiODEwMGE5MGEyNDcyNGZiOWUaEjB4MTQ2YTI2ZjA1NWRmODZkMQ=="
    }
  ],
  "head": "95d955a99ef88941f939c3a8640cd9421556461409dac45fc0e6f742b1a148910feb69b4ca1e5f465f047cf5d589a38c21fd915480bc1d9b52720c7aede77273",
  "link": "http://18.222.233.160:8003/transactions?head=95d955a99ef88941f939c3a8640cd9421556461409dac45fc0e6f742b1a148910feb69b4ca1e5f465f047cf5d589a38c21fd915480bc1d9b52720c7aede77273&start=ccb3bbc9aa758929cb6f3b235d76dea0c3b407b12f0172362364345036e45b402310c741ad9d6807c9add1049c8e32d8b197b3ee2e948ef01f81f8ab068217d9&limit=100",
  "paging": {
    "limit": null,
    "start": null
  }
}
export const states = {
  "data": [
    {
      "address": "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
      "data": "CmwKJnNhd3Rvb3RoLnNldHRpbmdzLnZvdGUuYXV0aG9yaXplZF9rZXlzEkIwMmViM2NhMzdiYzFhZTg3NTBhZjZhZTI3NThmMWU2M2VmMDlmZGMwZDM1MDZkMzA1MGM1YzMwZGU1ZWVkZTA0YTU="
    },
    {
      "address": "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
      "data": "oWlCR1hfVG9rZW54+HsibmFtZSI6ICJCR1hfVG9rZW4iLCAidG90YWxfc3VwcGx5IjogIjQwIiwgImdyYW51bGFyaXR5IjogIjEiLCAiZGVjaW1hbHMiOiAiMTgiLCAiY3JlYXRvcl9rZXkiOiAiMDIzNmJkMGIyZjYwNDEzMzhmZmU1YTIyMzZiZTg5ZjM2OWVjMzA5NGU1MjQ3YmI0MGFhZDNhYWExOGZmMmRhMzk1IiwgImdyb3VwX2NvZGUiOiAiYzI3NDRlZDQzZDRkOWRhZDI4OWZiYTM3YTYzZTNmYTA4M2YzOThkODIxNGI2MzIzYjYwYmM2MmQ2MjVlYWQ0MCJ9"
    },
    {
      "address": "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
      "data": "oXhCMDIzNmJkMGIyZjYwNDEzMzhmZmU1YTIyMzZiZTg5ZjM2OWVjMzA5NGU1MjQ3YmI0MGFhZDNhYWExOGZmMmRhMzk1eQHIeyJjMjc0NGVkNDNkNGQ5ZGFkMjg5ZmJhMzdhNjNlM2ZhMDgzZjM5OGQ4MjE0YjYzMjNiNjBiYzYyZDYyNWVhZDQwIjogIntcImdyb3VwX2NvZGVcIjogXCJjMjc0NGVkNDNkNGQ5ZGFkMjg5ZmJhMzdhNjNlM2ZhMDgzZjM5OGQ4MjE0YjYzMjNiNjBiYzYyZDYyNWVhZDQwXCIsIFwiZ3JhbnVsYXJpdHlcIjogXCIxXCIsIFwiYmFsYW5jZVwiOiBcIjQwXCIsIFwiZGVjaW1hbHNcIjogXCIxOFwiLCBcIm93bmVyX2tleVwiOiBcIjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NVwiLCBcInNpZ25cIjogXCI2NDE5NWI0MmMzYTg3OWMyYmExNzBlNWE0Mzc4YzUwZjc5MWZhZjYyYWMzNmZmNmZlM2YxOWQxMWIxNDEyYjA5N2Y1ZDZiYmEwZTVmYjZkYjM2MjJlMTcyN2Q4YmRmNTJlZmQzZGQ2ZjkzMDk4MWI3ODI1YTIxNTdhOTQyODBlN1wifSJ9"
    }
  ],
  "head": "5f2aff4cb47dda31f004b6dea64c0248b2a288c8763285ce9da091a84c8c90b40ca66595ecf248f6b5f427ff60b6f6d3df386339f27c9efdb3a404b653cb41d5",
  "link": "http://172.16.4.138:8003/state?head=5f2aff4cb47dda31f004b6dea64c0248b2a288c8763285ce9da091a84c8c90b40ca66595ecf248f6b5f427ff60b6f6d3df386339f27c9efdb3a404b653cb41d5&start=000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7&limit=100",
  "paging": {
    "limit": null,
    "start": null
  }
}

export const blocks = {
  "data": [
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "a9960bb40bd88249b21b7d42a59bb0d248524a55c4fb585f2424d5780f60779c6cfc66d5c80d76e867f88d29cac6f2c07d8d557e78410d1be74fd4937bfaaa82"
            ]
          },
          "header_signature": "2639afad0104b93c59778db0faf0ed99e81b39322e91130ddf2a415300fd930240562418422f976d6459b1e71a995d0cd3232339cd40e6751c5ffd2a587d1fa1",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e671743da313386dc962626ec5d5b01399d7f64f5b8dbb66050389f0436551e0240b68",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0x40a970d3c2e7141e",
                "outputs": [
                  "e671743da313386dc962626ec5d5b01399d7f64f5b8dbb66050389f0436551e0240b68",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "21b8484e085ddcef0bde25a8342dc5a894f182c7fa3cad3ed128fe7e494bf14ccda294bf4a0ae4e2bcb6b4cee199443d02fc30b6e48144ce065f5749c288b3c7",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "a9960bb40bd88249b21b7d42a59bb0d248524a55c4fb585f2424d5780f60779c6cfc66d5c80d76e867f88d29cac6f2c07d8d557e78410d1be74fd4937bfaaa82",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFMDBUMitGMXZLMC9nakpObG5kMzFQR2Jpa0x2UXdyZ2F2NTZQNGRIbHJPQS9HbEhNRVJuS1h3QzNGdUwyVUFTRG5pTDEwZVpBaW9kR2YvS2swRU8xdmc9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "2639afad0104b93c59778db0faf0ed99e81b39322e91130ddf2a415300fd930240562418422f976d6459b1e71a995d0cd3232339cd40e6751c5ffd2a587d1fa1"
        ],
        "block_num": "43",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "b8c4762b8b33a861c5fbd5038b7763a0f5da19d69dac1ee42641cc8db29c1964280e822557e2dc85d449aafc7d51ba1e288e46566209effdf96413ca40787944",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "7c84dc993fba5eebf6c1f0f25bfa610881bd9ce1bef9e922bba2c4f439cb01d0"
      },
      "header_signature": "6abd79963d2bd3ab2cb752f672292447113ee58167875b230ac28b128f2f656347e9d17c373aa6eb30116e4c745c68161ab53accb2128ee18b19b352106b3ed1"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "5065f1daca537f340f6ef74aad7c7e7700f4dfccfd74e20f1f453c432402cadd57130b8e900a5bd1d65cec6e4a81cd7071ea499bcbf3d9ee79a4932bf28da5be"
            ]
          },
          "header_signature": "e75076b1b68a963d9a55c55c108b0fc701c839b0449d0b244330486c8c9e228d588f543081f5c709f270cebeff9bd8ff2dd83449f038ebfdbbf461662d64d7c4",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e671743da313386dc962626ec5d5b01399d7f64f5b8dbb66050389f0436551e0240b68",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "nonce": "0x88a078975a9afe05",
                "outputs": [
                  "e671743da313386dc962626ec5d5b01399d7f64f5b8dbb66050389f0436551e0240b68",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "payload_sha512": "8fb32f715362c40623ad0ea96bc325d6e7ee2e18f398d75f37b487e955ddd5ccae759203e8cb98f28ed1b073e17a1f0236b3f29ee4286380e344629ac59d031d",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "5065f1daca537f340f6ef74aad7c7e7700f4dfccfd74e20f1f453c432402cadd57130b8e900a5bd1d65cec6e4a81cd7071ea499bcbf3d9ee79a4932bf28da5be",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFMDBUMitGMXZLMC9nakpObG5kMzFQR2Jpa0x2UXdyZ2F2NTZQNGRIbHJPQS9HbEhNRVJuS1h3QzNGdUwyVUFTRG5pTDEwZVpBaW9kR2YvS2swRU8xdmc9PWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUtwMXB6ZUhBQ1NkMUQwaWJFNWY0QXdnQ0phQmJJcm54bjUzMW00TU1YcXA2Q1ZocmRTOHFDbi9iYUpEcDU4ZXlra1VyaWRuRXNjWWJmUFpTZDNyWWRRPT1nbnVtX2JndAJoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "e75076b1b68a963d9a55c55c108b0fc701c839b0449d0b244330486c8c9e228d588f543081f5c709f270cebeff9bd8ff2dd83449f038ebfdbbf461662d64d7c4"
        ],
        "block_num": "42",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "5979a01e9b56bd6c8a8faed97646983f66b679b9eeaf29898b3686f3441eab444837d92e919fe1beb8d9b3d7393fe9360897303db94f971d0c277f72d3790c85",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "f91333c96cbb9b09e5be64ef2aa9c4fd88a0ba74449ca6df873776a4871a0a2c"
      },
      "header_signature": "b8c4762b8b33a861c5fbd5038b7763a0f5da19d69dac1ee42641cc8db29c1964280e822557e2dc85d449aafc7d51ba1e288e46566209effdf96413ca40787944"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "39b72a0fbb5ff49aed0467de1c1f73fbef67a903f53980be9694ae2a276d83ca7b55d7d9a12ea744337b5a905fd6db19ec749aed4d48a9cf9548da1c660ad480"
            ]
          },
          "header_signature": "14b067aa0e7eb0857457b2cdcdec23acfbe67c2d0677729e44ab7b9192c8d2143c7eb21fafbe5eedd2d1f7298293e35e7b7d9f0c368cdea6ab7c1778bd88a211",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e671743da313386dc962626ec5d5b01399d7f64f5b8dbb66050389f0436551e0240b68"
                ],
                "nonce": "0xb03e85e524d13234",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e671743da313386dc962626ec5d5b01399d7f64f5b8dbb66050389f0436551e0240b68"
                ],
                "payload_sha512": "23d9fb271d4815b03f65f40ba4c66a87e51a8a785280c20c5f84a098dfeb87d38e4358e731f89f0e49f033d78c29fc16308de9f3db77e2fb0463d41c8d300162",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "39b72a0fbb5ff49aed0467de1c1f73fbef67a903f53980be9694ae2a276d83ca7b55d7d9a12ea744337b5a905fd6db19ec749aed4d48a9cf9548da1c660ad480",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRTAwVDIrRjF2SzAvZ2pKTmxuZDMxUEdiaWtMdlF3cmdhdjU2UDRkSGxyT0EvR2xITUVSbktYd0MzRnVMMlVBU0RuaUwxMGVaQWlvZEdmL0trMEVPMXZnPT1nbnVtX2JndAdoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "14b067aa0e7eb0857457b2cdcdec23acfbe67c2d0677729e44ab7b9192c8d2143c7eb21fafbe5eedd2d1f7298293e35e7b7d9f0c368cdea6ab7c1778bd88a211"
        ],
        "block_num": "41",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "55de046f29a2f11c3dacab0925ae935f75294709f3f43faec8d4eb11406f64654b066db728ad27a5e27a87e9b73ee8cf8550b48737127484cdec84088619b914",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "00013ee678e5f8b10df95562e44522ea96c8f62d55eb5633d4a7113baefddd7d"
      },
      "header_signature": "5979a01e9b56bd6c8a8faed97646983f66b679b9eeaf29898b3686f3441eab444837d92e919fe1beb8d9b3d7393fe9360897303db94f971d0c277f72d3790c85"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
            "transaction_ids": [
              "8558e77ac4815444bc16a676cfec3113840b004b55843038326ca38deb8a8def1e79340fc8c2f1879398eb18120f5cec19159166864c7db501f01dbcbafca0bd"
            ]
          },
          "header_signature": "3738b6b5adcee781ca56f5ff36f422f864bcdcaa6a24f2b474508cdfaa2464bb08ab042ccd497aa779a6cf4c3d7c8d2029ca48a04fdf2a6d1d4ad815f1e0de26",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0x4f80d36a7b3fd98e",
                "outputs": [
                  "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "dc05fefd61a808ffc47f16edfc391e564230aae766104cb69ab4b2b0974c6cd6f51400d150c8dfc7949166094c73f703eb82f391a09c73e5de19c7692a6af378",
                "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f"
              },
              "header_signature": "8558e77ac4815444bc16a676cfec3113840b004b55843038326ca38deb8a8def1e79340fc8c2f1879398eb18120f5cec19159166864c7db501f01dbcbafca0bd",
              "payload": "p2ROYW1laUJHWF9Ub2tlbmtwcml2YXRlX2tleXhAMjFmYWQxZGI3YzFlNGYzZmI5OGJiMTZmY2ZmNjk0MmI0YjJiOWY4OTAxOTZiODc1NDM5OWViZmQ3NDcxOGRlMXBldGhlcmV1bV9hZGRyZXNzeCoweEZCMkY3Qzg2ODdGNmQ4NmEwMzFEMkRFM2Q1MWY0YzYyZTgzQWRBMjJnbnVtX2JndGIxMGliZ3RfcHJpY2VhMWlkZWNfcHJpY2VhMWRWZXJiZGluaXQ="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "3738b6b5adcee781ca56f5ff36f422f864bcdcaa6a24f2b474508cdfaa2464bb08ab042ccd497aa779a6cf4c3d7c8d2029ca48a04fdf2a6d1d4ad815f1e0de26"
        ],
        "block_num": "40",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "4716194075d033c9da9bae2db6518b8a943b4e624ca8e0a16abe97c440ba39a6305964571ea16a67715d4f185ccb7add704fa0c24c30d83de3005ccdecaa314d",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "3d12b1e3b2c5f9e31fc9b0716451cc8b0b7e1884b89dc6783802cebc50feb4c5"
      },
      "header_signature": "55de046f29a2f11c3dacab0925ae935f75294709f3f43faec8d4eb11406f64654b066db728ad27a5e27a87e9b73ee8cf8550b48737127484cdec84088619b914"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "355cb5504f6b6d9ab3a95bde461f3116862bbe0edf614ad142f2565109f059ff1ca659154e5bf2a955e661fd1d12a50b3dc8073ee5517c724a981a8fb9209891"
            ]
          },
          "header_signature": "588cc758a799f5788899b095427cdfc56f08f354bdacd6c8a03f26a8691e0aee6aeea9c36683eb67a6d695f544f417208dd5199c48072f3c1d1845bf2df91574",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e671746d6ad24ec6dd04509868ff45cee176d63e50a0197cbec878c2da26dcc85cfae7",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "nonce": "0x9def2ad5b8a21ee5",
                "outputs": [
                  "e671746d6ad24ec6dd04509868ff45cee176d63e50a0197cbec878c2da26dcc85cfae7",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "payload_sha512": "7efd29104c4ef22fef00514d295bf1923ac164b6bf8722a72fefd9b3436980c25e39cb07aa72899f7f58272737191ca48b235797b6864e665d04cd85c77dfa19",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "355cb5504f6b6d9ab3a95bde461f3116862bbe0edf614ad142f2565109f059ff1ca659154e5bf2a955e661fd1d12a50b3dc8073ee5517c724a981a8fb9209891",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFZGczc205cG05ZDBOekJwWk83dHlqVWFQVFI1cWk2c1JFSi95SXZoekVIRjBJUjRkTHVmVnZTYkR4T01yMVE3OVI0V1FkanU0VUVTVVhwWEhMcWd2UVE9PWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUtwMXB6ZUhBQ1NkMUQwaWJFNWY0QXdnQ0phQmJJcm54bjUzMW00TU1YcXA2Q1ZocmRTOHFDbi9iYUpEcDU4ZXlra1VyaWRuRXNjWWJmUFpTZDNyWWRRPT1nbnVtX2JndAFoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "588cc758a799f5788899b095427cdfc56f08f354bdacd6c8a03f26a8691e0aee6aeea9c36683eb67a6d695f544f417208dd5199c48072f3c1d1845bf2df91574"
        ],
        "block_num": "39",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "0bdac8b174465df418503da2c5ef59a88f24bcdc105af1dc78467e9bda8f65bc75a6f8ca3b457bb6e1c101818ca080af709baf6c3a6797aeef628722aa802a85",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "2ccb9c10a08dd9352801f95ac348ce46754d3de7bb902d1a11b7bdc714e7e1ab"
      },
      "header_signature": "4716194075d033c9da9bae2db6518b8a943b4e624ca8e0a16abe97c440ba39a6305964571ea16a67715d4f185ccb7add704fa0c24c30d83de3005ccdecaa314d"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "2af459dc2de6ad2eae0fe2bde579fb4f4fc4ef90a72763345ed4d604a28a033c3a96d4e179935f2c02f99b09b323f0f55d80c8c2f12b07943e83f929a5bd5fab"
            ]
          },
          "header_signature": "84cae4211fa49862e9c908c35253eb01f90bd79376f65037c54f431b0c559549304729116eae5843f50a23e05e26b7db6e53e7530df9e473aaffd3ffb36cc342",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e671746d6ad24ec6dd04509868ff45cee176d63e50a0197cbec878c2da26dcc85cfae7",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0x8bf0ae2e4f5c0016",
                "outputs": [
                  "e671746d6ad24ec6dd04509868ff45cee176d63e50a0197cbec878c2da26dcc85cfae7",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "0b3c0254eb53e838f9a8ed262c16745519731f610e67938dd105f876993d4b6ff0597f49443a5d1783ed7a6171b39de4e2e2c8e65f456461b5a72cd451015fbf",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "2af459dc2de6ad2eae0fe2bde579fb4f4fc4ef90a72763345ed4d604a28a033c3a96d4e179935f2c02f99b09b323f0f55d80c8c2f12b07943e83f929a5bd5fab",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFZGczc205cG05ZDBOekJwWk83dHlqVWFQVFI1cWk2c1JFSi95SXZoekVIRjBJUjRkTHVmVnZTYkR4T01yMVE3OVI0V1FkanU0VUVTVVhwWEhMcWd2UVE9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndAJoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "84cae4211fa49862e9c908c35253eb01f90bd79376f65037c54f431b0c559549304729116eae5843f50a23e05e26b7db6e53e7530df9e473aaffd3ffb36cc342"
        ],
        "block_num": "38",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "ece427b54feb9c5a9b50d719f44eab9b6525b25bb8c3d234e0f1e079da4f219220db0bcfc6689a25dac361b6108af766f9c8f424787d2c3a5a01501e37f95dfc",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "6e3ce29625de1437ad760eec480ae8ef4317f172c3920aabd7a043d82f7b1362"
      },
      "header_signature": "0bdac8b174465df418503da2c5ef59a88f24bcdc105af1dc78467e9bda8f65bc75a6f8ca3b457bb6e1c101818ca080af709baf6c3a6797aeef628722aa802a85"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "bb6e495dba9a06b76dc68a11927c5ca5bbfb59b50057b8d8b83cb0d58e4472cf28237f3a7a5cc32fb6e2c37787ad66a7d344123de208c0e760a5530b2aeac1ff"
            ]
          },
          "header_signature": "6cbd06b821992d2d11df0daacf64f18163408b4cdccd264725cecb086e7614cb57ef803e1ebb5c5aa44698131276e13c2652a572da0cf06cd9eb81f411027d1f",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659",
                  "e671746d6ad24ec6dd04509868ff45cee176d63e50a0197cbec878c2da26dcc85cfae7"
                ],
                "nonce": "0xd52a292e80fd409e",
                "outputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659",
                  "e671746d6ad24ec6dd04509868ff45cee176d63e50a0197cbec878c2da26dcc85cfae7"
                ],
                "payload_sha512": "64649ba7737fc8912fe85c0a1b2c05dbda6ce4b4b8bf0cf5bd42aa65484a97a477de313e8c3c20094701537331fc463fbdb27a338a10781ce4411f40b26a3ec9",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "bb6e495dba9a06b76dc68a11927c5ca5bbfb59b50057b8d8b83cb0d58e4472cf28237f3a7a5cc32fb6e2c37787ad66a7d344123de208c0e760a5530b2aeac1ff",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFS3AxcHplSEFDU2QxRDBpYkU1ZjRBd2dDSmFCYklybnhuNTMxbTRNTVhxcDZDVmhyZFM4cUNuL2JhSkRwNThleWtrVXJpZG5Fc2NZYmZQWlNkM3JZZFE9PWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRWRnM3NtOXBtOWQwTnpCcFpPN3R5alVhUFRSNXFpNnNSRUoveUl2aHpFSEYwSVI0ZEx1ZlZ2U2JEeE9NcjFRNzlSNFdRZGp1NFVFU1VYcFhITHFndlFRPT1nbnVtX2JndAJoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "6cbd06b821992d2d11df0daacf64f18163408b4cdccd264725cecb086e7614cb57ef803e1ebb5c5aa44698131276e13c2652a572da0cf06cd9eb81f411027d1f"
        ],
        "block_num": "37",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "a5a59007b3320ff47fb28e1add82e6dc27964d677a8a8448ac0359aec201a4ee6c954dbe0918990d8476edd68c248cab0ed673d3feac1554d25f431b7a1b771c",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "4838a6ff02b95f6abbf372f43d79b1af4997dc5ce3c0560c1d1648fcff0277d6"
      },
      "header_signature": "ece427b54feb9c5a9b50d719f44eab9b6525b25bb8c3d234e0f1e079da4f219220db0bcfc6689a25dac361b6108af766f9c8f424787d2c3a5a01501e37f95dfc"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "f086d9e3d2debd706de9d64265e3b761781ff6d8f2225389d0476a143b2f6cd76b8d7a4828d206b99392cba2193449091af703e59e62458494d798b37830bd2c"
            ]
          },
          "header_signature": "542de6404d55f3221d36c0d5555fcf66af84b975bfc4a064c462191ef1be384421e62fe7f3630c979963abdddbe05fb8310b71c1c7034c232b0b0b885440bcb5",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e671746d6ad24ec6dd04509868ff45cee176d63e50a0197cbec878c2da26dcc85cfae7"
                ],
                "nonce": "0x6e9cd936324b1776",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e671746d6ad24ec6dd04509868ff45cee176d63e50a0197cbec878c2da26dcc85cfae7"
                ],
                "payload_sha512": "7620e143ecd154732870e51dad61642b2864bf0c465b174a36f4f8a920a6d79910d6e10481ed2c8ab2e8d487acd315c118b0a4e7f81603304eca3f5a1afa4791",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "f086d9e3d2debd706de9d64265e3b761781ff6d8f2225389d0476a143b2f6cd76b8d7a4828d206b99392cba2193449091af703e59e62458494d798b37830bd2c",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRWRnM3NtOXBtOWQwTnpCcFpPN3R5alVhUFRSNXFpNnNSRUoveUl2aHpFSEYwSVI0ZEx1ZlZ2U2JEeE9NcjFRNzlSNFdRZGp1NFVFU1VYcFhITHFndlFRPT1nbnVtX2JndAdoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "542de6404d55f3221d36c0d5555fcf66af84b975bfc4a064c462191ef1be384421e62fe7f3630c979963abdddbe05fb8310b71c1c7034c232b0b0b885440bcb5"
        ],
        "block_num": "36",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "79d7c1abdbbcbf930cf2865de49a01d00ea960ec481688973562f335d9f74b5c31665a739aed10d80fc2733d8ced871bf783045dbe522f70782858db0ff122ee",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "ef012b8197361eabc2ef57e2b83a22aad4ecaeb69d54766058ab55327b7b667f"
      },
      "header_signature": "a5a59007b3320ff47fb28e1add82e6dc27964d677a8a8448ac0359aec201a4ee6c954dbe0918990d8476edd68c248cab0ed673d3feac1554d25f431b7a1b771c"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
            "transaction_ids": [
              "89d122373fb6fa9138762c902edfb2d4bf4676d1580e76298f076fdbfb09ecd15427f0dcdb065420caeb345d2f1643c6d8d46be3e62427b8100f76eee2fc35a1"
            ]
          },
          "header_signature": "edf83b60c64f33ab1929e9d922a085017dd74f56281869f76b19932749c940ac20867b31cc17f263b9122cd4e869c86f379389af711da0a510cce090e66351d3",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0xfe12a07ddba6b906",
                "outputs": [
                  "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "2d444aaac5fe53ca2d47afa99ce3f4656dc39b8545b47f953b7c18da2a7c16597f5b62f264767df45db1e7bc86a1a3d44dddf6c2a1e29c43425905bea47b58c9",
                "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f"
              },
              "header_signature": "89d122373fb6fa9138762c902edfb2d4bf4676d1580e76298f076fdbfb09ecd15427f0dcdb065420caeb345d2f1643c6d8d46be3e62427b8100f76eee2fc35a1",
              "payload": "p2ROYW1laUJHWF9Ub2tlbmtwcml2YXRlX2tleXhAMjFmYWQxZGI3YzFlNGYzZmI5OGJiMTZmY2ZmNjk0MmI0YjJiOWY4OTAxOTZiODc1NDM5OWViZmQ3NDcxOGRlMXBldGhlcmV1bV9hZGRyZXNzeCoweEZCMkY3Qzg2ODdGNmQ4NmEwMzFEMkRFM2Q1MWY0YzYyZTgzQWRBMjJnbnVtX2JndGMxMDBpYmd0X3ByaWNlYTFpZGVjX3ByaWNlYTFkVmVyYmRpbml0"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "edf83b60c64f33ab1929e9d922a085017dd74f56281869f76b19932749c940ac20867b31cc17f263b9122cd4e869c86f379389af711da0a510cce090e66351d3"
        ],
        "block_num": "35",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "f65c5d5b614ecd335905cca80f8f6bcb5b557f34b43d752c767462ce59e2d8f375b75b3baf36e359fef791919ce024fec044ae2542c785f704f57a11e01cb5b6",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "1244eb576cca3f5fdd44dc66836111567bf506c10bc5100b2281373418d3ac1f"
      },
      "header_signature": "79d7c1abdbbcbf930cf2865de49a01d00ea960ec481688973562f335d9f74b5c31665a739aed10d80fc2733d8ced871bf783045dbe522f70782858db0ff122ee"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
            "transaction_ids": [
              "b42dbb141955c178242cb4ddb7fa026ecbbf4c50747e024d566f14ddb42015ef173165df888bfdb09ccb624cd24ca533d81a136eae744ba0290c83edba1963ae"
            ]
          },
          "header_signature": "e7ba1cfeffeb48f36c48c7a891b563e0d6933f3022fcd1ce921e3fbfeb343c720926e3e26b6fd78f1d99c0fc25a0374c88b95b4ec42cf0cc26d6a79e2633f390",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "nonce": "0x921c0468bf8183af",
                "outputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "payload_sha512": "3bc8918db101044785868600e007ec1c7b00235521546870fd0e35e257e37653ded27eaf6c97e560053b565c3cc99d3878a853ee19bf02b8e00346382c68c44e",
                "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f"
              },
              "header_signature": "b42dbb141955c178242cb4ddb7fa026ecbbf4c50747e024d566f14ddb42015ef173165df888bfdb09ccb624cd24ca533d81a136eae744ba0290c83edba1963ae",
              "payload": "omRhZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUtwMXB6ZUhBQ1NkMUQwaWJFNWY0QXdnQ0phQmJJcm54bjUzMW00TU1YcXA2Q1ZocmRTOHFDbi9iYUpEcDU4ZXlra1VyaWRuRXNjWWJmUFpTZDNyWWRRPT1kVmVyYmpiYWxhbmNlX29m"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "e7ba1cfeffeb48f36c48c7a891b563e0d6933f3022fcd1ce921e3fbfeb343c720926e3e26b6fd78f1d99c0fc25a0374c88b95b4ec42cf0cc26d6a79e2633f390"
        ],
        "block_num": "34",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "0f80feeee2a683cb19d3d8279d00f9aa58a8ed88b07f8d7c1da9655391c3dd8c0f9fc8713d6da0465f77289652fe80dc6d0c571e7e0792c5ed106935104b6bf9",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "67dd89bbd6ced8d9b24c6fbee1c2471a7b0c832cc985c8639f121c07589c641d"
      },
      "header_signature": "f65c5d5b614ecd335905cca80f8f6bcb5b557f34b43d752c767462ce59e2d8f375b75b3baf36e359fef791919ce024fec044ae2542c785f704f57a11e01cb5b6"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "835e0c890dc6e0c5ee8f44182372bb8a3d9596f89c667034f72a3c184b960cfb51db465fa411dd8a3dea76744c3be06be3d835e165f8c751ef884899d454a4e8"
            ]
          },
          "header_signature": "1ae56ab95c3366b220922d3db3d2d4ee2bb55445f707fa6aa0c69b50de66c1651c577f9cdc7e5987f0f261e717e7b1fad00157fcc150a21406c6180fa09686c9",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0x95a63ba307ca757a",
                "outputs": [
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "460cda80f3c1b529d03eef4b1101849a84f58add4ea6616886eb7d5e5f2d2b58ec5eeb2f439a327b120378d5e61862073b20962556b05d815b5101ab4a32481c",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "835e0c890dc6e0c5ee8f44182372bb8a3d9596f89c667034f72a3c184b960cfb51db465fa411dd8a3dea76744c3be06be3d835e165f8c751ef884899d454a4e8",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFdDhIUVFkNnQrNExqSXdXRmxCbDBjM3RRelpzdFNwQWJsZ2YxTE9RVFBzTUlqZ0UyU082Q1k1R2hFU0JrRHBDVTZDQ1Bod0FqR1hUNmw5WXc5RGhmakE9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndBZoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "1ae56ab95c3366b220922d3db3d2d4ee2bb55445f707fa6aa0c69b50de66c1651c577f9cdc7e5987f0f261e717e7b1fad00157fcc150a21406c6180fa09686c9"
        ],
        "block_num": "33",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "b3e8581c8aeb492154c3d55885c441512d322e2e09a772b604b872e62e97b2e2071c39d168e2e73565819d4a394410f3813f238f32d6f38aa51466ab602ae84f",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "67dd89bbd6ced8d9b24c6fbee1c2471a7b0c832cc985c8639f121c07589c641d"
      },
      "header_signature": "0f80feeee2a683cb19d3d8279d00f9aa58a8ed88b07f8d7c1da9655391c3dd8c0f9fc8713d6da0465f77289652fe80dc6d0c571e7e0792c5ed106935104b6bf9"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "885312bd6bc1ae638382e4eae76149704737cb91a607971c713799c4ba57686101d8801ac0916467b0936d373d91546d89ae1877266431744b97e9917460b7ca"
            ]
          },
          "header_signature": "3c0660b51d21607fbe3b26ae1d677144563b436f8fb50b0b7eee9a8b0dcb35916238dd480625a43f169b55cf78c1b18dcc936649c602f3c024ad0c650e967e26",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659",
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7"
                ],
                "nonce": "0x1c95a820594074eb",
                "outputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659",
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7"
                ],
                "payload_sha512": "d21dd2fd71e7a4874198a85fd1ce34a420e41127f88613840bd1d75101b136eaf64bfb9b44a36ef1706898dd9e0c76ed727090899528553e8072907ab366bc20",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "885312bd6bc1ae638382e4eae76149704737cb91a607971c713799c4ba57686101d8801ac0916467b0936d373d91546d89ae1877266431744b97e9917460b7ca",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFS3AxcHplSEFDU2QxRDBpYkU1ZjRBd2dDSmFCYklybnhuNTMxbTRNTVhxcDZDVmhyZFM4cUNuL2JhSkRwNThleWtrVXJpZG5Fc2NZYmZQWlNkM3JZZFE9PWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRXQ4SFFRZDZ0KzRMakl3V0ZsQmwwYzN0UXpac3RTcEFibGdmMUxPUVRQc01JamdFMlNPNkNZNUdoRVNCa0RwQ1U2Q0NQaHdBakdYVDZsOVl3OURoZmpBPT1nbnVtX2JndAFoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "3c0660b51d21607fbe3b26ae1d677144563b436f8fb50b0b7eee9a8b0dcb35916238dd480625a43f169b55cf78c1b18dcc936649c602f3c024ad0c650e967e26"
        ],
        "block_num": "32",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "e483303c8587b5da297f968a44bc1be08de3b9ba9ccae11a9fbb4a5f73d971c10f1e2ae281bb1857391d36f110d7952e664a506c7a6a159ba0ead7176b1dac4d",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "f90ba2716fa227df840789d505591c6f133645b0f449abddbe643a1de752ab13"
      },
      "header_signature": "b3e8581c8aeb492154c3d55885c441512d322e2e09a772b604b872e62e97b2e2071c39d168e2e73565819d4a394410f3813f238f32d6f38aa51466ab602ae84f"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "1efe5ef135f41a4b09a02a5fe103d56fdc905afc5e98cff5f73daa8c053144a6199c3b9959d9a99170cd21b56a48301f7daa2b64579f3dbddcb254980169be73"
            ]
          },
          "header_signature": "1d39f7660edff79e169f14e62364d49a76b35697c28b24b406224facec0e9749009c79d1710e6308d19625ce46a0860863331f84517610a52020f983c95748dc",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174a55b559ed79117d6cb4056fc9143bc89e5031283990f89a416c82012617944ce",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0xdb5706025d9e8d8c",
                "outputs": [
                  "e67174a55b559ed79117d6cb4056fc9143bc89e5031283990f89a416c82012617944ce",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "af0ad59bf20b774161b32177263ab3e0e3a669b1003c6a51aec5e2b0091d75e19146800bbf7d7f46b53bd79049a90dcd31bb4c05c35373aad56d5ef052716590",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "1efe5ef135f41a4b09a02a5fe103d56fdc905afc5e98cff5f73daa8c053144a6199c3b9959d9a99170cd21b56a48301f7daa2b64579f3dbddcb254980169be73",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFa2diUXc0d3hOQk1odHhrNkszclAwalZtejgxVUgwenRyVXNFanZ2RVpZa1BNdDJMV3A2VklwVk9TOTRlVTBxTzNGUVphWGZPK0d2WThLQ0ZZYmJvV3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "1d39f7660edff79e169f14e62364d49a76b35697c28b24b406224facec0e9749009c79d1710e6308d19625ce46a0860863331f84517610a52020f983c95748dc"
        ],
        "block_num": "31",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "2b7456d9fdb345651d311dac1bde1a22ba3f7ff41ed5d4bbdc80efe36b17409829bfda8ce69163ab59fe0db900e2283997299bdef70a85d1965c0832d82b28e9",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "96dcd3f49001e959ffc45db69794d9fd57a01643f17659bb8152ef0e2348e4e7"
      },
      "header_signature": "e483303c8587b5da297f968a44bc1be08de3b9ba9ccae11a9fbb4a5f73d971c10f1e2ae281bb1857391d36f110d7952e664a506c7a6a159ba0ead7176b1dac4d"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "02c66f6c8d3971befe07cb066fd51b5dd73e7931814d3b1f07ea9a1da1981e094123f2ebd7fb493b657850d18f271229a1154c93cde06603a1d833214151d1ec"
            ]
          },
          "header_signature": "4af334ceac319d1602358b6381c3228a3a9fc39a71e062130d0810b72357cc7353d5616b33ad02e981bba7c12ef5b416adcec0b928c1f4ab044827c182d2218e",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174a55b559ed79117d6cb4056fc9143bc89e5031283990f89a416c82012617944ce",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0xd2ce0df881b87753",
                "outputs": [
                  "e67174a55b559ed79117d6cb4056fc9143bc89e5031283990f89a416c82012617944ce",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "56edf262e98d6e199e431971950aba9cab9569d64e5d3ff2fb4af36e58d28048dab81c4e90062d6c9004e092723b44cdfdb8939b0181f6e63eb679fc76843f99",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "02c66f6c8d3971befe07cb066fd51b5dd73e7931814d3b1f07ea9a1da1981e094123f2ebd7fb493b657850d18f271229a1154c93cde06603a1d833214151d1ec",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFa2diUXc0d3hOQk1odHhrNkszclAwalZtejgxVUgwenRyVXNFanZ2RVpZa1BNdDJMV3A2VklwVk9TOTRlVTBxTzNGUVphWGZPK0d2WThLQ0ZZYmJvV3c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndA9oZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "4af334ceac319d1602358b6381c3228a3a9fc39a71e062130d0810b72357cc7353d5616b33ad02e981bba7c12ef5b416adcec0b928c1f4ab044827c182d2218e"
        ],
        "block_num": "30",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "5da267e9c13138e7e67f8e8f08c26bc1eb58d805095c83a77330e933938d3e032383f02c5cceacd97048e11f9fdd7966c4458fa8313acaf361b0788664cf18ea",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "51fc1852a0d3e9ff41fa3c7e1288f4aedb2b827e09d83ae30a5e0d4bb2f81b32"
      },
      "header_signature": "2b7456d9fdb345651d311dac1bde1a22ba3f7ff41ed5d4bbdc80efe36b17409829bfda8ce69163ab59fe0db900e2283997299bdef70a85d1965c0832d82b28e9"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "09335128402a3bfd16be3ce64ddf355d3cc3d595d04623a428d189329247c6025131d6580ff3450fb34756c1ab510a872eabc0ab93d528cfcc6232fa468dc230"
            ]
          },
          "header_signature": "594023a433d0d6f408d6a6b56cf0deff8c535cab3e0dad2832b6f4e1dd8a348a70367f3d9294b4e5e37f9f82bf4a64de978a3788a17235ddde8b86f721285b53",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174a55b559ed79117d6cb4056fc9143bc89e5031283990f89a416c82012617944ce"
                ],
                "nonce": "0xb58e190a25fb1079",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174a55b559ed79117d6cb4056fc9143bc89e5031283990f89a416c82012617944ce"
                ],
                "payload_sha512": "2d3be61e9359e9668baadc13a23e9dad7aecf5092a43b6877a07a63e1101dc3e26ff4a5117f973378978df57f56fc6487245990516720d5542648531ee0f3ef9",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "09335128402a3bfd16be3ce64ddf355d3cc3d595d04623a428d189329247c6025131d6580ff3450fb34756c1ab510a872eabc0ab93d528cfcc6232fa468dc230",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRWtnYlF3NHd4TkJNaHR4azZLM3JQMGpWbXo4MVVIMHp0clVzRWp2dkVaWWtQTXQyTFdwNlZJcFZPUzk0ZVUwcU8zRlFaYVhmTytHdlk4S0NGWWJib1d3PT1nbnVtX2JndAdoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "594023a433d0d6f408d6a6b56cf0deff8c535cab3e0dad2832b6f4e1dd8a348a70367f3d9294b4e5e37f9f82bf4a64de978a3788a17235ddde8b86f721285b53"
        ],
        "block_num": "29",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "9c23d5f5d5e9c2cfca11edd7b19d251c0a7bd71692d499e6296ec0f8b796f61b3d964d854eee1d8653308659a875a1b93f68d1b2b62dd7bf710da826e96f38c7",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "51fc1852a0d3e9ff41fa3c7e1288f4aedb2b827e09d83ae30a5e0d4bb2f81b32"
      },
      "header_signature": "5da267e9c13138e7e67f8e8f08c26bc1eb58d805095c83a77330e933938d3e032383f02c5cceacd97048e11f9fdd7966c4458fa8313acaf361b0788664cf18ea"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "506fdc79c27512be23a248d3bcf21572e67543aa84b9d2378d0783d999f211f12d31c20b320a55f1b2ddb357b2ef906f777188a04fd54d40bbb512f5a56d3804"
            ]
          },
          "header_signature": "75ad5aebdaaa19b976e410897b928f5df4f58b2399691116667a4aa6927a7aae7c037ce19c97a290ac4a011971465b69467cd7de40a17e0016da0b3f2ee9548f",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659",
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7"
                ],
                "nonce": "0x1470df062ff8ce27",
                "outputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659",
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7"
                ],
                "payload_sha512": "ffc1be8ce286683d86b894816a6956352f29ccf5b8f6729f5b73cc3142d003a86eca1daaa8616439e46af457e773c9e6cfb3c3b76acbaa2623fc310d1789a8e9",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "506fdc79c27512be23a248d3bcf21572e67543aa84b9d2378d0783d999f211f12d31c20b320a55f1b2ddb357b2ef906f777188a04fd54d40bbb512f5a56d3804",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFS3AxcHplSEFDU2QxRDBpYkU1ZjRBd2dDSmFCYklybnhuNTMxbTRNTVhxcDZDVmhyZFM4cUNuL2JhSkRwNThleWtrVXJpZG5Fc2NZYmZQWlNkM3JZZFE9PWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRXQ4SFFRZDZ0KzRMakl3V0ZsQmwwYzN0UXpac3RTcEFibGdmMUxPUVRQc01JamdFMlNPNkNZNUdoRVNCa0RwQ1U2Q0NQaHdBakdYVDZsOVl3OURoZmpBPT1nbnVtX2JndBFoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "75ad5aebdaaa19b976e410897b928f5df4f58b2399691116667a4aa6927a7aae7c037ce19c97a290ac4a011971465b69467cd7de40a17e0016da0b3f2ee9548f"
        ],
        "block_num": "28",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "a424586c4ce5c4feaf2f6ccb45a5ca75b8a2494ac9041ef8db09d00ce628a7211f121f78c810c55b6047deb928a9a1a04eb45d957265f1e7beee74add5c01a29",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "52e4773cc92e19b3ce5d9c0ecd1b10a6ff915f151a9bd5889e225e282ed78dce"
      },
      "header_signature": "9c23d5f5d5e9c2cfca11edd7b19d251c0a7bd71692d499e6296ec0f8b796f61b3d964d854eee1d8653308659a875a1b93f68d1b2b62dd7bf710da826e96f38c7"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "de0c938d9cb214caa804b78cb7705872e32f053dcd269e35c573b3cc46a308512dd70fc3e272f598ddc1d612ac26a5898710089107f557ab25370479200a1aca"
            ]
          },
          "header_signature": "dc6d87c6ae51ffcc268e2e0a6a2a7b092322200144f2d7fc8ccb6ff0d5fc6b6778de74b2b3b6c8ddd1f33ebd106fc145c2411ae4afeb8b4a3d20050f3159632c",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e6717446969d17c80a07e4cadbf96ab2c7379d629bf01057744411f6c22a8a757e1998",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0x7fbcaae813af08aa",
                "outputs": [
                  "e6717446969d17c80a07e4cadbf96ab2c7379d629bf01057744411f6c22a8a757e1998",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "6c0155f135e216446571486ed24fd111c4a2766232023f67566ea305c7e5494180befae10079e46df0e364d58d2c5483d73cf6ef2877a5031fa429521506f52b",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "de0c938d9cb214caa804b78cb7705872e32f053dcd269e35c573b3cc46a308512dd70fc3e272f598ddc1d612ac26a5898710089107f557ab25370479200a1aca",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFSFVqQXFwK05TaWNUQUpqS1ZVb2hXSUJQdlQvM3Bya0tDVmZOOG9UdHNIbUgwYitwOXE2RG1FQnkzSnNXWUltV0Y1Z3BGR0h2ZTJxVkZBT0pUR3BGZ0E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "dc6d87c6ae51ffcc268e2e0a6a2a7b092322200144f2d7fc8ccb6ff0d5fc6b6778de74b2b3b6c8ddd1f33ebd106fc145c2411ae4afeb8b4a3d20050f3159632c"
        ],
        "block_num": "27",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "3fd44612f2f48ff917821a551f66cfb5f01c907a456480899ae576433206aff7617e826079cab028972d27ed7a6fac2bc0b1e85445792e298ec0092a0ee280a5",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "db65f6583d38d6996858b5edf65f359eb394080adf5d5f3808c6d58c742a04f4"
      },
      "header_signature": "a424586c4ce5c4feaf2f6ccb45a5ca75b8a2494ac9041ef8db09d00ce628a7211f121f78c810c55b6047deb928a9a1a04eb45d957265f1e7beee74add5c01a29"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "33d6b8fa1112d83ea731a8378526b3041e2316aa21334a10f6510b0ff99ffe610f33516c19aeda358892fa9da7fb36fccf6104411469a71923a39d39b15d8126"
            ]
          },
          "header_signature": "c25cb3edb85cf9fe52190c6ad66d2b3a26bdeac4b244c53dc72bff1a0c69db2a683813378705cb05add81906e71238644817a4d6a2347cb943593334cb48f770",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e6717446969d17c80a07e4cadbf96ab2c7379d629bf01057744411f6c22a8a757e1998",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0x8a96320a58274572",
                "outputs": [
                  "e6717446969d17c80a07e4cadbf96ab2c7379d629bf01057744411f6c22a8a757e1998",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "6c0155f135e216446571486ed24fd111c4a2766232023f67566ea305c7e5494180befae10079e46df0e364d58d2c5483d73cf6ef2877a5031fa429521506f52b",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "33d6b8fa1112d83ea731a8378526b3041e2316aa21334a10f6510b0ff99ffe610f33516c19aeda358892fa9da7fb36fccf6104411469a71923a39d39b15d8126",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFSFVqQXFwK05TaWNUQUpqS1ZVb2hXSUJQdlQvM3Bya0tDVmZOOG9UdHNIbUgwYitwOXE2RG1FQnkzSnNXWUltV0Y1Z3BGR0h2ZTJxVkZBT0pUR3BGZ0E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "c25cb3edb85cf9fe52190c6ad66d2b3a26bdeac4b244c53dc72bff1a0c69db2a683813378705cb05add81906e71238644817a4d6a2347cb943593334cb48f770"
        ],
        "block_num": "26",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "eb595f67534aebfc24a4f7d176e0b29aea13106515b0043cea8c3423814122c66a79034b6dbc69b5ea0ef46883b007422375946865f75fc6dd68587a80b2f386",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "2d14ff8050c413f2304589a5f30e7b1bdbb0fe8c973aababbb2e3782e61d61ff"
      },
      "header_signature": "3fd44612f2f48ff917821a551f66cfb5f01c907a456480899ae576433206aff7617e826079cab028972d27ed7a6fac2bc0b1e85445792e298ec0092a0ee280a5"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "2e98f4712cc0ffbc7b92541e29c8f91e8d34e5439c8502e08ae96bbf269eba410053025974c7a5d6a4d3c7026c7e388bd69978cd7911b4b618e573b6d94dd824"
            ]
          },
          "header_signature": "d87e5e35d2cb4b87a4370713801e817682f6ac374078c7499594e22fbbf4e7a916d9eed0f16d90ddf6eee1a4e03ab128461f1e5b994e48e45b858c3c1323d4c1",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e6717446969d17c80a07e4cadbf96ab2c7379d629bf01057744411f6c22a8a757e1998"
                ],
                "nonce": "0xbf0a673b74a82ef6",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e6717446969d17c80a07e4cadbf96ab2c7379d629bf01057744411f6c22a8a757e1998"
                ],
                "payload_sha512": "7e11fe167e6afb4dc3fed5a0256ab40b6debaf1121d8c2d4bde499ee47928995892ff231f44f9e9d45f7c9c209ccec66928ef693f140947037c5fb242eabe887",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "2e98f4712cc0ffbc7b92541e29c8f91e8d34e5439c8502e08ae96bbf269eba410053025974c7a5d6a4d3c7026c7e388bd69978cd7911b4b618e573b6d94dd824",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUhVakFxcCtOU2ljVEFKaktWVW9oV0lCUHZULzNwcmtLQ1ZmTjhvVHRzSG1IMGIrcDlxNkRtRUJ5M0pzV1lJbVdGNWdwRkdIdmUycVZGQU9KVEdwRmdBPT1nbnVtX2JndPtAI8zMzMzMzWhncm91cF9pZGpncm91cF9jb2Rl"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "d87e5e35d2cb4b87a4370713801e817682f6ac374078c7499594e22fbbf4e7a916d9eed0f16d90ddf6eee1a4e03ab128461f1e5b994e48e45b858c3c1323d4c1"
        ],
        "block_num": "25",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "22d8764542e2f8072cc3676a46537a0eb74997566affca136a54d945aee9ab906965eef6ede62f457a7fc55e81a343902c0a7ee91df5fba3fb4d696dc255ddab",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "cee991ee63e66d850fccf2c4d4fa01cc78e2c610cf93535f6fb9d7b2f89e38a0"
      },
      "header_signature": "eb595f67534aebfc24a4f7d176e0b29aea13106515b0043cea8c3423814122c66a79034b6dbc69b5ea0ef46883b007422375946865f75fc6dd68587a80b2f386"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "9bbd1f0be6004d4d356eaac7acbcb688a9f7b19f069cf3e2cf7759b9184abaad013e67ce1098163dc2afd80c0b1d7d98e41921a2233cdbf51ce70a2ac2dad0b3"
            ]
          },
          "header_signature": "6a33e01eadaca492f9a3f2e797ead8b268f16fe38b2276c94b785751b27558370280a503dd62e61e01f5c5aa63803ace058729190695b2530fa17465484319b8",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e6717446969d17c80a07e4cadbf96ab2c7379d629bf01057744411f6c22a8a757e1998"
                ],
                "nonce": "0x95551242a4fa7e6b",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e6717446969d17c80a07e4cadbf96ab2c7379d629bf01057744411f6c22a8a757e1998"
                ],
                "payload_sha512": "dddd3899738f01952593f4d8262ec1d358c455f84f0701402a8508c6e1a1495e5356cc7c981fb31bd60a3c328fe2b3e6b50dc7807271ba1ac4e2e5cf440625a8",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "9bbd1f0be6004d4d356eaac7acbcb688a9f7b19f069cf3e2cf7759b9184abaad013e67ce1098163dc2afd80c0b1d7d98e41921a2233cdbf51ce70a2ac2dad0b3",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUhVakFxcCtOU2ljVEFKaktWVW9oV0lCUHZULzNwcmtLQ1ZmTjhvVHRzSG1IMGIrcDlxNkRtRUJ5M0pzV1lJbVdGNWdwRkdIdmUycVZGQU9KVEdwRmdBPT1nbnVtX2JndAdoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "6a33e01eadaca492f9a3f2e797ead8b268f16fe38b2276c94b785751b27558370280a503dd62e61e01f5c5aa63803ace058729190695b2530fa17465484319b8"
        ],
        "block_num": "24",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "237a3cd09a318d84fd30491bd5ab63c78aaae893df9afa011679a5bf4483e5ab0a95ab36937228233b14dd676a22eaf7813ce36ac77ba03335821742ed8b457c",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "92774dae6de98f63970997fe9b7818ab7390e34e9e54d4100a3137c32be706a5"
      },
      "header_signature": "22d8764542e2f8072cc3676a46537a0eb74997566affca136a54d945aee9ab906965eef6ede62f457a7fc55e81a343902c0a7ee91df5fba3fb4d696dc255ddab"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "57450c874eb00f9a6b583a790a0d130d52b5ecbf0576d933cafd74337ba233ee706948420528b929fda4d84e64c4f57279c75bbb501b9740ceb65a5a2dec3477"
            ]
          },
          "header_signature": "bc1cf8f3c3652cd37946c7afd0e33e82a7c0d85cfc72b01635af4841884c6a511c2fa75edadb2a71c7e3b8d285eaa4dad1a7289e7ea6758cbbfd14cc83482658",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0xe96b6a859053d880",
                "outputs": [
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "b6eb29fd2b1fe850b42a38019dc6b54fbf174e00e89334f8a02a8ae481a755aecb719787816dd99fb65fa987bcf102d1e229c4f288ad52200f9fa694ea13396c",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "57450c874eb00f9a6b583a790a0d130d52b5ecbf0576d933cafd74337ba233ee706948420528b929fda4d84e64c4f57279c75bbb501b9740ceb65a5a2dec3477",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFUy9VZExFT0JYUGhYTnV2VEN4dnYxNDJBR1d6Q2FpZW8yMkZ2dW5zd2k4ZVIrRlIzNThmTFRwVWpRVzlaOHgwNlp6Zk15NmhlMTFHTXB2emcxb3lhU0E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndA9oZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "bc1cf8f3c3652cd37946c7afd0e33e82a7c0d85cfc72b01635af4841884c6a511c2fa75edadb2a71c7e3b8d285eaa4dad1a7289e7ea6758cbbfd14cc83482658"
        ],
        "block_num": "23",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "85fcffe1fd4b70d1d9e995168b061ab8cebdbcfbeb104ad17ead9d5377f789205650f74378a62c68c5bfabaf1e49cfe0756ce656eb9cd49a621c55bcf6ee8eed",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "9d98664bb715fad9837fae98a0c08116d4e5487d27ac7aa77e7b9fdb88723f50"
      },
      "header_signature": "237a3cd09a318d84fd30491bd5ab63c78aaae893df9afa011679a5bf4483e5ab0a95ab36937228233b14dd676a22eaf7813ce36ac77ba03335821742ed8b457c"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "20ecd3a5e11bf281efba4bf779bcdb3a867a5fdf32b8f5c6a7163401cf84fdd7072e73edfeea635411764ab1cbf3536f49634920dc8ce566f9e4d3be6ca6c0f4"
            ]
          },
          "header_signature": "9426474a23dccbed23541879d4ad171891fa591dacfb46962a61a7cb9eab91354e8ad5dfcfb12fe984b41eea52dd892447bc963f05e05989d423874e76cf181a",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0xec6834bfb1adf057",
                "outputs": [
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "d03baf9ef848a08b13d11bb3d0863e32adc65fc091683748d339a4ad74994f2b79738d8a3985b0b8a141439dc82194a1bea7ca3e901bdfba890f2b00795edcae",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "20ecd3a5e11bf281efba4bf779bcdb3a867a5fdf32b8f5c6a7163401cf84fdd7072e73edfeea635411764ab1cbf3536f49634920dc8ce566f9e4d3be6ca6c0f4",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFUy9VZExFT0JYUGhYTnV2VEN4dnYxNDJBR1d6Q2FpZW8yMkZ2dW5zd2k4ZVIrRlIzNThmTFRwVWpRVzlaOHgwNlp6Zk15NmhlMTFHTXB2emcxb3lhU0E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "9426474a23dccbed23541879d4ad171891fa591dacfb46962a61a7cb9eab91354e8ad5dfcfb12fe984b41eea52dd892447bc963f05e05989d423874e76cf181a"
        ],
        "block_num": "22",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "155da15e70279bda24cb1c09e95f8e3127b444d62d62a88cef0a440a375ca0d7673e021bca1eb76ad7fc7e94dd992601c9d8b1989035c27dde95c1d2e57bbb48",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "9d98664bb715fad9837fae98a0c08116d4e5487d27ac7aa77e7b9fdb88723f50"
      },
      "header_signature": "85fcffe1fd4b70d1d9e995168b061ab8cebdbcfbeb104ad17ead9d5377f789205650f74378a62c68c5bfabaf1e49cfe0756ce656eb9cd49a621c55bcf6ee8eed"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "b5b236f6eef1a10f4d9d533449dac482ed76770f0342da78ddeaae693b5410223d496248aadb399f16095a362efbfad556eac989519a53b528d4ae495cdd2a4a"
            ]
          },
          "header_signature": "202144267efb415f73c0e37cc1215dfd33fe0c4b0d5431ecf3e9180e983ae2a343dd4d68878d116988057c611ce7a98e883a9e15586165ee4e2444d269b6430a",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289",
                  "e671747e28000d49ca88783a127d8b8fe589ea62ba399833f78fd24f4e9a62fffb2fcd"
                ],
                "nonce": "0xc2d3e0c3539a114d",
                "outputs": [
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289",
                  "e671747e28000d49ca88783a127d8b8fe589ea62ba399833f78fd24f4e9a62fffb2fcd"
                ],
                "payload_sha512": "cb0b0a6461a53dfa4dedddecf6e794b128356b6279eae45eee9a618876ffd28d4b677001b8bf5b3f6f45f741d1da47372a2768fa4894d4a4520aaaf01e59461e",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "b5b236f6eef1a10f4d9d533449dac482ed76770f0342da78ddeaae693b5410223d496248aadb399f16095a362efbfad556eac989519a53b528d4ae495cdd2a4a",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFUy9VZExFT0JYUGhYTnV2VEN4dnYxNDJBR1d6Q2FpZW8yMkZ2dW5zd2k4ZVIrRlIzNThmTFRwVWpRVzlaOHgwNlp6Zk15NmhlMTFHTXB2emcxb3lhU0E9PWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRTJTNkdBc2h0cGYvWVVtZUpBQ0pPeDArWE9YdDJmenBqcHZOTGcxazE1d01jcVFUdTgzRVZ5UXhyYUp1YzR6dER4aHVjNTlLSE5SbExmZmxQQWsvVFNnPT1nbnVtX2JndPtANMzMzMzMzWhncm91cF9pZGpncm91cF9jb2Rl"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "202144267efb415f73c0e37cc1215dfd33fe0c4b0d5431ecf3e9180e983ae2a343dd4d68878d116988057c611ce7a98e883a9e15586165ee4e2444d269b6430a"
        ],
        "block_num": "21",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "f7f6134e3816cf4a166393970e6484674f0584071e9aa0ecfdf8a3083d221ec2324e5e03af43e872e49a795ad282ca1bd31d4223a8d9e6b81fc4115d51c461c6",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "9d98664bb715fad9837fae98a0c08116d4e5487d27ac7aa77e7b9fdb88723f50"
      },
      "header_signature": "155da15e70279bda24cb1c09e95f8e3127b444d62d62a88cef0a440a375ca0d7673e021bca1eb76ad7fc7e94dd992601c9d8b1989035c27dde95c1d2e57bbb48"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "1e6a4c0a74afe6e7fd0ccdb8f64707451cf968de1334ae309b42846dbaf7821e14f5858ecbe97c8a9ef194f8647edecec60147b5a4d3b68135f9159c4a8736e2"
            ]
          },
          "header_signature": "3a58b65a5fe3c417b46ab895ba9caabcb9361bb3b021361b159f8d13df3aacee138d4816e64dd995e44bb9c0a1f85c559e368b23db115252723865a1d3cdcd4f",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0xceb44dd51d0e0449",
                "outputs": [
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "d03baf9ef848a08b13d11bb3d0863e32adc65fc091683748d339a4ad74994f2b79738d8a3985b0b8a141439dc82194a1bea7ca3e901bdfba890f2b00795edcae",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "1e6a4c0a74afe6e7fd0ccdb8f64707451cf968de1334ae309b42846dbaf7821e14f5858ecbe97c8a9ef194f8647edecec60147b5a4d3b68135f9159c4a8736e2",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFUy9VZExFT0JYUGhYTnV2VEN4dnYxNDJBR1d6Q2FpZW8yMkZ2dW5zd2k4ZVIrRlIzNThmTFRwVWpRVzlaOHgwNlp6Zk15NmhlMTFHTXB2emcxb3lhU0E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "3a58b65a5fe3c417b46ab895ba9caabcb9361bb3b021361b159f8d13df3aacee138d4816e64dd995e44bb9c0a1f85c559e368b23db115252723865a1d3cdcd4f"
        ],
        "block_num": "20",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "e54639edae006d4b17a86897bf26f93b459b47ff6206a159bb7e36bb2eabf3f742dae87428b96c2d24581a6705ab3fe123a4398937b76c2b42eb71e87c7292c5",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "d626d2aae076aef782727d863e69849fe7259ac002eba628859cac04c2ae6868"
      },
      "header_signature": "f7f6134e3816cf4a166393970e6484674f0584071e9aa0ecfdf8a3083d221ec2324e5e03af43e872e49a795ad282ca1bd31d4223a8d9e6b81fc4115d51c461c6"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "1575827e978aeb48713d410f3e2295df8e75b6219ae96edcc858c105607c039b4625fc1deceda64d2ef5defe55281677b7b8d84ff84bc6a3416a5ae3fdffd6f8"
            ]
          },
          "header_signature": "1fb413759f7f6fb8e8896ee41204836689c52918711f6fac2c34029f5041307e5f3ca5461902896ae6ae3ddb77b90f5d56660d4ca5678a372288805149090d40",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0x78273d93c9f7733",
                "outputs": [
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "d03baf9ef848a08b13d11bb3d0863e32adc65fc091683748d339a4ad74994f2b79738d8a3985b0b8a141439dc82194a1bea7ca3e901bdfba890f2b00795edcae",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "1575827e978aeb48713d410f3e2295df8e75b6219ae96edcc858c105607c039b4625fc1deceda64d2ef5defe55281677b7b8d84ff84bc6a3416a5ae3fdffd6f8",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFUy9VZExFT0JYUGhYTnV2VEN4dnYxNDJBR1d6Q2FpZW8yMkZ2dW5zd2k4ZVIrRlIzNThmTFRwVWpRVzlaOHgwNlp6Zk15NmhlMTFHTXB2emcxb3lhU0E9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "1fb413759f7f6fb8e8896ee41204836689c52918711f6fac2c34029f5041307e5f3ca5461902896ae6ae3ddb77b90f5d56660d4ca5678a372288805149090d40"
        ],
        "block_num": "19",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "a745707f7bdacaf469694feeb842d49a64c3682dcdbb73a79701c8da6e24d6912f9807c06e6c80b18602186402ec5a06e1fc6d431e5dcf0586913d354fdd7fb1",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "3022108f9e9b4c2ce82d634e04754bb4b786a3c91b04bfa7d6fabbb50247a57d"
      },
      "header_signature": "e54639edae006d4b17a86897bf26f93b459b47ff6206a159bb7e36bb2eabf3f742dae87428b96c2d24581a6705ab3fe123a4398937b76c2b42eb71e87c7292c5"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "69450a2a1cc9f11b088d0309e04be868b0f5763cdc9061dde3356fefe27c84625d2be59bec1d3b61a1419d4ce926c2da74c8fa87da343824fda720aabd70c6cf"
            ]
          },
          "header_signature": "09d273178f08ff08c021b3ac6feb6d8d97f55b77ae8760b369817c56c753862c7b9461c93e0973cd74518ab609f6e5a2189f02db8c15615d96be86f69c38e445",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289"
                ],
                "nonce": "0xa9996f3690c8eb9b",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289"
                ],
                "payload_sha512": "8797cdca45c826b278104feac640f2cbd8ce74f1c2dee547f13460e0c624dd3f38eedd6eb9b82df8c40751443994effcc7e8b4a52402cefb810635e2bbd66c51",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "69450a2a1cc9f11b088d0309e04be868b0f5763cdc9061dde3356fefe27c84625d2be59bec1d3b61a1419d4ce926c2da74c8fa87da343824fda720aabd70c6cf",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRVMvVWRMRU9CWFBoWE51dlRDeHZ2MTQyQUdXekNhaWVvMjJGdnVuc3dpOGVSK0ZSMzU4ZkxUcFVqUVc5Wjh4MDZaemZNeTZoZTExR01wdnpnMW95YVNBPT1nbnVtX2JndPtAI8zMzMzMzWhncm91cF9pZGpncm91cF9jb2Rl"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "09d273178f08ff08c021b3ac6feb6d8d97f55b77ae8760b369817c56c753862c7b9461c93e0973cd74518ab609f6e5a2189f02db8c15615d96be86f69c38e445"
        ],
        "block_num": "18",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "ae3d4009c63d95addad7b0bf610b70ffcf3f9827d03e9e80c633a8cfc931987a740f8067a92784ec06964afc69273b736eae6f7f7629a01346b7789fc9ea651c",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "4bca20a648e151f062d84a51fe5016a462fcc4be8ff15ae49c528cd21d5fbcd3"
      },
      "header_signature": "a745707f7bdacaf469694feeb842d49a64c3682dcdbb73a79701c8da6e24d6912f9807c06e6c80b18602186402ec5a06e1fc6d431e5dcf0586913d354fdd7fb1"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "1428c1aa02e49ba57f22a8359d5cacc0552396f1973c63361cbd7ec2c939b47a73b282bedf443219c358c73889e08dd6cb9518860d3d6d1d8dcbaaf22ad6b681"
            ]
          },
          "header_signature": "d464c1b5d57ccdb0cefd42a26b2440e8bba6dfee488820555ef9b831f14c105d515c2852378445edb7822d03baa55dc87314437664f959b664c82fa33455b160",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289"
                ],
                "nonce": "0xf709f85dd46bae01",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289"
                ],
                "payload_sha512": "8797cdca45c826b278104feac640f2cbd8ce74f1c2dee547f13460e0c624dd3f38eedd6eb9b82df8c40751443994effcc7e8b4a52402cefb810635e2bbd66c51",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "1428c1aa02e49ba57f22a8359d5cacc0552396f1973c63361cbd7ec2c939b47a73b282bedf443219c358c73889e08dd6cb9518860d3d6d1d8dcbaaf22ad6b681",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRVMvVWRMRU9CWFBoWE51dlRDeHZ2MTQyQUdXekNhaWVvMjJGdnVuc3dpOGVSK0ZSMzU4ZkxUcFVqUVc5Wjh4MDZaemZNeTZoZTExR01wdnpnMW95YVNBPT1nbnVtX2JndPtAI8zMzMzMzWhncm91cF9pZGpncm91cF9jb2Rl"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "d464c1b5d57ccdb0cefd42a26b2440e8bba6dfee488820555ef9b831f14c105d515c2852378445edb7822d03baa55dc87314437664f959b664c82fa33455b160"
        ],
        "block_num": "17",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "21838f2eb8609dfe5ab2078f683d14ffd340aa62c2052e19669a80c21678bb0619f4842a175ab3a610e2d11646cdc3c3f54120db334fd9830b36062cb56bd445",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "13577d368f431eefd45a7a95e191778b789275b30d0ecd19915c4782bff78451"
      },
      "header_signature": "ae3d4009c63d95addad7b0bf610b70ffcf3f9827d03e9e80c633a8cfc931987a740f8067a92784ec06964afc69273b736eae6f7f7629a01346b7789fc9ea651c"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "74ad1f9b5e2617374259facfeb73ac108b45e8e8ee73cb42964a4fc7880a494511e938b3157d30abc0a523630296b372609740cb522c4a25e53b086f6c06f84d"
            ]
          },
          "header_signature": "e9686ae457cda0d61612af6b12d92795a3bc650577d983df2e3c9fabe36e03871365059eeeae2fd99fde4e3fb8cffaa45264de94a0ff6045129256fae44d1146",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174b4941045b1f9a080bef48acf6c1fa4344b885cf65c6430f835a08ba1e6f94c01"
                ],
                "nonce": "0x7170c9d68d2374bb",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174b4941045b1f9a080bef48acf6c1fa4344b885cf65c6430f835a08ba1e6f94c01"
                ],
                "payload_sha512": "25272f6cb8815adcaf7307dbdd65dc3da0901dad9308bd7fe4748926675de331a700e6dd3a204c0ec1f4fafd67bbdff987cbbb4b6a2225ba4d8fcb137e73b0c0",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "74ad1f9b5e2617374259facfeb73ac108b45e8e8ee73cb42964a4fc7880a494511e938b3157d30abc0a523630296b372609740cb522c4a25e53b086f6c06f84d",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRWd2bkpvMGxnNGpKbUxCbkVGYmhKeG9NekhvRVRuOHltQjY4ODc4Nkd3Skl6dVJOZm1BUzBNc0ttWWczNGczcGZuS3k3V3RKUnptbE9HNUdiUWFaTy93PT1nbnVtX2JndAdoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "e9686ae457cda0d61612af6b12d92795a3bc650577d983df2e3c9fabe36e03871365059eeeae2fd99fde4e3fb8cffaa45264de94a0ff6045129256fae44d1146"
        ],
        "block_num": "16",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "cd7ed943c46d238e27163c9e88b3c55704e7bdf29fa3a5878d3bb7d68d10f766660d39903e5c97d643f6f63bbd9e456d957e3f1c7d8648f9d85a7e9d117736a1",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "a9782b62d3849934ac2fc7e7648fd02c7b69ecc10b34c4c33c45d7185772e6b5"
      },
      "header_signature": "21838f2eb8609dfe5ab2078f683d14ffd340aa62c2052e19669a80c21678bb0619f4842a175ab3a610e2d11646cdc3c3f54120db334fd9830b36062cb56bd445"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "befe293e14ffa3d1adcb2eb6f873d5d75f4b46b82da889618b4cc20be69ed8670dd4f02b895490da0ad876232955e1f7016325b8b0549a248fa7ded55a97db64"
            ]
          },
          "header_signature": "148357350704031b63a5cef6e15d3bba46a810bff3a0632ecd94c964e1dc726c44c6f9600b62db8bff3f520e4d4167bf048adb807863f4d057dd619aeef81930",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289"
                ],
                "nonce": "0xa47f037dca43839a",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174ac2b16f4cd34f00960881f0110920e58169b677c93892d6682a11ccba4402289"
                ],
                "payload_sha512": "e915ef785e53627dc743ba521ae96f1115e538c068838374f3672fed674e252ad0c93913b12b1c9a5aea30bd978b1edc4505f5e4e35bde8dc9644ca8dfeb073f",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "befe293e14ffa3d1adcb2eb6f873d5d75f4b46b82da889618b4cc20be69ed8670dd4f02b895490da0ad876232955e1f7016325b8b0549a248fa7ded55a97db64",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRVMvVWRMRU9CWFBoWE51dlRDeHZ2MTQyQUdXekNhaWVvMjJGdnVuc3dpOGVSK0ZSMzU4ZkxUcFVqUVc5Wjh4MDZaemZNeTZoZTExR01wdnpnMW95YVNBPT1nbnVtX2JndAdoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "148357350704031b63a5cef6e15d3bba46a810bff3a0632ecd94c964e1dc726c44c6f9600b62db8bff3f520e4d4167bf048adb807863f4d057dd619aeef81930"
        ],
        "block_num": "15",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "a05294af13927f5ff20855f29027e2a8db2f653ddced6746bc2b27351bea2a21027e8889b334bd3ed7b3da7a44e524dfcd51e706ccc21643414ddac9cd53779d",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "cdbab0ddfe15faa442802dfa9ba4d175981a21455ec218f4a98e32efbc26fb67"
      },
      "header_signature": "cd7ed943c46d238e27163c9e88b3c55704e7bdf29fa3a5878d3bb7d68d10f766660d39903e5c97d643f6f63bbd9e456d957e3f1c7d8648f9d85a7e9d117736a1"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
            "transaction_ids": [
              "7b8d29f71e3be2b8366e0bc0a206ec893b7533f7669b36e6a8c96109d307ef430999a97a796536478aa0abd14978d1cd96240d950894da8d72b87de25f42aba4"
            ]
          },
          "header_signature": "14227d53c336318730519eaaee0a8138dfa8014b8deaad730d813c1c5daadde16ca8d730604dad8b9a6bd319160bdc27804a102025682befabc76deb09e19f94",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "nonce": "0x317785f9c42ee86f",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "payload_sha512": "b4941892413e37c805068b2641064a28c9b3a9100dd8dd91aa77853f8ab6f0504f16cab1a838c2f935e7b2f47ab6980e344d7d20b4705eafd2f00c1a4b2e72c4",
                "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f"
              },
              "header_signature": "7b8d29f71e3be2b8366e0bc0a206ec893b7533f7669b36e6a8c96109d307ef430999a97a796536478aa0abd14978d1cd96240d950894da8d72b87de25f42aba4",
              "payload": "pWROYW1leEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVndG9fYWRkcnh4TUZZd0VBWUhLb1pJemowQ0FRWUZLNEVFQUFvRFFnQUVLcDFwemVIQUNTZDFEMGliRTVmNEF3Z0NKYUJiSXJueG41MzFtNE1NWHFwNkNWaHJkUzhxQ24vYmFKRHA1OGV5a2tVcmlkbkVzY1liZlBaU2QzcllkUT09Z251bV9iZ3RjNTAwaGdyb3VwX2lkY2FueWRWZXJiaHRyYW5zZmVy"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "14227d53c336318730519eaaee0a8138dfa8014b8deaad730d813c1c5daadde16ca8d730604dad8b9a6bd319160bdc27804a102025682befabc76deb09e19f94"
        ],
        "block_num": "14",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "ba8a5580777acab467b8f82805b3160842354d81cac62c6a86d1cce5a5f0afa57cabfd15b3256e79ac8fc6c6545ea48586fbc7fe5a799e9ebb19139fcaa36e3f",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "bfb2573fe57662267ebcfaed24b50d0148025dee90402b0e282b780808d9da87"
      },
      "header_signature": "a05294af13927f5ff20855f29027e2a8db2f653ddced6746bc2b27351bea2a21027e8889b334bd3ed7b3da7a44e524dfcd51e706ccc21643414ddac9cd53779d"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "f712dbbbdc22457e898e55342a2913098c61850d6a6bee077e2326605c78d14d4118cbd7c7bc8d76fa3156c328596ad1125c4ff0d45f625a975fc779c1fabdc2"
            ]
          },
          "header_signature": "e849136a10d20186139e5bd9e8b0105ad8bca8c6f26ebe97bf25ff841fc2770166aa5afbe5fe393891d4d102f8bc20b09ae7a9ae27586589bbde83e06dca9a51",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e671747e28000d49ca88783a127d8b8fe589ea62ba399833f78fd24f4e9a62fffb2fcd",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0x28fae228ae6910d7",
                "outputs": [
                  "e671747e28000d49ca88783a127d8b8fe589ea62ba399833f78fd24f4e9a62fffb2fcd",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "f7fefedd01568642c5482aeaf7813875a6e13a576a18be31b86514c69609d1fc8ac2805256f74356ce5ff6ba2a3fb897fa03892ad8c3d33ff063bb6b5a0f7f06",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "f712dbbbdc22457e898e55342a2913098c61850d6a6bee077e2326605c78d14d4118cbd7c7bc8d76fa3156c328596ad1125c4ff0d45f625a975fc779c1fabdc2",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFMlM2R0FzaHRwZi9ZVW1lSkFDSk94MCtYT1h0MmZ6cGpwdk5MZzFrMTV3TWNxUVR1ODNFVnlReHJhSnVjNHp0RHhodWM1OUtITlJsTGZmbFBBay9UU2c9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "e849136a10d20186139e5bd9e8b0105ad8bca8c6f26ebe97bf25ff841fc2770166aa5afbe5fe393891d4d102f8bc20b09ae7a9ae27586589bbde83e06dca9a51"
        ],
        "block_num": "13",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "a828d00a2a2c0775a5ce8ffebf7c14377f1b28612813fa62f8dca9162d860ed02534ba8bc3e5e02da07166d940b5772f7c131de58c54ca4c06b63ad3ddb8b3fc",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "c08288700dd697f504d19ce5fac584352e07869e33e3c231c97f7d1739858c6e"
      },
      "header_signature": "ba8a5580777acab467b8f82805b3160842354d81cac62c6a86d1cce5a5f0afa57cabfd15b3256e79ac8fc6c6545ea48586fbc7fe5a799e9ebb19139fcaa36e3f"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "757fdf9545597a218f0553922febc21162cec881ac1c7dd277a2ab307ec68f0940d1fdc460c40db26a7adae4f495bb982cd220ea46c3a8d4696a013e562e66af"
            ]
          },
          "header_signature": "b3997d5ba00bcef8f0271cf534773090b5d16b670e18dd6437b11aa4875d922d67e49670a4082e2cb920125dd1ad078e6ab4f3baad36fcc9a5555d6968ffa8e2",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0x2adf185a1d231bba",
                "outputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "5a23190965f6195fdf1c77a5faef4d7dd17ef8b9e3eaa6e91ecd8bba0dedd2a5fcf845709ed852448505e79658a86c06118b012f189cd972f1005d51dce971cd",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "757fdf9545597a218f0553922febc21162cec881ac1c7dd277a2ab307ec68f0940d1fdc460c40db26a7adae4f495bb982cd220ea46c3a8d4696a013e562e66af",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFS3AxcHplSEFDU2QxRDBpYkU1ZjRBd2dDSmFCYklybnhuNTMxbTRNTVhxcDZDVmhyZFM4cUNuL2JhSkRwNThleWtrVXJpZG5Fc2NZYmZQWlNkM3JZZFE9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "b3997d5ba00bcef8f0271cf534773090b5d16b670e18dd6437b11aa4875d922d67e49670a4082e2cb920125dd1ad078e6ab4f3baad36fcc9a5555d6968ffa8e2"
        ],
        "block_num": "12",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "270321ae7d32bcae4fc741399353fe6ae56f2c2b5e7628fa94da57444ebc3512332b86425a0218e894b11dbdf95d13daf8a012ad11d5db3b4756c7c9c5562fcf",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "c08288700dd697f504d19ce5fac584352e07869e33e3c231c97f7d1739858c6e"
      },
      "header_signature": "a828d00a2a2c0775a5ce8ffebf7c14377f1b28612813fa62f8dca9162d860ed02534ba8bc3e5e02da07166d940b5772f7c131de58c54ca4c06b63ad3ddb8b3fc"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "502207af73673f5a610aa2f0b48340179ca23c58f37db2e5ae0e715f6188b8305be35dd514079c3294abd8eb401e19fc0ee758aff47b0b1e09d41c6fa5fac20c"
            ]
          },
          "header_signature": "6d4faaded44d9d5757d72e847f349f12aa4acf55fe61a1f29d6890139516c45e04e80efc0b070b92a1ecdad4e5197d08b44678f1afb618d8626131b6e0207bd0",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0x3ed845c230a19419",
                "outputs": [
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "5a23190965f6195fdf1c77a5faef4d7dd17ef8b9e3eaa6e91ecd8bba0dedd2a5fcf845709ed852448505e79658a86c06118b012f189cd972f1005d51dce971cd",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "502207af73673f5a610aa2f0b48340179ca23c58f37db2e5ae0e715f6188b8305be35dd514079c3294abd8eb401e19fc0ee758aff47b0b1e09d41c6fa5fac20c",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFS3AxcHplSEFDU2QxRDBpYkU1ZjRBd2dDSmFCYklybnhuNTMxbTRNTVhxcDZDVmhyZFM4cUNuL2JhSkRwNThleWtrVXJpZG5Fc2NZYmZQWlNkM3JZZFE9PWd0b19hZGRyeEIwMjM2YmQwYjJmNjA0MTMzOGZmZTVhMjIzNmJlODlmMzY5ZWMzMDk0ZTUyNDdiYjQwYWFkM2FhYTE4ZmYyZGEzOTVnbnVtX2JndANoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "6d4faaded44d9d5757d72e847f349f12aa4acf55fe61a1f29d6890139516c45e04e80efc0b070b92a1ecdad4e5197d08b44678f1afb618d8626131b6e0207bd0"
        ],
        "block_num": "11",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "af5950790b69c9b9bf065f31045f6544363796fa0cb64d5ddfaf92acb1c3d7716c2e7ade16f4fb799fe20c389b8f6fbd8f841d6452c6aa1bdfd7df3fc0670d88",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "4247907a58fef97d152d6caf4d347e6bf5bfbe977a584e6db3c87d1ee9ca012d"
      },
      "header_signature": "270321ae7d32bcae4fc741399353fe6ae56f2c2b5e7628fa94da57444ebc3512332b86425a0218e894b11dbdf95d13daf8a012ad11d5db3b4756c7c9c5562fcf"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "98b29538158ff7773a870092fd12ab0b6fee9f5ba09866a73bf7810e107d1cc56b29692db33798f219e9049d2934c2f023f9c972e94eac444dc22edc35867787"
            ]
          },
          "header_signature": "abeee8caee7256270fcc12eba438a9b2228e0cc58795652ac7a057fa0c79864432587de58e571aa7719c78e9f6982d9cd714738e87f33d5cf73b070562098cf1",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "nonce": "0x5958bb6349f8e845",
                "outputs": [
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "payload_sha512": "3496b686fe0b762ab97b74ae2c301deba8fabd4cdaa99000763705d9b14b9cd487dd64ea3fb87141685cc95e56cdfd6e3c36bc0dc32c6001dfa12a232fa98b60",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "98b29538158ff7773a870092fd12ab0b6fee9f5ba09866a73bf7810e107d1cc56b29692db33798f219e9049d2934c2f023f9c972e94eac444dc22edc35867787",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFdDhIUVFkNnQrNExqSXdXRmxCbDBjM3RRelpzdFNwQWJsZ2YxTE9RVFBzTUlqZ0UyU082Q1k1R2hFU0JrRHBDVTZDQ1Bod0FqR1hUNmw5WXc5RGhmakE9PWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUtwMXB6ZUhBQ1NkMUQwaWJFNWY0QXdnQ0phQmJJcm54bjUzMW00TU1YcXA2Q1ZocmRTOHFDbi9iYUpEcDU4ZXlra1VyaWRuRXNjWWJmUFpTZDNyWWRRPT1nbnVtX2JndAVoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "abeee8caee7256270fcc12eba438a9b2228e0cc58795652ac7a057fa0c79864432587de58e571aa7719c78e9f6982d9cd714738e87f33d5cf73b070562098cf1"
        ],
        "block_num": "10",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "4007d441c5ee5824e97a09535cb15681f4005ed4fe237e1aa898a7c19a6545995c9f63149c4ab9727dc4796d7936fe0485114a952900a1ebf6f557b40b4934ea",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "4ed75ab1e301663f51faca9ffa4b9080817a9aa3646c3d0afac51ac9326c1ce8"
      },
      "header_signature": "af5950790b69c9b9bf065f31045f6544363796fa0cb64d5ddfaf92acb1c3d7716c2e7ade16f4fb799fe20c389b8f6fbd8f841d6452c6aa1bdfd7df3fc0670d88"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "0a9178adb2f75eb3a3d8ed42872cbf533adeb8464ed834c2afae91fd473518ae6cca839daf248c3c54fdd991513fa212f5145f8545a273e89364c5e5bf15ba50"
            ]
          },
          "header_signature": "0b02b1fda676edd6095ebb8365d1bad4753b53794919766d401fb5d8bc9d7860405d9a1c77014f3d18a4e116d05187421bd7e3ad0abe0d8d3f9a1ba351eea23d",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "nonce": "0xa2df8833ed1b71b4",
                "outputs": [
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "payload_sha512": "0ec0d874e42d3334d357736adce56ae48dd822bebc09384b61489b63b0d03055050161a03e1e9a0a0723a9fb61331a2df34f6859ac20f530a12488cdb31ad744",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "0a9178adb2f75eb3a3d8ed42872cbf533adeb8464ed834c2afae91fd473518ae6cca839daf248c3c54fdd991513fa212f5145f8545a273e89364c5e5bf15ba50",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFdDhIUVFkNnQrNExqSXdXRmxCbDBjM3RRelpzdFNwQWJsZ2YxTE9RVFBzTUlqZ0UyU082Q1k1R2hFU0JrRHBDVTZDQ1Bod0FqR1hUNmw5WXc5RGhmakE9PWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUtwMXB6ZUhBQ1NkMUQwaWJFNWY0QXdnQ0phQmJJcm54bjUzMW00TU1YcXA2Q1ZocmRTOHFDbi9iYUpEcDU4ZXlra1VyaWRuRXNjWWJmUFpTZDNyWWRRPT1nbnVtX2JndAFoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "0b02b1fda676edd6095ebb8365d1bad4753b53794919766d401fb5d8bc9d7860405d9a1c77014f3d18a4e116d05187421bd7e3ad0abe0d8d3f9a1ba351eea23d"
        ],
        "block_num": "9",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "cd337ba747c3d7586e15e743f16fd835ac23f14a82be788bb69abba42dffba3d63bc99e9727cba671e65368e9bb3a86214ff96fd5253966d1ff73858a5cb4372",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "4ed75ab1e301663f51faca9ffa4b9080817a9aa3646c3d0afac51ac9326c1ce8"
      },
      "header_signature": "4007d441c5ee5824e97a09535cb15681f4005ed4fe237e1aa898a7c19a6545995c9f63149c4ab9727dc4796d7936fe0485114a952900a1ebf6f557b40b4934ea"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "d2385703bf2e89102accdab2369e45cce4e752a4a44ab907e4d26cb92a251bb64b3d73da68769f3566072b09e540a8a40bb1077d8ff83502d253173d1e8fb1e3"
            ]
          },
          "header_signature": "d9261f61e1284ec7e0aaab5c6b2106e2146a2706d9319f6e08f90e6d54f6265a44a2c142c24a19fa2c91c837dad3020e95a16607866337d64bafc5fbd318660f",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7",
                  "e67174fe21d6738a7ad4950e2c0159de7deca7d1b2c10020b6c98276d5103fb47182ab"
                ],
                "nonce": "0x615c2e31ea63c583",
                "outputs": [
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7",
                  "e67174fe21d6738a7ad4950e2c0159de7deca7d1b2c10020b6c98276d5103fb47182ab"
                ],
                "payload_sha512": "3fbb73cd525351538f5ba6b0f41c54ee17306f4e171f2fd9fb2cd0208e2a87614963d54706825d226f159a46e976c488cce4992d80bc92afc8ad5cd5c87d1730",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "d2385703bf2e89102accdab2369e45cce4e752a4a44ab907e4d26cb92a251bb64b3d73da68769f3566072b09e540a8a40bb1077d8ff83502d253173d1e8fb1e3",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4eE1GWXdFQVlIS29aSXpqMENBUVlGSzRFRUFBb0RRZ0FFdDhIUVFkNnQrNExqSXdXRmxCbDBjM3RRelpzdFNwQWJsZ2YxTE9RVFBzTUlqZ0UyU082Q1k1R2hFU0JrRHBDVTZDQ1Bod0FqR1hUNmw5WXc5RGhmakE9PWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRVVqUjhnNk9KbWcwR01aZ3VpY25GY2IrZGpaTThPSU81RFAvbGp5L0hXYUxkSGRaZUZGSTJ5ZWNacVJPTGt3WG5mc2s4dWp4Y0Z0Q284OWR6YnlFRjNRPT1nbnVtX2JndPs/+FHrhR64Umhncm91cF9pZGpncm91cF9jb2Rl"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "d9261f61e1284ec7e0aaab5c6b2106e2146a2706d9319f6e08f90e6d54f6265a44a2c142c24a19fa2c91c837dad3020e95a16607866337d64bafc5fbd318660f"
        ],
        "block_num": "8",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "292530b9163eeef29d0236974a5e24cd25a044af1191655e64735efe3174a9d168d53b032c3fdf928fe945824e6afce99413204424875efb788aa4c3ddf2e219",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "6bd615e4f00e11a804d958a7b9e2504798746e93edaab61238cb462c6225a1de"
      },
      "header_signature": "cd337ba747c3d7586e15e743f16fd835ac23f14a82be788bb69abba42dffba3d63bc99e9727cba671e65368e9bb3a86214ff96fd5253966d1ff73858a5cb4372"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "842b63b5f3805737caa50b8155f7a8201d150b759c6ed20a54309ad3f45ee12f0b5dd807e95c101aa03bd12a99fc07ad03346d6327be5b0d4ff46440e3c3fd21"
            ]
          },
          "header_signature": "19dc3eefa4acc8d9efaaca4aafcea92608f372ebb1ffc6090fe021f24251fcab6dbfa65a13c483eace290dbbfd6d328ff69c38c2197743e1881fd4a2bdf8bda7",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e671745b877e13c3932c90c1afea71a754891e230dec32d4feaa6943260ff8815b3647"
                ],
                "nonce": "0xdfb6163daaf27367",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e671745b877e13c3932c90c1afea71a754891e230dec32d4feaa6943260ff8815b3647"
                ],
                "payload_sha512": "8b6c447001aeb53fd0de74ba25d1fcf651b6b1004a79889ec8d987ec3a51c64404f6b0e3867cf5d7ecac35d9a7ad4cd12e185a60c7eb587c0fb0e7810294fe9f",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "842b63b5f3805737caa50b8155f7a8201d150b759c6ed20a54309ad3f45ee12f0b5dd807e95c101aa03bd12a99fc07ad03346d6327be5b0d4ff46440e3c3fd21",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUlFa0ZvRk1RdlVGemdEM0NhRmp3SVVocE9ld2pCVjBNQWkrYUhRL1grcTdWbGNKK2JVT05nbHJ6UjZ3QXFaNUZjRFpPaWxDemVRMFlJUVBkdk9EL2FnPT1nbnVtX2JndAdoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "19dc3eefa4acc8d9efaaca4aafcea92608f372ebb1ffc6090fe021f24251fcab6dbfa65a13c483eace290dbbfd6d328ff69c38c2197743e1881fd4a2bdf8bda7"
        ],
        "block_num": "7",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "6f2149718a46505cc977eb79a4006dfd00b042af8fd8878d43b7fc504f9fbf8f47c68701046cc91b1f4fcadcb96f8a23d0dd164aafcfea3e18a39a9bd26e56f2",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "e0eae0aa223a10e9373ff9a43931c36d164bb50708929c67606dc4a8dbcd286c"
      },
      "header_signature": "292530b9163eeef29d0236974a5e24cd25a044af1191655e64735efe3174a9d168d53b032c3fdf928fe945824e6afce99413204424875efb788aa4c3ddf2e219"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "7d8e419b88178672ff8b6acd7df07f5f2c117e41a6b1e04f880c7f03a7a7e65c77d19ec7b52ed2df60c6b4aa4dca63d0caed91595f4a539b9e05c98e35b6f05c"
            ]
          },
          "header_signature": "4a50da9f6343f7480f4deac05b20eb82e5b39df07a409e97162653930ad39ef87060e9635b63ad11a6b8930188bb35e8490c15dd4f50539f80c10333468403d9",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "nonce": "0x89c6e9463b7fcf57",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174496b51f597b65c803fce1a47a311a48ccca460fecc89d4453595289b5d7d7659"
                ],
                "payload_sha512": "88e4d2f27c28cf0b1e2988bd69a2da55f0c053f5742dab42c12adcfddd7930cbc11a5ced5c607cf8b98c1a1fcd5b2310985c08906bed4552e8e97c624fbf047e",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "7d8e419b88178672ff8b6acd7df07f5f2c117e41a6b1e04f880c7f03a7a7e65c77d19ec7b52ed2df60c6b4aa4dca63d0caed91595f4a539b9e05c98e35b6f05c",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUtwMXB6ZUhBQ1NkMUQwaWJFNWY0QXdnQ0phQmJJcm54bjUzMW00TU1YcXA2Q1ZocmRTOHFDbi9iYUpEcDU4ZXlra1VyaWRuRXNjWWJmUFpTZDNyWWRRPT1nbnVtX2JndAdoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "4a50da9f6343f7480f4deac05b20eb82e5b39df07a409e97162653930ad39ef87060e9635b63ad11a6b8930188bb35e8490c15dd4f50539f80c10333468403d9"
        ],
        "block_num": "6",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "4e2dace33feb42c93e491bf3582101ba1ad98c9a03046e61abc7da6f33547d431c8439eda2e9b7810629c81ee1681a6cf27d46f1e61cbabca94792529f68f239",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "3198259fad2954b8775d64659d8cb6a8b642c01a4e03c45461c3b33bedf97338"
      },
      "header_signature": "6f2149718a46505cc977eb79a4006dfd00b042af8fd8878d43b7fc504f9fbf8f47c68701046cc91b1f4fcadcb96f8a23d0dd164aafcfea3e18a39a9bd26e56f2"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "9c78fd9f5d1463ca7312d51f6782c25b309f373128f0bc9c32a255589f83aca17ae5e5d679b6b8359faab6101aecad7989a3d3bc11f26ad69aafeb9ec08109ed"
            ]
          },
          "header_signature": "4912b7f25bfdd0ad32c836db2f11b547a9a535514c85b9e3b3341c23c389104e2b04797b08305caeff58058c53cf087741b63399ef230fb43f4955d2f660fd99",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174ad67b8f2a26d7ef876d7793382611334a1c2711202da4a54bb77376a0a1b2b6d"
                ],
                "nonce": "0xca948c22f3767b4e",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174ad67b8f2a26d7ef876d7793382611334a1c2711202da4a54bb77376a0a1b2b6d"
                ],
                "payload_sha512": "23a6894c194cf2ecdd72e099a6d2ea3ffb032ce04a522ed65d65b6a801b0e654c518041a189e7e8686b156961772fdca3ce2fea462386d6dd4b12ebab45f469d",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "9c78fd9f5d1463ca7312d51f6782c25b309f373128f0bc9c32a255589f83aca17ae5e5d679b6b8359faab6101aecad7989a3d3bc11f26ad69aafeb9ec08109ed",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRXVYVGZ3VkV4MDNqQVJyd0dHU1ZQYXBMT2xIUm1IREJvcDlwcmJVNVF2b29iQTRYQjhSUjlheDVKV1NBaC91MnM4UzhWRnFxV3F4QWhmekRLeUNQK1l3PT1nbnVtX2JndAdoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "4912b7f25bfdd0ad32c836db2f11b547a9a535514c85b9e3b3341c23c389104e2b04797b08305caeff58058c53cf087741b63399ef230fb43f4955d2f660fd99"
        ],
        "block_num": "5",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "18f820d3bf6c21fe7e57bf7ae2358405035d7109fb9c1e588e7cca3e0d10de7f1a5e22135201decf5b31a5d7da7554e0e4555f8bf7b8886faf1ab8aed56c9e85",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "2e4ca76d131ee9ff3b73ae24e63e81a634d3d2182a08a448e9a4b5ecba6146ba"
      },
      "header_signature": "4e2dace33feb42c93e491bf3582101ba1ad98c9a03046e61abc7da6f33547d431c8439eda2e9b7810629c81ee1681a6cf27d46f1e61cbabca94792529f68f239"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
            "transaction_ids": [
              "7219823fb4583c4301fca020acc18e0c0c34f20e019ae5b2cadeed362cb592a068628e7ff7ebe7a334eba9d8794da671fe52a5a20b56b665ffcaeee96b90636b"
            ]
          },
          "header_signature": "044a875c1bf4d5f82152fcfacdecf0194115f61d887bbde804bf46746338370e75d03b6638cbfa602fca02ba01b4d2343f16918a411aed0093a52e139ac18df2",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0xd7441fa5d7c5c8e2",
                "outputs": [
                  "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "2d444aaac5fe53ca2d47afa99ce3f4656dc39b8545b47f953b7c18da2a7c16597f5b62f264767df45db1e7bc86a1a3d44dddf6c2a1e29c43425905bea47b58c9",
                "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f"
              },
              "header_signature": "7219823fb4583c4301fca020acc18e0c0c34f20e019ae5b2cadeed362cb592a068628e7ff7ebe7a334eba9d8794da671fe52a5a20b56b665ffcaeee96b90636b",
              "payload": "p2ROYW1laUJHWF9Ub2tlbmtwcml2YXRlX2tleXhAMjFmYWQxZGI3YzFlNGYzZmI5OGJiMTZmY2ZmNjk0MmI0YjJiOWY4OTAxOTZiODc1NDM5OWViZmQ3NDcxOGRlMXBldGhlcmV1bV9hZGRyZXNzeCoweEZCMkY3Qzg2ODdGNmQ4NmEwMzFEMkRFM2Q1MWY0YzYyZTgzQWRBMjJnbnVtX2JndGMxMDBpYmd0X3ByaWNlYTFpZGVjX3ByaWNlYTFkVmVyYmRpbml0"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "044a875c1bf4d5f82152fcfacdecf0194115f61d887bbde804bf46746338370e75d03b6638cbfa602fca02ba01b4d2343f16918a411aed0093a52e139ac18df2"
        ],
        "block_num": "4",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "77d4ab81c3f6376c1e69e281f76dada1a7d421130dc10b1d603e3ad3f20b4d2030c603939233cf9050108763bdb8567417399424a3ffce8f455ec60c4f3b742f",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "a7c5586c6d416e9b801101febb12543f9412a2434efb5430365744c66a2f08aa"
      },
      "header_signature": "18f820d3bf6c21fe7e57bf7ae2358405035d7109fb9c1e588e7cca3e0d10de7f1a5e22135201decf5b31a5d7da7554e0e4555f8bf7b8886faf1ab8aed56c9e85"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "8d3c82fe810cacb27b6cf3179c68de6ed9d7d02b29310ca0d62bf1ae5c7f83b71f5378a4150744c05c141f8cf13b818cabaebcde893ef39bc75d4f6190df5963"
            ]
          },
          "header_signature": "e9255cdc9bec8bda18946e5544f0378256ce0ef887f79c4f58779ab7925b93e47779f6b6874274f9f7863411b0765102689d152ea94052cadbdde9305a6f7739",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7"
                ],
                "nonce": "0xfd46871ac09c9742",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174cd229bc85bd9e39399913d0c67200aa450f925d63c7c2e87cf01fcde323f92e7"
                ],
                "payload_sha512": "b68a34d52231432089492fe4b85508fda3689ac24e156e98e2ce69ddbb3886a3d61de591e301a7e8eea25e2dbf0527f834b8b47c7df9f214ff27a76fc8067f9b",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "8d3c82fe810cacb27b6cf3179c68de6ed9d7d02b29310ca0d62bf1ae5c7f83b71f5378a4150744c05c141f8cf13b818cabaebcde893ef39bc75d4f6190df5963",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRXQ4SFFRZDZ0KzRMakl3V0ZsQmwwYzN0UXpac3RTcEFibGdmMUxPUVRQc01JamdFMlNPNkNZNUdoRVNCa0RwQ1U2Q0NQaHdBakdYVDZsOVl3OURoZmpBPT1nbnVtX2JndAdoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "e9255cdc9bec8bda18946e5544f0378256ce0ef887f79c4f58779ab7925b93e47779f6b6874274f9f7863411b0765102689d152ea94052cadbdde9305a6f7739"
        ],
        "block_num": "3",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "3b568b05bb8b3f3238fb4647239642f3e1186b0a2fb34cffa9512fd86f8d1e5c65dd259d4cdb6acceff71dd5b243b15ca088b357e702b80af9fc2f8c1d46fcf9",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "64b1db8cbd5a0399985c540ca189a940a74becbbb3c8c60bd9ca5d71283808b3"
      },
      "header_signature": "77d4ab81c3f6376c1e69e281f76dada1a7d421130dc10b1d603e3ad3f20b4d2030c603939233cf9050108763bdb8567417399424a3ffce8f455ec60c4f3b742f"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
            "transaction_ids": [
              "8efd60b421d54d0a60d0c4de0484ac8e470ab287287854e6624ac3cf6bc0905005ac161d3881a341c0883b2bdc0b2c6bed007b9db0e3b62ae5b3d8f923594db6"
            ]
          },
          "header_signature": "98b0e6bb48b8b84822fd5545581c97f3f852f986697570f2e629356cfebc17985d2de6c4f417fec0575b5db9b9075b371b3f0f7bea2f422eb20d52e473e681a8",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174fe21d6738a7ad4950e2c0159de7deca7d1b2c10020b6c98276d5103fb47182ab"
                ],
                "nonce": "0x9ee96f938c71101",
                "outputs": [
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24",
                  "e67174fe21d6738a7ad4950e2c0159de7deca7d1b2c10020b6c98276d5103fb47182ab"
                ],
                "payload_sha512": "6549d29174846e10024f0c0dd24299b37b10614dac912a295849bdcb0d5757a87f73775810367c49848f7c76173041824e04b72521f9f328936f2db5a4aa3475",
                "signer_public_key": "03b78f8596b1ef5b21f4101449884715007a6a2f6b5d8526d79fac9f26e0ebe304"
              },
              "header_signature": "8efd60b421d54d0a60d0c4de0484ac8e470ab287287854e6624ac3cf6bc0905005ac161d3881a341c0883b2bdc0b2c6bed007b9db0e3b62ae5b3d8f923594db6",
              "payload": "pWRWZXJiaHRyYW5zZmVyZE5hbWV4QjAyMzZiZDBiMmY2MDQxMzM4ZmZlNWEyMjM2YmU4OWYzNjllYzMwOTRlNTI0N2JiNDBhYWQzYWFhMThmZjJkYTM5NWd0b19hZGRyeHhNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRVVqUjhnNk9KbWcwR01aZ3VpY25GY2IrZGpaTThPSU81RFAvbGp5L0hXYUxkSGRaZUZGSTJ5ZWNacVJPTGt3WG5mc2s4dWp4Y0Z0Q284OWR6YnlFRjNRPT1nbnVtX2JndAdoZ3JvdXBfaWRqZ3JvdXBfY29kZQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "98b0e6bb48b8b84822fd5545581c97f3f852f986697570f2e629356cfebc17985d2de6c4f417fec0575b5db9b9075b371b3f0f7bea2f422eb20d52e473e681a8"
        ],
        "block_num": "2",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "da7a4952b8f39607647ef5c2681c66c45aec295f71754af2fbdccae6440ddb70091c21e14b4d0da9ab8b5072485edc54beffb855c914e7f8284fdee97a359d49",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "d2da7a5bab8ed55e8f9c2af39f9ba921a617348655ed26d4893c63a47f749b24"
      },
      "header_signature": "3b568b05bb8b3f3238fb4647239642f3e1186b0a2fb34cffa9512fd86f8d1e5c65dd259d4cdb6acceff71dd5b243b15ca088b357e702b80af9fc2f8c1d46fcf9"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
            "transaction_ids": [
              "472225c2ac4e3fc62a29b8fd55789e60955c796a08439ebad49813495db732a80602028e1a808b25f7ab4dfaf312be46170ca07bee750ac88a837bab366874bb"
            ]
          },
          "header_signature": "92cfc1d5a202e42c28412520ca231748882145462f72cac082ad9279bfb077a07a0e14f47b3201e4544d7e9987491ca2441eb9b047f19597ca37ca79ee942ce2",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f",
                "dependencies": [],
                "family_name": "smart-bgt",
                "family_version": "1.0",
                "inputs": [
                  "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "nonce": "0x53d845f244dbfb9f",
                "outputs": [
                  "e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f",
                  "e67174484b69b7cbe699982a63754efda654c528f1d8f96d3595fd8e2fc28e8bbeca24"
                ],
                "payload_sha512": "663ebd38288ae2251025e25c5e5414424c6ad5f2a13b9dcb39a91d027fcb5f608ba3dc3f334334846cc369aa22a769ba85892917d05ccdc1287f0e42735038be",
                "signer_public_key": "02839cc52ec06b5c446d27e893f052df0823f132fd32c2cf0492fcac46a13d503f"
              },
              "header_signature": "472225c2ac4e3fc62a29b8fd55789e60955c796a08439ebad49813495db732a80602028e1a808b25f7ab4dfaf312be46170ca07bee750ac88a837bab366874bb",
              "payload": "p2ROYW1laUJHWF9Ub2tlbmtwcml2YXRlX2tleXhAMjFmYWQxZGI3YzFlNGYzZmI5OGJiMTZmY2ZmNjk0MmI0YjJiOWY4OTAxOTZiODc1NDM5OWViZmQ3NDcxOGRlMXBldGhlcmV1bV9hZGRyZXNzeCoweEZCMkY3Qzg2ODdGNmQ4NmEwMzFEMkRFM2Q1MWY0YzYyZTgzQWRBMjJnbnVtX2JndGU0NDQ0NGliZ3RfcHJpY2VhMWlkZWNfcHJpY2VhMWRWZXJiZGluaXQ="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "92cfc1d5a202e42c28412520ca231748882145462f72cac082ad9279bfb077a07a0e14f47b3201e4544d7e9987491ca2441eb9b047f19597ca37ca79ee942ce2"
        ],
        "block_num": "1",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "34c10375b4d3e91ffecca357cdbd3b97566b3c1370823f106eada31f379f7f8b3dca5b3f372859d3dfc1137a998f27901abc7bc974356ba6cd7a75085e295f1c",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "13c4c32cf65fcbfdc2bfd0dfebded0e4de06cae7621c66984da1d14fd889f11c"
      },
      "header_signature": "da7a4952b8f39607647ef5c2681c66c45aec295f71754af2fbdccae6440ddb70091c21e14b4d0da9ab8b5072485edc54beffb855c914e7f8284fdee97a359d49"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02d96ec8c8d093966c2a4d78e36fe99374497f8731dee824b8100a90a24724fb9e",
            "transaction_ids": [
              "e9cd806044aca4a52b4f33c226df634f7c619920c60e280e33b2fdf13ab681b25c106bbe7c09e7ae73f3f7f859d3e03b16f2b4b9943b102705e245767e642c05"
            ]
          },
          "header_signature": "6cc7bb5b6ae5dde356b7136a6b42ac36ce676400585a0c1071eab70584010f686bec4afe6745c2a4cbe827694c5ddf30da7ef152da8d382a0d49411614fd258c",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02d96ec8c8d093966c2a4d78e36fe99374497f8731dee824b8100a90a24724fb9e",
                "dependencies": [],
                "family_name": "sawtooth_settings",
                "family_version": "1.0",
                "inputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7"
                ],
                "nonce": "",
                "outputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7"
                ],
                "payload_sha512": "42d5c51864230f262104959e6faae50f6fd1fa68be1f2cf43917b29e536fb30ed74ae07aa599cd9b254c50a53d8d2f8d4d0a48328e0f42e85e8e5b0d86348202",
                "signer_public_key": "02d96ec8c8d093966c2a4d78e36fe99374497f8731dee824b8100a90a24724fb9e"
              },
              "header_signature": "e9cd806044aca4a52b4f33c226df634f7c619920c60e280e33b2fdf13ab681b25c106bbe7c09e7ae73f3f7f859d3e03b16f2b4b9943b102705e245767e642c05",
              "payload": "CAESgAEKJnNhd3Rvb3RoLnNldHRpbmdzLnZvdGUuYXV0aG9yaXplZF9rZXlzEkIwMmQ5NmVjOGM4ZDA5Mzk2NmMyYTRkNzhlMzZmZTk5Mzc0NDk3Zjg3MzFkZWU4MjRiODEwMGE5MGEyNDcyNGZiOWUaEjB4MmIzMjlmNDdhNTcyMGM2YQ=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "6cc7bb5b6ae5dde356b7136a6b42ac36ce676400585a0c1071eab70584010f686bec4afe6745c2a4cbe827694c5ddf30da7ef152da8d382a0d49411614fd258c"
        ],
        "block_num": "0",
        "consensus": "R2VuZXNpcw==",
        "previous_block_id": "0000000000000000",
        "signer_public_key": "0260023e2d31197ae2c226705f9af43667bf4d76f88ddffc3ae75671aacc862a42",
        "state_root_hash": "625e1c0e9018df0c645ca5c48a433c41036e769fceb4f6c814ca734f3b032434"
      },
      "header_signature": "34c10375b4d3e91ffecca357cdbd3b97566b3c1370823f106eada31f379f7f8b3dca5b3f372859d3dfc1137a998f27901abc7bc974356ba6cd7a75085e295f1c"
    }
  ],
  "head": "6abd79963d2bd3ab2cb752f672292447113ee58167875b230ac28b128f2f656347e9d17c373aa6eb30116e4c745c68161ab53accb2128ee18b19b352106b3ed1",
  "link": "http://18.222.233.160:8003/blocks?head=6abd79963d2bd3ab2cb752f672292447113ee58167875b230ac28b128f2f656347e9d17c373aa6eb30116e4c745c68161ab53accb2128ee18b19b352106b3ed1&start=0x000000000000002b&limit=100",
  "paging": {
    "limit": null,
    "start": null
  }
}

export const state = {
  "data": {
    "BGX_Token": {
      "bgx_conversion": "False",
      "company_id": "company_id",
      "creator_key": "0236bd0b2f6041338ffe5a2236be89f369ec3094e5247bb40aad3aaa18ff2da395",
      "currency_code": "1",
      "decimals": "18",
      "description": "BGT token",
      "ethereum_conversion": "False",
      "granularity": "1",
      "group_code": "b5c59dee52aa77c037c5d3e33e02328975647fa8db8fcf9107fe495da4df3741",
      "internal_conversion": "False",
      "internal_token_price": "1",
      "name": "BGX_Token",
      "symbol": "BGT",
      "total_supply": "20"
    }
  },
  "head": "83c332c98aa1f86bc63c24900a086660480e05e14d8cbbd2e2a727edf6e8a1b24dc441b4064e159ef51c29868ea5e501cd476f15a78a34dbdf42668d7707b81d",
  "link": "http://18.222.233.160:8003/state/e6717403fe89bbc3dacab69f21bbf2d546e9e4c71197cb4818640df60ed6e610db398f?head=83c332c98aa1f86bc63c24900a086660480e05e14d8cbbd2e2a727edf6e8a1b24dc441b4064e159ef51c29868ea5e501cd476f15a78a34dbdf42668d7707b81d"
}

// export const state = {
//   "data": 10,
//   "head": "9e2f89d6e26d8f1e125a9afaffd4f7ccf8f30035ade452bf6851e0ff8d18cabc2e566ad27a640c73f55258bd3f4a56fc45d84b4da224f5497c9ad1a6d04cfb40",
//   "link": "http://18.222.233.160:8003/state/000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7?head=9e2f89d6e26d8f1e125a9afaffd4f7ccf8f30035ade452bf6851e0ff8d18cabc2e566ad27a640c73f55258bd3f4a56fc45d84b4da224f5497c9ad1a6d04cfb40"
// }

// export const state = {
//   "data": {
//     "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE1++lRaoTUEHtgCHtco2a7g0clsfyDbGj/CW48I9Ssk2e36GEzOmsMe4pxK+ALU2qc3KfRBSY5ixeu1qGwdMd3Q==": {
//       "b5c59dee52aa77c037c5d3e33e02328975647fa8db8fcf9107fe495da4df3741": "{\"group_code\": \"b5c59dee52aa77c037c5d3e33e02328975647fa8db8fcf9107fe495da4df3741\", \"granularity\": \"1\", \"balance\": \"7\", \"decimals\": \"18\", \"owner_key\": \"None\", \"sign\": \"None\"}"
//     }
//   },
//   "head": "9e2f89d6e26d8f1e125a9afaffd4f7ccf8f30035ade452bf6851e0ff8d18cabc2e566ad27a640c73f55258bd3f4a56fc45d84b4da224f5497c9ad1a6d04cfb40",
//   "link": "http://18.222.233.160:8003/state/e671743bf2b848f2874c7a7f3fb23a908e6f5a5a9d41b18f05bcf78fad0a7c7b50dd6c?head=9e2f89d6e26d8f1e125a9afaffd4f7ccf8f30035ade452bf6851e0ff8d18cabc2e566ad27a640c73f55258bd3f4a56fc45d84b4da224f5497c9ad1a6d04cfb40"
// }
