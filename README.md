There seems to be a bug with the new `extendedWhereUnique` preview feature of Prisma, 
where you cannot filter a non-unique field with a `not` operator providing a valid value 
for comparison, even if the actual unique field matches the provided query argument.  

Run 
```bash
$ yarn install
$ prisma migrate dev
$ yanr ts-node index.ts
```

Error: 
```log
PrismaClientKnownRequestError: 
Invalid `prisma.user.update()` invocation in
/tmp/test-prisma/index.ts:6:23

  3 const prisma = new PrismaClient()
  4 
  5 async function main() {
→ 6     await prisma.user.update(
An operation failed because it depends on one or more records that were required but not found. Record to update not found.
    at RequestHandler.handleRequestError (/tmp/test-prisma/node_modules/@prisma/client/runtime/index.js:34869:13)
    at RequestHandler.handleAndLogRequestError (/tmp/test-prisma/node_modules/@prisma/client/runtime/index.js:34841:12)
    at RequestHandler.request (/tmp/test-prisma/node_modules/@prisma/client/runtime/index.js:34836:12)
    at async PrismaClient._request (/tmp/test-prisma/node_modules/@prisma/client/runtime/index.js:35926:16) {
  code: 'P2025',
  clientVersion: '4.7.1',
  meta: { cause: 'Record to update not found.' },
  batchRequestIdx: undefined
}
```