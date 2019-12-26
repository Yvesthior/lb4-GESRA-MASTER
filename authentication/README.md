# HasMany

A hasMany relation denotes a one-to-many connection of a model to another model through referential integrity.

## One to Many Relationship

_A student can take many courses_

**Source model: Course** <br>
**Target model: Student**

_Student model will have the primary key of Course model as foriegn key_

---

# belongsTo

A belongsTo relation denotes a many-to-one connection of a model to another model through referential integrity.

## One to Many Relationship

_Many students can belongs to one department_

**Source model: Student** <br>
**Target model: Department**

_Student model will have the primary key of Department model as foriegn key_

## hasOne

A hasOne relation denotes a one-to-one connection of a model to another model through referential integrity.

_A Student can only have one Address_

### Steps

1. Create HasOne Relation
2. Add BelongsTo Relation
3. Setup Database
4. Configure relation with Source Repository
5. Add Controller for one to one relation

# Authentication

**Authentication is a process of verifying someone’s identity before a protected resource is accessed.**

**Authorization is a process of deciding if a user can perform an action on a protected resource.**

LoopBack 4 has an authentication package @loopback/authentication which allows you to secure your application’s API endpoints with custom authentication strategies and an @authenticate decorator.

### TOKEN

`// {encrypted-header}.{encrypted-payload}.{encrypted-signature}` <br/>
`eyJhbXVCJ9.eyJpZCI6Ij.I3wpRNCH4;`

## What is dependency Injection?

- Dependency injection is a technique whereby one object supplies the dependencies of another object. A "dependency" is an object that can be used, for example as a service.

- Before we can use methods of other classes, we first need to create the object of that class (i.e. class A needs to create an instance of class B).

- Dependency Injection is a set of software design principles and patterns that enables you to develop loosely coupled code.

```ts
class Person {
  serice: Service;
  constructor() {
    this.service = new Service();
  }
}
```

### Why do we need Dependency Injection?

- Inversion of Control
- Classes should configure its dependencies from the outside
- It allows you to reusing the classes
- Testing the classes independentaly from other classes

### LoopBack supports three kinds of dependency injection:

**constructor injection:** the dependencies are provided as arguments of the class constructor. <br>

```ts
class ProductController {
  constructor(@inject('repositories.Product') repo) {
    this.repo = repo;
  }

  async list() {
    return await this.repo.find({where: {available: true}});
  }
}
```

**property injection:** the dependencies are stored in instance properties after the class was constructed. <br>

```ts
class InfoController {
  @inject('logger', {optional: true})
  private logger = ConsoleLogger();

  status() {
    this.logger.info('Status endpoint accessed.');
    return {pid: process.pid};
  }
}
```

**method injection:** the dependencies are provided as arguments of a method invocation. Please note that constructor injection is a special form of method injection to instantiate a class by calling its constructor.

```ts
class InfoController {
  greet(@inject(AuthenticationBindings.CURRENT_USER) user: UserProfile) {
    return `Hello, ${user.name}`;
  }
}
```

```ts
const context = {
  config: [],
  'service.hasher': BcyrptHasher,
  round: 10,
};
```
