---
title: "How to disable verification of hostname for https requests with node.js"
date: "2020-07-15"
excerpt: "It's better to use checkServerIdentity instead of rejectUnauthorized in your https.Agent to still use the certificate"
tags: "javascript,nodejs"
---

If you are developing on node.js and doing some https requests with a custom certificate, you might face this error: **ERR_TLS_CERT_ALTNAME_INVALID**. I found on some blog posts/github a solution to simply add a rejectUnauthorized to the agent and it would work.

```js
const https = require("https");
const fs = require("fs");

const HTTPS_AGENT = new https.Agent({
	ca: fs.readFileSync("./ca.pem"),
	rejectUnauthorized: false,
});
```

The problem with this solution is it will ignore your `ca.pem` certificate file.

A workaround I found for this problem is using the `checkServerIdentity` method. On node.js documentation, here's what they say about this:
`A callback function to be used (instead of the builtin tls.checkServerIdentity() function) when checking the server's host name (or the provided servername when explicitly set) against the certificate. This should return an <Error> if verification fails. The method should return undefined if the servername and cert are verified.`

So, if I return `undefined` from this function, it will consider servername and cert as valid.

```js
const https = require("https");
const fs = require("fs");

const HTTPS_AGENT = new https.Agent({
	ca: fs.readFileSync("./ca.pem"),
	checkServerIdentity: () => undefined,
});
```

If you mess up with your pem file, you'll see you'll get another error like `UNABLE_TO_GET_ISSUER_CERT`. So, we are all good as long as the used pem file is valid.
