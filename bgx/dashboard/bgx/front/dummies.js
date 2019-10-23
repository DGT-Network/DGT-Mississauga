// Copyright 2018 NTRlab
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// -----------------------------------------------------------------------------

export const tx_families = {
  "data": {
    "bgt": {
      "commands": {
        "dec": [
          "vallet",
          "amount"
        ],
        "inc": [
          "vallet",
          "amount"
        ],
        "set": [
          "vallet",
          "amount"
        ],
        "show": [
          "vallet"
        ]
      }
    }
  }
}

export const linkLink = {
  "link": "http://bgx-api-2:8009/batch_statuses?id=851262082dac8d49103d1ed7a8426f1ec933e4c09f4067f5c6f3b8443fd8c2236355f9d2a465c304798f532f5de134259625b15399e0299812ae36994330c312"
}

export const linkData = {
  "data": {
    "bgt": "HHHHH",
    "group": "BGT_token",
    "sign": "0332c1feb4839fe7f815dbd2829a2b3e6a47cdd4405d14f486dfcac51c2f2b4a13",
    "value": 1000
  },
  "link": "http://localhost:8003/run?cmd=show&family=bgt&url=0&vallet=HHHHH"
}

export const batches = {
  "data": [
    {
      "header": {
        "signer_public_key": "03c24759be29580437a3eb875b69b85703b084c3637928e8aa1cad231725a1f292",
        "transaction_ids": [
          "faeae4044e596a78f9b83e3fb2f7540e9aab8626e5e2b683cfe42b2674cadf36294c9739a2bfae390de61b4d42b1b4e5aa131956c8afa38f9f83bd8b267ffb44"
        ]
      },
      "header_signature": "9a6f7107c5181aa7ad10277842a2c7843f2e0d2677d90b49b9b822209417fcf2506245c1618e4d65dbdbc89427607ab4463363761b046fd43bb423d8e2d4e13d",
      "timestamp": 1570729206,
      "trace": false,
      "transactions": [
        {
          "header": {
            "batcher_public_key": "03c24759be29580437a3eb875b69b85703b084c3637928e8aa1cad231725a1f292",
            "dependencies": [],
            "family_name": "bgt",
            "family_version": "1.0",
            "inputs": [
              "4490953de0bde061ca367e4c64f4675f86e2c7f9936faa07760f3a0ce7a16ad120cec8"
            ],
            "nonce": "0xc04c7b5c0b3006e6",
            "outputs": [
              "4490953de0bde061ca367e4c64f4675f86e2c7f9936faa07760f3a0ce7a16ad120cec8"
            ],
            "payload_sha512": "35098b8ca33b1503555220d8c031fc790ef9b468bee9fca8dcab6b494bf9e54ccfe7ec57729ecbf31af95dfea6917d8589e181531633759dbea36632cf9bbb6d",
            "signer_public_key": "03c24759be29580437a3eb875b69b85703b084c3637928e8aa1cad231725a1f292"
          },
          "header_signature": "faeae4044e596a78f9b83e3fb2f7540e9aab8626e5e2b683cfe42b2674cadf36294c9739a2bfae390de61b4d42b1b4e5aa131956c8afa38f9f83bd8b267ffb44",
          "payload": "o2RWZXJiY3NldGROYW1lZE5OTk5lVmFsdWUZJxA="
        }
      ]
    },
    {
      "header": {
        "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
        "transaction_ids": [
          "de921b091434e28b5c2c530cbea9e5390f82a88cee90f3582239e4fa952e1bf27fc6a23c23db97ab0ab86fac8738a0df0316fd192f0e8e23bf1aae17b2c3f9da"
        ]
      },
      "header_signature": "c2fff38aae94f5a5338ab5b9fcd4ec722968321e0421ec3eb8d3cdd9670abbda34f417f0020c2d6a69b88899cc251a8399645b45d1ea5cb98a2366906da4b937",
      "timestamp": 1570729184,
      "trace": false,
      "transactions": [
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
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
            "payload_sha512": "97b1bc00adb842c5962c84be5d0b86c9a45fff736fb39272eb4bb149e0a0f84c9299e17f3a6aebdb6052590ff936d2bbd2b627ce3599659dd52271c0ad50120d",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "de921b091434e28b5c2c530cbea9e5390f82a88cee90f3582239e4fa952e1bf27fc6a23c23db97ab0ab86fac8738a0df0316fd192f0e8e23bf1aae17b2c3f9da",
          "payload": "CAESgAEKJnNhd3Rvb3RoLnNldHRpbmdzLnZvdGUuYXV0aG9yaXplZF9rZXlzEkIwMjVlMTJlMDM4YjY5ZjlkZTRiYWE3ZDAwNWI5YWY0Y2IxNjcyYmU0YWM4NDJiMjAyNTllMjc3MzQxY2ViNWYwNGQaEjB4YjAxNmJlMGM5MTllOTlhNg=="
        }
      ]
    },
    {
      "header": {
        "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
        "transaction_ids": [
          "76ee794f38aece5b89077082ab4317f513a073ddb82c97c926ea3dc80162a1e50db35a5988a74ee382da934d0c550b3a97d53e29a7a071c12fbcbc63339882f3",
          "b340a88fc96105c81c5693b01b6079984b8fa0c905cc26f7621aedc3e7f5a02b295927ce75ea54852be904528fd7a9d3d3f062c914a134aa2a9df1aac281ca0c",
          "d578a86bfef6ec83194a47596c13f90e9b8eb00a4de9b318660895484641e2da20452d836dd4af376336e0e2e893aded893b9d25ee879281475fecf787d3745c",
          "e6f10f29db2fd6d972ca0d13d1334166728354a4b7c4e6ff13fbace5fea8b2ab6d402411af69343fe554134ff2f8d571b5c6ab9e08f2fcf43b5eb37c8c645585",
          "a64cb0fc44ed5cbedeaa67d66c28778e45a4dd9aec41f46b114cf0291ead22b075a7ecf300e575c8508fe269c9ad79fdf077688c7fafeed7058b061603739d10",
          "6b2acdf6226da23484c787361b4410f999e67957d80e9055b7ecb3e5615ae42f52a4f9708f6c3a3e1a22248ed62f3552dac1fb87f482824b25cca4c2981c3624",
          "d4258cfc864bbe69ee6191e4845cff2e141ee504eee61bfc1fbdc32576ee94f3609a8b3ae150cf39af04e2d4e3fbcca5b2761b2bbfb1bf64901ac7292cef8aa0",
          "6c3f9f76daa99d3f11ac89f75287882f15fab6bab39c702a3dbbdc57421283720d71fbe4f3d60a99ca2e508175effca9186e16e33c41f33e1623b4a3378cbecb",
          "4138ba93f3cbaa750ce3e44da40b72a4e7f5a96d57962e019247d3679e909e8a4e6cac28188f326ad887f9819c2f0901a173750468ceb38041f534ca23f65126",
          "0b3fe8e591ff502ce1ace44bb0b0d8f2dd834b3c3b84183fe7ca92f3f2a6d6e414658a0d9428f5e5eefde738a5171e2b1da32e8f622c5015aadcc12b57998636",
          "cbabdd4b85419c4e22084bfbf329f5461261f670d41d5875ba16906296e4114c53139b8e095f20bcdf71d9be8c834694e5467fdacd757a5ca331ebcc5aec5196"
        ]
      },
      "header_signature": "26d6a6ad02079b458e47d0c032a84d1cb52bdd9779723a39157b08cb84e436fd0239486b345adb595d17ffb5962347ef1943296fde590e0acd42f4c17a692c3c",
      "timestamp": 1570729184,
      "trace": false,
      "transactions": [
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
            "family_version": "1.0",
            "inputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
              "0000004e35f49fa3ba04d2dd73a2f7c7982c612447756b72f86791e3b0c44298fc1c14"
            ],
            "nonce": "",
            "outputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "0000004e35f49fa3ba04d2dd73a2f7c7982c612447756b72f86791e3b0c44298fc1c14"
            ],
            "payload_sha512": "2f4a6417197c3ceb1f37d17f7d41cf2706664c9661818e7c3cc33e10487b02cc9c1d9ddd4846bd17fd93a03d26691bc8ee3734e8bc71d403bd28b71ef7d52a16",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "76ee794f38aece5b89077082ab4317f513a073ddb82c97c926ea3dc80162a1e50db35a5988a74ee382da934d0c550b3a97d53e29a7a071c12fbcbc63339882f3",
          "payload": "CAESMAoXYmd4Lmdvc3NpcC50aW1lX3RvX2xpdmUSATIaEjB4MWM3NGY3MGIxMTZmYTRmMA=="
        },
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
            "family_version": "1.0",
            "inputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
              "0000004e35f49fa3ba04d2512d0f29088c76da3e64cc41cf8e07b4e3b0c44298fc1c14"
            ],
            "nonce": "",
            "outputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "0000004e35f49fa3ba04d2512d0f29088c76da3e64cc41cf8e07b4e3b0c44298fc1c14"
            ],
            "payload_sha512": "ef3db7a5733041e80d634c680568a430f83e730eafc2876c2e235ea89bdfd9beed0938e4e5d5122b6eca0508f0083f5ada3f2f4b548ca86b723a77056815a5b8",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "b340a88fc96105c81c5693b01b6079984b8fa0c905cc26f7621aedc3e7f5a02b295927ce75ea54852be904528fd7a9d3d3f062c914a134aa2a9df1aac281ca0c",
          "payload": "CAESJQoMYmd4LmRhZy5zdGVwEgE0GhIweDFiZDA1ZjY2ZjlkNGEwNWE="
        },
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
            "family_version": "1.0",
            "inputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
              "0000004e35f49fa3ba04d2512d0f29088c76dac8f3415907335a43e3b0c44298fc1c14"
            ],
            "nonce": "",
            "outputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "0000004e35f49fa3ba04d2512d0f29088c76dac8f3415907335a43e3b0c44298fc1c14"
            ],
            "payload_sha512": "e24afa5a76106ba07002f14e64d83853df1a065c22f39639359feedb65bc154b4243866391aa29fc3ddbd24797541583371805f2f508a97586e3bdaeffd16f33",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "d578a86bfef6ec83194a47596c13f90e9b8eb00a4de9b318660895484641e2da20452d836dd4af376336e0e2e893aded893b9d25ee879281475fecf787d3745c",
          "payload": "CAESKwoSYmd4LmRhZy5tYXhfYnJhbmNoEgE2GhIweDE3M2U1OTZlZDA0ZmJjMDc="
        },
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
            "family_version": "1.0",
            "inputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
              "0000004e35f49fa3ba04d2c983c585ac3c40d9ce8a20d7bb268d61e3b0c44298fc1c14"
            ],
            "nonce": "",
            "outputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "0000004e35f49fa3ba04d2c983c585ac3c40d9ce8a20d7bb268d61e3b0c44298fc1c14"
            ],
            "payload_sha512": "1829dd1e9fc0a72c4e2ce7ad437d28a17da99efcb5aa8696ae35cb86e2a81c962d5f0191c1cdb84c8acab3a91f588283e37dd7cad817033c903ae7b85bfff346",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "e6f10f29db2fd6d972ca0d13d1334166728354a4b7c4e6ff13fbace5fea8b2ab6d402411af69343fe554134ff2f8d571b5c6ab9e08f2fcf43b5eb37c8c645585",
          "payload": "CAESNwobYmd4LmNvbnNlbnN1cy5taW5fd2FpdF90aW1lEgQwLjAxGhIweDIxNWU1M2RiNTdiMWJmMmY="
        },
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
            "family_version": "1.0",
            "inputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
              "0000004e35f49fa3ba04d2c983c585ac3c40d98cf88af6122209d0e3b0c44298fc1c14"
            ],
            "nonce": "",
            "outputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "0000004e35f49fa3ba04d2c983c585ac3c40d98cf88af6122209d0e3b0c44298fc1c14"
            ],
            "payload_sha512": "739f24d490c7b06437bf78ab14e6c64d7d2cd503479c4bfe8ec0075c31108233c0d78eedf2ed96fb3e4cbccf9039d5f9e5f236f9192502c7e999746799f126d8",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "a64cb0fc44ed5cbedeaa67d66c28778e45a4dd9aec41f46b114cf0291ead22b075a7ecf300e575c8508fe269c9ad79fdf077688c7fafeed7058b061603739d10",
          "payload": "CAESNwobYmd4LmNvbnNlbnN1cy5tYXhfd2FpdF90aW1lEgQwLjA2GhIweDU2ZGEzYTI0ZDliODVhYjQ="
        },
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
            "family_version": "1.0",
            "inputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
              "0000004e35f49fa3ba04d24f03a060b7eb0329cf8faeb36270e74ce3b0c44298fc1c14"
            ],
            "nonce": "",
            "outputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "0000004e35f49fa3ba04d24f03a060b7eb0329cf8faeb36270e74ce3b0c44298fc1c14"
            ],
            "payload_sha512": "8b7a006620912f9fd4373a5709ba13c88885c8e0aa1be0e206ec7744b2743c1e8681daa291820e601d2268f4fd89f50589e1ada39ca7076cd366603e7b3431c3",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "6b2acdf6226da23484c787361b4410f999e67957d80e9055b7ecb3e5615ae42f52a4f9708f6c3a3e1a22248ed62f3552dac1fb87f482824b25cca4c2981c3624",
          "payload": "CAESOwojYmd4LnB1Ymxpc2hlci5tYXhfYmF0Y2hlc19wZXJfYmxvY2sSATUaETB4ZDcxYjZiYzQzNDY2YzQ1"
        },
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
            "family_version": "1.0",
            "inputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
              "0000004e35f49fa3ba04d2c983c585ac3c40d9b1eb2ec8ac9f31ffe3b0c44298fc1c14"
            ],
            "nonce": "",
            "outputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "0000004e35f49fa3ba04d2c983c585ac3c40d9b1eb2ec8ac9f31ffe3b0c44298fc1c14"
            ],
            "payload_sha512": "562e310305cf5e1fdfae3c9f7a28b1f0c4f115219fb6106dc3579f7ca0fb740b366381e7364b066c7983dd477b3293525ecc4c2ddbf3a87f82161f8665be71cd",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "d4258cfc864bbe69ee6191e4845cff2e141ee504eee61bfc1fbdc32576ee94f3609a8b3ae150cf39af04e2d4e3fbcca5b2761b2bbfb1bf64901ac7292cef8aa0",
          "payload": "CAESMwoXYmd4LmNvbnNlbnN1cy5hbGdvcml0aG0SBHBiZnQaEjB4Nzk0YzM0NjBjNTI4ZDA1Zg=="
        },
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
            "family_version": "1.0",
            "inputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
              "0000004e35f49fa3ba04d2c983c585ac3c40d95ca4f3850ccc331ae3b0c44298fc1c14"
            ],
            "nonce": "",
            "outputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "0000004e35f49fa3ba04d2c983c585ac3c40d95ca4f3850ccc331ae3b0c44298fc1c14"
            ],
            "payload_sha512": "f357da8db3a0e359b4f3302acb14fdeb1a94c7be20481c2f4bff8bc1120e8fdb2c0d1716eb243e164f8751ac0373482bf86b791a2c556471b8d30c6a86d4b673",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "6c3f9f76daa99d3f11ac89f75287882f15fab6bab39c702a3dbbdc57421283720d71fbe4f3d60a99ca2e508175effca9186e16e33c41f33e1623b4a3378cbecb",
          "payload": "CAESMAoVYmd4LmNvbnNlbnN1cy52ZXJzaW9uEgMwLjEaEjB4NGUwYmU4NjM4NWEwZjA0MQ=="
        },
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
            "family_version": "1.0",
            "inputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
              "0000004e35f49fa3ba04d2c983c585ac3c40d933acc48717c272e9a18b869b2e81c0c5"
            ],
            "nonce": "",
            "outputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "0000004e35f49fa3ba04d2c983c585ac3c40d933acc48717c272e9a18b869b2e81c0c5"
            ],
            "payload_sha512": "e41222d20401c9a4c1a46d155a3c01ae45a69db1fdfe0a44e8b67aca47956370218d1990fcb4b77085fdca114cc89f0d36a520e5181d14910315c1981e5c457e",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "4138ba93f3cbaa750ce3e44da40b72a4e7f5a96d57962e019247d3679e909e8a4e6cac28188f326ad887f9819c2f0901a173750468ceb38041f534ca23f65126",
          "payload": "CAESMAoXYmd4LmNvbnNlbnN1cy5wYmZ0LmZ1bGwSATEaEjB4MjI5OGQ5NzdlODEwYjBjNQ=="
        },
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
            "family_version": "1.0",
            "inputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
              "0000004e35f49fa3ba04d2c983c585ac3c40d933acc48717c272e921e8050ae7af74f5"
            ],
            "nonce": "",
            "outputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "0000004e35f49fa3ba04d2c983c585ac3c40d933acc48717c272e921e8050ae7af74f5"
            ],
            "payload_sha512": "48428786ae8adc83738faf3f553928ab6dcae00e6df45d997de9613a8e9c598bc58a0aae99b9dbbec221860f03c69cf23947e460842f674e81e73c93b6b8ea0b",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "0b3fe8e591ff502ce1ace44bb0b0d8f2dd834b3c3b84183fe7ca92f3f2a6d6e414658a0d9428f5e5eefde738a5171e2b1da32e8f622c5015aadcc12b57998636",
          "payload": "CAESOQofYmd4LmNvbnNlbnN1cy5wYmZ0Lm1heF9sb2dfc2l6ZRICMjAaEjB4Y2I2ZjBjZDBhZmFkY2FjMg=="
        },
        {
          "header": {
            "batcher_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d",
            "dependencies": [],
            "family_name": "bgx_settings",
            "family_version": "1.0",
            "inputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
              "0000004e35f49fa3ba04d2c983c585ac3c40d933acc48717c272e945978ecb2996bf78"
            ],
            "nonce": "",
            "outputs": [
              "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
              "0000004e35f49fa3ba04d2c983c585ac3c40d933acc48717c272e945978ecb2996bf78"
            ],
            "payload_sha512": "d57790a1a8864f07bf5d1362b06536088f31d3e131d1d3ecf8ffd2a15512c662ae48b3ffc6a2e3e637510bf5a5b3800714f3b603976203e5220e4b2b524fef27",
            "signer_public_key": "025e12e038b69f9de4baa7d005b9af4cb1672be4ac842b20259e277341ceb5f04d"
          },
          "header_signature": "cbabdd4b85419c4e22084bfbf329f5461261f670d41d5875ba16906296e4114c53139b8e095f20bcdf71d9be8c834694e5467fdacd757a5ca331ebcc5aec5196",
          "payload": "CAESqxgKGGJneC5jb25zZW5zdXMucGJmdC5ub2RlcxL6F3snbmFtZSc6J0dlbmVzaXMnLCdyb2xlJzonZ2VuZXNpcycsJ3R5cGUnOidjbHVzdGVyJywnY2hpbGRyZW4nOnsnMDNhZWZkMjVjYzk2ZjliNGE1NWQ4Y2E5ZTE5NjAzNzU3MWM5YTdkNjk2MDIyOTE5OTY0YzZlZmY1Njc2ZDdiOWU0Jzp7J2dlbmVzaXMnOnRydWUsJ3R5cGUnOidwZWVyJywncm9sZSc6J2xlYWRlcicsJ25hbWUnOicxMScsJ2RlbGVnYXRlJzp0cnVlLCdjbHVzdGVyJzp7J25hbWUnOidCZ3gxJywndHlwZSc6J2NsdXN0ZXInLCdjaGlsZHJlbic6eycwMjM1YWY4ZGQ2NGMyZDFmMzAyNTAxY2IwZmU2ODYxOGY5OGQ4MTBkMTBjMThiMDRiM2U4YjBkYjU4ZDdkOGY1ZTInOnsncm9sZSc6J2xlYWRlcicsJ3R5cGUnOidwZWVyJywnZGVsZWdhdGUnOnRydWUsJ2NsdXN0ZXInOnsnbmFtZSc6J0JneDInLCd0eXBlJzonY2x1c3RlcicsJ2NoaWxkcmVuJzp7JzAzN2ZjNWJkNWQwOTRlNWVmZDdiNDE2MjI4NzExZDQyYjc0ODkzZWY5MjFlYTgzNjUzMTEyMmViN2RjMDAyOTFhOSc6eydyb2xlJzonbGVhZGVyJywndHlwZSc6J3BlZXInLCdkZWxlZ2F0ZSc6dHJ1ZX0sJzAzZTdiMGNlMzU1NjM3ZTEzOWIwY2U0ZTFlM2RiMzc1MjVmMjI2YWYwMTFlOGIyOWQzZWU4MTMxYTYzNTlkYWFjZSc6eydyb2xlJzoncGxpbmsnLCd0eXBlJzoncGVlcicsJ25hbWUnOiczMid9LCcwMjE1M2JhOTBlNDdkYmI5NWQ2ZDM5YzgwM2JlNTMzZjQwY2Y0NmVjNTBlM2VhZmI5ODU5MzM4M2JhN2I2NWJlYzYnOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInLCduYW1lJzonMzMnfSwnMzQnOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInLCduYW1lJzonMzQnfSwnMzUnOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInLCduYW1lJzonMzUnfSwnMzYnOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInfX19fSwnMDIwNTBjZWFmNWFkM2Y5NjE2Y2MxNjg3NjNjZjhhZDg0ZWEzY2YyMjBhMWY3MzExZmIwOTE0Zjk2ZjAwMTZiYzI3Jzp7J3JvbGUnOidwbGluaycsJ3R5cGUnOidwZWVyJ30sJzAyYmEwZGQ2MzJiYmQ5YWU0MTlhYmUwOWQ3YzEzNGI3MDQxNmE5NDdjMTM5NDA1ZWZhNGI4ZjBkMzUzNjA4MjIwNyc6eydyb2xlJzoncGxpbmsnLCd0eXBlJzoncGVlcicsJ25hbWUnOicyMyd9LCcyNCc6eydyb2xlJzoncGxpbmsnLCd0eXBlJzoncGVlcid9LCcyNSc6eydyb2xlJzoncGxpbmsnLCd0eXBlJzoncGVlcid9LCcyNic6eydyb2xlJzoncGxpbmsnLCd0eXBlJzoncGVlcid9fX19LCcwMjBlNzk5NjE3Mjg2YTgwZGU2ZTQ3ZDAwZTk4MGMxMDVlM2MzMDdmZTNjOTdhN2FjNTNhN2JhZmFhNGE4YjRkZjInOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInLCduYW1lJzonMTInLCdjbHVzdGVyJzp7J25hbWUnOidCZ3gzJywndHlwZSc6J2NsdXN0ZXInLCdjaGlsZHJlbic6eycwMmZhZWUwYzBjZDc0MWRhYjI5NDE0ZmEwZDA1N2MyMDI0MGE0OTI0MTNiYjI1ZDJlMTNiNzQ2OTI5NjFiMmJhN2InOnsncm9sZSc6J2xlYWRlcicsJ3R5cGUnOidwZWVyJywnZGVsZWdhdGUnOnRydWV9LCcwM2FkNjJlZTE3ZDgwMzgwZDZhMmIxZjU0MDQyZjgyYmUyOTZmYjQwYzU4ZjgxYzMxMTA2Njc0NGY0YTYwOTZkZTEnOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInfSwnMDI0ZmRhMDlkYzljZThmYmZmNzU4MDVmZmI1OGFhNGM1NGZmNTRiOGMxY2VjN2MzOGMzNmEyMGVmOWQ5MDE0ODBkJzp7J3JvbGUnOidwbGluaycsJ3R5cGUnOidwZWVyJywnbmFtZSc6JzQzJ30sJzQ0Jzp7J3JvbGUnOidwbGluaycsJ3R5cGUnOidwZWVyJ30sJzQ1Jzp7J3JvbGUnOidwbGluaycsJ3R5cGUnOidwZWVyJ30sJzQ2Jzp7J3JvbGUnOidwbGluaycsJ3R5cGUnOidwZWVyJ319fX0sJzAyOGE2OGIwMGE2OTgzOWQxNTYwMmMzOGQyODVhYzJiMmIyNzFlZWI1YWMyMWRjMWYzYzJmZTZhYjcxZTQ3MWY3Zic6eydyb2xlJzoncGxpbmsnLCd0eXBlJzoncGVlcicsJ25hbWUnOicxMycsJ2NsdXN0ZXInOnsnbmFtZSc6J0JneDQnLCd0eXBlJzonY2x1c3RlcicsJ2NoaWxkcmVuJzp7JzAyODAyM2I0ZGNhNzdmMmY3ZWEyYzc3ZDUyMTRhNTU1NTYzNGU1ZmRiOTE1ZDA3ZDFjMWNjZTE5MzlkNWQ2ZTg5ZCc6eydyb2xlJzonbGVhZGVyJywndHlwZSc6J3BlZXInLCdkZWxlZ2F0ZSc6dHJ1ZX0sJzAyZjk3ZTljNDY0YTM2MzU1YzA1ODQxOGVlNmFkNzYwNWFjMTQ2YmJhM2IxMTVhZmYzMDllYzcwNWY0Njk0YzI2ZCc6eydyb2xlJzoncGxpbmsnLCd0eXBlJzoncGVlcid9LCcwMzQ1MTMyYmVmZjA1YTAzMzg0ZWQ5MDQ5NDQxMDVmYTg0NzQ5MjI4MDNlNmVlNDdlNjdjNGMwOGFkODY2MTUwMzAnOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInLCduYW1lJzonNTMnfSwnNTQnOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInfSwnNTUnOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInfSwnNTYnOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInfX19fSwnMTQnOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInLCduYW1lJzonMTQnLCdjbHVzdGVyJzp7J25hbWUnOidCZ3g1JywndHlwZSc6J2NsdXN0ZXInLCdjaGlsZHJlbic6eycwM2ExN2EyZTY2ZWZkOWUyNTg4Y2ExM2NkZWJmMzExZGE5OTZkZGRmYTYxYmJiM2U1MzZjZjljMTRlNWM5ZDNiZGMnOnsncm9sZSc6J2xlYWRlcicsJ3R5cGUnOidwZWVyJywnZGVsZWdhdGUnOnRydWV9LCcwMjM0MjkwYjJlMmI0OWUxYmU3ODc0MjlkNWJkY2Q4ODQ0MDkwYjNlNDI2NTI0MTIyM2QwMjdiNGExYTJjZjI0MWUnOnsncm9sZSc6J3BsaW5rJywndHlwZSc6J3BlZXInLCduYW1lJzonMzInfSwnMDNjOWQ1ZDc5ODEyNjQ3OTU4OTQ1YzZjZDk0NzQ3YTE5YmZlNWFkMzlkMjViNjdjM2E2NGMzZjRiODhmZjIzYThhJzp7J3JvbGUnOidwbGluaycsJ3R5cGUnOidwZWVyJywnbmFtZSc6JzYzJ30sJzY0Jzp7J3JvbGUnOidwbGluaycsJ3R5cGUnOidwZWVyJ30sJzY1Jzp7J3JvbGUnOidwbGluaycsJ3R5cGUnOidwZWVyJ30sJzY2Jzp7J3JvbGUnOidwbGluaycsJ3R5cGUnOidwZWVyJ319fX0sJzE1Jzp7J3JvbGUnOidwbGluaycsJ3R5cGUnOidwZWVyJ30sJzE2Jzp7J3JvbGUnOidwbGluaycsJ3R5cGUnOidwZWVyJ319fRoSMHgyYzNiNjcwNTc3MDhmZTJj"
        }
      ]
    }
  ],
  "head": "9dbf76d9d0267334e7ad74f414871d55e808f4a68741d321552dd91d2f2e019c120880904b297d0a9b218bc8229ea151f20cb95840e262af3d772a203908f304",
  "link": "http://localhost:8008/batches?head=9dbf76d9d0267334e7ad74f414871d55e808f4a68741d321552dd91d2f2e019c120880904b297d0a9b218bc8229ea151f20cb95840e262af3d772a203908f304&start=9a6f7107c5181aa7ad10277842a2c7843f2e0d2677d90b49b9b822209417fcf2506245c1618e4d65dbdbc89427607ab4463363761b046fd43bb423d8e2d4e13d&limit=100",
  "paging": {
    "limit": null,
    "start": null
  }
}

export const reciept = {
  "data": [
    {
      "data": [],
      "events": [],
      "id": "a43f2127ed1276efe3e9d3eb9df146e0555a0da9d795ca67ad905b5def773a8067b4405ca8ee6c07ab51476b3509bbee4041ebe18bce16741edc9bcab05c4843",
      "state_changes": [
        {
          "address": "4490958c7cbe76786d5b4f28b82c1187cbb1bff4c47cec3f3c9d3054db7df4f83abc84",
          "type": "SET",
          "value": "oXQwLTAzVDE3OjQ5OjAyLjg2NTUwM1jUCglCR1RfdG9rZW4SgAE3NWFlMDg2ODNjM2Y1Y2Q4ZWMyZDc0YmU3YmRhNDg5OTJkNTE5NGUzZDFiZDQzMDBjMGQxMTNlMjkwM2ZjNDYxMWNlNDM5MDU2ZDRmYzc2ZmVlOTA3NDhiMDIxOWUzNGIwZjEzMzUxODMzMzRlMjI1YWViOTQ3YjAxNTVhYjEwMRpCMDIzYzRiZGM5NWFjYzMwNThjMzllNGNhM2I0ODQ3MGZmZjZkYjc2YTdhNmI0NzgzYmVmMTNlZDU5N2FkYWI2OTk3IAg="
        }
      ]
    }
  ],
  "link": "http://18.222.233.160:8008/receipts?id=a43f2127ed1276efe3e9d3eb9df146e0555a0da9d795ca67ad905b5def773a8067b4405ca8ee6c07ab51476b3509bbee4041ebe18bce16741edc9bcab05c4843"
}

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
            "IP": "192.168.1.3",
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
            "IP": "192.168.1.4",
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
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x9846a1d37bbe9ae1",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "b355d1ca1f812a154689041c8bf69167c2cf1ebf9fb199d4553f6d1b766ff4f4061d88112090c9c8ce141823dd6d13c1241a112c2b98f30b66e258e89e2f5052",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x805ee32d769f2f7",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "dc69ecc382d3859f135de9708a3a238bd94da280e7dede547ee144185d8af24623a1e25f2717c071cdfe92f18e0a73816a3446072ddf0859d3565e7e01ddd68b",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xca360323ec3edbd",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "de11e1f56b391c00453414c41f023b46c3c3f5fdec6aba06abacd2901b33e5c93e0e2bae00a6e18240a608e7d85b3a2ce9627973aa6144969123d50f8fafea07",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x13becde8c9d97760",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "ee40b4aae79b3cf8c56ccc7d708a89353ae2e0f3373b1196cf1f169c06e7e0974f49522bff71a7e8e63080c395e720145913cfe70b651c5d728e6311ef2f5a61",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x9730aab6d9c73a93",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "d907378cbf47a61e25ba8bb678bfe9d9d46add287e81592eaeb0820295de943d4c4a49148498731c30bb57d9a04d46fc9c06bec1ff18ff117c8e13f69d3be4ab",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xd4aaf306be988a09",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "e8a8b89d5686b987314682f74b60c0642ce983c200ffe3720f6c0d4c827e3dfb2796e85212768a7456414903aa63c8d7a528eef19721019094c4c4520ccf04b5",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x40711c5f2c89a3f1",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "c58363cd87c3c1dc734560a38eea8ce364fb7da2e9858a66ede874d45e83c70e67e70dd003304d26efb6ceb78242adfa9512d86f899dd6dc61d8956a1b8be1c9",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x5f88ce41841a8bd2",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "a1bb209d0bacac7c6f21f86d61bfabb1485977552551e65900145053b853c2fc22aa96a6a9d12f2862e997327bd484172fdddbb3c347e28f83f63b3b267a7a85",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x10abba261bc8f638",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "9052f3a11566b6c990f4e58338d6cb740145d2087ec2d9b87fade0e1b77b3a48376f35a572beeabd96e7083896f8538ab4323dd79ef42f04bb58e01aaffeedbb",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x8d8ece3d36857fab",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "1a6c6879dc602b07afabb1c4276a493b907f587ceba1a8cd8fd69e28d33c866f472bd4f00a9e1a8c8ca5a4428b63dfc04475b3b904e0e2a2330bde6207686321",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x70b97d467a7c09bd",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "5ca9695f64a450c265f72e2f264c7e46f79b446ef10d3e9e86aeddf1be0124bd637d9c6f0b720faef4dc0526efa3732195d091b6d507187f180ce5d3b9a362d9",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xd65831b279b64ba8",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "56af02f22588054af7f6d05cf2ec4add1bbeb585f8fb123c68625111c90f4d7e0976eb9a696857fba316c9ae7531c3e80bd6ebb50eefb13ac95723507131ec0f",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x20e5531a3b46749d",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "ae420ca06d0727a1a61321012b580fb7bdecca7603ef390e33e7a422169a558736155face0bc949c45ff936f2c3c3e4ab9a6b9587e4fdf7f78e9055b596afa0a",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xa79a162337358a34",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "b59f187231b6f56428c493cbee1146c034f0bb73b77b62c337a9809f75d4bf591008063af195af79acbde9107be12483548eb082ad110e952b1a1f29dcf957da",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xee5dbbe7c9a2046c",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "e1d951824e77f7c478218e479b696548903cd2445eacbbab95c9967078a4f64103f1ee3595a1dfe2ff5d2b8e98f21dfb12b454fa83a4f4e3163647a3c51f1c43",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xee98795336d3646d",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "906a9afce64f7a3fb77c2c4c141e7a4d9cf5d1dcdb5a8c77419dd806fc7d52b5079b4b55267c5f82f6fc4e53b25cd4ac8c1adf87d5302bdb5adaebfa77f3d653",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x9572a8051a5dfd44",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "f0224728451fcdb2194b610c6c32ad97a9041d9c54e1942d175085ceda7a1cde1b1814a0de4e6fd2ba63c99d34bf88ab8190ad4dd2f8bafabebb3cb4ba140bb5",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x12569295e5462867",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "f9242901445be94026804685aff65974a3afba709f60074706db12858fc854986456e692e927cd3fa82fd4b17a61d948571cdfa86a010c17d46772daf4e41515",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x19407ad9ae623791",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "22b51ff7bdd254e86bcf075d0a94024bce6dc41161bfc485ec523446ea3615b45e360b9c38e3b5fd556a7f532b4772b30976ea369a5d3806b2cb4b01cc569b4b",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xbdf40eba48e3de30",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "2864e9820f670b9302c58d472efd87a56ab3f6e51ddd626a3b3cbd5f56fde54855eb7309e20f5e44e7bc23b39dc616c89796bc4b2a45d9f85bbd4654577a3a2a",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xaa2e06443f7d7890",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "98c571e6c0532da4abe964ed87320bc66bd6c06644d1345e295d74aa8a8d306c54a5a8be10fd2ddf868be738ee51da7d73a86f0eca1c688391a4da019dc5435b",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x7a7f2d49c0a4c445",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "a64b2b76af95b15b99c72d3a9f3674f3653e3b6887236f2a178d636fcb76101e5bbec9f9c006d5886dec911cd120b7d77031200b0a01478f8a409fc5704adb6c",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xb88ae7f1ea75c5fd",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "b813d5d40896fc4841f29641c4a6420ba06f6ec85a4e22d90d0bc9a99e54e51a595857da35b4d16383e0cd2450de09c6f0f7b3509dfd8ab7f974245352e0c590",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x10170e9e9079bdd9",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "35d0a36c4a90d8cda1ad28eb233764085650a6974ceb563fad284d8efeabbccc5db76de39b9a2183c4c98a6ca6c1916c2b83b33b0febb0b8e1a3dd5345c3b4e8",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x7fd4a62b9623e3b7",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "002f99411029590820462a699b57f49e7b220e448e6a234b9aadaeb2534624a3352031ccbac2c18f185fbe0eb00fb07972c1b55e17857ffbb724f85cebc0600b",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xceb64a0cf108f652",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "4909186206e45ad7c2c1763f67176f6be49926985832affebfee862993551f0463d2cfdd102f81bbce47c5f13fd83ca56bf3b665a494f38adfc2cf385a99faed",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xec189edfc11fba2",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "22fbfd9117cc9db483aaad2f2b2d390b4cd1d78c546d5a6d0764bbb32aec30a353016fe0c1fddb2c19a194a2c9835684ea23e906c944828fb0caa2404c85e404",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xeb5d4f72e3425347",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "d2e9fa8e26d6bc281543e1402848e1802c6979c6cb52ffa7a97a359885878afd5043486df05960568ab6c82a3bc75ef3a138b398b0e64c00545e9c2bfd78a728",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x8c0e2077f91241e0",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "758b4308abe1965fc97c203f33d549a6ceda9f15575ed8b8820673de6e86fa7a23f7275f0898c6bd6307919cef62e1de279f7d85fa505ded86c9aa4fa710f733",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x66aae40362cbe6fa",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "72908f616a0caec9faf758a1c4e3547a6549ad668b7a024620879061689f006e11af557b94a84d0588e51b6df33d20dda992cf8dcbc40c6609998d2bd8a791a2",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x1309bfca95d5b929",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "c4af5b46d4d39fcfdbcaf367da7edca7add0a6ef6cf89a14173e6bbfc9ccb3d6610af401a4febc787e7ebb0008ece28458a88f07c84d4cdf753ed8e1165cee2f",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x246500a957b7a8b8",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "a8ef5d416fa2592babcfa399d409eec979ca06286c13acff10a0c6057ab85a9803e870c532cfeab4c328b11f953df252fdac4960ef23f1156e55fc20f3cac547",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x9b36370e8d8064e2",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "eef4dea5543f4baa90cbecadb3c71e450c93627c50f8e6fcedac84062846e823253772a490383a43e6b5cb5d15b6c900449381a5ca11907129b3323d1da23348",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x64e8153ce509ed7d",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "0219080f798b03e611f5cd070b66014a0a9dea2edd00b0d4dda344f2a11229786acd43ad87d988564196f92380616d9dd80d6c652d66b1b10a46eaceb2873584",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x68dd7d26682b73b6",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "40a171fde602cf3f6ffaddf9c6af2c5c2ff402acda705c4139ae42afed57a3ec4409a988ac401f4f619f97f8111ae79529880d510d4737a039fd2b4b0c9e9b4a",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xa47f761c0aebee19",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "175fce67f4fb1921b31df5778d9eb4bc8683e040de58dc098fd83508ac8504f76a394f9956dec73e95f7f51708fc77211df800a0920f50fecba371cda5b37912",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xa3be1584a62e8838",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "21103415a1d95901f436dcdd1ca08ccdab5679582f3cfebbcb4537d4bd0a53cf10ca445315fd814c1cd59b452a6905b541a8398d381b68623406642d6f7e37bd",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x587baaee51dba69c",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "e139250d1be7d5197220c35494c75b36e95b3b0be1fe78742a1628e22be060ff7fde37444249fcd53b6c7a8cbe2e074605f16f127cc0bdb112e5bfa835124c5c",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x69932d972e054581",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "44078faa2307bd1e88cdd2e83893af8240d3b1399fc0f3d819264d475813d244751607858d694d8318fcec16834177ef34759edc1b897f926f42f0a4832f96f4",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xe0c3a26bc03b147a",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "abce9095e908b15190256abec827caa19734d731f281f251683f1778d4106a8c6d505a02758a12bdb8239d32e2d2d1b323fb62827ab0a6c873e07cec80084d1f",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x9b4ab81a7a6a5023",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "5011d371046b1fbc3a688628f9cdc4a7f1dcace0e2f5320b907e7e832865bb3d7fdc7762b5ea43c065dd7acf7ad9647a0a4b06bf193757ad804589a3a11ac1b6",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x37f41c2dc48dd80",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "439648706b2ffd7f5a621471222ae9605b793e5b6962006de5c107d8d5044c195d5eeb6ef2e8d799a5d8c6edf159eae5e518f7b9dbe1253ab6ddbd8f8e18e4e1",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xc34ab001a3c03241",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "a607ea848b2546c5a1554bee3e39bdc6ad33ec7a5ee873679bef837dda6628e3738dc91608ee9597ab7ab4e69a80386457d396b2bb80e34ca780a57ef537bec1",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x25c3c719328584fa",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "bab7fada53210aacff246388bcd3740545834162b260712a5c7cfff0e40cb7225adaefe6892daa87a0fc89fb7c8b5b8f9c563cce81912b29995cedb4fb471aab",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x90302c85f62b1936",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "68cb88d5c55be597b68b35572aadb4a207b951a3c162932cbca905c186851f9f69250155ff369cb58b1cd412fbec306d1580f7e3c57e2b458c44fbc34db03723",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x9462730a4a5836d",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "029de9dc28ff8b5b6da882ea6f7d9c76b43303bd0f06ab2545280b9de894c18706e44f7098e3643ccace4f053ef3b7ae095c01546945c4e233256ac4d5c5beaa",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xe33c741cc2719ca0",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "4a7d18b0a2e2924b63884ff7eee7ac1df4f9d0cdec51e4eab6791496d18f0476125ccc3ab7f0d601f7ad467f2973dbaf8bf256670229785889eb63c792edec4d",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x19a368ce7088f669",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "97c9b6204c283e1afff777fa4f0c433f2f39afef6c0250b9665e8e8334ebfe452055c61cf21513fa6608ebd85fd3bf8d100d25a15b66b53821fa74470f0ae991",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x539b1b024337da19",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "452c26b9677396840e1a72799814fe82deedf864df927835e4c09b71504f6202404275f36fe1c12ea2a265b999428c1165afb63f11b0e5e10aa4ea7736c6d691",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x760efce34a326741",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "8845bc57dea34156255bab98431656f1ff736b61beeb505b21f970718c2aba961303c8fc2f571de764dab44847bfdafd6a394a640e394ea02aa67a476e9c0523",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xce135e3fc3726cbc",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "b9fd29f02c434345a34df96fe4cd224df3b4214d101744517df06786865b47cd7efae98ee431106446e3a6bd8957868f3617148e205c0602d8794095c65fc616",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x532e4f28d1899604",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "98b5eefde0db327d6b673d2d9cad4c702dc3a4e7d11eb06319b44d3daba3f3a52ade88c22376afdd4d8c38ba898e4fdaed557e9ff70d91ea51db14abebfbe2d3",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xb1730712df80ecb0",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "d3db052e2cd7e58ae72e50a6bf66724ec89877d90e13c096ec11d3c907ac51b67ce469ba1f1f2e492e5abaa3d62e6d96d5ad2351610262df5456df921e034036",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x3b7c4d02a293680c",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "e9aa23788ee44dce56764fb827f77e7da6f7821ea0f21d270e7dbece1cea01f8692eb78849aca70083ea4eeaafbee68f270f5cbfa605101928ef1fefa64c8866",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xd78acb1eb3331ced",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "bc66cf64207edbdb58f5a93e966c26086dcbb72d0d022ebf1334867e9d0ded300611c5c5f4ea54c8196529c5e2ef13e64bb2a66b8026f381e0429b470756da45",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x542f7de0b39e25c5",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "d0be37df17a526ea27c3b74bb683d818293b91bbe922263efa4f1abb2b7d3a0341add1b0bb5c46ff8c9570f6e04c7c7585ddd7ad1912168f52cdbc0dd9bc076d",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xd2a348c9c884556f",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "111f62b89dc80cef2ce93d50ddf22a1278e21939bcad5cf948aefd38f50527b77bb16d4a4925c9c66cb7c398d4e4cf031d594032332c45b1a9bb879990e25a10",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x835a28c5937a8e4",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "cabac75943c15eea44b2453d606806e9b93e11ed5a3ca8925fff35e26b4ef38c4cf4e47ba8150292c77fc421898fb35021dbdabbd38c012ad11530a9b6fba047",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xa7344e768fc3de35",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "399df7b60af65e2c557d7a909c34ea8ff36cb530a580c24d3088e4956e831d1f3c1b6869b60482d4d49995bd992687d4bb3aecf3bed7b71634b90c760e7c7e59",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xd6301bde29865a3b",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "f6dc87cec9a5064a581cfb7f458b5daafd3fbcecbaf68e7fff43872ce522da3f202e2071b0f5aeb3f97f3c816348b259bdb356f6e01bcf3ef06e28371d20c7d0",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xa96d910bf8a1bfa2",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "5d0f961607b591ac9d24eea9d4549b06cccfce2e9607c54b1ad1971f4f5f26cf71825dc18e31f76f7981c9cfc209c308a7d9ead64a7ee2ccb606951daa3cf0cb",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xc1bab50d8aaa0bad",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "f4369a5ef9b3ba61803a39609acdccca32fbc19e0060b703f782a5d65c521eda318966e13117793a587f0b92f11e0b1843e20d4cfad6d929c81b664429b7e2b5",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xe2b7e0633efbfba3",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "2d01285d0f1e54155230fb8ba4cc06eda52d322317ae833c48b875aa1131d29b7beb49ab4f5696a5e95604da1eae75b99529a9475d19ea754b609dfeeb58fec3",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xa8d99fdb20e5b4f2",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "7be5c9a0b38301c312bb3d88862d8d222281b6f1b22bbdc511243d2710ab247d3f5f8869f646dd4df75c37b4580568fbbbc1f3274f2fa1a2ab55ad935cbc2450",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xaa492107d58297f3",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "a9d7868f5f8b2df2cbf2dca7da25f1097144b67e9eb0695e9bb903ccb0ff55fe28ef5b56b52be596fc0208df9bdf04826b0907ab7966c56b2a3017595078f727",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x1acf733ef808327f",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "aa8f82216f825e69e756fd51b8e4ac6ca5332e733a14a2457443f0e2f6d0485d2eb90c81b54f0584654323f9df57047650dee6fbb20270684605690cb892358c",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x553c702357dd9714",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "cd6c378709f3dbfa2a445127c599d4f044c4fa76bc3d95e543e3d793aefda4923ed630a9ce922d1f2c68d57bbb5a1249419ae120bbaa3b22e15eb66e4c46cc7f",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x288ae4e6eb99e37c",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "cc314a2804ca19bf48fd8fa63a82bc7fcd3849f88b115fc923a7429dc8d7e573275afd6c6b6237b1b9891f4c73c4dc729ea0750eac0ab1478d8794a7ded232e3",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x4258f9bf4cd9b8aa",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "c95629b407ceebaf413d0201564666dcba4fc44a53809ec8203204104bb8cef85cf68275907b85a73fc9bae9c44954bf7a507f4bb40b8a3fcd290b46261f2f64",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xe2e9e24afcdd5d0e",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "0519e82882951f3e9d16a223b75aa62107957a82f5744d14615c1bc8fab8b8c70c60123f13720a37f0d5b51c205ee3d175e7674cef1a54c4edb2c45ca5ccc842",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x1d8c5a611ba391",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "15f513884e55674b35ac8d732d3f252392c0966ae42de96e37cd7c37716bfab14a5fad48f966cf334027ccab5e0e4a68c1d4ba84848cf77aaf0ded68fa8ec91f",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x19fbca8f405bead6",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "45010d581e8533e4267e9455431ea28ee6160b8a2754714efeea2ad1957999937a1fecc822037bf26ae9bbb5430bc5966c617bb506798088f4340c76dae32be8",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x8677d4d395fef509",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "8c9c39b8c1af0ac863352da8df853464ed10fca1722a474e1286473208e665aa5db455e428488ad200abe9dc62c3ef8b09ec404cdf3008a187ac03520747d646",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x4e454c0b24848853",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "28fd96be01d7aac7cdeda2567d4c3156aa7264449fe2c3db826ede0b30098fbf364828a2af832270013e856135a689119cce633e88fd882ca2d523ed48c70e6b",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x8d710eab89ba4ca8",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "53a6e7707cc9a67b4a3b31940fee2c56752139bb236cc724bdf158086a72cde43bae03bdc015d1ae8b80e1282687a1e2123443bebbb7f7fe1dbe04da9b081de6",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xeae8d7e54317bdad",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "b7f0e934ebe01d84208b9c9ef3d84227664b6a3e5b6256653d7e16c110ff19b23cc2b8d5a350ba3d3f30f1810bee8b602f64dacd8a75eeea41363a83cd946511",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x6a50234652ec62bb",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "682656ea6b01d127d968892a4bd6f62ac03a1a59b19f4d0ee822cbb0dd8a19e45aa60956ff4674d9ddc42f36d99b7963b02a3561e7ca9b3dde205db0ed68828a",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x46aaa093abfd90e9",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "fd1d4f74b43d0f426ee3cff6f3d2e7eaa53873b9049deb828247f148525601ce68ec5dc80c2900cf06771053ef1ca0de090dc23f109307e52abd067f159b21e4",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x4dbc9ee14d18542b",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "adc124ca7669716804b57dbd802bae2269dc1a94352ad966a3384816a9ec9b59278ee00116c872b5d69ed8f64728b88bea31c7b0275e2431cd65fa4399697946",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x3ee0335ea52a7b67",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "81eaaec9c8c04e97f13f39eb5dd0f0f669d5b4c1f36855f05947126efd93c5636210ceec4b62ce65d26c58630a01bf2cabfc31e06af5872c015a88d022a6e23b",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xfbc28fc600aafa5c",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "e5c9175a0ce1179f06678cb89e77add580691c08a44ec17dbc8134632862aa2c5e70b31fc44c4bd2429c8865349953d95140695cc3993bea18e21bfe2b71b62e",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xacfa11d7c4a39f94",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "c1fe217b091cc094ca42282b1574c3403e0e129dcdbada53e3a958ff1cb7de7565b5fcd3b6e83b8af67c666d5d93a765d0b7c94585c40b9798ad50e002715b39",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x9e94428aef36346e",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "f65a6001ecafe653cc397943c47f16acc72f3430495698ef770dce45a6c9ce6c7947f6fb0eff9553cbe66ee85b0c29581b74798cb2f9440df6719cac99aa8a4e",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x6a9cb5e857174388",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "7e1b7f9ec48b21f422868f7b304cfdb4873ce660adc33c41b0b0b3686f6e0a1e7552cc01824f9d37043ee9ec11d8a49394f76e5260233bcabf47a2cbdc13d49c",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xda5eea735c68a945",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "0a038feba90dc949f9783e84115199e0a22abdbaf06ec546f9d11981a8f7f83b2380f4288d12db4880eace7ce888cabb170855782e67dcfe48ae18857e53a95b",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x407b57c22cd5d7e9",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "da851968ee24fdbe68b117cd9e6e3241cdf7eeda85ddd2376476d8753533068f22f50c34d8d7d2e31bea4563fb1e4e0fc9352949f9f65cf211b5e469f86c3a7b",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x9fc9bccdad900957",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "46f2e9b67ad67f0c259b75f18e141e47748d4c8edb570d444fa32f4b40afc9542c56d94ddbb0c97efaeab264f61c954394c7d92efb40458e27655d70b0f05171",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xd3b96951ebb946f4",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "f7ad9a6798deecdce796e94b995ba059b6077d54edcffb889ae52da3ff0129026f680fce87c547b5ebb5144cdd7896c7396e1c6e068dd33f9871477ad1224841",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x2c5d2fdaadb98182",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "40da3c875988493e765b1a989d610b1640758e3172f49dedeaea9f1d31b105782f7698fced995d190dcf886ee93c1240161d3e41faf5d0fa950a2bd53a7f0a0b",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x82c36f76d0ba7d12",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "6670a1089b171c12b27eb7db4655cd42d6637f4d041fa8d69d2fe439d2f48e2a7ed1739cd0d9c50c4a58158a2301cf37cef45ef76d9311e7bcd96e9293c0c384",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x837d526abc59cab9",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "86bd3fc5b311e3d36afdf6cf43403b979dd1f05680892944d6ba06d786a35adb78226d1172c84341227558c763b6b7e25a4fe62302168f391d693243e5dd7f0f",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x46910853b0e03d13",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "3a498588122531771e03ecbdd2640d7d2c1403ce813eaa8490bad63751465d0a7cebbcefce290a1f3c15e2941bfe7b757de96ac0f7af0c04fac4353c1ac4029c",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xfe6118b64209bff5",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "c2a3e9e6f7ff17282fea8c8d2bbe811194eafa9cb38840c8c60dd9050c3f80a2739de56f17b8cb9e97728c297f3420c93e5241ec7d24f2e8173f8728c818fc81",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x992ccb2d239d7f07",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "a83e71223de6334362190aa6b4bd9ba93d2d16e61bc0d53d253a0f2a4ba6110d4ea2b05090dacd109831c4b417e9bcbe3948afaf9608d22ff06dfcc5c74668db",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x9bac030aa3783b9e",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "84564c01676ed678c04795e5f3dedce507f3e677f42d4eaeff16f2501514bcdc693ae0cd79916cc3a8c83ed12bc823b47b068d815304ce92e44094a2396836ea",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x77da7b4467ad4ad9",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "50323070d23f5802859b6f4fb80261e7ebf6fd3561240eddcbc4f6031aede8be28338d52effaa05c53a47652b41a8c1482734c6dca877005566cece020ec9b1d",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xbf101d45d5c85701",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "238515106caad55dc8b6a11a8b55bc02d1268a27692ef0d4eeea59b1a4c8c1370f30b263b195d321de224afeb063e09a9cd6ebe97c761fede585b2aad97caf4e",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x3d36c9d620592e64",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "414f6c8d21d7f8975ea6d87e142b8edda5f420991a5ac9bcf0344ac677c6688d1167eee071cf8ea0034bd0d4dea9f35310f7e36413c9750812c3636901cf18e3",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0xce3bf7277ab5478",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "017ec2231917bb83c75d62f8bacc5eab0a4e2a528da5dce1f9e5206d5f3ddfc344571e13c1d089338081494ede5f54beaedcb11c8a881296e815b5727ac305a8",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    },
    {
      "header": {
        "batcher_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c",
        "dependencies": [
          "9195db0271f1fc7670b38d38c43b47d0f665333737304ac58fbb1f096cc386a507418212194cd432e783749163033ee3a0c8759bb18e368ffe5c6cc8b65d98e8"
        ],
        "family_name": "bgt",
        "family_version": "1.0",
        "inputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "nonce": "0x3a837ceff89e8ec3",
        "outputs": [
          "449095542f78b178af7491e476e3e65e4a66ea999877a7e5b823801ab4fa9788176795"
        ],
        "payload_sha512": "b2adcb4f4a193b7c708e32e859404be5765693943ee2d3f9dfcb7a2bf3525376a3ad8554e9a03c700777afd11f94d15014e432d553ca9c7f628fd63c3b3622cc",
        "signer_public_key": "022bf4b841995d7589144f926af9d0fc652474668db17043acb72bb48da6c1e30c"
      },
      "header_signature": "809b5ddd7e90956db388e6cb5cf470bea500a42e57ad118854dd29bc44bee0813b2bdbe2eca566b7609d745c3049d2b5470798af2e88cb7185028e1139cd3f88",
      "payload": "o2ROYW1ldDgtMzBUMTE6MjY6MzIuMjI4NDU4ZVZhbHVlAWRWZXJiY2luYw=="
    }
  ],
  "head": "bc50bd7a7515d40247ac775ff7f33718ccd14353d78a12cdc5e079ed58d157ff34541bda7240ee27f16e51273c67d28ee61abd57a421a3fc6ae2501692edf4de",
  "link": "http://18.222.233.160:8008/transactions?head=bc50bd7a7515d40247ac775ff7f33718ccd14353d78a12cdc5e079ed58d157ff34541bda7240ee27f16e51273c67d28ee61abd57a421a3fc6ae2501692edf4de&start=b355d1ca1f812a154689041c8bf69167c2cf1ebf9fb199d4553f6d1b766ff4f4061d88112090c9c8ce141823dd6d13c1241a112c2b98f30b66e258e89e2f5052&limit=100",
  "paging": {
    "limit": null,
    "next": "http://18.222.233.160:8008/transactions?head=bc50bd7a7515d40247ac775ff7f33718ccd14353d78a12cdc5e079ed58d157ff34541bda7240ee27f16e51273c67d28ee61abd57a421a3fc6ae2501692edf4de&start=bd825d2b2f3cac1250f26464b85eabfef00791b268c999a8ea78048c8d0b7acb18b7992e43d57e95c357850dc72c49a62ad064107bf81b4ea4c71605bfa8ef5b",
    "next_position": "bd825d2b2f3cac1250f26464b85eabfef00791b268c999a8ea78048c8d0b7acb18b7992e43d57e95c357850dc72c49a62ad064107bf81b4ea4c71605bfa8ef5b",
    "start": null
  }
}
export const states = {
  "data": [
    {
      "address": "000000a87cb5eafdcca6a8c983c585ac3c40d933acc48717c272e921e8050ae7af74f5",
      "data": "CioKJHNhd3Rvb3RoLmNvbnNlbnN1cy5wYmZ0Lm1heF9sb2dfc2l6ZRICMjA="
    },
    {
      "address": "000000a87cb5eafdcca6a8c983c585ac3c40d933acc48717c272e9545ea538461003ef",
      "data": "CiUKHHNhd3Rvb3RoLmNvbnNlbnN1cy5wYmZ0Lm5vZGUSBXBsaW5r"
    },
    {
      "address": "000000a87cb5eafdcca6a8c983c585ac3c40d95ca4f3850ccc331ae3b0c44298fc1c14",
      "data": "CiEKGnNhd3Rvb3RoLmNvbnNlbnN1cy52ZXJzaW9uEgMwLjE="
    },
    {
      "address": "000000a87cb5eafdcca6a8c983c585ac3c40d9b1eb2ec8ac9f31ffe3b0c44298fc1c14",
      "data": "CicKHHNhd3Rvb3RoLmNvbnNlbnN1cy5hbGdvcml0aG0SB0Rldm1vZGU="
    },
    {
      "address": "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
      "data": "CmwKJnNhd3Rvb3RoLnNldHRpbmdzLnZvdGUuYXV0aG9yaXplZF9rZXlzEkIwMjQxNjAyOGFhOWE0ZTc3NThhNDU3N2ZmYWQ0MjczYWQ0YzQ2NDRmMjUyMmYzNTAzNzNlODI3ZmNkNGVkY2JhYzI="
    },
    {
      "address": "4490954701f2d99e889829cdcfcb0222628fd6d0a314bde1d15a82f20d7d332d798d13",
      "data": "oWROTk4zWNQKCUJHVF90b2tlbhKAATU4ZDlmYzNkMzJiMTk4NTM0MWUwZGE2OWM5MGM5MzhiYWViNDM4Y2RmNDEwNjc0MzY2YjA0NWQ3NzI2MmZmZjU2NjVlNWVmOWU1ZDA5NTI5MTFhNzQzNGU3YjZjOTU2NDk4NjRlYzNiNDBlZmJlYzBlNzYwMWI2OTJjNmY4ZTcyGkIwMjMyODI1MTc4YTU5ZDhhN2U0OWJjMDczNGVlMWE5MjZmYTg2YWVkNTU5MTc5ODQ2NzA3M2EzYmU0YjY4MDY2MDIgCg=="
    },
    {
      "address": "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75",
      "data": "oXQ4LTIzVDEyOjEwOjA4LjAzMDY0MljUCglCR1RfdG9rZW4SgAE1OGQ5ZmMzZDMyYjE5ODUzNDFlMGRhNjljOTBjOTM4YmFlYjQzOGNkZjQxMDY3NDM2NmIwNDVkNzcyNjJmZmY1NjY1ZTVlZjllNWQwOTUyOTExYTc0MzRlN2I2Yzk1NjQ5ODY0ZWMzYjQwZWZiZWMwZTc2MDFiNjkyYzZmOGU3MhpCMDIzMjgyNTE3OGE1OWQ4YTdlNDliYzA3MzRlZTFhOTI2ZmE4NmFlZDU1OTE3OTg0NjcwNzNhM2JlNGI2ODA2NjAyIAU="
    },
    {
      "address": "4490956be730c537aaea397e400b5926a32d601fbbc321dee7985e69589d42bca4b45b",
      "data": "oWROTk40WNQKCUJHVF90b2tlbhKAATU4ZDlmYzNkMzJiMTk4NTM0MWUwZGE2OWM5MGM5MzhiYWViNDM4Y2RmNDEwNjc0MzY2YjA0NWQ3NzI2MmZmZjU2NjVlNWVmOWU1ZDA5NTI5MTFhNzQzNGU3YjZjOTU2NDk4NjRlYzNiNDBlZmJlYzBlNzYwMWI2OTJjNmY4ZTcyGkIwMjMyODI1MTc4YTU5ZDhhN2U0OWJjMDczNGVlMWE5MjZmYTg2YWVkNTU5MTc5ODQ2NzA3M2EzYmU0YjY4MDY2MDIgCg=="
    },
    {
      "address": "44909584dbb98325034ca4d9ed1b994c4fef83fb16a141c4795c88293649320b579564",
      "data": "oWROTk4yWNQKCUJHVF90b2tlbhKAATU4ZDlmYzNkMzJiMTk4NTM0MWUwZGE2OWM5MGM5MzhiYWViNDM4Y2RmNDEwNjc0MzY2YjA0NWQ3NzI2MmZmZjU2NjVlNWVmOWU1ZDA5NTI5MTFhNzQzNGU3YjZjOTU2NDk4NjRlYzNiNDBlZmJlYzBlNzYwMWI2OTJjNmY4ZTcyGkIwMjMyODI1MTc4YTU5ZDhhN2U0OWJjMDczNGVlMWE5MjZmYTg2YWVkNTU5MTc5ODQ2NzA3M2EzYmU0YjY4MDY2MDIgCg=="
    },
    {
      "address": "44909587e9d6a710196754f33d517cb559e62da6edeafe6428efae5cd58f4b8219a019",
      "data": "oWNOTk5Y1AoJQkdUX3Rva2VuEoABNThkOWZjM2QzMmIxOTg1MzQxZTBkYTY5YzkwYzkzOGJhZWI0MzhjZGY0MTA2NzQzNjZiMDQ1ZDc3MjYyZmZmNTY2NWU1ZWY5ZTVkMDk1MjkxMWE3NDM0ZTdiNmM5NTY0OTg2NGVjM2I0MGVmYmVjMGU3NjAxYjY5MmM2ZjhlNzIaQjAyMzI4MjUxNzhhNTlkOGE3ZTQ5YmMwNzM0ZWUxYTkyNmZhODZhZWQ1NTkxNzk4NDY3MDczYTNiZTRiNjgwNjYwMiAK"
    },
    {
      "address": "449095d1f3572411788658616d59a9e7d07324dd13de1735750174df38c1a373747f14",
      "data": "oWROTk4xWNQKCUJHVF90b2tlbhKAATU4ZDlmYzNkMzJiMTk4NTM0MWUwZGE2OWM5MGM5MzhiYWViNDM4Y2RmNDEwNjc0MzY2YjA0NWQ3NzI2MmZmZjU2NjVlNWVmOWU1ZDA5NTI5MTFhNzQzNGU3YjZjOTU2NDk4NjRlYzNiNDBlZmJlYzBlNzYwMWI2OTJjNmY4ZTcyGkIwMjMyODI1MTc4YTU5ZDhhN2U0OWJjMDczNGVlMWE5MjZmYTg2YWVkNTU5MTc5ODQ2NzA3M2EzYmU0YjY4MDY2MDIgCg=="
    },
    {
      "address": "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195",
      "data": "oXQ4LTIzVDEyOjA5OjMxLjAzMjgwMFjUCglCR1RfdG9rZW4SgAE1OGQ5ZmMzZDMyYjE5ODUzNDFlMGRhNjljOTBjOTM4YmFlYjQzOGNkZjQxMDY3NDM2NmIwNDVkNzcyNjJmZmY1NjY1ZTVlZjllNWQwOTUyOTExYTc0MzRlN2I2Yzk1NjQ5ODY0ZWMzYjQwZWZiZWMwZTc2MDFiNjkyYzZmOGU3MhpCMDIzMjgyNTE3OGE1OWQ4YTdlNDliYzA3MzRlZTFhOTI2ZmE4NmFlZDU1OTE3OTg0NjcwNzNhM2JlNGI2ODA2NjAyIAs="
    }
  ],
  "head": "f773d53b566ae25b99b242f2a22b46fb803cbedf48840e3e8300946c47024c062d18990113d549970d90b088aff2359c0980ecb15572f8572e5aa538443a2234",
  "link": "http://127.0.0.1:8003/state?head=f773d53b566ae25b99b242f2a22b46fb803cbedf48840e3e8300946c47024c062d18990113d549970d90b088aff2359c0980ecb15572f8572e5aa538443a2234&start=000000a87cb5eafdcca6a8c983c585ac3c40d933acc48717c272e921e8050ae7af74f5&limit=100",
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
            "signer_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568",
            "transaction_ids": [
              "4a034834bc3a10c0c2a5f82c65f1ab8d1b24e76012d632312f80b03ab17de13a66c87484230b022b76379b96d4ab4e0ba5ed423b1c4aa57da0001b2544ebfd77"
            ]
          },
          "header_signature": "e9276057efb51957cc665aa5bd95abfb4683164f19166cedc8c3eeaa359b60603880a6668dc7fe165c300d6f455efe4e088b0f6fa6a4629d7914cf44b2dd68b8",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568",
                "dependencies": [],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "4490956be730c537aaea397e400b5926a32d601fbbc321dee7985e69589d42bca4b45b"
                ],
                "nonce": "0x562b89dab84beccd",
                "outputs": [
                  "4490956be730c537aaea397e400b5926a32d601fbbc321dee7985e69589d42bca4b45b"
                ],
                "payload_sha512": "a7f96997dc20efdcd20c08666a2472f8dbc2207da8fc1ca59e33c8d52c944a4f1869d79cf42ebc7f965ea100a1c651b9d551ac53654bafe253c2b5895a0832de",
                "signer_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568"
              },
              "header_signature": "4a034834bc3a10c0c2a5f82c65f1ab8d1b24e76012d632312f80b03ab17de13a66c87484230b022b76379b96d4ab4e0ba5ed423b1c4aa57da0001b2544ebfd77",
              "payload": "o2RWZXJiY3NldGROYW1lZE5OTjRlVmFsdWUK"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "e9276057efb51957cc665aa5bd95abfb4683164f19166cedc8c3eeaa359b60603880a6668dc7fe165c300d6f455efe4e088b0f6fa6a4629d7914cf44b2dd68b8"
        ],
        "block_num": "23",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "085ab6bba4f5571d2fe49a917fae72836bf8710b2f35dcdd95f97b0796bab3876875bc7e7fd6b602d83bf67572a379409ec04fb3f7ceafde9b7cb77d30b98f1b",
        "signer_public_key": "04f2068c16fe9fd0ffcc1da19fd98add24c89c6c5b6c080a1895ee53b565d5cf6c",
        "state_root_hash": "712a481467bf2a3612c60cf73fb134b0c51a8582ab8bfa217292988a08f59c45"
      },
      "header_signature": "f773d53b566ae25b99b242f2a22b46fb803cbedf48840e3e8300946c47024c062d18990113d549970d90b088aff2359c0980ecb15572f8572e5aa538443a2234"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568",
            "transaction_ids": [
              "4e59108dffb38c878c393ccbe108e93000506e24840b953c2acd98634032ea402d7b10caf8c5b921b975eca32a1dc9aa504c35ce19eccb1c8331a60c155541d7"
            ]
          },
          "header_signature": "75eef1fdd7e697df52f56dd61dcecd130d9b6ae9553d1f6b8469a158e5705df05bb33270c5385bbbe1b3cdc409edeb35883e1f5163c5a99f1bc2804714e29151",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568",
                "dependencies": [],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "4490954701f2d99e889829cdcfcb0222628fd6d0a314bde1d15a82f20d7d332d798d13"
                ],
                "nonce": "0xf136240395c98825",
                "outputs": [
                  "4490954701f2d99e889829cdcfcb0222628fd6d0a314bde1d15a82f20d7d332d798d13"
                ],
                "payload_sha512": "377ea0e106bb416c32243268902871b7d602396d1eaceb4bfa9172cf7845f86f641731cb2dd496dd7ba6604a8ded298ede9593e732b5b1685d9935a5648e61f4",
                "signer_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568"
              },
              "header_signature": "4e59108dffb38c878c393ccbe108e93000506e24840b953c2acd98634032ea402d7b10caf8c5b921b975eca32a1dc9aa504c35ce19eccb1c8331a60c155541d7",
              "payload": "o2RWZXJiY3NldGROYW1lZE5OTjNlVmFsdWUK"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "75eef1fdd7e697df52f56dd61dcecd130d9b6ae9553d1f6b8469a158e5705df05bb33270c5385bbbe1b3cdc409edeb35883e1f5163c5a99f1bc2804714e29151"
        ],
        "block_num": "22",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "64d88f3c811773d1a4c0e12523846558820fbf455f12e0ab81910b4d23ff9e010cf3a06586d9e48a8d0d69cc08719020fb85facd427ac8ff78715c1894e3fb96",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "dcbf5ab9d11f4f62e81f3f5c77deb31a03ad1c9dd7b7f7fdb92dbf50b361acb9"
      },
      "header_signature": "71c94099eb910bf9058d4d0352d1cc6ececa3ad4870d0b56315ae3479d332b7640be338f2f26d2faa1c8ef61702a3675ef732924a850ac7167455c3eb4bb5a1d"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568",
            "transaction_ids": [
              "a19ada3188cd95329e980a40785a321791c26c18f7512f5e1a10a4323f10c96a5687998531b9d43d2d1e2951e34fe8048c71b5d3990371e9ec71e1134d91ff52"
            ]
          },
          "header_signature": "bc0f5cd98223a1ee7f308221513ba9f87aa1cd495424204231b0a301d81875e76f3cd3585082df1e89ea37853dd827ab4399ec1e0ff7ace6d19529b4e1fc20d6",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568",
                "dependencies": [],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "44909584dbb98325034ca4d9ed1b994c4fef83fb16a141c4795c88293649320b579564"
                ],
                "nonce": "0xb1b52b0c6ca71fc4",
                "outputs": [
                  "44909584dbb98325034ca4d9ed1b994c4fef83fb16a141c4795c88293649320b579564"
                ],
                "payload_sha512": "c7e3f293d5b608bc43dfebb7e4cd5073ede55b5dfd35e1e00a6a8f16df88a01e8dec7b2dfcc8549283ecc301bbceeedcef09281b67769ab0e2bd66223c0d834b",
                "signer_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568"
              },
              "header_signature": "a19ada3188cd95329e980a40785a321791c26c18f7512f5e1a10a4323f10c96a5687998531b9d43d2d1e2951e34fe8048c71b5d3990371e9ec71e1134d91ff52",
              "payload": "o2RWZXJiY3NldGROYW1lZE5OTjJlVmFsdWUK"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "bc0f5cd98223a1ee7f308221513ba9f87aa1cd495424204231b0a301d81875e76f3cd3585082df1e89ea37853dd827ab4399ec1e0ff7ace6d19529b4e1fc20d6"
        ],
        "block_num": "21",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "b23c9668ca5cdcbed250cf5f6d1fe75bd9f67cc7849d501044c71734ffc09ee372a06e4c4871574fe144761875d5b6b3d97b74bb262932731d60a603f1301138",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "db27d88dbd4c211f1ee8b93362c748a904391713d0f8100463ece7d980c82ab6"
      },
      "header_signature": "1c92ad7fa4536ae263f0bc696f7f121c55ef1a61abcb6deead4d79f15922c7e25c30c2af35a60d4a3d7592bd4696f52afa35c59581687f2d4ed463b4bb63039b"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568",
            "transaction_ids": [
              "8673a40a330ee51e2f01964765f07af7f562e64d0641af44d8593920ecc1715d32934c4e9abd95d23dcef4b3090ef414bf9e33a22fbd67263f512c8686b8a51f"
            ]
          },
          "header_signature": "a2d6c02888a963e519c08a9c80d6a03e361b2b0ecb5ffdc313aec38465aa62c44926aa4105073a111e85eaefa10b297336894c0d7cb69323f80e03eed2f010eb",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568",
                "dependencies": [],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095d1f3572411788658616d59a9e7d07324dd13de1735750174df38c1a373747f14"
                ],
                "nonce": "0xf85ec3dfac78c5b5",
                "outputs": [
                  "449095d1f3572411788658616d59a9e7d07324dd13de1735750174df38c1a373747f14"
                ],
                "payload_sha512": "7b71bcc5501989aca1ba6483f955d4b683df85ad2e741b0ca784c6695f83d33d343c612ad1c0d84cd89847d0f91521678ea1d5dd899d6ad0a58d0e756be10b0a",
                "signer_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568"
              },
              "header_signature": "8673a40a330ee51e2f01964765f07af7f562e64d0641af44d8593920ecc1715d32934c4e9abd95d23dcef4b3090ef414bf9e33a22fbd67263f512c8686b8a51f",
              "payload": "o2RWZXJiY3NldGROYW1lZE5OTjFlVmFsdWUK"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "a2d6c02888a963e519c08a9c80d6a03e361b2b0ecb5ffdc313aec38465aa62c44926aa4105073a111e85eaefa10b297336894c0d7cb69323f80e03eed2f010eb"
        ],
        "block_num": "20",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "e95f6eca3d53fee7d95c74364c666034fb96a529c4299a900ad6f2c771c6217d5d23b818d0607fdec033ccb7acf195269f7bb2827b42239b1b051550f2f2a480",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "ac51bb8db88b19c5aba37796cc675233dedbb497c5ff619e3227443ff500d046"
      },
      "header_signature": "5611a8f8fca1de3121ca62103c97d2b4ddb2ef8f6704f03d08479f343b057703556ce667c6b8be24f2d91b6662fc22b8c56568c481dcdcb4ba2e17ef1c64e132"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568",
            "transaction_ids": [
              "56952c8c7d39fb7b330f387a695ec58420a6f5c7d288e8ffd9cca183fff643411c2b8eef8de2009713e79a65d045079aea4e6fd553551c95ada3368fbe6dc61e"
            ]
          },
          "header_signature": "5b898635197fa2205351ee6dcb2a7f1a50937b30a05d889f9dd4d36a80d8b7a04991899952d7cb3456183bf27d36926ae2930f07e0f6241284b6f6bd278e89fd",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568",
                "dependencies": [],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "44909587e9d6a710196754f33d517cb559e62da6edeafe6428efae5cd58f4b8219a019"
                ],
                "nonce": "0xc19c9f8ee05a2b04",
                "outputs": [
                  "44909587e9d6a710196754f33d517cb559e62da6edeafe6428efae5cd58f4b8219a019"
                ],
                "payload_sha512": "f7754e24a99f855d1ff4a4aefa98f7a30b6c8e1be4b34a114b64ede2fa915bd351daa2d3060b822f9b286d77e4916ae5c0ff2d12800e09e360777a93b4a1a060",
                "signer_public_key": "03639200a4598f1ba5015e17f26e63dc2b5b49a6e925e611eccad30b4b588e9568"
              },
              "header_signature": "56952c8c7d39fb7b330f387a695ec58420a6f5c7d288e8ffd9cca183fff643411c2b8eef8de2009713e79a65d045079aea4e6fd553551c95ada3368fbe6dc61e",
              "payload": "o2RWZXJiY3NldGROYW1lY05OTmVWYWx1ZQo="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "5b898635197fa2205351ee6dcb2a7f1a50937b30a05d889f9dd4d36a80d8b7a04991899952d7cb3456183bf27d36926ae2930f07e0f6241284b6f6bd278e89fd"
        ],
        "block_num": "19",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "6ce7fe426501526cea6b7eda7ee98217a9a0c59fca1f457dda1a3f3fa8672fcb4768aefbccb309364cbc0db5587f473abc462c04bda67684ca57a0b15efd4396",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "b4741e50221c5050712682b6eab014e347d088501e490f5df1b060f351afff04"
      },
      "header_signature": "085ab6bba4f5571d2fe49a917fae72836bf8710b2f35dcdd95f97b0796bab3876875bc7e7fd6b602d83bf67572a379409ec04fb3f7ceafde9b7cb77d30b98f1b"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
            "transaction_ids": [
              "982ab080bc30b814e03f3b071ff1ef751bebc22ff1726e01327961cff2a33b144e89840df0ce0ddf6604c54f1449047b6c1af4cb14e594d4412e41465eb8dc4f"
            ]
          },
          "header_signature": "aeec58b97854e1d3ff492c94e87ff1e96f406b9a2bc01161d6101823fb05003a32f472af95c24209bb362443328d685e78f4187245c641b56810f8826233b0ed",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
                "dependencies": [
                  "1f83ad19149b83a94636b60e0ecec5fd8c759295cf90b4e0431beb61ddcc6df2051c8796f3b8016ee05af7c87edfac1919c885d48f04a28df950a2579dcf3dbc"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "nonce": "0xb8dc2c947f659a61",
                "outputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "payload_sha512": "44a1540e0440f6457a11382ae1773a621d34aa2e1a4559ed2d84b9e0e2a9d2a06443847d2882584683a19ede6acad6575e3a8c6c65df214a3299010ef7fcfe12",
                "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c"
              },
              "header_signature": "982ab080bc30b814e03f3b071ff1ef751bebc22ff1726e01327961cff2a33b144e89840df0ce0ddf6604c54f1449047b6c1af4cb14e594d4412e41465eb8dc4f",
              "payload": "o2ROYW1ldDgtMjNUMTI6MTA6MDguMDMwNjQyZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "aeec58b97854e1d3ff492c94e87ff1e96f406b9a2bc01161d6101823fb05003a32f472af95c24209bb362443328d685e78f4187245c641b56810f8826233b0ed"
        ],
        "block_num": "18",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "438f139528d8c1276a128e51ffabcc926ef203a9341797a6bb62b12f92b9c9ab7d92e2c16da4dc22ff181428f641b69cf12483f39158a8975f7a8d045248313f",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "36d7f4da4d7ebdf06dc256aa27077b32cdee5f748049eb19cc5d613fc7b4385e"
      },
      "header_signature": "64d88f3c811773d1a4c0e12523846558820fbf455f12e0ab81910b4d23ff9e010cf3a06586d9e48a8d0d69cc08719020fb85facd427ac8ff78715c1894e3fb96"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
            "transaction_ids": [
              "26b32979afd6c230e15738d07c189e996ff532d2a3b1a3945d33fc09b5f9da615365e9173a3eb7baa8481d3ea194655fddff8effe411a842a4adc7eb202408b0"
            ]
          },
          "header_signature": "4c2d996aba47cf79cadbe158ba00bc6a44585b6162ce289b9f2abed5a3a19fa056ef161693120efa9c8325157b4bb751ebd2dee17dfff7d62e57cbdce304e48b",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
                "dependencies": [
                  "1f83ad19149b83a94636b60e0ecec5fd8c759295cf90b4e0431beb61ddcc6df2051c8796f3b8016ee05af7c87edfac1919c885d48f04a28df950a2579dcf3dbc"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "nonce": "0x307d51f006fd4711",
                "outputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "payload_sha512": "44a1540e0440f6457a11382ae1773a621d34aa2e1a4559ed2d84b9e0e2a9d2a06443847d2882584683a19ede6acad6575e3a8c6c65df214a3299010ef7fcfe12",
                "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c"
              },
              "header_signature": "26b32979afd6c230e15738d07c189e996ff532d2a3b1a3945d33fc09b5f9da615365e9173a3eb7baa8481d3ea194655fddff8effe411a842a4adc7eb202408b0",
              "payload": "o2ROYW1ldDgtMjNUMTI6MTA6MDguMDMwNjQyZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "4c2d996aba47cf79cadbe158ba00bc6a44585b6162ce289b9f2abed5a3a19fa056ef161693120efa9c8325157b4bb751ebd2dee17dfff7d62e57cbdce304e48b"
        ],
        "block_num": "17",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "e37eb3102f0f22c17f609cad53c81f8c9c3e1e9e0975b2caf8bd7c4df9c586440b4923b0c4bf8c70ad1eda390b98e9cd9fe62915b63b7ab1db91a0f876d2df69",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "fd14d179bed82fcde9ea679d92c4f83a7e1cdeb1416fbcf524c9069fa0683ac3"
      },
      "header_signature": "b23c9668ca5cdcbed250cf5f6d1fe75bd9f67cc7849d501044c71734ffc09ee372a06e4c4871574fe144761875d5b6b3d97b74bb262932731d60a603f1301138"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
            "transaction_ids": [
              "c30cd8779e2c79739d8ba3cab16887d51e2609f825dc665a57b4cb1a85e5177e6e3063cd1cdf69c90c783777a0595857ad108f3a82e420ef3e441467c2318242"
            ]
          },
          "header_signature": "d89c420e0bf43effee6e05642c46907964f99ee501f48810c382302b5a6862fe2ce4cf271964cb0589bd7be7707bd052bcf5093a620459cab73459379ca09863",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
                "dependencies": [
                  "1f83ad19149b83a94636b60e0ecec5fd8c759295cf90b4e0431beb61ddcc6df2051c8796f3b8016ee05af7c87edfac1919c885d48f04a28df950a2579dcf3dbc"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "nonce": "0xefa6b8368040ad52",
                "outputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "payload_sha512": "44a1540e0440f6457a11382ae1773a621d34aa2e1a4559ed2d84b9e0e2a9d2a06443847d2882584683a19ede6acad6575e3a8c6c65df214a3299010ef7fcfe12",
                "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c"
              },
              "header_signature": "c30cd8779e2c79739d8ba3cab16887d51e2609f825dc665a57b4cb1a85e5177e6e3063cd1cdf69c90c783777a0595857ad108f3a82e420ef3e441467c2318242",
              "payload": "o2ROYW1ldDgtMjNUMTI6MTA6MDguMDMwNjQyZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "d89c420e0bf43effee6e05642c46907964f99ee501f48810c382302b5a6862fe2ce4cf271964cb0589bd7be7707bd052bcf5093a620459cab73459379ca09863"
        ],
        "block_num": "16",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "ba6a6691d1a495795bb73575b4eae4cee882d07828818f8af29ea4761d02bfdb342faa70e3c06417a6c4bad51ebe19a18596e44280e13e64bb2ddf537c1b5282",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "580b6f515c8121a84c6d9fb31a402e6aa60be5b8893c73e1816cbc755927b9e9"
      },
      "header_signature": "e95f6eca3d53fee7d95c74364c666034fb96a529c4299a900ad6f2c771c6217d5d23b818d0607fdec033ccb7acf195269f7bb2827b42239b1b051550f2f2a480"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
            "transaction_ids": [
              "4194f01058c9b5bd448820ed40efc3093de4afeea50290d9cf450e4a3e49c79e58551e21a921b3659a3f56533ac59a4f5ad82237075d27af13f6dfa51e250daa"
            ]
          },
          "header_signature": "00c130e91bdb489ebd85f01f6e628f6ad027e9c13590753d09ee95742fb64d8e28a4dc5ba4ee54be064be175bc2a43bf97a38addbd3db96edfff8a0642051185",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
                "dependencies": [
                  "1f83ad19149b83a94636b60e0ecec5fd8c759295cf90b4e0431beb61ddcc6df2051c8796f3b8016ee05af7c87edfac1919c885d48f04a28df950a2579dcf3dbc"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "nonce": "0x6a3059f363667f08",
                "outputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "payload_sha512": "44a1540e0440f6457a11382ae1773a621d34aa2e1a4559ed2d84b9e0e2a9d2a06443847d2882584683a19ede6acad6575e3a8c6c65df214a3299010ef7fcfe12",
                "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c"
              },
              "header_signature": "4194f01058c9b5bd448820ed40efc3093de4afeea50290d9cf450e4a3e49c79e58551e21a921b3659a3f56533ac59a4f5ad82237075d27af13f6dfa51e250daa",
              "payload": "o2ROYW1ldDgtMjNUMTI6MTA6MDguMDMwNjQyZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "00c130e91bdb489ebd85f01f6e628f6ad027e9c13590753d09ee95742fb64d8e28a4dc5ba4ee54be064be175bc2a43bf97a38addbd3db96edfff8a0642051185"
        ],
        "block_num": "15",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "0d9bbd182caaf7d9c021c2f49b23681c4e995cf2124a6cb34e6a04c02c094e6731355279f5ee6094adcffc91fd571c16549431776c4a5736fec2e79c3e05e438",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "dc734bd383616571a252bdb7cb584a4d54886b67f8b7829f93dfdcb300a3c808"
      },
      "header_signature": "6ce7fe426501526cea6b7eda7ee98217a9a0c59fca1f457dda1a3f3fa8672fcb4768aefbccb309364cbc0db5587f473abc462c04bda67684ca57a0b15efd4396"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
            "transaction_ids": [
              "348c1b7e766e904cf64912125d6e52c948b9db17453312cea119bf0261c8d2fc06bb02ebd7590ad80cbacf7b96309fa2a4dd1c87fc9337e6cea00ebbfa161bd8"
            ]
          },
          "header_signature": "70e64691137884ba9609209694cd0d729be6a0d20fdb012741ea0fb08af9ee024b28216c48438543f9d18e47744a909c110fe2d8381734a0e63298a57b15ab78",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
                "dependencies": [
                  "1f83ad19149b83a94636b60e0ecec5fd8c759295cf90b4e0431beb61ddcc6df2051c8796f3b8016ee05af7c87edfac1919c885d48f04a28df950a2579dcf3dbc"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "nonce": "0xe2427cf0e5eb8e3",
                "outputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "payload_sha512": "44a1540e0440f6457a11382ae1773a621d34aa2e1a4559ed2d84b9e0e2a9d2a06443847d2882584683a19ede6acad6575e3a8c6c65df214a3299010ef7fcfe12",
                "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c"
              },
              "header_signature": "348c1b7e766e904cf64912125d6e52c948b9db17453312cea119bf0261c8d2fc06bb02ebd7590ad80cbacf7b96309fa2a4dd1c87fc9337e6cea00ebbfa161bd8",
              "payload": "o2ROYW1ldDgtMjNUMTI6MTA6MDguMDMwNjQyZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "70e64691137884ba9609209694cd0d729be6a0d20fdb012741ea0fb08af9ee024b28216c48438543f9d18e47744a909c110fe2d8381734a0e63298a57b15ab78"
        ],
        "block_num": "14",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "ce5e8528d2e1e142bb4d15232ac221ddcb9ea96210cda39ce0d6c08c3e81e2ba2a176846909e10c575dc3e03f752daaf1a6d74737bf0388fc070d56726d1e6c4",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "b9820f3e4450c96f2c5fbe4e03abae1a2d649afe0dd784bf5cd73d07bae58d11"
      },
      "header_signature": "438f139528d8c1276a128e51ffabcc926ef203a9341797a6bb62b12f92b9c9ab7d92e2c16da4dc22ff181428f641b69cf12483f39158a8975f7a8d045248313f"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
            "transaction_ids": [
              "1f83ad19149b83a94636b60e0ecec5fd8c759295cf90b4e0431beb61ddcc6df2051c8796f3b8016ee05af7c87edfac1919c885d48f04a28df950a2579dcf3dbc"
            ]
          },
          "header_signature": "71f725af3bc688c957e05ebafae301fc98204872753c4e2fee308a08fd862bae4d7ce588b33a8e6d4f9d694666640695b60b7612de835ad327cf1af2bb80d00d",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c",
                "dependencies": [],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "nonce": "0xcbc19e9eb44c349",
                "outputs": [
                  "449095613bc89edb95136659ffcd4366fb386e6ddc00ce7cfdd1667d828a2c11890a75"
                ],
                "payload_sha512": "58a0f53116c581d8e495792fffc71790841ad4aef1c724bb1f859c90a93541ea71bbf3d00575f8387346299fc097cddd0556c877eef372447d6af23f79ed3916",
                "signer_public_key": "0230e5bdbddd35455fb9bc7b0cdb03ee7c88e08c5694bc0b30f77fd03776b7f76c"
              },
              "header_signature": "1f83ad19149b83a94636b60e0ecec5fd8c759295cf90b4e0431beb61ddcc6df2051c8796f3b8016ee05af7c87edfac1919c885d48f04a28df950a2579dcf3dbc",
              "payload": "o2ROYW1ldDgtMjNUMTI6MTA6MDguMDMwNjQyZVZhbHVlAGRWZXJiY3NldA=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "71f725af3bc688c957e05ebafae301fc98204872753c4e2fee308a08fd862bae4d7ce588b33a8e6d4f9d694666640695b60b7612de835ad327cf1af2bb80d00d"
        ],
        "block_num": "13",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "5afaeecf21774a9f4a4ef6cdad33c3ffcb64758128b7c0cdcb2ed9987d2104203a21366f4b316687f7e687df35783fb4c192fb7cb705427b7c539209b6af18df",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "b329c744ca6d02605a2e533c9022b79b80d696acc733339be0d56d87ed688e1a"
      },
      "header_signature": "e37eb3102f0f22c17f609cad53c81f8c9c3e1e9e0975b2caf8bd7c4df9c586440b4923b0c4bf8c70ad1eda390b98e9cd9fe62915b63b7ab1db91a0f876d2df69"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "738ed2bf8b2b44a321985db95d33fe78ce94c995ab75c93c94b9ee414b97a20a5947a9a074e64ac5b6d1a4361c8131e44b211fdaf875a353fa132dc4c02a4fb8"
            ]
          },
          "header_signature": "2d08e645062c05500e51fadc1a9defa7f18e849d7443b6488415186bab270de305cc1ad95c362134c1631883ca683aedf46b15ff6e8691dc67c468f758426492",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [
                  "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0xc76a69fc71bc87b4",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "724cefeaed80120294ea8647b3ddceec502a42433b041f65259e09ecf636f238e4aee3e6197f2897a008fedd4d4e912900e88be4b9e1b1c6e0d0a634ed66965c",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "738ed2bf8b2b44a321985db95d33fe78ce94c995ab75c93c94b9ee414b97a20a5947a9a074e64ac5b6d1a4361c8131e44b211fdaf875a353fa132dc4c02a4fb8",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "2d08e645062c05500e51fadc1a9defa7f18e849d7443b6488415186bab270de305cc1ad95c362134c1631883ca683aedf46b15ff6e8691dc67c468f758426492"
        ],
        "block_num": "12",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "a3d163891258e31d19ac59b36249c7866c877f601e8f6e46518e756497ee055e3977a89c514ada04990d3e9a7731bc663b856a7aaf03de171fd86ba765f3fe05",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "b7ecf1089f33d8f9835808710811cc5de4cf861cd08d6fe83e5d0f83ae1fad7d"
      },
      "header_signature": "ba6a6691d1a495795bb73575b4eae4cee882d07828818f8af29ea4761d02bfdb342faa70e3c06417a6c4bad51ebe19a18596e44280e13e64bb2ddf537c1b5282"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "112faa265b04189870bda5832b034ccdfb1a63dd0f9fd3ddefcfabdcb30242ee08bb376092ebf3bbf17603c3912e6ed447542ac01863cb94afc8cc2a3bce86e7"
            ]
          },
          "header_signature": "bde6a1e794e9722f9684410d45d1c01cb6e7a9140e6dde4474aeb27a091b03872b21988f60bb72d38afc313bd7de4eaf38fb48a4cdb079c624437dcdbba122ce",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [
                  "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0x8bf4bb0d9a5730ea",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "724cefeaed80120294ea8647b3ddceec502a42433b041f65259e09ecf636f238e4aee3e6197f2897a008fedd4d4e912900e88be4b9e1b1c6e0d0a634ed66965c",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "112faa265b04189870bda5832b034ccdfb1a63dd0f9fd3ddefcfabdcb30242ee08bb376092ebf3bbf17603c3912e6ed447542ac01863cb94afc8cc2a3bce86e7",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "bde6a1e794e9722f9684410d45d1c01cb6e7a9140e6dde4474aeb27a091b03872b21988f60bb72d38afc313bd7de4eaf38fb48a4cdb079c624437dcdbba122ce"
        ],
        "block_num": "11",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "47e349647b853646b9f43ecbbf04426cde35d069caca343363f8f80e01e15e2734f6cae7420f4ca5be3633af2f31a2968d52c002d6878270c2f123352a9c7c7c",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "cc26ffdb23a4e790d8d241815eb47c1a690ac9f77d03e93ecffd255439060b29"
      },
      "header_signature": "ce5e8528d2e1e142bb4d15232ac221ddcb9ea96210cda39ce0d6c08c3e81e2ba2a176846909e10c575dc3e03f752daaf1a6d74737bf0388fc070d56726d1e6c4"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "c897689689dc3ae08548e81e7c95c57643218d6a7bcf2e89f69e258e27fcb6eb72573c618562722794dbc2cae26f1113bb61350af335be8f0f3cd0cd98775fe2"
            ]
          },
          "header_signature": "dec00b506b38112616224dbffd0bced3e89a36908535ab85fa68fdf657c52b6a048437492640458c0226bdd85b38f29186a14106c380a83314950cb98a8a2050",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [
                  "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0x48800ebbd89c2c27",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "724cefeaed80120294ea8647b3ddceec502a42433b041f65259e09ecf636f238e4aee3e6197f2897a008fedd4d4e912900e88be4b9e1b1c6e0d0a634ed66965c",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "c897689689dc3ae08548e81e7c95c57643218d6a7bcf2e89f69e258e27fcb6eb72573c618562722794dbc2cae26f1113bb61350af335be8f0f3cd0cd98775fe2",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "dec00b506b38112616224dbffd0bced3e89a36908535ab85fa68fdf657c52b6a048437492640458c0226bdd85b38f29186a14106c380a83314950cb98a8a2050"
        ],
        "block_num": "10",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "0d9bbd182caaf7d9c021c2f49b23681c4e995cf2124a6cb34e6a04c02c094e6731355279f5ee6094adcffc91fd571c16549431776c4a5736fec2e79c3e05e438",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "4de7e39d9d23ca44b79de0843f333fcd64502079dd16a3b1a2b139c78b9ba82f"
      },
      "header_signature": "a3d163891258e31d19ac59b36249c7866c877f601e8f6e46518e756497ee055e3977a89c514ada04990d3e9a7731bc663b856a7aaf03de171fd86ba765f3fe05"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "4c6dc46ab499c6ed4efb9b5c5d1f7642d2bdd8f31b68af624c7a8e4e3849d33e3defe47b21bd2a933029c1cd00e368d059d02a7bcf267ddd891b19e2ec9a986f"
            ]
          },
          "header_signature": "e9c8a04315ce9b477a825237f37c800b93a5e2dcfe79c0bf7af5eddcea14e78006ba8b5ff9f49ca30612a140808f266d72e9fdcf79d968a421e39dc92f987404",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [
                  "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0xad25550fd7ad6461",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "724cefeaed80120294ea8647b3ddceec502a42433b041f65259e09ecf636f238e4aee3e6197f2897a008fedd4d4e912900e88be4b9e1b1c6e0d0a634ed66965c",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "4c6dc46ab499c6ed4efb9b5c5d1f7642d2bdd8f31b68af624c7a8e4e3849d33e3defe47b21bd2a933029c1cd00e368d059d02a7bcf267ddd891b19e2ec9a986f",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "e9c8a04315ce9b477a825237f37c800b93a5e2dcfe79c0bf7af5eddcea14e78006ba8b5ff9f49ca30612a140808f266d72e9fdcf79d968a421e39dc92f987404"
        ],
        "block_num": "9",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "5afaeecf21774a9f4a4ef6cdad33c3ffcb64758128b7c0cdcb2ed9987d2104203a21366f4b316687f7e687df35783fb4c192fb7cb705427b7c539209b6af18df",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "0b11fb378a0e9a8f99b1405d4e997ae42a4ea838b74cf8b975a928c3252a3921"
      },
      "header_signature": "47e349647b853646b9f43ecbbf04426cde35d069caca343363f8f80e01e15e2734f6cae7420f4ca5be3633af2f31a2968d52c002d6878270c2f123352a9c7c7c"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "1601e3cd7ed14cb9305a6c14268a0fe8fc4cb96f91406f18bbcae968bb9ccee009bf4f1faa8dc865d4786796e40862377055b053067e4bf847d7eb800f20cfdf"
            ]
          },
          "header_signature": "8a17b6283e57d4a1498fc7138ba63e25a0e7c101f9b2b3132f3281d4bc4d45de4f1c549f98dfd4e58e4dbc28c3e40dc6441da5fbcc304a80fc8823dc0f653455",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [
                  "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0x66c034c9f3755dd7",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "724cefeaed80120294ea8647b3ddceec502a42433b041f65259e09ecf636f238e4aee3e6197f2897a008fedd4d4e912900e88be4b9e1b1c6e0d0a634ed66965c",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "1601e3cd7ed14cb9305a6c14268a0fe8fc4cb96f91406f18bbcae968bb9ccee009bf4f1faa8dc865d4786796e40862377055b053067e4bf847d7eb800f20cfdf",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "8a17b6283e57d4a1498fc7138ba63e25a0e7c101f9b2b3132f3281d4bc4d45de4f1c549f98dfd4e58e4dbc28c3e40dc6441da5fbcc304a80fc8823dc0f653455"
        ],
        "block_num": "8",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "15376679e8dc190a37b13a40742855e8c5796ed9e93774853d060755a122591b63a6d7802fd05a54bd5c61e24e5265d19835de2b6a0ccdf30dd1fcda8aafb074",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "e520ce4d166dcb58c0152024dbf845fa75771bce25b04456756fa2ae203aca2f"
      },
      "header_signature": "0d9bbd182caaf7d9c021c2f49b23681c4e995cf2124a6cb34e6a04c02c094e6731355279f5ee6094adcffc91fd571c16549431776c4a5736fec2e79c3e05e438"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "0b671460db6adfa2582a28b29796914de926bf1d478a09e9d79a1e9b53f68e6f3563d12ff2a5e7dae05e712dfbaaa7d423e8f9908cfa08fb1700c9c7e6bbe6d5"
            ]
          },
          "header_signature": "1a7240846d98bf656b904c0ad1e6252d3a2013fd498d2dacf127e723cdf30a155af284f981906025fd4c28fe4fcef10b0e1d4c339410b340de29aa03ff68f372",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [
                  "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0xfc13d6c5e86a99a6",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "724cefeaed80120294ea8647b3ddceec502a42433b041f65259e09ecf636f238e4aee3e6197f2897a008fedd4d4e912900e88be4b9e1b1c6e0d0a634ed66965c",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "0b671460db6adfa2582a28b29796914de926bf1d478a09e9d79a1e9b53f68e6f3563d12ff2a5e7dae05e712dfbaaa7d423e8f9908cfa08fb1700c9c7e6bbe6d5",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "1a7240846d98bf656b904c0ad1e6252d3a2013fd498d2dacf127e723cdf30a155af284f981906025fd4c28fe4fcef10b0e1d4c339410b340de29aa03ff68f372"
        ],
        "block_num": "7",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "13b3acdd4221b418307f7541e8f78ce0f252206e8599e38fef5aa0685a2b96f633252e23234455e5786bdb6d30a3df6d0997ca1e18aa68d8e76267c3617de957",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "8bde335ce77d2bbfeffa634e2db1b706c452af5ba985ce1e40e49ec7f77f5e3f"
      },
      "header_signature": "5afaeecf21774a9f4a4ef6cdad33c3ffcb64758128b7c0cdcb2ed9987d2104203a21366f4b316687f7e687df35783fb4c192fb7cb705427b7c539209b6af18df"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "4c8020af004deef2adaac403319d989487e99a3e28d138ecc913ccfb3145a5f67f481451cf9d9974d443b49fda020a1e6c5c4e92910320dfcf9263bb8795e185"
            ]
          },
          "header_signature": "4dc1d7d9b5b6784a6b9cc66b237ec5ab9c11cbc1b8c62357f496ac4add94c1986e513da7c1ff0928602a0cbd4f8e68d5774b378298093859148264735fd9b0d6",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [
                  "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0x70881c430ab971cd",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "724cefeaed80120294ea8647b3ddceec502a42433b041f65259e09ecf636f238e4aee3e6197f2897a008fedd4d4e912900e88be4b9e1b1c6e0d0a634ed66965c",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "4c8020af004deef2adaac403319d989487e99a3e28d138ecc913ccfb3145a5f67f481451cf9d9974d443b49fda020a1e6c5c4e92910320dfcf9263bb8795e185",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "4dc1d7d9b5b6784a6b9cc66b237ec5ab9c11cbc1b8c62357f496ac4add94c1986e513da7c1ff0928602a0cbd4f8e68d5774b378298093859148264735fd9b0d6"
        ],
        "block_num": "6",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "f1d2dc8b5244a49bc8a0ecc0293aadfcbb3a2fbf06a73a84a700e2dd12fa51992c7e9c2bbe560981e1d17dacafb01d928ee318105007772538b6941e51c64f37",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "e690b986ba42ed8632c613113456ba4d0b54c8f58068c9c52349719577a52e88"
      },
      "header_signature": "15376679e8dc190a37b13a40742855e8c5796ed9e93774853d060755a122591b63a6d7802fd05a54bd5c61e24e5265d19835de2b6a0ccdf30dd1fcda8aafb074"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "39fff268c3df15040958c295efbd9a7ce0218b14aee66465dc0719d92fae6bd0376da4ea0e811eb4069990c29679ea91f8c5181b05414862f1e3c6d1494c922b"
            ]
          },
          "header_signature": "458fb6504b36987fae4983d5e665de7d6c36d36b539bc64e00704a65a42ba4aa371866b7852ca216185bf75f7828e6bbc6f7cb529e3f0ebf90f047d5ad74f049",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [
                  "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0xd24e9f4d33378206",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "724cefeaed80120294ea8647b3ddceec502a42433b041f65259e09ecf636f238e4aee3e6197f2897a008fedd4d4e912900e88be4b9e1b1c6e0d0a634ed66965c",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "39fff268c3df15040958c295efbd9a7ce0218b14aee66465dc0719d92fae6bd0376da4ea0e811eb4069990c29679ea91f8c5181b05414862f1e3c6d1494c922b",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "458fb6504b36987fae4983d5e665de7d6c36d36b539bc64e00704a65a42ba4aa371866b7852ca216185bf75f7828e6bbc6f7cb529e3f0ebf90f047d5ad74f049"
        ],
        "block_num": "5",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "f5f24cfc45f5eee117a9e85fe719084c296b43dd7d45e8a26155d9b1582ce42275d28caebd0a59e01df7834cdeec2496f9e5ebf83e9c02320a3a7a2560c686b7",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "9bedbf76adf995d7d0bb1ab3cbbb99797f66fb70bb3aa5ef6ec065779dc21c29"
      },
      "header_signature": "13b3acdd4221b418307f7541e8f78ce0f252206e8599e38fef5aa0685a2b96f633252e23234455e5786bdb6d30a3df6d0997ca1e18aa68d8e76267c3617de957"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "bd525e806f5c6fc09a054ce876d5c29ea33b15cb21eaec569b9b278d24f7ab291590b2a0094b065ff79a79399570075aaf9c09f5d2eb9ecbe62871d57fe5fd25"
            ]
          },
          "header_signature": "35370bd2f2d86dd8793982815634e68134a21e9aadbe2811c045d5139eeac4b06f55c610667fb23b3c27f220d0d6b804377997b808d1945b1d2c674217d53848",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [
                  "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0xf4697acf0a0977aa",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "724cefeaed80120294ea8647b3ddceec502a42433b041f65259e09ecf636f238e4aee3e6197f2897a008fedd4d4e912900e88be4b9e1b1c6e0d0a634ed66965c",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "bd525e806f5c6fc09a054ce876d5c29ea33b15cb21eaec569b9b278d24f7ab291590b2a0094b065ff79a79399570075aaf9c09f5d2eb9ecbe62871d57fe5fd25",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "35370bd2f2d86dd8793982815634e68134a21e9aadbe2811c045d5139eeac4b06f55c610667fb23b3c27f220d0d6b804377997b808d1945b1d2c674217d53848"
        ],
        "block_num": "4",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "abdd033aac91fad92afc6f8e5a2ff7889c60395e8168cd0c9fdfd77e5e648f6547400bb2e67e6e38cbbfbfba52871f2552aa43ef32e4571dd0a8ca247434d3f2",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "edd35566160a243c9fbd9434f4a9810e0387d88bd1414f8d694a6f7e1fe37c8e"
      },
      "header_signature": "f1d2dc8b5244a49bc8a0ecc0293aadfcbb3a2fbf06a73a84a700e2dd12fa51992c7e9c2bbe560981e1d17dacafb01d928ee318105007772538b6941e51c64f37"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "7bf8be9a8121a8fe5c2015b2e8a8ea8d19dc0f6be49f072110b73e78bc8ffe5936263a324572297008c3b6f2e0f34ac7714c6a75676cb00fa4ffdf32359c9bc7"
            ]
          },
          "header_signature": "6271dd619009e20eb6462cbfd10e5a0941fd1ea51308afe3d6cbafca4f04159174e7c36f85d15fd1cd9a845fdc89ab13c92dcca32d3b34b3c6943261f25db8e6",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [
                  "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0xb608fe19c3fbdf4",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "724cefeaed80120294ea8647b3ddceec502a42433b041f65259e09ecf636f238e4aee3e6197f2897a008fedd4d4e912900e88be4b9e1b1c6e0d0a634ed66965c",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "7bf8be9a8121a8fe5c2015b2e8a8ea8d19dc0f6be49f072110b73e78bc8ffe5936263a324572297008c3b6f2e0f34ac7714c6a75676cb00fa4ffdf32359c9bc7",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "6271dd619009e20eb6462cbfd10e5a0941fd1ea51308afe3d6cbafca4f04159174e7c36f85d15fd1cd9a845fdc89ab13c92dcca32d3b34b3c6943261f25db8e6"
        ],
        "block_num": "3",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "f5f24cfc45f5eee117a9e85fe719084c296b43dd7d45e8a26155d9b1582ce42275d28caebd0a59e01df7834cdeec2496f9e5ebf83e9c02320a3a7a2560c686b7",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "b703dc17f4336b3f7bd6791675a7a60bc6c3aea2cc10820e6497e851b0796e01"
      },
      "header_signature": "abdd033aac91fad92afc6f8e5a2ff7889c60395e8168cd0c9fdfd77e5e648f6547400bb2e67e6e38cbbfbfba52871f2552aa43ef32e4571dd0a8ca247434d3f2"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "762ead848377ef43881ab4115f937ebb266c475ae734a93224e1c4e5aa9baba66a62ef0a139ed297800b86498c1fa5642afc396fa08f1f754f469fa4afa62587"
            ]
          },
          "header_signature": "5af0816d5b39b4857812225552fedda7511a94aca56d93909fd5afc24dcdc1194b94601a6a5cb4d5a97f6a89e110da1762a10b14f8d19e147f91929dc30e8482",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [
                  "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
                ],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0x425791db749fdbc2",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "724cefeaed80120294ea8647b3ddceec502a42433b041f65259e09ecf636f238e4aee3e6197f2897a008fedd4d4e912900e88be4b9e1b1c6e0d0a634ed66965c",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "762ead848377ef43881ab4115f937ebb266c475ae734a93224e1c4e5aa9baba66a62ef0a139ed297800b86498c1fa5642afc396fa08f1f754f469fa4afa62587",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAWRWZXJiY2luYw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "5af0816d5b39b4857812225552fedda7511a94aca56d93909fd5afc24dcdc1194b94601a6a5cb4d5a97f6a89e110da1762a10b14f8d19e147f91929dc30e8482"
        ],
        "block_num": "2",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "c96391653ef029256f0f7100b8998094d39681f061440cf87ded653713a984d869a8a8fb1cb72a923509f0f33e40c4d097aff8cadeb9fc15f14c6eadef5ee596",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "3fdb6592b45c6d71c78d85d3b75e2fbdf961b313b38d44006f6b2508a780d981"
      },
      "header_signature": "f5f24cfc45f5eee117a9e85fe719084c296b43dd7d45e8a26155d9b1582ce42275d28caebd0a59e01df7834cdeec2496f9e5ebf83e9c02320a3a7a2560c686b7"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
            "transaction_ids": [
              "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d"
            ]
          },
          "header_signature": "70ebf9b68e11c8ec37859e6574049efb1194c13d84fff1e171c17412376eaa6268e5408b27a6dc6dc263d7ea9dfff5ab551a39f64b3c9ca73b7594e0a4cc13a2",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2",
                "dependencies": [],
                "family_name": "bgt",
                "family_version": "1.0",
                "inputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "nonce": "0x68a7b8f993f75867",
                "outputs": [
                  "449095df5e9f53babd471280fcd9d9f30ee4a3ac1f94e487d2c0392d20e8df394e0195"
                ],
                "payload_sha512": "9307ab284869453f3c8b7006c6468fbc2a7ba02649ccdda5db3faf053504b536671a16d9334dd65dfabdae50c87238c104460555560df659595a1e2e3ffa0455",
                "signer_public_key": "02ff6addbfc340f822f9cd08a73da1d29fdb10eac93c9e8f56d9fde03b67f9b0b2"
              },
              "header_signature": "b138dcd0b9dfc19dbc877708e392a786ac194c747d580d9751ab9383476c2ee201be846ce32690ab311d4e3a0dafef8deab23b9fa5c0b2a8edc30055fd8cc36d",
              "payload": "o2ROYW1ldDgtMjNUMTI6MDk6MzEuMDMyODAwZVZhbHVlAGRWZXJiY3NldA=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "70ebf9b68e11c8ec37859e6574049efb1194c13d84fff1e171c17412376eaa6268e5408b27a6dc6dc263d7ea9dfff5ab551a39f64b3c9ca73b7594e0a4cc13a2"
        ],
        "block_num": "1",
        "consensus": "RGV2bW9kZQ==",
        "previous_block_id": "5935d84e53a49dee5350865cb725deae66d9e42d20fa0cb2c0222e9a495976e10c7f8d9c0f4a4f5d42c5e40869ae6c8c3cb0bad129ae0c7625d366bf54e2facb",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "5a3107219461a304b433edea151b6aa939db38e7504c06ef82020d012ff7a57f"
      },
      "header_signature": "c96391653ef029256f0f7100b8998094d39681f061440cf87ded653713a984d869a8a8fb1cb72a923509f0f33e40c4d097aff8cadeb9fc15f14c6eadef5ee596"
    },
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2",
            "transaction_ids": [
              "c066e19f3ab3b93ecf37b8c1c9ad254ae6c774a7512c84fbce8e071c1353642d0f1fc4c313de4ecb3f1854adbfd7a7aa6c143833065cd1994feaf66746df4bcf"
            ]
          },
          "header_signature": "d7b375c3f30994f37734055c663f3f08ffc37a7def39ffbc64b3469209c821b66bad5b26d2c414d978a1ec12384d744fe84f7643f43e03d5b24416b05d5444b7",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2",
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
                "payload_sha512": "0dcb7a91120bc414247655b2d61b01a46739587dbe81f4e2265ab6c7a296c5b4ff70e301c8098d7447cf0d29b60980472f089d3e4fb72e1d9c6ec714e4f7c707",
                "signer_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2"
              },
              "header_signature": "c066e19f3ab3b93ecf37b8c1c9ad254ae6c774a7512c84fbce8e071c1353642d0f1fc4c313de4ecb3f1854adbfd7a7aa6c143833065cd1994feaf66746df4bcf",
              "payload": "CAESgAEKJnNhd3Rvb3RoLnNldHRpbmdzLnZvdGUuYXV0aG9yaXplZF9rZXlzEkIwMjQxNjAyOGFhOWE0ZTc3NThhNDU3N2ZmYWQ0MjczYWQ0YzQ2NDRmMjUyMmYzNTAzNzNlODI3ZmNkNGVkY2JhYzIaEjB4MjcyNmI5YmM0MzIwYTQ5Nw=="
            }
          ]
        },
        {
          "header": {
            "signer_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2",
            "transaction_ids": [
              "b409df0ac9ad95074dd3ca0a09f3d6ad9c46d5f5c752a807c2d3827e66782faf32dc8815798c035e7d54c43289aa91aafbff44300088c22a7aafd44c5b25af93",
              "ffefadd49e007d6da7df5fb3e44b45e57af1bf9cf05bcc893c3b3e3e12b654300d82014ffc2e2660b748cede1435c7e042fe0ff5472dfe687fe8d18e24a9fbcd",
              "154757c1e2ec39172d1db806e421d13b510f675d17fc6681422970e4ebb1f4ee5bab3c4ef7b1a6849fee66dbe6d5fa261daefb32b31282db9cb2f8841142ecb4",
              "f8fabe22add66eb8c8d510bc0f60c382b75f2e6552ce4d6c679fdb1679aece8a150548c642a6b7e7159f9a06b765a7d39bc61049e1dc8cceed1a6f3bdf4eea18"
            ]
          },
          "header_signature": "ade7f24f65fdf201411f67712bd34a4d6dca8d454072c718dea7eb1936f2296d2092bf54a0177d9c85d3896eeaf3503af69bee68e3f7a8da562eb04716cdccac",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2",
                "dependencies": [],
                "family_name": "sawtooth_settings",
                "family_version": "1.0",
                "inputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d9b1eb2ec8ac9f31ffe3b0c44298fc1c14"
                ],
                "nonce": "",
                "outputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d9b1eb2ec8ac9f31ffe3b0c44298fc1c14"
                ],
                "payload_sha512": "3fac00683de3b9a8b4b04277b15a4a568cff4dc6937b8cd8ef91e931e77ffbf0e4cad32dca37452310d0be7a067afdf48a246a669361d4f01b8788719b57cc8e",
                "signer_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2"
              },
              "header_signature": "b409df0ac9ad95074dd3ca0a09f3d6ad9c46d5f5c752a807c2d3827e66782faf32dc8815798c035e7d54c43289aa91aafbff44300088c22a7aafd44c5b25af93",
              "payload": "CAESOQocc2F3dG9vdGguY29uc2Vuc3VzLmFsZ29yaXRobRIHRGV2bW9kZRoQMHhjYjNlOWUzZWUzNGI2Zg=="
            },
            {
              "header": {
                "batcher_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2",
                "dependencies": [],
                "family_name": "sawtooth_settings",
                "family_version": "1.0",
                "inputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d95ca4f3850ccc331ae3b0c44298fc1c14"
                ],
                "nonce": "",
                "outputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d95ca4f3850ccc331ae3b0c44298fc1c14"
                ],
                "payload_sha512": "9054a959931ef0f04375940ad289f7847ce375dc6c0d134e4e8f264047e67ca23bd0ded12b698354e4478cbe6e5c813f0c4e8099b4daf106cb795a6389b8f14b",
                "signer_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2"
              },
              "header_signature": "ffefadd49e007d6da7df5fb3e44b45e57af1bf9cf05bcc893c3b3e3e12b654300d82014ffc2e2660b748cede1435c7e042fe0ff5472dfe687fe8d18e24a9fbcd",
              "payload": "CAESNQoac2F3dG9vdGguY29uc2Vuc3VzLnZlcnNpb24SAzAuMRoSMHhlYThmNjhlODZlNTY2Njc5"
            },
            {
              "header": {
                "batcher_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2",
                "dependencies": [],
                "family_name": "sawtooth_settings",
                "family_version": "1.0",
                "inputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d933acc48717c272e9545ea538461003ef"
                ],
                "nonce": "",
                "outputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d933acc48717c272e9545ea538461003ef"
                ],
                "payload_sha512": "0cc933a557bdc67839bb9729ba1e55df41f204c62388a73c750c619974cdb592373963941805f840f271a94549c40ed8585d0badc39ee37b969282c3124a6955",
                "signer_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2"
              },
              "header_signature": "154757c1e2ec39172d1db806e421d13b510f675d17fc6681422970e4ebb1f4ee5bab3c4ef7b1a6849fee66dbe6d5fa261daefb32b31282db9cb2f8841142ecb4",
              "payload": "CAESOQocc2F3dG9vdGguY29uc2Vuc3VzLnBiZnQubm9kZRIFcGxpbmsaEjB4YWZmNDJlM2U2MDZkYWNiNA=="
            },
            {
              "header": {
                "batcher_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2",
                "dependencies": [],
                "family_name": "sawtooth_settings",
                "family_version": "1.0",
                "inputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d933acc48717c272e921e8050ae7af74f5"
                ],
                "nonce": "",
                "outputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d933acc48717c272e921e8050ae7af74f5"
                ],
                "payload_sha512": "8f80a798d6dd4b8342b3418b350a8974846c1ab5dc4b511676223efc8c9050299f685b9440a50a661323475fca49055bf92c7069e413ed0914e4103b93608dc2",
                "signer_public_key": "02416028aa9a4e7758a4577ffad4273ad4c4644f2522f350373e827fcd4edcbac2"
              },
              "header_signature": "f8fabe22add66eb8c8d510bc0f60c382b75f2e6552ce4d6c679fdb1679aece8a150548c642a6b7e7159f9a06b765a7d39bc61049e1dc8cceed1a6f3bdf4eea18",
              "payload": "CAESPgokc2F3dG9vdGguY29uc2Vuc3VzLnBiZnQubWF4X2xvZ19zaXplEgIyMBoSMHhmMzZiMDhiMzZiNGFhNTlm"
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "d7b375c3f30994f37734055c663f3f08ffc37a7def39ffbc64b3469209c821b66bad5b26d2c414d978a1ec12384d744fe84f7643f43e03d5b24416b05d5444b7",
          "ade7f24f65fdf201411f67712bd34a4d6dca8d454072c718dea7eb1936f2296d2092bf54a0177d9c85d3896eeaf3503af69bee68e3f7a8da562eb04716cdccac"
        ],
        "block_num": "0",
        "consensus": "R2VuZXNpcw==",
        "previous_block_id": "0000000000000000",
        "signer_public_key": "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a",
        "state_root_hash": "77ad3bb1c6a88ef1f15a61caae9efa007e3a2d9c1e0610f5e485c46b59ac2f53"
      },
      "header_signature": "5935d84e53a49dee5350865cb725deae66d9e42d20fa0cb2c0222e9a495976e10c7f8d9c0f4a4f5d42c5e40869ae6c8c3cb0bad129ae0c7625d366bf54e2facb"
    }
  ],
  "head": "f773d53b566ae25b99b242f2a22b46fb803cbedf48840e3e8300946c47024c062d18990113d549970d90b088aff2359c0980ecb15572f8572e5aa538443a2234",
  "link": "http://127.0.0.1:8003/blocks?head=f773d53b566ae25b99b242f2a22b46fb803cbedf48840e3e8300946c47024c062d18990113d549970d90b088aff2359c0980ecb15572f8572e5aa538443a2234&start=0x0000000000000017&limit=100",
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

export const topology ={
  "data": {
    "Identity": {
      "Cluster": "Genesis",
      "Genesis": "029ac16cc6e986e8c38a636102345acb041cf26e4d9c47b36290cb1558c6861ff0",
      "IP": "tcp://validator-bgx-1:8800",
      "KYCKey": "0ABD7E",
      "Leader": "029ac16cc6e986e8c38a636102345acb041cf26e4d9c47b36290cb1558c6861ff0",
      "Parent": "UNDEF",
      "PubKey": "029ac16cc6e986e8c38a636102345acb041cf26e4d9c47b36290cb1558c6861ff0"
    },
    "Network": "BGX TEST network",
    "children": {
      "029ac16cc6e986e8c38a636102345acb041cf26e4d9c47b36290cb1558c6861ff0": {
        "cluster": {
          "children": {
            "034ce6e94b86f58ffac9ee4371c8608b20beecf9c8503b56fa1e2c13447870fc5a": {
              "cluster": {
                "children": {
                  "037fc5bd5d094e5efd7b416228711d42b74893ef921ea836531122eb7dc00291a9": {
                    "component": "tcp://validator-bgx-3:4007",
                    "delegate": true,
                    "endpoint": "tcp://validator-bgx-3:8802",
                    "node_state": "inactive",
                    "role": "leader",
                    "type": "peer"
                  }
                },
                "name": "Bgx2",
                "type": "cluster"
              },
              "component": "tcp://validator-bgx-2:4006",
              "delegate": true,
              "endpoint": "tcp://validator-bgx-2:8801",
              "node_state": "active",
              "role": "leader",
              "type": "peer"
            },
            "037fc5bd5d094e5efd7b416228711d42b74893ef921ea836531122eb7dc00291a9_": {
              "role": "plink",
              "type": "peer"
            }
          },
          "name": "Bgx1",
          "type": "cluster"
        },
        "delegate": true,
        "endpoint": "tcp://validator-bgx-1:8800",
        "genesis": true,
        "node_state": "active",
        "role": "leader",
        "type": "peer"
      },
      "02faee0c0cd741dab29414fa0d057c20240a492413bb25d2e13b74692961b2ba7b": {
        "cluster": {
          "children": {
            "037fc4bd5d094e5efd7b416228711d42b74893ef921ea836531122eb7dc00291a9_": {
              "delegate": true,
              "role": "leader",
              "type": "peer"
            }
          },
          "name": "Bgx3",
          "type": "cluster"
        },
        "role": "plink",
        "type": "peer"
      },
      "036f244352bf2cc6cc76bdf6572b8679971d3a02d80a5d7b8463a40dd492f79b35_": {
        "cluster": {
          "children": {
            "0371e6681222d16fd3e6ddc872ecf3cdffa9d4d351b64703febebaae3a62e755f0": {
              "delegate": true,
              "role": "leader",
              "type": "peer"
            }
          },
          "name": "Bgx5",
          "type": "cluster"
        },
        "role": "plink",
        "type": "peer"
      },
      "037fc7bd5d094e5efd7b416228711d42b74893ef921ea836531122eb7dc00291a9_": {
        "cluster": {
          "children": {
            "02cf0f7fa1cd96986a872df4a52496fffc2837a4b92a6b93554dc631ef90ca4d64": {
              "delegate": true,
              "role": "leader",
              "type": "peer"
            }
          },
          "name": "Bgx4",
          "type": "cluster"
        },
        "role": "plink",
        "type": "peer"
      }
    },
    "name": "Genesis",
    "role": "genesis",
    "sync": false,
    "topology": "static",
    "type": "cluster"
  },
  "link": "http://127.0.0.1:8003/topology"
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
