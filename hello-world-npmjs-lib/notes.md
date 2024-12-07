I was able to publish this as `@dev.hiconic/hello-world-npmjs-lib`

Then publishing stopped working on the pipeline saying

```
npm error code E429
npm error 429 Too Many Requests - PUT https://registry.npmjs.org/@dev.hiconic%2fhello-world-npmjs-lib-diffrent-name - Could not publish, as user undefined: rate limited exceeded
npm error A complete log of this run can be found in: C:\Users\PeterG\AppData\Local\npm-cache\_logs\2024-11-08T16_48_28_797Z-debug-0.log
```

Then I tried again here and it was fine.

But that was an update with a new version, when I changed the name to `@dev.hiconic/hello-world-npmjs-lib-diffrent-name`, 429 again.