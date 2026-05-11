<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=00ffff&height=100&section=header"/>

# Portfolio Application - SanCruz

![Status badge](https://img.shields.io/badge/Status-Finalizado-green.svg)
![Version badge](https://img.shields.io/badge/Version-1.1.1-orange.svg) 

![Typescript Version](https://img.shields.io/badge/Typescript-^4.6.4-477EEB.svg)
![React Version](https://img.shields.io/badge/React-^18.0.0-477EEB.svg)
![Node Version](https://img.shields.io/badge/tsNode-^10.7.0-477EEB.svg)
![Prisma Version](https://img.shields.io/badge/Prisma-^3.13.0-477EEB.svg)

![Thumb of project](./thumb-intro.png)

## About this Project

This is an application aimed at personal branding, whose objective is to present who I am!

Therefore, you will have access to my **main** skills, experiences, knowledge and my latest completed projects.

## Why?

This project is part of my personal/professional portfolio, so, I will be very happy if you can give me some feedback about the project, code, structure or anything that will help me become a better developer!

In addition, I seek recognition for my dedication to technology, so that more individuals/legal entities get to know my work, because I am concerned with the user, and this is a primordial characteristic of the IT professional, solve problems.


## Features

- Get information about my core skills organized by knowledge level;

- Get information about my projects and professional experience;

- Give any feedback you have in mind or noticed on the site. _The best insight comes from the user_;

- Contact me via direct links to private chats like WhatsApp, Messenger or professional email;

- If you have a project/problem that needs a programmer to solve it, fill out the form and send it with just one click;

- Was the portfolio not enough? Download my resume for more information;

- Use the system on any device or browser;

- Settings
  - Choose the theme you prefer: light or dark;
  - Choose the language you prefer: English or Portuguese-br;


## Main Frameworks/Libs/Tech's

### Front-End

- [**Axios**](https://www.npmjs.com/package/axios) - HTTP Client;
- [**Express**](https://www.npmjs.com/package/express) - server builder;
- [**Framer Motion**](https://www.npmjs.com/package/framer-motion) - animated moves;
- [**i18next**](https://www.npmjs.com/package/react-i18next) - app internationalization;
- [**Phosphor React**](https://www.npmjs.com/package/phosphor-react) - default of project icons;
- [**React**](https://www.npmjs.com/package/react) - UI build;
- [**Sass**](https://www.npmjs.com/package/sass) - CSS preprocessor;
- [**TailwindCSS**](https://www.npmjs.com/package/tailwindcss) - framework CSS;
- [**Typescript**](https://www.npmjs.com/package/typescript) - javascipt typing;
- [**Vite**](https://www.npmjs.com/package/vite) - HMR API over native ESM | code bundling with Rollup;

### Back-End

- [**Cors**](https://www.npmjs.com/package/cors) - middleware activation;
- [**Jest**](https://www.npmjs.com/package/jest) - unit tests;
- [**Nodemailer**](https://www.npmjs.com/package/nodemailer) - send emails from Node.js;
- [**PostgreSQL**](https://www.postgresql.org) - DBMS obejct-relational obejct-relational;
- [**Prisma**](https://www.npmjs.com/package/prisma) - obejct-relational mapping;
- [**SQLite**](https://www.npmjs.com/package/sqlite) - database engine small, fast and self-contained;
- [**Ts Node**](https://www.npmjs.com/package/ts-node) - typeScript execution engine and REPL for Node.js;
- [**Typescript**](https://www.npmjs.com/package/typescript) - javascript typing;

## Practices, Methods and Principles

- Accessibility;
- CI/CD;
- Clean Code;
- CSS Architecture;
- Folder Architecture;
- Responsivity;
- SEO;
- SOLID;
- Unit Tests;
- User Experience;


## Hosting Platforms

- [**Vercel**](https://vercel.com/) - Front-end deployed;
- [**Railway**](https://railway.app/) - Database cloud;



## Getting Started

### Installing

#### Cloning the Repository

```
git clone https://github.com/sancruz-dev/portfolio-oficial
```

```
cd portfolio-oficial
```

#### Installing Dependencies

Dependencies must be installed on the folder **server** AND **web**:

```
npm install 
```

#### Configuring Environment Variables

Create a `.env` file inside the **server** folder:

```
cd server
```

Then create the file with one of the configurations below:

**Remote database (Railway):**
```
DATABASE_URL=postgresql://user:password@yamabiko.proxy.rlwy.net:PORT/railway
```
> Get the `DATABASE_PUBLIC_URL` from Railway dashboard → Postgres → Variables.

**Local database (SQLite):**
```
DATABASE_URL="file:./dev.db"
PORT=3333
NODE_ENV=development
```
> Use this if you don't have a Railway account or want to run fully offline.

### Running

Run the following command in two separate terminals, one inside **server** and one inside **web**:

```
npm run dev
```

### Viewing the database (Prisma Studio)

Inside the **server** folder:

```
npx prisma@3.13.0 studio
```

> Always use `prisma@3.13.0` to avoid version conflicts with newer Prisma versions.


## Author

- ***Sanmir Cruz***

## License 

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/sancruz-dev/portfolio-oficial/blob/add-license-1/LICENSE.md) file for details


<br/>

<div align="center">


### Contact here

[![Discord Badge](https://img.shields.io/badge/-Discord-7289DA?style=flat-rounded&logo=discord&logoColor=white&link&=20=https://discord.gg/vbHXDDDDx7)](https://discord.gg/vbHXDDDDx7)&nbsp;&nbsp;
[![gmail Badge](https://img.shields.io/badge/-Gmail-D14836?style=flat-rounded&logo=gmail&logoColor=white&link&=20=mailto:sancruz.dev@gmail.com)](mailto:sancruz.dev@gmail.com)&nbsp;&nbsp;

</div>

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=3355FF&height=100&section=footer"/>