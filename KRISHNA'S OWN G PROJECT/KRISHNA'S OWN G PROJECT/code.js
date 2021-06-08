var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cdc2dc62-a56c-4648-b125-3cc47e786feb","5acd54a2-270e-4ceb-8f07-71a67a88f5bf","062d1acf-78da-484c-a5d1-c19cbd5e8f68","87126da8-9501-4ec0-a538-9c0fdae032d9","49a2d53d-0fc5-4a86-bbe5-205588b906d8","9d85926e-5609-46cc-aa97-cc581e3f0f2a","48207fd8-42d0-4822-a1c6-70a87363437d","9b5572e5-ac3d-4ced-8e63-4d505f04e970","08cf52a9-047e-40aa-9f22-40aea73415e6","bce008bf-094e-439c-8139-db5b3f4e6837","8f00ae45-c271-4141-9bce-05a75e151d45","cdb7d7a5-bbc6-452d-ad53-2f738aa6614b","e02dd3da-fee7-4533-b3a6-9c48bc1e9d25","3fd6f9f7-27de-4260-b030-5ecb937c3432","9b00588d-2147-4894-85c5-4055297028a1","e199aace-7616-4d7c-a1dd-cf17cb46af4b","48bba980-60ab-42b7-82e0-306f332493c9","3008f2eb-361a-4ceb-842e-c5829198e328","e6db96f3-514c-48d1-87c5-cbd9dbe70969","2ed8dd86-db5f-4856-b515-50386d81a236","a9244824-3194-4ffa-a367-b520cf6e2271","b9268dd7-a781-445e-8a37-d93af8ebc74b","3d93d812-6a53-40c2-9256-eaf9829c9beb","49c74a80-1c05-4750-bd15-8385ba0d10c8","a054d5a6-8e54-43a3-8970-8520025a2431","b0eb77b1-8711-4c87-afa6-273e6c1f5d09","6026dafc-c6ed-4755-8602-c5d5303a8a4d","8a5e02b6-5076-4069-a91d-b9fee4f8cdd4","a8070557-e213-408e-9229-2ca6fb440ebf","cd3b03cb-f228-4b42-8d9c-30d8ee42d749","6d284a5c-1adb-4417-85b3-07bcc7108fae","bbf95fe9-0459-42fc-8892-3623aa57a356","3d134204-f617-4d71-966e-b295f296f2c6","40428e9a-9fd5-4fc7-a982-9ea53abd3b50","0b92abbb-c11f-4956-bb9d-dda5be006557","ff446763-ec00-4b4a-b96c-e7b90f62623b","847eb020-f823-47b6-a767-53f23cd478e5","2faf1c59-1611-490f-b8d8-f5229653de13","2901ec61-402c-473a-beb2-c36dd8792557","c69613ca-eb04-4c16-9faa-721a20da8b9a","fef6084e-241e-47f8-8f07-89ee2ef1ab49","ea4ef925-9b7e-4c0c-8746-973d661bb112","4acaf9c0-1791-4702-b625-8bc60dc89516","2791130d-3e3b-42e8-a3ea-8b14bea4a33f","f73a3e92-3469-40d9-96ba-67a61bbedb68","f7e2e95a-ee3a-4e3e-a785-370e3542d02e","8d835977-7959-4b62-85a1-93e96f3823d3","135459c8-26a2-4b0c-91fa-3a97f38e1ca7","67e49c22-071b-49a9-b83d-1b022ca58755","49ae536d-d43e-47f4-adb1-78980fa5f6c8","d0e938e6-c755-440f-907a-0065de5846e0","4ea78f85-2d2a-463e-a1f2-b53e0f6538ba","98a05844-9e1a-4cc7-860a-bb068d17eba5","bb55280f-e4a5-41d1-af6b-d86c894b5d81","f1166681-c8ea-4b34-94c6-8b4f668c90c0","4bc64ebc-2011-4193-b989-6e69c20db400","cfe57d97-0f59-4167-abfb-04434e7a49df","f7142360-be14-4e91-8013-7cc4b76276f3","4fd7076d-0c8e-44f3-9ede-2762251b2aaa","fef9c658-2ccb-4efe-8ac0-5deeb747e6ff","0dd3d53a-5a3e-49c9-b5df-ebdf08361e5b","f4b2e8b5-29d9-406a-9245-ccf6114610b2","b1f7378f-9699-4450-b0f7-0f78992f6568","7f1767d0-488d-4b44-bbdd-4b16d0f0498e","fe14afee-8cd7-4943-bf59-72d6b01761aa","af77c44d-e022-4174-b1d7-b62a4a00d132","16f0bf80-2a8f-4d27-a56a-286fc91f46f9","9fba97b2-7fb5-4863-a3ea-97819eeeb86e","1d5f2824-fc23-4349-9a68-da735f447d68","50a27497-a20b-4871-810e-44c049e56cc4","22cc21be-0526-4769-948b-27cc24c334ec","f2c86d6d-2488-47cb-9a95-9763d2aafcf3"],"propsByKey":{"cdc2dc62-a56c-4648-b125-3cc47e786feb":{"name":"city","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":1,"version":"QaIsrmVd4p2ErPChswRac5mxkO1CF2Sj","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/cdc2dc62-a56c-4648-b125-3cc47e786feb.png"},"5acd54a2-270e-4ceb-8f07-71a67a88f5bf":{"name":"cityTop","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Cd8maT4CLaabUV9atBUJTljJ4r34StBf","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/5acd54a2-270e-4ceb-8f07-71a67a88f5bf.png"},"062d1acf-78da-484c-a5d1-c19cbd5e8f68":{"name":"cityBot","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"XYRU1qhh.xG8OILhsTy4VO.dGZXfwEmA","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/062d1acf-78da-484c-a5d1-c19cbd5e8f68.png"},"87126da8-9501-4ec0-a538-9c0fdae032d9":{"name":"playerJump","sourceUrl":null,"frameSize":{"x":30,"y":76},"frameCount":3,"looping":true,"frameDelay":12,"version":"V5la96o3namqp8Q3cYVKV3hIEOSTNmhm","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":76},"rootRelativePath":"assets/87126da8-9501-4ec0-a538-9c0fdae032d9.png"},"49a2d53d-0fc5-4a86-bbe5-205588b906d8":{"name":"playerRunningL","sourceUrl":null,"frameSize":{"x":53,"y":65},"frameCount":5,"looping":true,"frameDelay":12,"version":"DT9mQ0XCEeWpHodKa8Q8_XM7xU0NvA.n","loadedFromSource":true,"saved":true,"sourceSize":{"x":106,"y":195},"rootRelativePath":"assets/49a2d53d-0fc5-4a86-bbe5-205588b906d8.png"},"9d85926e-5609-46cc-aa97-cc581e3f0f2a":{"name":"playerRunningR","sourceUrl":null,"frameSize":{"x":53,"y":65},"frameCount":4,"looping":true,"frameDelay":12,"version":"vEb4yuUm_uxD3YY_GUsoGZp63QkBWK7L","loadedFromSource":true,"saved":true,"sourceSize":{"x":106,"y":130},"rootRelativePath":"assets/9d85926e-5609-46cc-aa97-cc581e3f0f2a.png"},"48207fd8-42d0-4822-a1c6-70a87363437d":{"name":"playerIdle","sourceUrl":null,"frameSize":{"x":53,"y":65},"frameCount":2,"looping":true,"frameDelay":12,"version":"6yXzypujDqNHzWtaN.6smRGzPPqy9Vf8","loadedFromSource":true,"saved":true,"sourceSize":{"x":106,"y":65},"rootRelativePath":"assets/48207fd8-42d0-4822-a1c6-70a87363437d.png"},"9b5572e5-ac3d-4ced-8e63-4d505f04e970":{"name":"stone1","sourceUrl":null,"frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"UshX3CfKZJXRlZrR4XxWgH_bJQqlA9fb","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/9b5572e5-ac3d-4ced-8e63-4d505f04e970.png"},"08cf52a9-047e-40aa-9f22-40aea73415e6":{"name":"stone2","sourceUrl":null,"frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"SYAY61QX6YxK6Y0ynpsvtC6PRuCONkeY","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/08cf52a9-047e-40aa-9f22-40aea73415e6.png"},"bce008bf-094e-439c-8139-db5b3f4e6837":{"name":"stone3","sourceUrl":"assets/api/v1/animation-library/gamelab/8.Va8yv_nOfXXuSVhaexwVQYWN.5cRAa/category_environment/ground_stone.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"8.Va8yv_nOfXXuSVhaexwVQYWN.5cRAa","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8.Va8yv_nOfXXuSVhaexwVQYWN.5cRAa/category_environment/ground_stone.png"},"8f00ae45-c271-4141-9bce-05a75e151d45":{"name":"stone4","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"A5B3mf.TVp6S_Q8n7jn5BJETE9KW63kv","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/8f00ae45-c271-4141-9bce-05a75e151d45.png"},"cdb7d7a5-bbc6-452d-ad53-2f738aa6614b":{"name":"buttonTemplate","sourceUrl":null,"frameSize":{"x":100,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"6uKU_fbGK3VVwDq8wXXH56sxEvb7IYr6","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":37},"rootRelativePath":"assets/cdb7d7a5-bbc6-452d-ad53-2f738aa6614b.png"},"e02dd3da-fee7-4533-b3a6-9c48bc1e9d25":{"name":"button(idle)","sourceUrl":null,"frameSize":{"x":100,"y":37},"frameCount":2,"looping":true,"frameDelay":12,"version":"H_hU_jteBVbb7z9AKefS8jrkyffQ_6NZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":74},"rootRelativePath":"assets/e02dd3da-fee7-4533-b3a6-9c48bc1e9d25.png"},"3fd6f9f7-27de-4260-b030-5ecb937c3432":{"name":"tutorial1","sourceUrl":null,"frameSize":{"x":100,"y":37},"frameCount":2,"looping":true,"frameDelay":12,"version":"EkjdMGRB7aUtcVf6x6L7_XCP6UsGNupW","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":74},"rootRelativePath":"assets/3fd6f9f7-27de-4260-b030-5ecb937c3432.png"},"9b00588d-2147-4894-85c5-4055297028a1":{"name":"tutorial2","sourceUrl":null,"frameSize":{"x":100,"y":37},"frameCount":2,"looping":true,"frameDelay":12,"version":"cU4.QaNtnQkBdqxAAcu31hk1dbA7kafq","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":74},"rootRelativePath":"assets/9b00588d-2147-4894-85c5-4055297028a1.png"},"e199aace-7616-4d7c-a1dd-cf17cb46af4b":{"name":"button(pressed)","sourceUrl":null,"frameSize":{"x":100,"y":37},"frameCount":2,"looping":true,"frameDelay":12,"version":"WJ7czpJUX7Pa7XBxVif2GDDNGD6UJun8","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":74},"rootRelativePath":"assets/e199aace-7616-4d7c-a1dd-cf17cb46af4b.png"},"48bba980-60ab-42b7-82e0-306f332493c9":{"name":"gear","sourceUrl":"assets/v3/animations/lgafUsb4Y-row67zItqCFNt5E3YYCkOs4mVvG7H5NbA/48bba980-60ab-42b7-82e0-306f332493c9.png","frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":4,"version":"XFX1ut3eRaBldvrPg9XcOPz1bHwkkJiN","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/v3/animations/lgafUsb4Y-row67zItqCFNt5E3YYCkOs4mVvG7H5NbA/48bba980-60ab-42b7-82e0-306f332493c9.png"},"3008f2eb-361a-4ceb-842e-c5829198e328":{"name":"arrow(idle)","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"8Z8dWGhYz1zMmhhIi_9onaYez0wYruPr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/3008f2eb-361a-4ceb-842e-c5829198e328.png"},"e6db96f3-514c-48d1-87c5-cbd9dbe70969":{"name":"arrow(pressed)","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"KbvwhfKcp01INAd6gviRwn6onNrRSSUQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/e6db96f3-514c-48d1-87c5-cbd9dbe70969.png"},"2ed8dd86-db5f-4856-b515-50386d81a236":{"name":"blank","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"YeFkKKioA1F.OJ5zO8RrHOKugZmutbHP","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/2ed8dd86-db5f-4856-b515-50386d81a236.png"},"a9244824-3194-4ffa-a367-b520cf6e2271":{"name":"o1idle","sourceUrl":null,"frameSize":{"x":58,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"h16IivG8sI4Y6wrd83DAWnvEw9YhXRQF","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":59},"rootRelativePath":"assets/a9244824-3194-4ffa-a367-b520cf6e2271.png"},"b9268dd7-a781-445e-8a37-d93af8ebc74b":{"name":"o2idle","sourceUrl":null,"frameSize":{"x":58,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"wfdJx.Wi6zL36Ju2zz6YEB2JUCnrAjfX","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":59},"rootRelativePath":"assets/b9268dd7-a781-445e-8a37-d93af8ebc74b.png"},"3d93d812-6a53-40c2-9256-eaf9829c9beb":{"name":"o3idle","sourceUrl":null,"frameSize":{"x":58,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"dDB.SKd4cpz0wPFV9SU8t7dIdZEQms_A","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":59},"rootRelativePath":"assets/3d93d812-6a53-40c2-9256-eaf9829c9beb.png"},"49c74a80-1c05-4750-bd15-8385ba0d10c8":{"name":"o4idle","sourceUrl":null,"frameSize":{"x":58,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"o0dQnhpyaTVCnLfaipzTmbhQW8XZ27VF","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":59},"rootRelativePath":"assets/49c74a80-1c05-4750-bd15-8385ba0d10c8.png"},"a054d5a6-8e54-43a3-8970-8520025a2431":{"name":"levelLock","sourceUrl":null,"frameSize":{"x":58,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"ryJhQleFnHRE2BsF7EqyXqU4V7WLv5gc","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":59},"rootRelativePath":"assets/a054d5a6-8e54-43a3-8970-8520025a2431.png"},"b0eb77b1-8711-4c87-afa6-273e6c1f5d09":{"name":"o2press","sourceUrl":null,"frameSize":{"x":58,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"ha37pgEn9MUoQGrBXMwrWdhjoljQLGRn","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":59},"rootRelativePath":"assets/b0eb77b1-8711-4c87-afa6-273e6c1f5d09.png"},"6026dafc-c6ed-4755-8602-c5d5303a8a4d":{"name":"o5press","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"FvSByiR0pbXEeP0znXSwaN.HlSIhgStJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/6026dafc-c6ed-4755-8602-c5d5303a8a4d.png"},"8a5e02b6-5076-4069-a91d-b9fee4f8cdd4":{"name":"o5idle","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"V5j7UmDgVMzh9_wH1XqJyzSLCXbyuMPS","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/8a5e02b6-5076-4069-a91d-b9fee4f8cdd4.png"},"a8070557-e213-408e-9229-2ca6fb440ebf":{"name":"o6idle","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"40adONbxQrdv.lZHrdKEhX3_8.QZ.QG4","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/a8070557-e213-408e-9229-2ca6fb440ebf.png"},"cd3b03cb-f228-4b42-8d9c-30d8ee42d749":{"name":"o7idle","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"vUVB6Hr8ReJ.m45ze6.3MHtrTC36ZW63","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/cd3b03cb-f228-4b42-8d9c-30d8ee42d749.png"},"6d284a5c-1adb-4417-85b3-07bcc7108fae":{"name":"o8idle","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"TzJV.r7nV7l.g1cXdw3eVnmdl1n3Ac59","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/6d284a5c-1adb-4417-85b3-07bcc7108fae.png"},"bbf95fe9-0459-42fc-8892-3623aa57a356":{"name":"o8press","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"Jntr1lO25fnt.YGvDS83bP9KOcwlLICN","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/bbf95fe9-0459-42fc-8892-3623aa57a356.png"},"3d134204-f617-4d71-966e-b295f296f2c6":{"name":"o7press","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"Hj2cXXVv.YkVQniZyO6sfxdJBfgBhHQ9","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/3d134204-f617-4d71-966e-b295f296f2c6.png"},"40428e9a-9fd5-4fc7-a982-9ea53abd3b50":{"name":"o6press","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"0bipWwcWbuCgEDZ3V.kGeQFtSPWPbYeb","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/40428e9a-9fd5-4fc7-a982-9ea53abd3b50.png"},"0b92abbb-c11f-4956-bb9d-dda5be006557":{"name":"o3press","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"OSTSYX4chBrSdBx.yD7ZCmxgF8R.yOua","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/0b92abbb-c11f-4956-bb9d-dda5be006557.png"},"ff446763-ec00-4b4a-b96c-e7b90f62623b":{"name":"o4press","sourceUrl":null,"frameSize":{"x":58,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"4fQ7BcwWQjvSXgqb5Jh4a_5X18camJHC","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":59},"rootRelativePath":"assets/ff446763-ec00-4b4a-b96c-e7b90f62623b.png"},"847eb020-f823-47b6-a767-53f23cd478e5":{"name":"o1press","sourceUrl":null,"frameSize":{"x":58,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"hu0GXhweRUjjlIT53Cr2WyRF7tCEokS2","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":59},"rootRelativePath":"assets/847eb020-f823-47b6-a767-53f23cd478e5.png"},"2faf1c59-1611-490f-b8d8-f5229653de13":{"name":"platform","sourceUrl":null,"frameSize":{"x":100,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"rWN3hG2NrBna4pJhkqrtiZAPj3uJQeJg","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":14},"rootRelativePath":"assets/2faf1c59-1611-490f-b8d8-f5229653de13.png"},"2901ec61-402c-473a-beb2-c36dd8792557":{"name":"blades","sourceUrl":null,"frameSize":{"x":62,"y":62},"frameCount":1,"looping":true,"frameDelay":12,"version":"cQQUe4Fk0cOMaq6DGTuPQ5561RpBduAj","loadedFromSource":true,"saved":true,"sourceSize":{"x":62,"y":62},"rootRelativePath":"assets/2901ec61-402c-473a-beb2-c36dd8792557.png"},"c69613ca-eb04-4c16-9faa-721a20da8b9a":{"name":"stickLev","sourceUrl":null,"frameSize":{"x":7,"y":99},"frameCount":1,"looping":true,"frameDelay":12,"version":"srIhdTXpGVFjppGLaRaSiK73sSovPnfj","loadedFromSource":true,"saved":true,"sourceSize":{"x":7,"y":99},"rootRelativePath":"assets/c69613ca-eb04-4c16-9faa-721a20da8b9a.png"},"fef6084e-241e-47f8-8f07-89ee2ef1ab49":{"name":"stone5","sourceUrl":null,"frameSize":{"x":127,"y":127},"frameCount":1,"looping":true,"frameDelay":12,"version":"1dFbgy2AmBsuVr1lW.dpJY4g6TLZakBI","loadedFromSource":true,"saved":true,"sourceSize":{"x":127,"y":127},"rootRelativePath":"assets/fef6084e-241e-47f8-8f07-89ee2ef1ab49.png"},"ea4ef925-9b7e-4c0c-8746-973d661bb112":{"name":"flag","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"HZ_kF5uRF5EU.iv.ljSciny3z4J8j_UH","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/ea4ef925-9b7e-4c0c-8746-973d661bb112.png"},"4acaf9c0-1791-4702-b625-8bc60dc89516":{"name":"switchOff","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"NAz8vJv6iLz6fFh6Vgu1GorlM1YZrIIb","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4acaf9c0-1791-4702-b625-8bc60dc89516.png"},"2791130d-3e3b-42e8-a3ea-8b14bea4a33f":{"name":"switchOn","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"PauEbvnw3_w5EWLHm6grKneHXOLFRdDv","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2791130d-3e3b-42e8-a3ea-8b14bea4a33f.png"},"f73a3e92-3469-40d9-96ba-67a61bbedb68":{"name":"desert","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"_5S96w0wyHxPDOji4131B2z.21hNvzt7","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/f73a3e92-3469-40d9-96ba-67a61bbedb68.png"},"f7e2e95a-ee3a-4e3e-a785-370e3542d02e":{"name":"desertTop","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"w47_QSnltdc4vNr9gI.HglOJ2JPeoMPY","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/f7e2e95a-ee3a-4e3e-a785-370e3542d02e.png"},"8d835977-7959-4b62-85a1-93e96f3823d3":{"name":"desertBot","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"51gMyG54BooBQcJJ.311KaqGBFoLxHR7","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/8d835977-7959-4b62-85a1-93e96f3823d3.png"},"135459c8-26a2-4b0c-91fa-3a97f38e1ca7":{"name":"sand5","sourceUrl":null,"frameSize":{"x":126,"y":126},"frameCount":1,"looping":true,"frameDelay":12,"version":"BhcAf.OAWuzOe4fiZV4vehrUp7EI1S43","loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":126},"rootRelativePath":"assets/135459c8-26a2-4b0c-91fa-3a97f38e1ca7.png"},"67e49c22-071b-49a9-b83d-1b022ca58755":{"name":"snow1","sourceUrl":null,"frameSize":{"x":201,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"5tM20yOq1c6AHe9xByiCgcjiskrdzMhu","loadedFromSource":true,"saved":true,"sourceSize":{"x":201,"y":100},"rootRelativePath":"assets/67e49c22-071b-49a9-b83d-1b022ca58755.png"},"49ae536d-d43e-47f4-adb1-78980fa5f6c8":{"name":"snow2","sourceUrl":null,"frameSize":{"x":201,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"JXZ9ctn_A5AGK8XuQ2Agpruwi5_0KK03","loadedFromSource":true,"saved":true,"sourceSize":{"x":201,"y":100},"rootRelativePath":"assets/49ae536d-d43e-47f4-adb1-78980fa5f6c8.png"},"d0e938e6-c755-440f-907a-0065de5846e0":{"name":"snow3","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"zk92F77_bbL5HrTJKr6_dBXZG3iJTPva","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/d0e938e6-c755-440f-907a-0065de5846e0.png"},"4ea78f85-2d2a-463e-a1f2-b53e0f6538ba":{"name":"snow3_3","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"1oFhK3U6dteKVE28l0McjPnZqVYx4fxu","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/4ea78f85-2d2a-463e-a1f2-b53e0f6538ba.png"},"98a05844-9e1a-4cc7-860a-bb068d17eba5":{"name":"snow3_2","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"cZfdPJD_IkXrsD01GBSFjzYcpwCSd5J4","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/98a05844-9e1a-4cc7-860a-bb068d17eba5.png"},"bb55280f-e4a5-41d1-af6b-d86c894b5d81":{"name":"snow4","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"xK9UmGb7Bf2KhfvmISKn9UYhxJzcDFk6","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/bb55280f-e4a5-41d1-af6b-d86c894b5d81.png"},"f1166681-c8ea-4b34-94c6-8b4f668c90c0":{"name":"snow5","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"kRAeBR6uMDfDlEImmfezf5riZTzoi7uE","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/f1166681-c8ea-4b34-94c6-8b4f668c90c0.png"},"4bc64ebc-2011-4193-b989-6e69c20db400":{"name":"saw","sourceUrl":null,"frameSize":{"x":368,"y":385},"frameCount":1,"looping":true,"frameDelay":12,"version":"npAflPxLCQfEy51I0ThhP2V6A4K6_5iN","loadedFromSource":true,"saved":true,"sourceSize":{"x":368,"y":385},"rootRelativePath":"assets/4bc64ebc-2011-4193-b989-6e69c20db400.png"},"cfe57d97-0f59-4167-abfb-04434e7a49df":{"name":"blizzardTop","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"EbhfJtvCwbRk_WFqqSLR1.5tNPDQycnk","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/cfe57d97-0f59-4167-abfb-04434e7a49df.png"},"f7142360-be14-4e91-8013-7cc4b76276f3":{"name":"blizzardBot","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"BAOXMPyDgkTqiWGRpbbrvdDaV7KPLUk2","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/f7142360-be14-4e91-8013-7cc4b76276f3.png"},"4fd7076d-0c8e-44f3-9ede-2762251b2aaa":{"name":"blizzard","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"AzDObzcHK.DMlt.AgrJXXmep3.uyee1a","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/4fd7076d-0c8e-44f3-9ede-2762251b2aaa.png"},"fef9c658-2ccb-4efe-8ac0-5deeb747e6ff":{"name":"jungle","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"yICR.dU7x7d.oyjFLLOQKlRfu1ihrZDX","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/fef9c658-2ccb-4efe-8ac0-5deeb747e6ff.png"},"0dd3d53a-5a3e-49c9-b5df-ebdf08361e5b":{"name":"jungleTop","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"URCAnuM0FsyEY26yVTghVgrqVsF1Okz7","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/0dd3d53a-5a3e-49c9-b5df-ebdf08361e5b.png"},"f4b2e8b5-29d9-406a-9245-ccf6114610b2":{"name":"jungleBot","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"dRre4mpx3XLetnwDBCvyYqoefQwbll6V","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/f4b2e8b5-29d9-406a-9245-ccf6114610b2.png"},"b1f7378f-9699-4450-b0f7-0f78992f6568":{"name":"marsh1","sourceUrl":null,"frameSize":{"x":201,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"sGC0ZEypVBicgKSwgWzkoMk3xtgVcmJS","loadedFromSource":true,"saved":true,"sourceSize":{"x":201,"y":100},"rootRelativePath":"assets/b1f7378f-9699-4450-b0f7-0f78992f6568.png"},"7f1767d0-488d-4b44-bbdd-4b16d0f0498e":{"name":"marsh2","sourceUrl":null,"frameSize":{"x":201,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ltGXkE8MfFeHoe4IGZSHhtejvnK5dQxC","loadedFromSource":true,"saved":true,"sourceSize":{"x":201,"y":100},"rootRelativePath":"assets/7f1767d0-488d-4b44-bbdd-4b16d0f0498e.png"},"fe14afee-8cd7-4943-bf59-72d6b01761aa":{"name":"marsh3","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"XNwQJIcszQ8DhWj37NtRfXYiMMtNMu9J","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/fe14afee-8cd7-4943-bf59-72d6b01761aa.png"},"af77c44d-e022-4174-b1d7-b62a4a00d132":{"name":"marsh4","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"tGQdm1ZVvdlbFoxbaWu.myz7E9Ugtq2O","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/af77c44d-e022-4174-b1d7-b62a4a00d132.png"},"16f0bf80-2a8f-4d27-a56a-286fc91f46f9":{"name":"marshWall","sourceUrl":null,"frameSize":{"x":41,"y":241},"frameCount":1,"looping":true,"frameDelay":12,"version":"6_2lhJgRlmdnMrvslPNSVNYcWMggRxAV","loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":241},"rootRelativePath":"assets/16f0bf80-2a8f-4d27-a56a-286fc91f46f9.png"},"9fba97b2-7fb5-4863-a3ea-97819eeeb86e":{"name":"title","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"IR.khcCjdNq3lkvkE39Xic566ufdAkGM","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/9fba97b2-7fb5-4863-a3ea-97819eeeb86e.png"},"1d5f2824-fc23-4349-9a68-da735f447d68":{"name":"sand1","sourceUrl":"assets/api/v1/animation-library/gamelab/eTXwJZViNVcExVWDN7Mj0aO3j19hENz8/category_environment/ground_cake.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"eTXwJZViNVcExVWDN7Mj0aO3j19hENz8","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eTXwJZViNVcExVWDN7Mj0aO3j19hENz8/category_environment/ground_cake.png"},"50a27497-a20b-4871-810e-44c049e56cc4":{"name":"sand2","sourceUrl":"assets/api/v1/animation-library/gamelab/4L7uzmNlcdCV_PzU0pg1HQnIFO0XepQP/category_environment/ground_cake_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"4L7uzmNlcdCV_PzU0pg1HQnIFO0XepQP","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4L7uzmNlcdCV_PzU0pg1HQnIFO0XepQP/category_environment/ground_cake_broken.png"},"22cc21be-0526-4769-948b-27cc24c334ec":{"name":"sand3","sourceUrl":null,"frameSize":{"x":201,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"K7yMtPgI3KAY4qJ935RHlzPQUZQDXHLW","loadedFromSource":true,"saved":true,"sourceSize":{"x":201,"y":100},"rootRelativePath":"assets/22cc21be-0526-4769-948b-27cc24c334ec.png"},"f2c86d6d-2488-47cb-9a95-9763d2aafcf3":{"name":"sand4","sourceUrl":"assets/api/v1/animation-library/gamelab/I9uvJecNuJSR9r2h86ZV9BK7T4Tq1Q2p/category_environment/ground_cake_small_broken.png","frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":2,"version":"I9uvJecNuJSR9r2h86ZV9BK7T4Tq1Q2p","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/api/v1/animation-library/gamelab/I9uvJecNuJSR9r2h86ZV9BK7T4Tq1Q2p/category_environment/ground_cake_small_broken.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

World.frameRate = 60;
showMobileControls(true, true, true, true); 
//Menu
var title = createSprite(200, 100);
title.scale = 2.5;
var start = createSprite(200, 300);
start.scale = 1.75;
var gear = createSprite(365, 365);
gear.scale = 1/12;
var dot = createSprite(200, 280);
dot.visible = false;
//Background
var back0 = createSprite(-1600, 200);
var back1 = createSprite(-400, 200);
var back2 = createSprite(800, 200);
var back3 = createSprite(2000, 200);
var back4 = createSprite(3200, 200);
var back5 = createSprite(4400, 200);
var back6 = createSprite(5600, 200);

var backs = createGroup();
backs.add(back0);
backs.add(back1);
backs.add(back2);
backs.add(back3);
backs.add(back4);
backs.add(back5);
backs.add(back6);
backs.setScaleEach(3);

var backTop0 = createSprite(back0.x, back1.y - 1200);
var backTop1 = createSprite(back1.x, back1.y - 1200);
var backTop2 = createSprite(back2.x, back2.y - 1200);
var backTop3 = createSprite(back3.x, back3.y - 1200);
var backTop4 = createSprite(back4.x, back4.y - 1200);
var backTop5 = createSprite(back5.x, back5.y - 1200);
var backTop6 = createSprite(back6.x, back6.y - 1200);

var backsTops = createGroup();
backsTops.add(backTop0);
backsTops.add(backTop1);
backsTops.add(backTop2);
backsTops.add(backTop3);
backsTops.add(backTop4);
backsTops.add(backTop5);
backsTops.add(backTop6);
backsTops.setScaleEach(3);

var backBot0 = createSprite(back0.x, back1.y + 1200);
var backBot1 = createSprite(back1.x, back1.y + 1200);
var backBot2 = createSprite(back2.x, back2.y + 1200);
var backBot3 = createSprite(back3.x, back3.y + 1200);
var backBot4 = createSprite(back4.x, back4.y + 1200);
var backBot5 = createSprite(back5.x, back5.y + 1200);
var backBot6 = createSprite(back6.x, back6.y + 1200);

var backsBots = createGroup();
backsBots.add(backBot0);
backsBots.add(backBot1);
backsBots.add(backBot2);
backsBots.add(backBot3);
backsBots.add(backBot4);
backsBots.add(backBot5);
backsBots.add(backBot6);
backsBots.setScaleEach(3);


//Level Buttons
var tutorial = createSprite(250, 65);
tutorial.visible = false;
tutorial.scale = 2;
var o1 = createSprite(50, 150);
o1.visible = false;
o1.scale = 2;
var o2 = createSprite(150, 150);
o2.visible = false;
o2.scale = 2;
var o3 = createSprite(250, 150);
o3.visible = false;
o3.scale = 2;
var o4 = createSprite(350, 150);
o4.visible = false;
o4.scale = 2;
var o5 = createSprite(50, 250);
o5.visible = false;
o5.scale = 2;
var o6 = createSprite(150, 250);
o6.visible = false;
o6.scale = 2;
var o7 = createSprite(250, 250);
o7.visible = false;
o7.scale = 2;
var o8 = createSprite(350, 250);
o8.visible = false;
o8.scale = 2;
var levels = createGroup();
levels.add(tutorial);
levels.add(o1);
levels.add(o2);
levels.add(o3);
levels.add(o4);
levels.add(o5);
levels.add(o6);
levels.add(o7);
levels.add(o8);

//Player
var man = createSprite(100, 300);


//Course
var platform = createSprite(200, 20000);
platform.visible = false;
var block1 = createSprite(100, 400);
var block2 = createSprite(600, 500);
var block3 = createSprite(1000, 200);
var block4 = createSprite(1000, 200);
var block5 = createSprite(1000, 200);
var block6 = createSprite(1000, 200);
var block7 = createSprite(1000, 200);
var block8 = createSprite(1000, 200);
var block9 = createSprite(1000, 200);
var block10 = createSprite(1000, 200);


var blocks = createGroup();
blocks.add(block1);
blocks.add(block2);
blocks.add(block3);
blocks.add(block4);
blocks.add(block5);
blocks.add(block6);
blocks.add(block7);
blocks.add(block8);
blocks.add(block9);
blocks.add(block10);


//Obstacles
var blades1 = createSprite(200000, 200000);
blades1.setAnimation("blades");
blades1.visible = false;
var blades2 = createSprite(200, 200);
blades2.setAnimation("saw");
blades2.visible = false;
var blades3 = createSprite(90, 200);
blades3.setAnimation("blades");
blades3.visible = false;
var stickLev = createSprite(200, 200);
stickLev.setAnimation("stickLev");
stickLev.visible = false;
var stickLev2 = createSprite(200, 200);
stickLev2.visible = false;
stickLev2.setAnimation("stickLev");
var blades4 = createSprite(200, 200);
blades4.setAnimation("blades");

blades4.visible = false;
var danger = createGroup();
danger.add(blades1);
danger.add(blades2);
danger.add(blades3);
danger.add(blades4);
danger.add(stickLev);
danger.add(stickLev2);


//Counters
var levelCount = -2;
var killTimerCount = 0;
var musicCount = 0;
var startCount = 0;
var unlockCounter = 1;
var tutorialCounter = 0;
var movementCounter = 0;
var winCount = 0;
var displayCounter = 0;
var tutorialStartCounter = 0;
var clickCounter = 0;
var clickCounter2 = 0;
var blockTouchCounter = 0;
var twoCounter = 0;
var safeguard = 0;
var fall1 = 0;
var fall2 = 0;
var fall3 = 0;


//Sounds

//Win
var flag = createSprite(4350, 400);
flag.visible = false;
flag.setAnimation("flag");
//Excess
var arrow = createSprite(50, 40);
arrow.scale = 4/5;
var option1Switch = createSprite(320, 113.5);
var unlockAll = 0;
option1Switch.visible = false;
option1Switch.setAnimation("switchOff");
var option1SwitchCounter = 0;
function draw() {
  background("black");
  title.velocityY = title.velocityY + 0.5;
  
  
  
  //Menu
  if (levelCount == -2) {
    clickCounter = 0;
    camera.zoom = 1;
    camera.x = 200;
    camera.y = 200;
    background("black");
    title.setAnimation("title");
    start.setAnimation("button(idle)");
    gear.setAnimation("gear");
    backs.setVisibleEach(false);
    blocks.setVisibleEach(false);
    arrow.setAnimation("arrow(idle)");
    danger.setVisibleEach(false);
    arrow.visible = false;
    man.visible = false;
    start.visible = true;
    title.visible = true;
    gear.visible = true;
    if (title.collide(dot)) {
      title.bounceOff(dot);
      title.velocityY = title.velocityY + -8;
    }
    if (title.y >= 300) {
      title.y = 100;
    }
    if (mouseIsOver(start) && start.visible === true) {
      start.setAnimation("button(pressed)");
      if (mouseWentDown("leftButton")) {
        levelCount = -1;
        startCount = 1;
        clickCounter = clickCounter + 1;
      } else {
        startCount = 0;
      }
    }
    if (start.visible === true) {
      fill("white");
      textFont("Times New Roman");
      text("KRISHNA", 10, 390);
    }
    if (mouseIsOver(gear) && gear.visible === true) {
      gear.rotationSpeed = 10;
      if (mouseWentDown("leftButton")) {
        levelCount = -3;
      }
    } else {
      gear.rotationSpeed = 0;
    }
  }
  if (clickCounter == 1 || clickCounter == 2) {
    clickCounter = clickCounter + 1;
  }
  
  
  //Options Menu
  if (levelCount == -3) {
    camera.zoom = 1;
    camera.x = 200;
    camera.y = 200;
    background("black");
   title.setAnimation("title");
    start.setAnimation("button(idle)");
    gear.setAnimation("gear");
    backs.setVisibleEach(false);
    blocks.setVisibleEach(false);
    arrow.setAnimation("arrow(idle)");
    danger.setVisibleEach(false);
    arrow.visible = true;
    man.visible = false;
    start.visible = false;
    title.visible = false;
    gear.visible = false;
    if (mouseIsOver(arrow) && arrow.visible === true) {
      arrow.setAnimation("arrow(pressed)");
      if (mouseWentDown("leftButton")) {
        levelCount = -2;
      }
    } else {
      arrow.setAnimation("arrow(idle)");
    }
    textSize(30);
    fill("grey");
    stroke("white");
    rect(15, 90, 370, 50);
    fill("black");
    text("Unlock All Levels", 25, 125);
    option1Switch.visible = true;
    if (mouseIsOver(option1Switch) && option1Switch.visible === true && (mouseWentDown("leftButton"))) {
      option1SwitchCounter = option1SwitchCounter + 1;
      if (option1SwitchCounter >= 2) {
        option1SwitchCounter = 0;
      }
      if (option1SwitchCounter == 1) {
        option1Switch.setAnimation("switchOn");
        unlockAll = 1;
      }
      if (option1SwitchCounter == 0) {
        option1Switch.setAnimation("switchOff");
        unlockAll = 0;
      }
    }
  } else {
    option1Switch.visible = false;
  }
  
  
  //Play Page
  if (levelCount == -1) {
    movementCounter = 1;
    camera.zoom = 1;
    camera.x = 200;
    camera.y = 200;
    backs.setVisibleEach(false);
    blocks.setVisibleEach(false);
    man.visible = false;
    start.visible = false;
    title.visible = false;
    levels.setVisibleEach(true);
    tutorial.setAnimation("tutorial1");
    dot.visible = false;
    o1.setAnimation("levelLock");
    o2.setAnimation("levelLock");
    o3.setAnimation("levelLock");
    o4.setAnimation("levelLock");
    o5.setAnimation("levelLock");
    o6.setAnimation("levelLock");
    o7.setAnimation("levelLock");
    o8.setAnimation("levelLock");
    background("black");
    title.setAnimation("title");
    start.setAnimation("button(idle)");
    gear.setAnimation("gear");
    backs.setVisibleEach(false);
    blocks.setVisibleEach(false);
    arrow.setAnimation("arrow(idle)");
    danger.setVisibleEach(false);
    arrow.visible = true;
    man.visible = false;
    start.visible = false;
    title.visible = false;
    gear.visible = false;
    if (mouseIsOver(arrow) && arrow.visible === true) {
      arrow.setAnimation("arrow(pressed)");
      if (mouseWentDown("leftButton")) {
        o1.visible = false;
        o2.visible = false;
        o3.visible = false;
         o4.visible = false;
         o5.visible = false;
        o6.visible = false;
        o7.visible = false;
       o8.visible = false;
       tutorial.visible = false;


        levelCount = -2;
      }
    } else {
      arrow.setAnimation("arrow(idle)");
    }
    if (mouseIsOver(tutorial) && tutorial.visible === true) {
      tutorial.setAnimation("tutorial2");
      if (mouseWentDown("leftButton")) {
        levelCount = 0;
        man.x = 200;
        man.y = 300;
        tutorialStartCounter = 0;
      }
    }
    //Reset
    blocks.setAnimationEach("stone1");
    blocks.setColorEach("rectangle");
    blocks.setRotationEach(0);
    blocks.setRotationSpeedEach(0);
    blocks.setVelocityXEach(0);
    blocks.setVelocityYEach(0);
    blocks.setVisibleEach(false);
    blocks.setScaleEach(1);
    block1.x = 1;
    block1.y = 1;
    danger.setColorEach("rectangle");
    danger.setRotationEach(0);
    danger.setRotationSpeedEach(0);
    danger.setVelocityXEach(0);
    danger.setVelocityYEach(0);
    danger.setVisibleEach(false);
    danger.setScaleEach(1);
    blades1.x = 1;
    block1.y = 1;
    
    
    
    
    
    
    
    
    //Level Buttons
    
    
    if (clickCounter == 3) {
      //01
      if (unlockCounter >= 1 || unlockAll == 1) {
        o1.setAnimation("o1idle");
        if (mouseIsOver(o1) && o1.visible === true) {
          o1.setAnimation("o1press");
          if (mouseWentDown("leftButton")) {
            levelCount = 1;
            man.x = 100;
            man.y = 300;
            blades3.y = 90;
            block5.x = 1700;
            displayCounter = 1;
            movementCounter = 1;
            blades4.x = 2900;
            blades4.y = 700;
            block2.rotation = -10;
            block3.rotation = 10;
            
            clickCounter2 = clickCounter2 + 1;
            stopSound("");
            playSound("City.mp3", true);
          }
        }
      }
      
      
      //02
      if (unlockCounter >= 2 || unlockAll == 1) {
        o2.setAnimation("o2idle");
        if (mouseIsOver(o2) && o2.visible === true) {
          o2.setAnimation("o2press");
          if (mouseWentDown("leftButton")) {
            levelCount = 2;
            man.x = 100;
            man.y = 300;
            blades1.y = -1250;
            displayCounter = 1;
            movementCounter = 1;
            block4.y = -50;
            block5.x = 700;
            block3.rotation = -10;
            block7.x = 1300;
            block7.y = -700;
            blades3.x = 2500;
            blades1.x = 1500;
            blades4.x = 3500;
            
            clickCounter2 = clickCounter2 + 1;
            stopSound("");
            playSound("Desert.mp3", true);
          }
        }
      }
      //03
      if (unlockCounter >= 3 || unlockAll == 1) {
        o3.setAnimation("o3idle");
        if (mouseIsOver(o3) && o3.visible === true) {
          o3.setAnimation("o3press");
          if (mouseWentDown("leftButton")) {
            levelCount = 3;
            man.x = 100;
            man.y = 300;
            displayCounter = 1;
            movementCounter = 1;
            blades1.y = 400;
            blades1.x = 1900;
            blades2.y = 400;
            blades2.x = 500;
            blades3.y = 400;
            blades3.x = 1000;
            block5.x = 2600;
            block5.y = 750;
            block7.x = 4000;
            block7.y = 300;
            stickLev.x = 4000;
            stickLev.y = 300;
            blades4.x = 4700;
            blades4.y = -1500;
            
            clickCounter2 = clickCounter2 + 1;
            stopSound("");
          }
        }
      }
      //04
      if (unlockCounter >= 4 || unlockAll == 1) {
        o4.setAnimation("o4idle");
        if (mouseIsOver(o4) && o4.visible === true) {
          o4.setAnimation("o4press");
          if (mouseWentDown("leftButton")) {
            levelCount = 4;
            man.x = 100;
            man.y = 300;
            backs.setScaleEach(3);
            backsTops.setScaleEach(3);
            backsBots.setScaleEach(3);
            displayCounter = 1;
            movementCounter = 1;
            block2.x = 600;
            block2.y = 400;
            blades1.x = 1500;
            blades1.y = 400;
            blades2.x = 700;
            blades2.y = 400;
            block5.y = 400;
            block6.y = 390;
            block7.y = 420;
            blades3.x = 3000;
            block9.x = 3500;
            block9.y = 500;
            
            clickCounter2 = clickCounter2 + 1;
            stopSound("");
            playSound("Jungle.mp3", true);
          }
        }
      }
    }
  }
  if (clickCounter2 == 1 || clickCounter2 == 2) {
    clickCounter2 = clickCounter2 + 1;
  }
  
  
  
  
  
  
//Tutorial
  if (levelCount == 0) {
      if (mouseIsOver(arrow) && arrow.visible === true) {
        arrow.setAnimation("arrow(pressed)");
        if (mouseWentDown("leftButton")) {
          levelCount = -1;
          tutorialCounter = 0;
          tutorialStartCounter = 1;
          movementCounter = 1;
        }
      } else {
        arrow.setAnimation("arrow(idle)");
      }
      if (tutorialStartCounter == 0) {
        tutorialCounter = tutorialCounter + 1;
      }
      camera.zoom = 1;
      camera.x = 200;
      camera.y = 200;
      background("grey");
      movement();
      kill();
      physics();
      win();
      backs.setScaleEach(1);
      backs.setVisibleEach(true);
      back1.x = 200;
      back2.y = 200;
      backs.setScaleEach(1);
      backsTops.setVisibleEach(true);
      backsTops.setScaleEach(1);
      backsBots.setVisibleEach(true);
      backsBots.setScaleEach(1);
      blocks.setVisibleEach(false);
      danger.setVisibleEach(false);
      if (man.x <= 0) {
        man.x = 0;
      }
      if (man.x >= 400) {
        man.x = 400;
      }
      man.visible = true;
      start.visible = false;
      title.visible = false;
      tutorial.visible = false;
      arrow.visible = true;
      arrow.y = 363;
      man.visible = false;
      start.visible = false;
      title.visible = false;
      gear.visible = false;
      backs.setAnimationEach("blank");
      block1.x = 100;
      block1.y = 4000;
      block2.x = 600;
      block2.y = 5000;
      block3.x = 1000;
      block3.y = 2000;
      block4.x = 1000;
      block4.y = 2000;
      block5.x = 1000;
      block5.y = 2000;
      block6.x = 1000;
      block6.y = 2000;
      block7.x = 1000;
      block7.y = 2000;
      block8.x = 1000;
      block8.y = 2000;
      block9.x = 1000;
      block9.y = 2000;
      block10.x = 1000;
      block10.y = 2000;
      //Platform
      man.collide(platform);
      man.visible = true;
      platform.setAnimation("platform");
      platform.scale = 100;
      platform.y = 1050;
      platform.visible = false;
      flag.visible = false;
      //Tutorial Start
      if (1 <= tutorialCounter && tutorialCounter <= 100) {
        fill("black");
        textFont("Times New Roman");
        textSize(50);
        o1.visible = false;
        o2.visible = false;
        o3.visible = false;
         o4.visible = false;
         o5.visible = false;
        o6.visible = false;
        o7.visible = false;
       o8.visible = false;
        text("Welcome to Jump!", 15, 100);
        if (tutorialCounter == 1) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (140 <= tutorialCounter && tutorialCounter <= 220) {
        fill("black");
        textFont("Times New Roman");
        textSize(50);
        
        text("Lets learn how to", 25, 100);
        text("to play.", 125, 150);
        if (tutorialCounter == 140) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (260 <= tutorialCounter && tutorialCounter <= 340) {
        fill("black");
        textFont("Times New Roman");
        textSize(50);
        text("First, the controls.", 25, 100);
        if (tutorialCounter == 260) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (380 <= tutorialCounter && tutorialCounter <= 450) {
        fill("black");
        textFont("Times New Roman");
        textSize(30);
        text("Use the LEFT / RIGHT arrows", 15, 100);
        text("or the A / D keys", 90, 150);
        text("to move.", 140, 200);
        if (tutorialCounter == 380) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
          tutorialCounter = 450;
          tutorialStartCounter = 1;
        }
      }
      if ((380 <= tutorialCounter && tutorialCounter <= 450) && (keyWentDown("a") || keyWentDown("d") || keyWentDown("left") || keyWentDown("right"))){
        tutorialStartCounter = 0;
      }
      if (500 <= tutorialCounter && tutorialCounter <= 580) {
        fill("black");
        textFont("Times New Roman");
        textSize(30);
        text("Very good!", 130, 100);
        text("Now press W / SPACE / UP", 35, 150);
        text("to jump.", 145, 200);
        if (tutorialCounter == 500) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
          tutorialCounter = 580;
          tutorialStartCounter = 1;
        }
      }
      if ((500 <= tutorialCounter && tutorialCounter <= 580) && (keyWentDown("up") || keyWentDown("w") || keyWentDown("space") )){
        tutorialStartCounter = 0;
      }
      if (620 <= tutorialCounter && tutorialCounter <= 700) {
        fill("black");
        textFont("Times New Roman");
        textSize(25);
        text("If you jump on the side of blocks,", 40, 100);
        text("then you can wall jump up!", 70, 150);
        if (tutorialCounter == 620) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (740 <= tutorialCounter && tutorialCounter <= 800) {
        fill("black");
        textFont("Times New Roman");
        textSize(30);
        text("That's all for movement!", 50, 100);
        if (tutorialCounter == 740) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (840 <= tutorialCounter && tutorialCounter <= 900) {
        fill("black");
        textFont("Times New Roman");
        textSize(30);
        text("Now for the basics...", 75, 100);
        if (tutorialCounter == 840) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (940 <= tutorialCounter && tutorialCounter <= 1050) {
        fill("black");
        textFont("Times New Roman");
        textSize(30);
        text("If you fall off the map,", 60, 100);
        text("then you'll reset.", 100, 150);
        if (tutorialCounter == 940) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (1100 <= tutorialCounter && tutorialCounter <= 1350) {
        fill("black");
        textFont("Times New Roman");
        textSize(30);
        text("Also, make sure not to", 10, 50);
        text("hit red obstacles.", 10, 100);
        blades3.visible = true;
        blades3.x = 350;
        blades3.y = 50;
        blades3.scale = 0.2;
        blades3.rotationSpeed = -10;
        fill("red");
        text("They'll kill you!", 10, 200);
        if (tutorialCounter == 1100) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (1400 <= tutorialCounter && tutorialCounter <= 1550) {
        fill("black");
        textFont("Times New Roman");
        textSize(30);
        text("Your goal is to make it", 50, 50);
        text("to the flag.", 50, 100);
        flag.visible = true;
        flag.x = 330;
        flag.y = 300;
        if (tutorialCounter == 1400) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (1600 <= tutorialCounter && tutorialCounter <= 1740) {
        fill("black");
        textFont("Times New Roman");
        textSize(30);
        text("Reaching the flag", 90, 100);
        text("will unlock the next level.", 50, 150);
        if (tutorialCounter == 1600) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (1800 <= tutorialCounter && tutorialCounter <= 1940) {
        fill("black");
        textFont("Times New Roman");
        textSize(20);
        text("Left clicking on the play space will exit", 35, 100);
        text("a level, and return to the play page.", 50, 150);
        if (tutorialCounter == 1800) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (2000 <= tutorialCounter && tutorialCounter <= 2100) {
        fill("black");
        textFont("Times New Roman");
        textSize(30);
        text("However, you will be reset.", 40, 100);
        if (tutorialCounter == 2000) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (2140 <= tutorialCounter && tutorialCounter <= 2260) {
        fill("black");
        textFont("Times New Roman");
        textSize(30);
        text("That's about it!", 110, 100);
        if (tutorialCounter == 2140) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
        }
      }
      if (2300 <= tutorialCounter && tutorialCounter <= 2500) {
        fill("black");
        textFont("Times New Roman");
        textSize(20);
        text("Press THE YELLOW ARROW", 75, 100);
        text("to leave the tutorial.", 125, 150);
        if (tutorialCounter == 2300) {
          playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
          
        }
        if (tutorialCounter == 2500) {
          tutorialStartCounter = 1;
        }
      }
    } else {
      platform.y = 20000;
      platform.visible = false;
      backs.setScaleEach(3);
      backsTops.setScaleEach(3);
      backsBots.setScaleEach(3);
      back1.x = -400;
      back2.y = 200;
      arrow.x = 50;
      arrow.y = 40;
    }
  
  
  
  
  
  
  //Level 1: City
  if (levelCount == 1) {
    movementCounter = 2;
    movement();
    kill();
    win();
    physics();
    //Custom
    if (displayCounter == 1) {
      backs.setVisibleEach(true);
      backsTops.setVisibleEach(true);
      backsBots.setVisibleEach(true);
      blocks.setVisibleEach(true);
    }
    backs.setAnimationEach("city");
    backsTops.setAnimationEach("cityTop");
    backsBots.setAnimationEach("cityBot");
    danger.setVisibleEach(true);
    arrow.visible = false;
    //Variables
    flag.visible = true;
    man.visible = true;
    gear.visible = false;
    start.visible = false;
    title.visible = false;
    block1.setAnimation("stone1");
    block1.setCollider("rectangle");
    block1.x = 100;
    block1.y = 400;
    block2.setAnimation("stone4");
    block2.setCollider("rectangle");
    block2.x = 600;
    block2.y = 500;
    if (movementCounter == 2) {
      if ((block2.rotation) <= -10 ) {
        block2.rotationSpeed = 0.1;
      }
      if ((block2.rotation) >= 10 ) {
        block2.rotationSpeed = -0.1;
      }
    }
    block3.setAnimation("stone3");
    block3.setCollider("rectangle");
    block3.x = 1100;
    block3.y = 500;
    if (movementCounter == 2) {
      if (block3.rotation >= 10 ) {
        block3.rotationSpeed = -0.1;
      }
      if ((block3.rotation) <= -10 ) {
        block3.rotationSpeed = 0.1;
      }
    }
    block4.setAnimation("stone1");
    block4.setCollider("rectangle");
    block4.x = 1500;
    block4.y = 400;
    block4.rotation = -15;
    block4.rotationSpeed = 0;
    block5.setAnimation("stone2");
    block5.setCollider("rectangle");
    block5.y = 300;
    if (movementCounter == 1) {
      block5.x = 1700;
    }
    if (movementCounter == 2) {
      if ((block5.x) <= 1700) {
        block5.velocityX = 5;
      }
      if (block5.x >= 2300) {
        block5.velocityX = -5;
      }
    }
    block6.setAnimation("stone3");
    block6.setCollider("rectangle");
    block6.x = 2600;
    block6.y = 500;
    block6.scale = 4/5;
    block7.setAnimation("stone5");
    block7.setCollider("circle");
    block7.x = 3000;
    block7.y = 600;
    block7.rotation = block7.rotation + 1;
    block8.setAnimation("stone3");
    block8.setCollider("rectangle");
    block8.rotation = 0;
    block8.x = 3400;
    block8.y = 700;
    block9.setAnimation("stone4");
    block9.setCollider("rectangle");
    block9.x = 3950;
    block9.y = 600;
    block9.scale = 1;
    block9.rotation = -10;
    block10.setAnimation("stone1");
    block10.setCollider("rectangle");
    block10.x = 4350;
    block10.y = 500;
    //Danger
    blades1.x = 850;
    blades1.y = 490;
    blades1.rotationSpeed = -10;
    blades1.scale = 0.4;
    blades1.setCollider("circle");
    stickLev.visible = true;
    stickLev.x = 3950;
    stickLev.y = 600;
    stickLev.scale = 4;
    stickLev.rotation = stickLev.rotation + 1;
    stickLev2.visible = false;
    stickLev2.x = 10000;
    stickLev2.y = 10000;
    stickLev2.scale = 2.5;
    stickLev2.rotation = stickLev.rotation + 3;
    blades2.x = 1900;
    blades2.y = 235;
    blades2.rotationSpeed = -10;
    blades2.scale = 0.2;
    blades2.setCollider("circle");
    blades3.x = 2200;
    blades3.rotationSpeed = -10;
    blades3.scale = 0.2;
    blades3.setCollider("circle");
    if ((blades3.y) <= 100) {
      blades3.velocityY = 3;
    }
    if (blades3.y >= 300) {
      blades3.velocityY = -3;
    }
    blades4.rotationSpeed = -10;
    //blades4.setAnimation("blades");
    blades4.scale = 0.2;
    blades4.setCollider("circle");
    if (blades4.x <= 2900 && blades4.y >= 700) {
      blades4.velocityX = 0;
      blades4.velocityY = -6;
    }
    if (blades4.x <= 2900 && blades4.y <= 500) {
      blades4.velocityX = 6;
      blades4.velocityY = 0;
    }
    if (blades4.x >= 3100 && blades4.y <= 500) {
      blades4.velocityX = 0;
      blades4.velocityY = 6;
    }
    if (blades4.x >= 3100 && blades4.y >= 700) {
      blades4.velocityX = -6;
      blades4.velocityY = 0;
    }
    //Camera
    camera.zoom = 0.5;
    camera.x = man.x;
    camera.y = man.y;
    arrow.x = camera.x - 340;
    arrow.y = camera.y - 350;
    // if ((man.isTouching(flag) && unlockCounter == 1) || (man.isTouching(flag) && unlockCounter <= 2 && unlockAll == 1)) {
    if ((man.isTouching(flag) && unlockCounter == 1)) {
      unlockCounter = 2;
    }
    
    flag.x = 4350;
    flag.y = 400;
  }
  
  
  
  
  
  
  
  
  
  
  
  //Level 2: Desert
  if (levelCount == 2) {
    background("#c3eb78");
    movementCounter = 2;
    movement();
    kill();
    win();
    physics();
    //Custom
    if (displayCounter == 1) {
      backs.setVisibleEach(true);
      backsTops.setVisibleEach(true);
      backsBots.setVisibleEach(true);
      blocks.setVisibleEach(true);
    
    }
    backs.setAnimationEach("desert");
    backsTops.setAnimationEach("desertTop");
    backsBots.setAnimationEach("desertBot");
    danger.setVisibleEach(true);
    arrow.visible = false;
    //Variables
    flag.visible = true;
    man.visible = true;
    gear.visible = false;
    start.visible = false;
    title.visible = false;
    block1.setAnimation("sand3");
    block1.setCollider("rectangle");
    block1.x = 100;
    block1.y = 400;
    block2.setAnimation("sand1");
    block2.setCollider("rectangle");
    block2.x = 350;
    block2.y = 100;
    block2.rotation = -90;
    block3.setAnimation("sand3");
    block3.setCollider("rectangle");
    block3.x = 100;
    block3.y = -50;
    if (movementCounter == 2) {
      if (block3.rotation >= 10 ) {
        block3.rotationSpeed = -0.5;
      }
      if ((block3.rotation) <= -10 ) {
        block3.rotationSpeed = 0.5;
      }
    }
    block4.setAnimation("sand5");
    block4.setCollider("circle");
    block4.rotationSpeed = 10;
    if (movementCounter == 1) {
      block4.y = -100;
    }
    block4.x = -150;
    if (movementCounter == 2 && levelCount == 2) {
      if (man.isTouching(block4) && levelCount == 2) {
        blockTouchCounter = 1;
      } else {
        blockTouchCounter = 0;
      }
      if ((block4.y) >= -50 && blockTouchCounter == 1) {
        block4.velocityY = -7;
      } else if(block4.y >= -50 && blockTouchCounter == 0){
        block4.velocityY = 0;
      }
      if (block4.y <= -700) {
        block4.velocityY = 7;
      }
    }
    block5.setAnimation("sand3");
    block5.setCollider("rectangle");
    if (movementCounter == 1) {
      block5.x = 700;
    }
    block5.y = -600;
    if (movementCounter == 2) {
      if (block5.x <= 0 ) {
        block5.velocityX = 5;
      }
      if ((block5.x) >= 700) {
        block5.velocityX = -5;
      }
    }
    block6.setAnimation("sand3");
    block6.setCollider("rectangle");
    block6.x = 2300;
    block6.y = -1400;
    block7.setAnimation("sand3");
    block7.setCollider("rectangle");
    block7.rotation = 0;
    if (movementCounter == 1) {
      block7.x = 1300;
      block7.y = -700;
    }
    if ((block7.x) == 1300 && block7.y == -700) {
      block7.velocityX = 5;
      block7.velocityY = 0;
    }
    if ((block7.x) == 1500 && (block7.y) == -700) {
      block7.velocityX = 0;
      block7.velocityY = -5;
    }
    if (block7.x == 1500 && (block7.y) == -1000) {
      block7.velocityX = 2.5;
      block7.velocityY = -2.5;
    }
    if (block7.x == 2000 && block7.y == -1500) {
      block7.velocityX = 2;
      block7.velocityY = 0;
    }
    if (block7.x == 2100 && block7.y == -1500) {
      block7.velocityX = 0;
      block7.velocityY = 10;
    }
    if (block7.x == 2100 && block7.y == -700) {
      block7.velocityX = -10;
      block7.velocityY = 0;
    }
    if (block7.x == 1400 && block7.y == -700 && block7.velocityX == -10) {
      block7.velocityX = -1;
      block7.velocityY = 0;
    }
    block8.setAnimation("sand1");
    block8.setCollider("rectangle");
    block8.rotation = -20;
    block8.x = 1150;
    block8.y = -650;
    block9.setAnimation("sand2");
    block9.setCollider("rectangle");
    block9.scale = 2;
    block9.x = 3000;
    block9.y = -1200;
    block9.rotation = 0;
    block10.setAnimation("sand3");
    block10.setCollider("rectangle");
    block10.x = 3500;
    block10.y = -1000;
    //Danger
    if ((blades1.x) <= 1500) {
      blades1.velocityX = 5;
      blades1.velocityY = 5;
    }
    if (blades1.x >= 1750) {
      blades1.velocityX = -5;
      blades1.velocityY = -5;
    }
    blades1.rotationSpeed = -10;
    blades1.scale = 0.1;
    blades1.setCollider("circle");
    stickLev.visible = true;
    stickLev.x = 350;
    stickLev.y = -600;
    stickLev.scale = 2.5;
    stickLev.rotation = stickLev.rotation + 3;
    stickLev2.visible = false;
    stickLev2.x = 10000;
    stickLev2.y = 10000;
    stickLev2.scale = 2.5;
    stickLev2.rotation = stickLev.rotation + 3;
    blades2.x = 20000;
    blades2.y = 20000;
    blades2.rotationSpeed = 150;
    blades2.scale = 1;
    blades2.setCollider("circle");
    blades3.y = -1300;
    blades3.rotationSpeed = -10;
    blades3.scale = 0.3;
    blades3.setCollider("circle");
    if ((blades3.x) <= 2500) {
      blades3.velocityX = 10;
    }
    if (blades3.x >= 3500) {
      blades3.velocityX = -10;
    }
    blades4.y = -1300;
    blades4.rotationSpeed = -10;
    blades4.scale = 0.3;
    blades4.setCollider("circle");
    if ((blades4.x) <= 2500) {
      blades4.velocityX = 10;
    }
    if (blades4.x >= 3500) {
      blades4.velocityX = -10;
    }
    //Camera
    camera.zoom = 0.5;
    camera.x = man.x;
    camera.y = man.y;
   //if ((man.isTouching(flag) && unlockCounter == 2) || (man.isTouching(flag) && unlockCounter <= 2 && unlockAll == 1)) {
    if ((man.isTouching(flag) && unlockCounter == 2)) {
      unlockCounter = 3;
    }
    flag.x = 3500;
    flag.y = -1100;
  }
  
  
  
  
  
  
  
  
  
  //Level 3: Blizzard
  if (levelCount == 3) {
    background("#0005be");
    movementCounter = 2;
    movement();
    kill();
    win();
    physics();
    //Custom
    if (displayCounter == 1) {
      backs.setVisibleEach(true);
      backsTops.setVisibleEach(true);
      backsBots.setVisibleEach(true);
      blocks.setVisibleEach(true);
    }
    backs.setAnimationEach("blizzard");
    backsTops.setAnimationEach("blizzardTop");
    backsBots.setAnimationEach("blizzardBot");
    danger.setVisibleEach(true);
    arrow.visible = false;
    //Variables
    flag.visible = true;
    man.visible = true;
    gear.visible = false;
    start.visible = false;
    title.visible = false;
    
    //Blocks
    block1.setAnimation("snow3");
    block1.setCollider("rectangle");
    block1.x = 100;
    block1.y = 400;
    block1.rotation = 0;
    block1.rotationSpeed = 0;
    block1.scale = 1;
    
    block2.setAnimation("snow3_2");
    block2.setCollider("rectangle");
    block2.x = 1100;
    block2.y = 900;
    block2.rotation = -5;
    block2.rotationSpeed = 0;
    block2.scale = 4;
    
    block3.setAnimation("snow4");
    block3.setCollider("rectangle");
    block3.x = 4500;
    block3.y = -700;
    block3.rotation = 90;
    block3.rotationSpeed = 0;
    block3.scale = 3;
    
    block4.setAnimation("snow1");
    block4.setCollider("rectangle");
    block4.x = 2150;
    block4.y = 800;
    block4.rotation = 0;
    block4.rotationSpeed = 0;
    block4.scale = 1;
    
    block5.setAnimation("snow3");
    block5.setCollider("rectangle");
    block5.rotation = -10;
    block5.rotationSpeed = 0;
    block5.scale = 1;
    if (movementCounter == 2 && levelCount == 3) {
      if (man.isTouching(block5) && levelCount == 3) {
        blockTouchCounter = 1;
      } else {
        blockTouchCounter = 0;
      }
      if (block5.y >= 750 && blockTouchCounter == 1) {
        block5.velocityY = -3;
        block5.velocityX = 3;
      } else if(block5.y >= 750 && blockTouchCounter == 0){
        block5.velocityY = 0;
        block5.velocityX = 0;
      }
      if ((block5.y) <= 200) {
        block5.velocityY = 3;
        block5.velocityX = -3;
      }
    }
    
    block6.setAnimation("snow1");
    block6.setCollider("rectangle");
    block6.x = 3500;
    block6.y = 220;
    block6.rotation = 0;
    block6.rotationSpeed = 0;
    block6.scale = 1;
    
    block7.setAnimation("snow3");
    block7.setCollider("rectangle");
    block7.rotation = 0;
    block7.rotationSpeed = 0;
    block7.scale = 1;
    if (movementCounter == 2 && levelCount == 3) {
      if (block7.y <= 300 ) {
        block7.velocityY = 2;
        block7.velocityX = 1;
      }
      if ((block7.y) >= 800) {
        block7.velocityY = -2;
        block7.velocityX = -1;
      }
    }
    
    block8.setAnimation("snow1");
    block8.setCollider("rectangle");
    block8.x = 4500;
    block8.y = 750;
    block8.rotation = 0;
    block8.rotationSpeed = 0;
    block8.scale = 1;
    
    block9.setAnimation("snow3_3");
    block9.setCollider("rectangle");
    block9.x = 5000;
    block9.y = 400;
    block9.rotation = -90;
    block9.rotationSpeed = 0;
    block9.scale = 3;
    
    block10.setAnimation("snow3");
    block10.setCollider("rectangle");
    block10.x = 4225;
    block10.y = -1175;
    block10.rotation = 0;
    block10.rotationSpeed = 0;
    block10.scale = 2;
    
    
    
    
    //Danger
    blades1.velocityY = blades1.velocityY + 0.75;
    blades1.collide(blocks);
    blades1.velocityX = -10;
    blades1.setCollider("circle");
    blades1.collide(blocks);
    blades1.rotationSpeed = 10;
    blades1.scale = 0.2;
    if (blades1.y >= 1000) {
      blades1.y = 200;
      blades1.x = 1900;
    }
    
    blades2.velocityY = blades2.velocityY + 0.75;
    blades2.collide(blocks);
    blades2.velocityX = -10;
    blades2.setCollider("circle");
    blades2.collide(blocks);
    blades2.rotationSpeed = 10;
    blades2.scale = 0.2;
    if (blades2.y >= 1000) {
      blades2.y = 200;
      blades2.x = 1900;
    }
    
    blades3.velocityY = blades3.velocityY + 0.75;
    blades3.collide(blocks);
    blades3.velocityX = -10;
    blades3.setCollider("circle");
    blades3.collide(blocks);
    blades3.rotationSpeed = 10;
    blades3.scale = 0.2;
    if (blades3.y >= 1000) {
      blades3.y = 200;
      blades3.x = 1900;
    }
    
    blades4.setCollider("circle");
    blades4.rotationSpeed = -10;
    blades4.scale = 0.1;
    blades4.velocityY = 10;
    if ((blades4.y) >= 1000) {
      blades4.y = -1700;
      twoCounter = randomNumber(1,2);
    }
    if (twoCounter == 1) {
      blades4.x = 4650;
      twoCounter = 0;
    }
    if (twoCounter == 2) {
      blades4.x = 4850;
      twoCounter = 0;
    }
    
    stickLev.visible = true;
    stickLev.scale = 3.5;
    stickLev.rotation = stickLev.rotation + 3;
    stickLev2.visible = false;
    stickLev2.x = 10000;
    stickLev2.y = 10000;
    stickLev2.scale = 2.5;
    stickLev2.rotation = stickLev.rotation + 3;
    if (movementCounter == 2 && levelCount == 3) {
      if ((stickLev.y) <= 300 ) {
        stickLev.velocityY = 2;
        stickLev.velocityX = 1;
      }
      if (stickLev.y >= 800) {
        stickLev.velocityY = -2;
        stickLev.velocityX = -1;
      }
    }
    
    
    //Camera
    camera.zoom = 0.5;
    camera.x = man.x;
    camera.y = man.y;
    if ((man.isTouching(flag) && unlockCounter == 3)) {
      unlockCounter = 4;
    }
    flag.x = 4300;
    flag.y = -1310;
  }
  
  
  
  
  
  
  
  //Level 4: Jungle
  if (levelCount == 4) {
    background("black");
    movementCounter = 2;
    movement();
    kill();
    win();
    physics();
    //Custom
    if (displayCounter == 1) {
      backs.setVisibleEach(true);
      backsTops.setVisibleEach(true);
      backsBots.setVisibleEach(true);
      blocks.setVisibleEach(true);
    }
    backs.setAnimationEach("jungle");
    backsTops.setAnimationEach("jungleTop");
    backsBots.setAnimationEach("jungleBot");
    danger.setVisibleEach(true);
    arrow.visible = false;
    //Variables
    flag.visible = true;
    man.visible = true;
    gear.visible = false;
    start.visible = false;
    title.visible = false;
    
    //Blocks
    block1.setAnimation("marsh1");
    block1.setCollider("rectangle");
    block1.x = 100;
    block1.y = 400;
    block1.rotation = 0;
    block1.rotationSpeed = 0;
    block1.scale = 1;
    
    block2.setAnimation("marsh3");
    block2.setCollider("rectangle");
    block2.rotation = -0.1;
    block2.rotationSpeed = 0;
    block2.scale = 1;
    if (movementCounter == 2 && levelCount == 4) {
      if (man.isTouching(block2) && levelCount == 4) {
        blockTouchCounter = 1;
      } else {
        blockTouchCounter = 0;
      }
      if ((block2.x) <= 600 && blockTouchCounter == 1) {
        block2.velocityX = 5;
      } else if(block2.x < 600 && blockTouchCounter == 0){
        block2.velocityX = 0;
        block2.x = 600;
      }
      if (block2.x >= 1600) {
        block2.velocityX = -5;
      }
    }
    if (man.x == 100 && man.y == 300) {
      block2.velocityX = -10;
    }
    
    
    
    
    block3.setAnimation("marshWall");
    block3.setCollider("rectangle", 0, 0);
    block3.x = 300;
    block3.y = 150;
    block3.rotation = 0;
    block3.rotationSpeed = 0;
    block3.scale = 2.5;
    
    block4.setAnimation("marsh1");
    block4.setCollider("rectangle");
    block4.x = 2000;
    block4.y = 450;
    block4.rotation = 0;
    block4.rotationSpeed = 0;
    block4.scale = 1;
    
    block5.setAnimation("marsh1");
    block5.setCollider("rectangle");
    block5.x = 2300;
    block5.rotation = 0;
    block5.rotationSpeed = 0;
    block5.scale = 0.75;
    if (man.y == 330 && man.x >= 2200 && man.x <= 2390) {
      fall1 = fall1 + 1/10;
    }
    if (fall1 > 0) {
      fall1 = fall1 + 1/10;
    }
    if (fall1 >= 1) {
      block5.velocityY = block5.velocityY + 0.7;
    }
    if (block5.y >= 3000) {
      block5.velocityY = 0;
      fall1 = 0;
      block5.y = 400;
    }
    
    block6.setAnimation("marsh1");
    block6.setCollider("rectangle");
    block6.x = 2600;
    block6.rotation = 0;
    block6.rotationSpeed = 0;
    block6.scale = 0.75;
    if (man.y == 320 && man.x >= 2500 && (man.x) <= 2700) {
      fall2 = fall2 + 1/10;
    }
    if (fall2 > 0) {
      fall2 = fall2 + 1/10;
    }
    if (fall2 >= 1) {
      block6.velocityY = block6.velocityY + 0.7;
    }
    if (block6.y >= 3000) {
      block6.velocityY = 0;
      fall2 = 0;
      block6.y = 390;
    }
    
    block7.setAnimation("marsh1");
    block7.setCollider("rectangle");
    block7.x = 2900;
    block7.rotation = 0;
    block7.rotationSpeed = 0;
    block7.scale = 0.75;
    if (man.y == 350 && man.x >= 2800 && (man.x) <= 3000) {
      fall3 = fall3 + 1/10;
    }
    if (fall3 > 0) {
      fall3 = fall3 + 1/10;
    }
    if (fall3 >= 1) {
      block7.velocityY = block7.velocityY + 0.7;
    }
    if (block7.y >= 3000) {
      block7.velocityY = 0;
      fall3 = 0;
      block7.y = 420;
    }
    
    block8.setAnimation("marsh1");
    block8.setCollider("rectangle");
    block8.x = 3200;
    block8.y = 400;
    block8.rotation = 0;
    block8.rotationSpeed = 0;
    block8.scale = 1;
    
    block9.setAnimation("marsh4");
    block9.setCollider("rectangle");
    block9.rotation = 0;
    block9.rotationSpeed = 0;
    block9.scale = 1;
    if (block9.x <= 3500) {
      block9.velocityX = 4;
      block9.velocityY = -5;
    }
    if ((block9.x) >= 4500) {
      block9.velocityX = -4;
      block9.velocityY = 5;
    }
    
    block10.setAnimation("marsh2");
    block10.setCollider("rectangle");
    block10.x = 4800;
    block10.y = -550;
    block10.rotation = 0;
    block10.rotationSpeed = 0;
    block10.scale = 1;
    
    
    //Music
    musicCount = 1;
    
    
    //Danger
    blades1.setCollider("circle");
    blades1.rotationSpeed = -10;
    blades1.scale = 0.5;
    if (blades1.x >= 1500 && blades1.y >= 400) {
      blades1.velocityX = -10/3;
      blades1.velocityY = 10;
    }
    if (blades1.x >= 1400 && blades1.y >= 700) {
      blades1.velocityX = -10;
      blades1.velocityY = 10/3;
    }
    if (blades1.x >= 1100 && blades1.y >= 800) {
      blades1.velocityX = -10;
      blades1.velocityY = -10/3;
    }
    if (blades1.x <= 800 && blades1.y >= 695) {
      blades1.velocityX = -10/3;
      blades1.velocityY = -10;
    }
    if (blades1.x <= 700 && blades1.y <= 400) {
      blades1.velocityX = 10/3;
      blades1.velocityY = -10;
    }
    if (blades1.x <= 800 && blades1.y <= 100) {
      blades1.velocityX = 10;
      blades1.velocityY = -10/3;
    }
    if (blades1.x >= 1100 && blades1.y <= 3) {
      blades1.velocityX = 10;
      blades1.velocityY = 10/3;
    }
    if (blades1.x <= 1415 && blades1.x >= 1390 && blades1.y <= 110 && blades1.y >= 90) {
      blades1.velocityX = 10/3;
      blades1.velocityY = 10;
    }
    if (blades1.x > 1500) {
      blades1.x = 1500;
      blades1.y = 400;
    }
    
    blades2.setCollider("circle");
    blades2.rotationSpeed = -10;
    blades2.scale = 0.5;
    if (blades2.x >= 1500 && blades2.y >= 400) {
      blades2.velocityX = -10/3;
      blades2.velocityY = 10;
    }
    if (blades2.x >= 1400 && blades2.y >= 700) {
      blades2.velocityX = -10;
      blades2.velocityY = 10/3;
    }
    if (blades2.x >= 1100 && blades2.y >= 800) {
      blades2.velocityX = -10;
      blades2.velocityY = -10/3;
    }
    if (blades2.x >= 785 && blades2.x <= 810 && (blades2.y) >= 680 && blades2.y <= 710) {
      blades2.velocityX = -10/3;
      blades2.velocityY = -10;
    }
    if ((blades2.x) <= 700 && (blades2.y) <= 400) {
      blades2.velocityX = 10/3;
      blades2.velocityY = -10;
    }
    if ((blades2.x) <= 805 && (blades2.y) <= 100) {
      blades2.velocityX = 10;
      blades2.velocityY = -10/3;
    }
    if (blades2.x >= 1100 && (blades2.y) <= 3) {
      blades2.velocityX = 10;
      blades2.velocityY = 10/3;
    }
    if ((blades2.x) <= 1450 && blades2.x >= 1350 && (blades2.y) <= 110 && blades2.y >= 90) {
      blades2.velocityX = 10/3;
      blades2.velocityY = 10;
    }
    if (blades2.x < 700) {
      blades2.x = 700;
      blades2.y = 400;
      blades1.x = 1500;
      blades1.y = 400;
    }
    
    blades3.setCollider("circle");
    blades3.y = 400;
    blades3.rotationSpeed = -10;
    blades3.scale = 0.2;
    if (blades3.x >= 3000) {
      blades3.velocityX = -5;
    }
    if ((blades3.x) <= 2200) {
      blades3.velocityX = 5;
    }
    
    blades4.setCollider("circle");
    blades4.x = block9.x;
    blades4.y = block9.y - 75;
    blades4.rotationSpeed = -10;
    blades4.scale = 0.1;
    
    stickLev.visible = true;
    stickLev.x = 1100;
    stickLev.y = 400;
    stickLev.scale = 4;
    stickLev.rotation = stickLev.rotation + 5;
    
    stickLev2.visible = true;
    stickLev2.x = 300;
    stickLev2.y = -100;
    stickLev2.scale = 4;
    stickLev2.rotation = stickLev.rotation + 5;
    
    //Camera
    camera.zoom = 0.5;
    camera.x = man.x;
    camera.y = man.y;
    if ((man.isTouching(flag) && unlockCounter == 4)) {
      unlockCounter = 5;
    }
    flag.x = 4800;
    flag.y = -650;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //Player Controls
  function movement() {
    if ((keyDown("space") || keyDown("w") || keyDown("up")) && (man.isTouching(blocks) || (man.isTouching(platform)))) {
      man.y = man.y + -2;
      man.velocityY = -12;
      playSound("assets/category_jump/arcade_game_jump_1.mp3", false);
    } else if ((keyDown("a")) || keyDown("left")) {
      man.setAnimation("playerRunningL");
      man.velocityX = man.velocityX + -0.5;
      if (man.velocityX <= -8) {
        man.velocityX = -8;
      }
    } else if ((keyDown("d")) || keyDown("right")) {
      man.setAnimation("playerRunningR");
      man.velocityX = man.velocityX + 0.5;
      if (man.velocityX >= 8) {
        man.velocityX = 8;
      }
    } else {
      man.setAnimation("playerIdle");
      man.velocityX = 0;
    }
    if ( keyWentDown("enter")) {
      levelCount = -1;
      tutorialCounter = 0;
      tutorialStartCounter = 1;
      movementCounter = 1;
      blockTouchCounter = 0;
      clickCounter2 = 0;
      backs.setScaleEach(3);
      backsTops.setScaleEach(3);
      backsBots.setScaleEach(3);
      stopSound("");
      playSound("assets/category_background/jazzy_beats.mp3", true);
    }
    if (mouseWentDown("leftButton") && clickCounter2 == 3) {
      levelCount = -1;
      tutorialCounter = 0;
      clickCounter2 = 0;
      tutorialStartCounter = 1;
      movementCounter = 1;
      stopSound("");
      playSound("assets/category_background/jazzy_beats.mp3", true);
      backs.setScaleEach(3);
      backsTops.setScaleEach(3);
      backsBots.setScaleEach(3);
    }
  }
  //Physics
  function physics() {
    man.velocityY = man.velocityY + 0.75;
    if (man.velocityY >= 20) {
      man.velocityY = 20;
    }
    man.collide(blocks);
    if (man.velocityY >= 5) {
      man.velocityY = man.velocityY + 0.75;
    }
  }
  
  //Win
  function win() {
    if (man.isTouching(flag) && levelCount != 0) {
      winCount = winCount + 1;
      man.velocityX = 0;
      man.velocityY = 0;
      safeguard = 1;
    } else {
      safeguard = 0;
    }
    if (winCount == 2) {
      playSound("assets/category_achievements/melodic_win_1.mp3", false);
    }
    if (winCount == 100) {
      winCount = 0;
      stopSound("");
      playSound("assets/category_background/jazzy_beats.mp3", true);
      man.x = 200;
      man.y = 200;
      levelCount = -1;
    }
  }
  
  
  //Kill
  function kill() {
    if (man.isTouching(danger) && blades1.visible === true && safeguard != 1) {
      backs.setVisibleEach(false);
      backsTops.setVisibleEach(false);
      backsBots.setVisibleEach(false);
      blocks.setVisibleEach(false);
      danger.setVisibleEach(false);
      killTimerCount = 30;
      displayCounter = 0;
      playSound("assets/category_hits/8bit_splat.mp3", false);
    }
    if (man.y >= 1000 && safeguard != 1) {
      backs.setVisibleEach(false);
      backsTops.setVisibleEach(false);
      backsBots.setVisibleEach(false);
      blocks.setVisibleEach(false);
      danger.setVisibleEach(false);
      killTimerCount = killTimerCount + 2;
      displayCounter = 0;
    }
    if (killTimerCount == 2) {
      playSound("assets/category_alerts/retro_game_health_pickup_6.mp3", false);
    }
   if (killTimerCount >= 30) {
      killTimerCount = 0;
      displayCounter = 1;
      backs.setVisibleEach(true);
      blocks.setVisibleEach(true);
      backsTops.setVisibleEach(true);
      backsBots.setVisibleEach(true);
      danger.setVisibleEach(true);
      man.velocityY = 0;
      man.x = 200;
      man.y = 300;
    }
  }



  drawSprites();
}

   
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
