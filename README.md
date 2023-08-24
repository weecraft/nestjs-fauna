![Nest.Js Fauna](https://github.com/nyomansunima/nestjs-fauna/assets/54091887/fddd548e-d5c3-46ac-8ce0-7ef49a1664e0)

<!-- Shields -->

[![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=flat&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![FaunaDB](https://img.shields.io/badge/fauna%20db-%234AB27B.svg?style=flat&logo=fauna&logoColor=white)](https://fauna.com/)
![GitHub contributors](https://img.shields.io/github/contributors/nyomansunima/nestjs-fauna)
![GitHub language count](https://img.shields.io/github/languages/count/nyomansunima/nestjs-fauna)
![GitHub issues](https://img.shields.io/github/issues/nyomansunima/nestjs-fauna)
![GitHub](https://img.shields.io/github/license/nyomansunima/nestjs-fauna)
![GitHub repo size](https://img.shields.io/github/repo-size/nyomansunima/nestjs-fauna)
[![GitHub Super-Linter](https://github.com/nyomansunima/nestjs-fauna/actions/workflows/linter.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

# NestJS Fauna

A NestJS package that provides seamless integration with FaunaDB, allowing you to interact with FaunaDB effortlessly within your NestJS applications.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Installation

```bash
npm install nestjs-fauna
```

## 🤖 Getting Started

Before you start using this package, you need to have a FaunaDB account and a database set up. If you haven't already done this, head over to the [FaunaDB website](https://fauna.com/) and follow their instructions to get started.

Once you have your FaunaDB credentials, you can configure the package in your NestJS application.

### Configuration

In your NestJS application, create a `.env` file in the root directory and add your FaunaDB secret key:

```dotenv
FAUNADB_SECRET_KEY = your_faunadb_secret_key_here
```

Make sure to load the `.env` file using a package like `dotenv` in your application's main entry file (e.g., `main.ts`).

### Module Registration

Register the FaunaDB module in your NestJS application. Import the `FaunaModule` and pass in the configuration options:

```typescript
import { Module } from '@nestjs/common'
import { FaunaModule } from 'nestjs-fauna'

@Module({
  imports: [
    FaunaModule.forRoot({
      secret: process.env.FAUNADB_SECRET_KEY,
      // Other options if needed
    }),
  ],
})
export class AppModule {}
```

## 🏀 Usage

With the FaunaDB module configured, you can now inject the `FaunaService` into your services or controllers to interact with the FaunaDB client.

```typescript
import { Injectable } from '@nestjs/common'
import { fql } from 'nestjs-fauna'

@Injectable()
export class MyService {
  constructor(private readonly faunaService: FaunaService) {}

  async getDocumentById(id: string): Promise<any> {
    // ensure you have the collection, or create a new one
    // then execute it
    const collectionQuery = fql`Collection.create({name: 'users'})`
    await this.faunaService.query(collectionQuery)

    // get the document from database
    const firstDocumentQuery = fql`users.all().first()`
    return this.faunaService.query(firstDocumentQuery)

    // result will be
    // something like this
    {
      id: "366172354849538082",
      coll: users,
      ts: Time("2023-05-30T17:33:40.220Z"),
      // your data
    }
  }

  // Add more methods to interact with FaunaDB as needed
}
```

In the example above, we use the `FaunaService.query` method to execute a query against the FaunaDB client. You can leverage FaunaDB's powerful query language to perform various operations on your collections and documents.

For more information on the available query functions and how to use them, refer to the [FaunaDB documentation](https://docs.fauna.com/fauna/current/start/cloud).

## ✅ Features

- Seamless integration with NestJS applications.
- Easy-to-use API for interacting with FaunaDB.
- Utilizes FaunaDB's powerful query language for flexible database operations.
- Configurable and supports multiple environments using environment variables.
- Update using new version of FQL (version 10)
  <br/>

## 🩷 Contributing

We welcome contributions from the community to improve this package. If you find any issues or have suggestions for enhancements, please open an issue or submit a pull request.

To contribute please follow the instruction on [Contributing](CONTRIBUTING.md)

Please ensure your code follows the established coding standards and includes appropriate unit tests.

## 🪪 License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as you see fit.
