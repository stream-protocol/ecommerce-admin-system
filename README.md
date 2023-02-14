[![Netlify Status](https://api.netlify.com/api/v1/badges/c4e66697-eb93-4f28-9484-a2c0edce2e2d/deploy-status)](https://app.netlify.com/sites/stream-pay-ecommerce-admin/deploys)
<p align="center">
  <a href="https://stream-pay-ecommerce-admin.netlify.app/login">
    <img alt="StreamPay" src="https://i.imgur.com/2vRdkfT.png" width="100" />
  </a>
</p>
<h1 align="center">
  StreamPay eCommerce Platform Admin System Dev. 
</h1>
<p align="center">
The open-source Shopify/Medusa alternative
</p>
<p align="center">
  <a href="https://github.com/stream-protocol/streampay-ecommerce-platform/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="StreamPay is released under the MIT license." />
  </a>
  <a href="https://circleci.com/gh/streampayjs/streampay">
    <img src="https://circleci.com/gh/streampayjs/stream-pay.svg?style=shield" alt="Current CircleCI build status." />
  </a>
  <a href="https://github.com/stream-protocol/streampay-ecommerce-platform/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=stream_protocol">
    <img src="https://img.shields.io/twitter/follow/streampay.svg?label=Follow%20@stream_protocol" alt="Follow @stream_protocol" />
  </a>
</p>

## Quickstart

Follow our [quickstart guide](https://docs.stream-pay.io/quickstart/quick-start) to learn how to set up a Stream server.


## Setting up Admin

1. **Clone this repository**
   ```
   git clone https://github.com/stream-protocol/streampay-ecommerce-admin-system
   cd streampay-ecommerce-admin-system
   ```
2. **Install dependencies**
   ```
   yarn install
   ```
3. **Start the development server**
   ```
   yarn start
   ```
4. **Go to [http://localhost:7000](http://localhost:7000)**

Back in your StreamPay eCommerce engine installation directory, you can create your own user for the admin by running:

```
medusa user -e some@email.com -p some-password
```
Alternatively, if you've seeded your server with our dummy data, you can use the following credentials:
```
admin@medusa-test.com // supersecret
```

### Features

You can learn about all of the e-commerce platform features that StreamPay provides [in our documentation](https://docs.stream.pay.io/introduction#features).

## Contributions

Please check [our contribution guide](https://github.com/stream-protocol/online-store-admin-system/blob/master/CONTRIBUTING.md) for details about how to contribute to both our codebase and our documentation.

## Repository structure

The StreamPay repository is a mono-repository managed using Lerna. Lerna allows us to have all StreamPay packages in one place, and still distribute them as separate NPM packages.

## Licensed

Licensed under the [MIT License](https://github.com/stream-protocol/online-store-admin-system/blob/master/LICENSE)


## Community & Support

Use these channels to be part of the community, ask for help while using StreamPay - eCommerce Platform, or just learn more about StreamPay:

- [Discord](https://discord.gg/stream-protocol): This is the main channel to join the community. You can ask for help, showcase your work with StreamPay, and stay up to date with everything StreamPay
- [GitHub Issues](https://github.com/stream-protocol/stream-pay-ecommerce-platform/issues): for sending in any issues you face or bugs you find while using StreamPay.
- [GitHub Discussions](https://github.com/stream-protocol/streampay-ecommerce-platform/discussions): for joining discussions and submitting your ideas.
- [Blog](https://ecommerce.streamprotocol.org/blog/): find diverse tutorials and company news.
- [Twitter](https://twitter.com/stream_protocol)
- [LinkedIn](https://www.linkedin.com/company/streamprotocol)


## ToDo

"@streampay/streampayjs": "^1.7.5",
