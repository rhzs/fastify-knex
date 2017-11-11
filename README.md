# fastify-knex

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) 

Fastify Knex connection plugin, this plugin will allow you to use many different relational database wrappers from Knex.

List of supported wrappers:
1. MySQL
2. PostgreSQL
3. SQLite
4. OracleDB
5. Maria
6. MS SQL

Under the hood the [knex](http://knexjs.org/) is used, the options that you pass to `register` will be passed to the PostgreSQL pool builder.

## Install
```
npm i fastify-knex --save
```

## Usage
Add it to you project with `register` and you are done!  
This plugin will add the `knex` namespace in your Fastify instance.

## Upcoming TODO
- [ ] Add test cases
- [ ] Add examples

## License

Licensed under [MIT](./LICENSE).
